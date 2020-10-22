# Shutdown Script in Elastigroup for Azure

Running Low-Priority VMs (LPVMs) in Azure reduces the infrastructure costs by 80%. However, LPVMs might get terminated by Azure within a very short notice of 0 to 30 seconds. With Elastigroup, there's a way to run workloads in a reliable, and efficient manner, maintaining High-Availability while reducing 80% of the VM costs.

DevOps and IT Engineers, want to have control over a clean and graceful shutdown process when a VM is being terminated. Elastigroup enables two important features for LPVMs:

- Send a notification before termination (Email, or HTTP endpoint)
- Execute a pre-defined Shutdown script on the VM before it gets terminated

Shutdown scripts is basically a shell (bash) or Powershell script that will be executed on the VM before termination happens, the output of the shutdown script is being sent to Spot Elastigroup SaaS and is available for debugging & logging purposes later on.

## Prerequisites

- [Get your account ID](https://console.spotinst.com/#/settings/account/general) from the Account settings in your console.
- [Get a Token](https://console.spotinst.com/#/settings/tokens/permanent).
- Spot Agent

You can install the agent manually, or you can just add it as part of your instance startup script.

```bash
#!/usr/bin/env bash
echo "curl -fsSL https://s3.amazonaws.com/spotinst-public/services/agent/azure-elastigroup-agent-init.sh | \
SPOTINST_ACCOUNT_ID="" \
SPOTINST_TOKEN="" \
bash" |  at now + 5 minute
```

## Add the Shutdown Script

1. Go into the Spot console, and edit the configuration for your Elastigroup.
2. Navigate to Compute tab, and open the Additional Configuration.
3. Under shutdown script, add your desired shell script.
4. Click Next -> Update, and you're done!

Example of shutdown script:

```bash
#enter shutdown script here
#!/usr/bin/env bash
"Goodbye old instance"
```

## Usage Notes

- Spot agent uses pip (Python 2.7 Package Manager).
- Shutdown scripts must start with the #! characters and the path to the interpreter you want to read the script (e.g. /bin/bash)
- Shutdown scripts are executed as the root user, sudo is not required in the script. Remember that any files you create will be owned by root. For non-root permissions to files, modify permissions accordingly.
- Shutdown script doesn't run interactively, you cannot include commands that require user feedback (such as rm without the -f flag).

---

**Tip**: It is recommended to define at least 120 seconds as the Draining Timeout under Elastigroup -> Edit -> General -> Advanced.

---
