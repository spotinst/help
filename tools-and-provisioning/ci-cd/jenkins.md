# Jenkins

## Run Jenkins with the Spot Plugin

The Spot Jenkins plug-in enables you to run a lower powered Jenkins server and spin up Jenkins Slaves as needed while saving up to 80% of your compute costs. Slave instances are scaled in an Elastigroup to match the number of jobs to be completed.

Jenkins is an open-source continuous integration software tool for testing and reporting on isolated changes in a larger code base. Jenkins enables developers to find and solve defects in a code base rapidly and to automate testing of their builds. Jenkins has a “master/slave“ mode, where the workload of building projects are delegated to multiple “slave” nodes, allowing a single Jenkins installation to host a large number of projects, or to provide different environments needed for builds/tests. This document describes this mode and how it's used with the Spot Plugin to provide compute at 80% off of the standard cost.

## How It Works

<img src="/tools-and-provisioning/_media/Jenkins_1.png" />

The Spot Jenkins plug-in (1) automatically scales instances up & down based on the number of jobs in its queue. Nodes are (2) provisioned across multiple instance types and AZs to optimize savings while still guaranteeing availability. The nodes that are provisioned (3) run a startup script to connect as Slave nodes to the Master and immediately start running jobs.

## Step 1: Generate a Spot API Access Token

