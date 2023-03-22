# GitLab

## Introduction

Using [Gitlab Runner's autoscaling](https://docs.gitlab.com/runner/executors/docker_machine.html) feature you can now configure Docker-Machine to provision Spot instances on Elastigroup. This gives both the cost savings of Spot instances and the 100% availability that Elastigroup provides while retaining full control over your CI/CD with Gitlab Runners.

## What's Covered

The following tutorial covers how to start running Gitlab Runner's autoscaling feature with Elastigroup as the instance provider. If you're already using Gitlab Runner simply skip to Step 4.

## Prerequisites

- A verified Spot Elastigroup account. For more information on getting started with Spot's Elastigroup, click [here](https://spot.io/products/elastigroup/).

## Procedure

1. [Create an Elastigroup](elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch) in your account with the following parameters:
   - [Docker-Machine Supported OS AMI](https://docs.docker.com/machine/drivers/os-base/)
   - Create Security Group with inbound SSH (22) and Docker-Machine (2376) ports open
2. Install [Git Runner on Linux machine](https://docs.gitlab.com/runner/install/index.html)
3. On the same machine, install [Docker-Machine](https://docs.docker.com/machine/install-machine/).
4. Install Spot driver on Docker-Machine. The driver can be found [here](https://github.com/spotinst/docker-machine-driver-spotinst/releases).
5. [Register your Runner](https://docs.gitlab.com/runner/register/index.html#gnu-linux).
6. [Open the Gitlab Runner configuration file](https://docs.gitlab.com/runner/configuration/advanced-configuration.html)

   `:/etc/gitlab-runner/config.toml`

7. Add configuration of Spot provider under `[runners.machine]`:

```
 [runners.machine]

   IdleCount = 0

   IdleTime = 1800

   MachineDriver = "spotinst"

   MachineName = "runner-%s"

   MachineOptions = [ "spotinst-account=<Account-ID>", "spotinst-token=<Token>", "spotinst-elastigroup-id=<ElastigroupId>", "spotinst-sshkey-path=<LocalPath>"]
```

The following table covers the MachineOptions parameters used above. Note that these parameters are all required. The full parameter documentation can be found [here](https://github.com/spotinst/docker-machine-driver-spotinst).

| **Option Name**             | **Description**                                           |
| --------------------------- | --------------------------------------------------------- |
| `--spotinst-account`        | Spot Account ID                                           |
| `--spotinst-elastigroup-id` | Elastigroup ID in the relevant account to fill in servers |
| `--spotinst-token`          | Spot token from your organization                         |
| `--spotinst-sshkey-path`    | Local path to the pem file of the Elastigroup             |

You just configured Docker-Machine to provision instances through Elastigroup.

## What's Next?

- To learn more about the Elastigroup Docker-Machine integration, click [here](https://github.com/spotinst/docker-machine-driver-spotinst).
