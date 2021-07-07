# Shutdown Script in Elastigroup for Azure

With Elastigroup, you can run workloads in a reliable and efficient manner, maintaining high availability while reducing the VM costs significantly.

DevOps and IT Engineers need to have control over a clean and graceful shutdown process when a VM is terminated. Elastigroup enables two important features for spot VMs:
- Send a notification before termination (e.g., by mail or to an HTTP endpoint).
- Execute a pre-defined shutdown script on the VM before it gets terminated.

A shutdown script is basically a shell (bash) or Powershell script that is executed on the VM before termination happens. The output of the shutdown script is sent to Elastigroup SaaS and is available for debugging and logging purposes later on.

## Prerequisites
- [Get your account ID](https://console.spotinst.com/#/settings/account/general) from the Account settings in your console.
- [Get a Token](https://console.spotinst.com/#/settings/tokens/permanent).

## Install the Spot Agent

The Spot Agent is required to run a shutdown script. You can add the script for installing the Spot Agent when you create a new Elastigroup or by editing an existing Elastigroup. The steps below are for editing an existing group.
1. Go to your Elastigroup in the console and click Edit Configuration.

<img src="/elastigroup/_media/azure-shutdown-script-01.png" />

2. Click the Compute tab and open Additional Configuration. Scroll down until you see Custom Data and Shutdown Script.

<img src="/elastigroup/_media/azure-shutdown-script-02.png" />

3. Add the required script according to the relevant OS and Python version as described below.

### Linux OS

For Python 3.x versions, click Add Python 3.x script. The following script is added to the Custom Data.

```bash
#!/usr/bin/env bashcurl -fsSL https://s3.amazonaws.com/spotinst-public/services/spotinst-agent-2/azure-spot-elastigroup-agent-init.sh
```

For Python 2.x versions, click Add Python 2.x script. The following script is added to the Custom Data.

```bash
#!/usr/bin/env bashcurl -fsSL https://s3.amazonaws.com/spotinst-public/services/agent/azure-spot-elastigroup-agent-init.sh
```

### Windows OS

Click Add Windows script. The following script is added to the Custom Data.

```Powershell
New-Item -ItemType directory -Path "C:\Program Files\Spotinst"
Invoke-WebRequest https://s3.amazonaws.com/spotinst-public/services/spotinst-windows-agent/SpotinstWindowsAgent-Latest.zip -OutFile "C:\Program Files\Spotinst\SpotinstAgent.zip"
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory("C:\Program Files\Spotinst\SpotinstAgent.zip","c:\program files\spotinst\")
New-Service SpotinstAgent """C:\Program Files\Spotinst\Agent.exe"" act-866368c4 {pleaseAddYourToken} AzureSpot" -DisplayName "Spotinst Agent Service" -StartupType auto
Start-Service SpotinstAgent
```

## Add the Shutdown Script

Once you have added the script for installing the Spot Agent, you can add the actual shutdown script.
1. Paste your shutdown script into the Shutdown Script box.

<img src="/elastigroup/_media/azure-shutdown-script-03.png" />

2. At the bottom of the Compute tab, click Next, and then click Update in the Review tab.

## Usage Notes
- Spot agent uses pip (Python 2.x and 3.x Package Manager).
- Shutdown scripts must start with the #! characters and the path to the interpreter you want to read the script (e.g. /bin/bash)
- Shutdown scripts are executed as the root user, sudo is not required in the script. Remember that any files you create will be owned by root. For non-root permissions to files, modify permissions accordingly.
- The shutdown script does not run interactively, and you cannot include commands that require user feedback (such as rm without the -f flag).

> **Tip**: It is recommended to define at least 120 seconds as the Draining Timeout under Elastigroup -> Edit -> General -> Advanced.

## What’s Next?

Learn more about [Health Checks and Autohealing](https://docs.spot.io/elastigroup/tutorials/azure/set-health-checks-and-autohealing).