1. Login to the [Spot Console](https://console.spotinst.com/spt/auth/signIn) and then go to Settings >> API >> [Permanent Token](https://console.spotinst.com/spt/auth/signIn).
2. Generate a permanent API access token, then save it for later use in the Jenkins configuration.

## Step 2: Create an Elastigroup with a Proper Startup Script

### Jenkins on AWS

Create an Elastigroup with your preferred Region, AMI, and Instance Types. In the General tab under Advanced set the Capacity Unit to _vCPU_.

<img src="/tools-and-provisioning/_media/Jenkins_2.png" />

Add the following startup script:

**Linux user-data:**

```bash
#!/bin/bash
install_deps() {
  log_info "Installing dependencies"
  # Install deps.
  packages=$1
  for package in $packages; do
    installed=$(which $package)
    not_found=$(echo $(expr index "$installed" "no $package in"))
    if [ -z $installed ] && [ "$not_found" == "0" ]; then
      log_info "Installing $package"
      if [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
        yum install -y $package
      elif [ -f /etc/arch-release ]; then
        pacman install -y $package
      elif [ -f /etc/gentoo-release ]; then
        emerge install -y $package
      elif [ -f /etc/SuSE-release ]; then
        zypp install -y $package
      elif [ -f /etc/debian_version ]; then
        apt-get install -y $package
      fi
      log_info "$package successfully installed"
    fi
  done
}
EC2_INSTANCE_ID="$(curl http://169.254.169.254/latest/meta-data/instance-id)"
JENKINS_MASTER_IP="IP:PORT"
# Install Java If not already installed
install_deps "jre"
﻿
# Get The Jenkins Slave JAR file
curl http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar --output /tmp/slave.jar
# Run the Jenkins slave JAR
java -jar /tmp/slave.jar -jnlpCredentials user:password/token -jnlpUrl http://${JENKINS_MASTER_IP}/computer/${EC2_INSTANCE_ID}/slave-agent.jnlp &
```

The jnlpCredentials flag is used for authenticating to Jenkins, pass the username and password or token (such as the GitHub access token if GitHub is the hosting service which is being used for the authentication process).

**Tip:**
For optimal performance we recommend using the Amazon Standard AMI (CentOS based).

---

**Windows user-data:**

```powershell
<powershell>
$EC2_INSTANCE_ID = Invoke-RestMethod -uri http://169.254.169.254/latest/meta-data/instance-id
$JENKINS_MASTER_IP = “JenkinsMaster:port”
#Install java
Invoke-RestMethod -uri http://javadl.oracle.com/webapps/download/AutoDL?BundleId=227552_e758a0de34e24606bca991d704f6dcbf -OutFile jre_install.exe
Start-Process ‘jre_install.exe' -ArgumentList ‘/s' -Wait
#Get Slave jar from Jenkins
Invoke-RestMethod -uri http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar -OutFile C:\slave.jar
#Run slave
Start-Process -FilePath ‘C:\Program Files\Java\jre1.8.0_151\bin\java' -ArgumentList “-jar C:\slave.jar -jnlpCredentials USER:PASSWORD/TOKEN -jnlpUrl `"http://${JENKINS_MASTER_IP}/computer/${EC2_INSTANCE_ID}/slave-agent.jnlp`“” -RedirectStandardError “slave-error.txt” -RedirectStandardOutput “slave-output.txt”
</powershell>
```

### Jenkins on GCP

Create an Elastigroup, with the desired instance types, region and other configurations for the Jenkins Slaves. In the Compute tab, under Startup Script add the following.

```bash
#!/bin/bash
install_deps() {
  echo "Installing dependencies"
  # Install deps.
  packages=$1
  for package in $packages; do
    installed=$(which $package)
    not_found=$(echo `expr index "$installed" "no $package in")
    if [ -z $installed ] && [ "$not_found" == "0" ]; then
      log_info "Installing $package"
      if [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
        yum install -y $package
      elif [ -f /etc/arch-release ]; then
        pacman install -y $package
      elif [ -f /etc/gentoo-release ]; then
        emerge install -y $package
      elif [ -f /etc/SuSE-release ]; then
        zypp install -y $package
      elif [ -f /etc/debian_version ]; then
        apt-get install -y $package
      fi
      echo "$package successfully installed"
    fi
  done
}
export INSTANCE_NAME="hostname export JENKINS_MASTER_IP="52.37.106.17:8080"

# Install Java If not already installed
install_deps "jre" yum -y install java-1.8.0 yum -y remove java-1.7.0-openjdk

# Get The Jenkins Slave JAR file
curl http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar --output /tmp/slave.jar

# Run the Jenkins Slave JAR
java -jar /tmp/slave.jar -jnlpCredentials user:1234 -jnlpUrl http://${JENKINS_MASTER_IP}/computer/${INSTANCE_NAME}/slave-agent.jnlp &
```

### Jenkins on Azure

Create an Elastigroup, with the desired VM types, region and other configurations for the Jenkins Slaves. In the Compute tab, under Additional Configurations add the following user-data.

**Linux User-Data:**

```bash
#!/bin/bash
﻿
install_deps() {
  echo "Installing dependencies"
  # Install deps.
  packages=$1
  for package in $packages; do
    installed=$(which $package)
    not_found=$(echo `expr index "$installed" "no $package in"`)
    if [ -z $installed ] && [ "$not_found" == "0" ]; then
      log_info "Installing $package"
      if [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
        yum install -y $package
      elif [ -f /etc/arch-release ]; then
        pacman install -y $package
      elif [ -f /etc/gentoo-release ]; then
        emerge install -y $package
      elif [ -f /etc/SuSE-release ]; then
        zypp install -y $package
      elif [ -f /etc/debian_version ]; then
        apt-get install -y $package
      fi
      echo "$package successfully installed"
    fi
  done
}
﻿
﻿
export INSTANCE_ID=`curl -H Metadata:true "http://169.254.169.254/metadata/instance/compute/vmId?api-version=2017-08-01&format=text"`
export JENKINS_MASTER_IP="MASTER_IP:PORT"
﻿
# Install Java If not already installed
install_deps "jre"
﻿
yum -y install java-1.8.0
yum -y remove java-1.7.0-openjdk
﻿
# Get The Jenkins Slave JAR file
curl http://${JENKINS_MASTER_IP}/jnlpJars/slave.jar --output /tmp/slave.jar
﻿
# Run the Jenkins Slave JAR
java -jar /tmp/slave.jar -jnlpCredentials user:/password/token -jnlpUrl http://${JENKINS_MASTER_IP}/computer/${INSTANCE_ID}/slave-agent.jnlp &
```

## Step 3: Change the Default Slave Connection Port

The Slave – Master connection is based on JNLP protocol.
By default, the Slaves try to connect on a random JNLP port. Therefore, the firewall rules need to be reconfigured in order to allow all ports to be open to ensure successful communications from Slave to Master.

1. To configure a fixed JNLP port for the Jenkins Slaves, navigate to Manage Jenkins >> Global Security>>Agents and set a static TCP port for JNLP agents.
2. Configure the network to be available exclusively for this port.

<img src="/tools-and-provisioning/_media/Jenkins_3.png" />

## Step 4: Install the Spot Plugin for Jenkins

1. Login to the Jenkins console, install the Spot Plugin from the available Plugins list.
2. After installing the plugin, Restart Jenkins.
3. Navigate to Manage Jenkins >> Configure System, scroll down to the Spot section and add the API Token generated in Step 1, along with an appropriate Account ID (will be used as a global Account ID in case no Account ID is specified for every cloud added in the next step).
4. Click on Validate Token to ensure that the token is valid.

<img src="/tools-and-provisioning/_media/Jenkins_4.png" />

Once the Spot Token is set, scroll down towards the bottom to the “Cloud” section. Click on Add a new cloud and select the cloud provider connected to the Spot account being used (you can more than one cloud, each specifying it's own Elastigroup and Account IDs).

There should now be more fields to choose from. For more information on each field hover over the information button on the right side of each field. Specify the Elastigroup ID for the Elastigroup created in Step 2, the appropriate Account ID associated with that Elastigroup and Idle Minutes Before Termination to determine how long Elastigroup should wait before terminating an idle instance.

<img src="/tools-and-provisioning/_media/Jenkins_5.png" />

## Configuration Notes

- As noted in Step 4, Jenkins must be restarted after installing the Spot plugin.
- The connection between the Jenkins' Slaves and Master is vital, make sure that this connection is working properly.
- Executors per instance- By default, the number of executors per Slave (the number of parallel jobs that a node can run) is based in the number of vCpu of the instance. You can override this configuration by setting the Instance type weight. For each instance type that you define in the Elastigroup, add the desired number of executors.

That's all! From now on, the Jenkins Master will automatically launch new instances through the Spot API, and will terminate them as they get unused.
