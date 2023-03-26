# Jenkins

## Run Jenkins with the Spot Plugin

The Spot Jenkins plugin enables you to run a lower powered Jenkins server (controller) and spin up Jenkins agents as needed while saving up to 90% on compute costs. Agent-instances are scaled in an Elastigroup to match the demand for jobs to be completed. Spot's Jenkins plugin supports AWS Spot instances, GCP preemptible instances, and Azure Spot VMs.

Jenkins is an open-source continuous integration software tool for testing and reporting on isolated changes in a larger code base. Jenkins enables developers to find and solve defects in a code base rapidly and to automate testing of their builds. Jenkins has a `controller/agent` (formerly `master/slave`) mode, where the workload of building projects are delegated to multiple `agent` nodes, allowing a single Jenkins installation to host a large number of projects, or to provide different environments needed for builds/tests.

## How it Works: High Level Overview

<img src="/tools-and-provisioning/_media/Jenkins_1.png" />

The Spot Jenkins plug-in (1) automatically scales instances up & down based on the number of jobs in its queue. Nodes are (2) provisioned across multiple instance types and AZs to optimize savings while still guaranteeing availability. The nodes provisioned (3) run a startup script to connect as agent nodes to the controller node and immediately start running jobs.

## Common Setup Steps

The Spot Jenkins plugin supports connecting agents to the controller using the two most common methods:

1. SSH: In this mode, the controller initiates the connection with agents via SSH.
2. JNLP: In this mode, the launched agents use a custom startup-script to initiate the connection to the controller via JNLP (Java Network Launch Protocol).

The Elastigroup/plugin setup for each one of the modes is different; here are the common setup steps:

### Step 1: Generate a Spot API Access Token

