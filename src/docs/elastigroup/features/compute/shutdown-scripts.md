# Shutdown Scripts

When you launch an instance in Amazon EC2, you have the option of passing user data to the instance that can be used to perform common automated configuration tasks and even run scripts after the instance starts. You can pass two types of user data to Amazon EC2: shell scripts and cloud-init directives.

## How It Works

To enable the shutdown script, an agent must be installed on the instance during startup. This is done via the user-data entry and will have the agent up and running on the instance within a few seconds. Your shutdown script will be deployed to every new instance on your Elastigroup. Our agent will sample the API for updates every 10 seconds to figure out if the script should run. Once we determine we are going to remove or replace the instance we will notify the agent so the script can execute. This means that the script will have around 10 minutes to execute prior to the instance termination.

### PIP

The script will install PIP automatically in order for the Spot agent to be installed and for your shutdown scripts to function properly.

### Start Line of Script

Shutdown scripts must start with the characters `#!` and the path to the interpreter you want to read the script (commonly `/bin/bash`).

### Root User

Scripts entered as shutdown scripts are executed as the root user. It is not necessary to use sudo in the script. Remember that any files you create will be owned by root; if you need non-root users to have file access, you should modify the permissions accordingly in the script. Also, because the script doesn't run interactively, you cannot include commands that require user feedback (such as rm without the -f flag).

### Last Step in User Data

Adding the agent installation at boot time adds to the amount of time it takes to boot the instance. Make sure the shutdown script installation code is the last step in your user-data. You should allow a few minutes of extra time for the tasks to complete before you test that the user script has finished successfully.

### Draining Timeout

It is recommended to adjust the draining timeout for instances to 120 seconds in the General Tab of the Creation Wizard under Advanced settings.

<img src="/elastigroup/_media/compute-shutdown-01.png" width="573" height="514" />

## Add a Shutdown Script

Navigate to the Compute Tab and open the Advanced settings.

<img src="/elastigroup/_media/compute-shutdown-02.png" width="431" height="404" />

### Step 1

Install the Spot agent. For ease of use, we recommend adding this at the end of your user data script.

Installation of the Spot agent is governed by NetApp’s end user license agreement (“EULA”), which can be found at: [Sales Terms and Conditions | NetApp](https://www.netapp.com/how-to-buy/sales-terms-and-conditions/).

1. [Get your account ID](https://console.spotinst.com/#/settings/account/general) from the Account settings in your console.
2. [Get a Token](https://console.spotinst.com/#/settings/tokens/permanent).
3. Add your account ID and token to your script.

For Linux and Debian (Python 3):

```bash
#!/usr/bin/env bash
curl -fsSL https://s3.amazonaws.com/spotinst-public/services/spotinst-agent-2/elastigroup-agent-init.sh | \
SPOTINST_ACCOUNT_ID="" \
SPOTINST_TOKEN="" \
bash
```

For Linux and Debian (Python 2.7):

```bash
#!/usr/bin/env bash
curl -fsSL https://s3.amazonaws.com/spotinst-public/services/agent/elastigroup-agent-init.sh | \
SPOTINST_ACCOUNT_ID="" \
SPOTINST_TOKEN="" \
bash
```

For Windows:

```powershell
<powershell> New-Item -ItemType directory -Path "C:\Program Files\Spotinst"
Invoke-WebRequest https://s3.amazonaws.com/spotinst-public/services/spotinst-windows-agent/SpotinstWindowsAgent-Latest.zip -OutFile "C:\Program Files\Spotinst\SpotinstAgent.zip"
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory("C:\Program Files\Spotinst\SpotinstAgent.zip","c:\program files\spotinst\")
New-Service SpotinstAgent """C:\Program Files\Spotinst\Agent.exe"" <ACCOUNT_ID> <YOUR_API_TOKEN>" -DisplayName "Spot Agent Service" -StartupType auto
Start-Service SpotinstAgent</powershell>
```

### Step 2

Add your shell script to the shutdown script box. Windows scripts should start with the <powershell> tag.

Linux:

```bash
#enter shutdown script here
#!/usr/bin/env bash
"Goodbye old instance"
```

Windows:

```powershell
<powershell> Write-Host "Goodbye old instance"
```

## What's Next?

The system also supports a signal to let the Elastigroup know that the instance is ready for shutdown. This signal can be used at the end of the shutdown script.

Learn about the INSTANCE_READY_TO_SHUTDOWN signal in [Using Signals in Elastigroups](elastigroup/features/compute/using-signals-in-elastigroups).
