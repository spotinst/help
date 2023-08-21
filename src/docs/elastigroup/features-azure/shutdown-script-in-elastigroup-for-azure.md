# Shutdown Script in Elastigroup for Azure

With Elastigroup, you can run workloads in a reliable and efficient manner, maintaining high availability while reducing the VM costs significantly.

DevOps and IT Engineers need to have control over a clean and graceful shutdown process when a VM is terminated. Elastigroup enables two important features for spot VMs:

- Sending a notification before termination (e.g., by mail or to an HTTP endpoint).
- Executing a pre-defined shutdown script on the VM before it gets terminated.

A shutdown script is basically a shell script (Bash or Powershell) that is executed on the VM before termination happens. The output of the shutdown script is sent to the Elastigroup SaaS and is available for debugging and logging purposes later on.

## Prerequisites

- [Get your account ID](https://console.spotinst.com/#/settings/account/general) from the Account settings in your console.
- [Get a Token](https://console.spotinst.com/#/settings/tokens/permanent).

## Install the Spot Agent

The Spot Agent is required to run a shutdown script. You can add the script for installing the Spot Agent when you create a new stateless group or stateful node or by editing an existing group or stateful node. The steps below are for editing an existing stateless group and an existing stateful node.

### Stateless Group

1. Go to your stateless group in the console and click Edit Configuration.

<img src="/elastigroup/_media/azure-shutdown-script-01.png" />

2. Click the Compute tab and open Additional Configuration. Scroll down until you see Custom Data and Shutdown Script.

<img src="/elastigroup/_media/azure-shutdown-script-02a.png" />

3. Add the required script according to the relevant OS and Python version as described below.

### Stateful Node

1. Go to your stateful node in the console and click Edit Node.

<img src="/elastigroup/_media/shutdown-script-elastigroup-azure-1.png" />

2. Click the Advanced tab.

<img src="/elastigroup/_media/shutdown-script-elastigroup-azure-2.png" />

3. Add the required script according to the relevant OS and Python version as described below.

### Linux OS

For Python 3.x versions, click Add Python 3.x script. The following script is added to the Custom Data.

Note: Only version 3.7 and later is supported.  

```bash
#!/usr/bin/env bash
curl -fsSL https://s3.amazonaws.com/spotinst-public/services/spotinst-agent-2/azure-spot-elastigroup-agent-init.sh | \
SPOTINST_ACCOUNT_ID=“pleaseAddYourAccountID” \
SPOTINST_TOKEN=“pleaseAddYourToken” \
bash
```

### Windows OS

Click Add Windows script. The following script is added to the Custom Data.

```Powershell
New-Item -ItemType directory -Path “C:\Program Files\Spotinst”
Invoke-WebRequest https://s3.amazonaws.com/spotinst-public/services/spotinst-windows-agent/SpotinstWindowsAgent-Latest.zip -OutFile “C:\Program Files\Spotinst\SpotinstAgent.zip”
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory(“C:\Program Files\Spotinst\SpotinstAgent.zip”,“c:\program files\spotinst\“)
New-Service SpotinstAgent “”"C:\Program Files\Spotinst\Agent.exe”" act-243add2f {pleaseAddYourToken} AzureSpot” -DisplayName “Spotinst Agent Service” -StartupType auto
Start-Service SpotinstAgent
```

## Add the Shutdown Script

Once you have added the script for installing the Spot Agent, you can add the actual shutdown script.

1. Paste your shutdown script into the Shutdown Script box.

<img src="/elastigroup/_media/azure-shutdown-script-03.png" />

2. Click Next, and then click Update in the Review tab.

## Usage Notes for Linux OS

- Shutdown scripts must start with the #! characters and the path to the interpreter you want to read the script (e.g. /bin/bash).
- Shutdown scripts are executed as the root user, sudo is not required in the script. Remember that any files you create will be owned by root. For non-root permissions to files, modify permissions accordingly.
- The shutdown script does not run interactively. You cannot include commands that require user feedback (such as rm without the -f flag).

> **Tip**: It is recommended to define at least 120 seconds as the draining timeout to give the shutdown script enough time to run properly.  

## What’s Next?

Learn more about [Health Checks and Autohealing](https://docs.spot.io/elastigroup/tutorials/azure/set-health-checks-and-autohealing).