1. Login to the [Spot Console](https://console.spotinst.com/spt/auth/signIn) and then go to Settings &rarr; API &rarr; [Permanent Tokens](https://console.spotinst.com/spt/settings/tokens/permanent).
2. Generate a permanent API access token and save it for later use in the Jenkins configuration.

### Step 2: Install the Spot Plugin for Jenkins

1. Log in to the Jenkins console and install the Spot Plugin from the available Plugins list.
2. After installing the plugin, Restart Jenkins.
3. Navigate to `Manage Jenkins` &rarr; `Configure System`, scroll down to the Spot section and add the API Token generated in Step 1, alongside an appropriate Account ID - this will be the default account ID in case no Account ID is specified for a specific Cloud (detailed in the next steps).
4. Click on `Validate Token` to ensure that the token is valid.

<img src="/tools-and-provisioning/_media/Jenkins_4.png" />

### Choose Connection Method

To be taken to the right configuration-steps, choose how you'd like your Spot agents to connect:

- [SSH](#ssh-setup)
- [JNLP](#jnlp-setup)

## SSH Setup

### Step 3: Obtain/Generate a valid SSH Key-Pair

Either obtain or generate a valid SSH key-pair; in this section we'll assume no such key-pair exists. You may generate a pair with the following command:

```
ssh-keygen -t rsa -f jenkinsSSH
```

You can keep the passphrase blank as your agents will be launched programmatically, or you can choose to utilize a passphrase and have Jenkins fill it for you (see credentials section below).

The output will be two files, one is your public key (`jenkinsSSH.pub`), and the other is the private key (`jenkinsSSH`).

It's a good idea to adjust permissions on the generated files to avoid "permissions too open" errors:

```
chmod 400 jenkinsSSH
chmod 644 jenkinsSSH.pub
```

### Step 4: Create an Elastigroup with a Proper Startup Script

Create an Elastigroup with the desired instance types, region and other configurations for the Jenkins agents.

The configuration of your Elastigroup startup-script (`Compute` &rarr; `Additional Configurations` &rarr; `User Data`) will depend on the Host-Key Verification Strategy that you will use in Jenkins for establishing trust between your Jenkins controller and the agents. You can read more about host-key verification strategies [here](https://support.cloudbees.com/hc/en-us/articles/115000073552-Host-Key-Verification-for-SSH-Agents) but this guide assumes that `Manually trusted key Verification Strategy` is used. The following section will detail where this setting is found in the Jenkins Clouds section.

The following startup-script is for EC2 Amazon Linux instances, but you can easily adjust it for Azure Spot VMs and GCP:

```bash
#!/bin/bash
SSH_PUBLIC_KEY="**COPY CONTENTS OF PUBLIC KEY (jenkinsSSH.pub) HERE**"

# make sure to replace values like the username and remote working directory according to your setup
echo "Beginning Spot Startup Script"
echo "Copying SSH Keys"
echo $SSH_PUBLIC_KEY >> /home/ec2-user/.ssh/authorized_keys
echo "Setting permissions for SSH folder and files"
chmod 700 /home/ec2-user/.ssh
chmod 600 /home/ec2-user/.ssh/authorized_keys
# make sure remote working directory exists, and connecting user has write permissions
sudo mkdir /var/jenkins/
sudo chown -R ec2-user /var/jenkins/

# make sure to use the right package management tool according to your distribution
sudo echo "Installing Java"
sudo yum install java-1.8.0 -y
```

### Step 5: Configure a Cloud

After your Elastigroup has been created, head to the `Clouds` section in Jenkins: `Manage Jenkins` &rarr; `Configure Nodes and Clouds` &rarr; `Configure Clouds` in the left pane. In this example, we'll choose to create an AWS Spot Elastigroup Cloud:

<img src="/tools-and-provisioning/_media/jenkins-ssh-setup.png" />

For more information on each field hover over the information button on the right side of it. Specify the Elastigroup ID for the Elastigroup created in Step 4, the appropriate Account ID associated with that Elastigroup, and idle minutes before termination to determine how long the Spot plugin should wait before terminating an idle instance. Fill all other options you'd like to utilize.

As described in the screenshot, setting the Remote Root Directory is a must for SSH clouds. Note that the path in the example (`/var/jenkins`) matches the one we assign to the user (`ec2-user`) in the startup-script in the previous section.

If you haven't configured the needed credentials yet, you can use the `Add` button near the credentials dropdown:

<img src="/tools-and-provisioning/_media/jenkins-ssh-credentials.png" />

Notice that the username (`ec2-user`) must be an existing user in the agent machine.

That's all! From now on, the Jenkins controller will automatically launch new instances with the Spot plugin and terminate them according to your configuration.

## JNLP Setup

### Step 3: Create an Elastigroup with a Proper Startup Script

#### Jenkins on AWS

Create an Elastigroup with your preferred Region, AMI, and Instance Types. In the General tab under Capacity Settings, set the Capacity Unit to _vCPU_.

<img src="/tools-and-provisioning/_media/Jenkins_2.png" />

Add the following startup script:

**Linux user-data:**

```bash
#!/bin/bash
install_deps() {
  echo "Installing dependencies"
  # Install deps.
  packages=$1
  for package in $packages; do
    installed=$(which $package)
    not_found=$(echo $(expr index "$installed" "no $package in"))
    if [ -z $installed ] && [ "$not_found" == "0" ]; then
      echo "Installing $package"
      if [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
        yum install -y $package
      elif [ -f /etc/debian_version ]; then
        apt-get install -y $package
      fi
      echo "$package successfully installed"
    fi
  done
}

remove_deps() {
  echo "Removing dependencies"
  # Remove deps.
  packages=$1
  for package in $packages; do
    echo "Removing $package"
    if [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
      if yum list installed $package >/dev/null 2>&1; then
        yum remove -y $package
      fi
    elif [ -f /etc/debian_version ]; then
      if dpkg -s $name &> /dev/null ; then
        apt-get remove -y $package
      fi
    fi
    echo "$package successfully removed"
    # fi
  done
}

# Install Java 8 If not already installed
# for yum supported distro uncomment below row
install_deps "java-1.8.0"
# for ubuntu(16+) uncomment below row
# install_deps "openjdk-8-jdk"
# for yum supported distro uncomment below row
remove_deps "java-1.7.0-openjdk"

# Get EC2 instance id
EC2_INSTANCE_ID="$(curl http://169.254.169.254/latest/meta-data/instance-id)"
# Set Jenkins controller ip
JENKINS_MASTER_IP="IP:PORT"
# Get The Jenkins agent JAR file
curl http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar --output /tmp/slave.jar
# Run the Jenkins agent JAR
JENKINS_SLAVE_SECRET="$(curl -L -s -u user:password/token -X GET http://${JENKINS_MASTER_IP}/computer/${EC2_INSTANCE_ID}/slave-agent.jnlp | sed "s/.*<application-desc main-class=\"hudson.remoting.jnlp.Main\"><argument>\([a-z0-9]*\).*/\1/")"
java -jar /tmp/slave.jar -secret ${JENKINS_SLAVE_SECRET} -jnlpUrl http://${JENKINS_MASTER_IP}/computer/${EC2_INSTANCE_ID}/slave-agent.jnlp &
```

The jnlpCredentials flag is used for authenticating to Jenkins, pass the username and password or token (such as the GitHub access token if GitHub is the hosting service which is being used for the authentication process).

> **Tip**: For optimal performance, we recommend using the Amazon Standard AMI (CentOS based).

**Windows user-data:**

````powershell
<powershell>
$EC2_INSTANCE_ID = Invoke-RestMethod -uri http://169.254.169.254/latest/meta-data/instance-id
$JENKINS_MASTER_IP = `JenkinsController:port`
#Install java
Invoke-RestMethod -uri http://javadl.oracle.com/webapps/download/AutoDL?BundleId=227552_e758a0de34e24606bca991d704f6dcbf -OutFile jre_install.exe
Start-Process 'jre_install.exe' -ArgumentList '/s' -Wait
#Get agent jar from Jenkins
Invoke-RestMethod -uri http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar -OutFile C:\slave.jar
#Run agent
Start-Process -FilePath 'C:\Program Files\Java\jre1.8.0_151\bin\java' -ArgumentList `-jar C:\slave.jar -jnlpCredentials USER:PASSWORD/TOKEN -jnlpUrl `"http://${JENKINS_MASTER_IP}/computer/${EC2_INSTANCE_ID}/slave-agent.jnlp``` -RedirectStandardError `slave-error.txt` -RedirectStandardOutput `slave-output.txt`
</powershell>
````

#### Jenkins on GCP

Create an Elastigroup, with the desired instance types, region and other configurations for the Jenkins agents. In the Compute tab, under Startup Script add the following.

```bash
#!/bin/bash
install_deps() {
  echo "Installing dependencies"
  # Install deps.
  packages=$1
  for package in $packages; do
    installed=$(which $package)
    not_found=$(echo $(expr index "$installed" "no $package in"))
    if [ -z $installed ] && [ "$not_found" == "0" ]; then
      echo "Installing $package"
      if [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
        yum install -y $package
      elif [ -f /etc/debian_version ]; then
        apt-get install -y $package
      fi
      echo "$package successfully installed"
    fi
  done
}

remove_deps() {
  echo "Removing dependencies"
  # Remove deps.
  packages=$1
  for package in $packages; do
    echo "Removing $package"
    if [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
      if yum list installed $package >/dev/null 2>&1; then
        yum remove -y $package
      fi
    elif [ -f /etc/debian_version ]; then
      if dpkg -s $name &> /dev/null ; then
        apt-get remove -y $package
      fi
    fi
    echo "$package successfully removed"
    # fi
  done
}

# Install Java 8 If not already installed
# for yum supported distro uncomment below row
install_deps "java-1.8.0"
# for ubuntu(16+) uncomment below row
# install_deps "openjdk-8-jdk"
# for yum supported distro uncomment below row
remove_deps "java-1.7.0-openjdk"

# Get EC2 instance id
EC2_INSTANCE_ID="$(curl http://169.254.169.254/latest/meta-data/instance-id)"
# Set Jenkins controller ip
JENKINS_MASTER_IP="IP:PORT"
# Get The Jenkins agent JAR file
curl http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar --output /tmp/slave.jar
# Run the Jenkins agent JAR
JENKINS_SLAVE_SECRET="$(curl -L -s -u user:password/token -X GET http://${JENKINS_MASTER_IP}/computer/${EC2_INSTANCE_ID}/slave-agent.jnlp | sed "s/.*<application-desc main-class=\"hudson.remoting.jnlp.Main\"><argument>\([a-z0-9]*\).*/\1/")"
java -jar /tmp/slave.jar -secret ${JENKINS_SLAVE_SECRET} -jnlpUrl http://${JENKINS_MASTER_IP}/computer/${EC2_INSTANCE_ID}/slave-agent.jnlp &
```

#### Jenkins on Azure

Create an Elastigroup, with the desired VM types, region and other configurations for the Jenkins agents. In the Compute tab, under Additional Configurations add the following user-data.

**Azure Spot VMs Linux Custom Data:**

```bash
#!/bin/bash
sudo add-apt-repository -y ppa:openjdk-r/ppa
sudo apt-get -y update
sudo apt-get install -y openjdk-8-jdk
sudo apt-get -y update --fix-missing
sudo apt-get install -y openjdk-8-jdk
sudo echo "retrieving VM ID"
INSTANCE_ID="$(sudo curl 'http://169.254.169.254/metadata/instance/compute/name?api-version=2017-08-01&format=text' -H 'Metadata: true')"
JENKINS_MASTER_IP="IP:PORT"
sudo echo "Downloading slave.jar from main node"
sudo curl http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar --output /tmp/slave.jar
sudo echo "Getting agent secret from main node"
JENKINS_AGENT_SECRET="$(curl -L -s -u user:password/token -X GET http://${JENKINS_MASTER_IP}/computer/${INSTANCE_ID}/slave-agent.jnlp | sed "s/.*<application-desc main-class=\"hudson.remoting.jnlp.Main\"><argument>\([a-z0-9]*\).*/\1/")"
sudo echo "Connecting Jenkins agent to main node"
sudo java -jar /tmp/slave.jar -secret ${JENKINS_AGENT_SECRET} -jnlpUrl http://${JENKINS_MASTER_IP}/computer/${INSTANCE_ID}/slave-agent.jnlp &
```

**Azure Low-Priority VMs Linux User Data:**

```bash
sudo echo "Updating apt-get"
sudo apt-get update
sudo echo "Adding repo ppa:webupd8team/java"
sudo add-apt-repository ppa:webupd8team/java
sudo apt update
sudo echo "Installing openjdk-8-jdk"
sudo apt-get install -y "openjdk-8-jdk"
sudo echo "retrieving VM ID"
INSTANCE_ID="$(sudo curl 'http://169.254.169.254/metadata/instance/compute/vmId?api-version=2017-08-01&format=text' -H 'Metadata: true')"
JENKINS_MASTER_IP="IP:PORT"
sudo echo "Downloading slave.jar from main node"
sudo curl http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar --output /tmp/slave.jar
sudo echo "Getting agent secret from main node"
JENKINS_AGENT_SECRET="$(curl -L -s -u user:password/token -X GET http://${JENKINS_MASTER_IP}/computer/${INSTANCE_ID}/slave-agent.jnlp | sed "s/.*<application-desc main-class=\"hudson.remoting.jnlp.Main\"><argument>\([a-z0-9]*\).*/\1/")"
sudo echo "Connecting Jenkins agent to main node"
sudo java -jar /tmp/slave.jar -secret ${JENKINS_AGENT_SECRET} -jnlpUrl http://${JENKINS_MASTER_IP}/computer/${INSTANCE_ID}/slave-agent.jnlp &
```

### Step 4: Change the Default Agent Connection Port

The agent-controller connection is based on the JNLP protocol. By default, the agents try to connect on a random JNLP port. Therefore, the firewall rules need to be reconfigured in order to allow all ports to be open and ensure successful communications from agents to the controller.

1. To configure a fixed JNLP port for the Jenkins agents, navigate to `Manage Jenkins` &rarr; `Global Security` &rarr; `Agents` and set a static TCP port for JNLP agents.
2. Configure the network to be available exclusively for this port.

<img src="/tools-and-provisioning/_media/Jenkins_3.png" />

### Step 5: Configure a Cloud

Go to `Manage Jenkins` &rarr; `Configure Nodes and Clouds` and then `Configure Clouds` in the left pane. Click on Add a new cloud and select the cloud provider connected to the Spot account being used (you can more than one cloud, each specifying its own Elastigroup and Account IDs).

There should now be more fields to choose from. For more information on each field hover over the information button on the right side of each field. Specify the Elastigroup ID for the Elastigroup created in Step 3, the appropriate Account ID associated with that Elastigroup and Idle Minutes Before Termination to determine how long Elastigroup should wait before terminating an idle instance.

<img src="/tools-and-provisioning/_media/Jenkins_5.png" />

That's all! From now on, the Jenkins controller will automatically launch new instances with the Spot plugin and terminate them according to your configuration.

## Important Configuration Notes

- Jenkins must be restarted after installing the Spot plugin.
- The connection between the Jenkins' agents and controller is vital, make sure that this connection is working properly.
- Executors per instance- By default, the number of executors per agent (the number of parallel jobs that a node can run) is based in the number of vCpu of the instance. You can override this configuration by setting the Instance type weight. For each instance type that you define in the Elastigroup, add the desired number of executors.
