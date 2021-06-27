# Introduction to Grid Engine

Grid Engine software manages workload placement automatically, maximizes shared resources, supports extreme scale, provides enterprise-grade dependability and accelerates deployment of any container, application or service in any technology environment, on-premise or in the cloud.

Elastigroup supports Grid Engine workloads using a proprietary controller that monitors the Grid Engine queue and launches Low-Priorty VM's once there is a pending Jobs in the queue.

In order to integrate Grid Engine with Elastigroup, do the following:

1. [Create Token](administration/api/create-api-token)
2. Copy Account ID from the console:

<img src="/elastigroup/_media/grid-engine-azureREADME_1.png" />

3. Install the controller on Primary host server using the following commands using the Token and Account ID from the previous steps:

```bash
> source $SGE_ROOT/default/common/settings.sh
> curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/hpc/gridengine/controller/scripts/install.sh | \
SPOTINST_TOKEN=redacted \
SPOTINST_ACCOUNT=redacted \
bash
```
