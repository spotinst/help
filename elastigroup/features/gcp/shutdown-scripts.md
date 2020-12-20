# Shutdown Scripts

When you launch an instance in Google Cloud, you have the option of passing user data to the instance that can be used to perform common automated configuration tasks and even run scripts after the instance starts.

## How It Works

To enable the Shutdown script, an agent must be installed on the instance during startup.

This is done via the user-data entry and will have the agent up and running on the instance within a few seconds. Your shutdown script will be deployed to every new instance on your Elastigroup. Our agent will sample the API for updates every 10 seconds to figure out if the script should run.

Once we determine we are going to remove or replace the instance we will notify the agent so the script can execute. This means that the script will have around 10 minutes to execute prior to the instance termination.

## Usage Notes

- The script will install PIP automatically in order for the Spot agent to be installed and for your shutdown scripts to function properly.
- Shutdown scripts must start with the characters `#!` and the path to the interpreter you want to read the script (commonly /bin/bash).
- Scripts entered as Shutdown scripts are executed as the root user, it is not necessary to use sudo in the script. Remember that any files you create will be owned by root; if you need non-root users to have file access, you should modify the permissions accordingly in the script. Also, because the script doesn't run interactively, you cannot include commands that require user feedback (such as rm without the -f flag).
- Adding the agent installation at boot time adds to the amount of time it takes to boot the instance. Make sure the shutdown script installation code is the last step in your user-data. You should allow a few minutes of extra time for the tasks to complete before you test that the user script has finished successfully.

## Add a Shutdown Script

Navigate to the Compute Tab and scroll to Launch Specification settings.

### Step 1

Install the Spot agent. For ease of use, we recommend adding this at the end of your user data script.

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

### Step 2:

1. Add your shell script to the shutdown script box.

For Linux

```bash
#enter shutdown script here
#!/usr/bin/env bash
"Goodbye old instance"
```

2. Review and update your Elastigroup to save the change.
