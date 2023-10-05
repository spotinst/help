# Create Ocean Cluster from OpenShift (v3.11)

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of all pods, containers, and applications.

This tutorial covers the creation of an Ocean cluster using [Spot](https://console.spotinst.com/spt/dashboard).

## Prerequisites

- OpenShift is installed and configured on AWS, Azure, or GCP.
- At least one worker node is up and running, with a primed image and user-data. To set up the primed image and user data, you may follow the procedures below.

### Create Primed Image

To create the primed image, complete the [Red Hat procedure](https://docs.openshift.com/container-platform/3.11/admin_guide/cluster-autoscaler.html#creating-primed-image-cluster-auto-scaler-cluster-auto-scaler).

### Create User Data

To create user data, follow the Red Hat steps below. (These steps are taken from a [Red Hat procedure](https://docs.openshift.com/container-platform/3.11/admin_guide/cluster-autoscaler.html#creating-LC-and-ASG-cluster-auto-scaler-cluster-auto-scaler).)

1. Create the bootstrap.kubeconfig file by generating it from a primary node.

`$ ssh master "sudo oc serviceaccounts create-kubeconfig -n openshift-infra node-bootstrapper" > ~/bootstrap.kubeconfig`

2. Create the user-data.txt cloud-init file from the bootstrap.kubeconfig file.

```sh
$ cat <<EOF > user-data.txt
#cloud-config
write_files:
- path: /root/openshift_bootstrap/openshift_settings.yaml
  owner: 'root:root'
  permissions: '0640'
  content: |
    openshift_node_config_name: node-config-compute
- path: /etc/origin/node/bootstrap.kubeconfig
  owner: 'root:root'
  permissions: '0640'
  encoding: b64
  content: |
    $(base64 ~/bootstrap.kubeconfig | sed '2,$s/^/    /')
runcmd:
- [ ansible-playbook, /root/openshift_bootstrap/bootstrap.yml]
- [ systemctl, restart, systemd-hostnamed]
- [ systemctl, restart, NetworkManager]
- [ systemctl, enable, atomic-openshift-node]
- [ systemctl, start, atomic-openshift-node]
EOF
```

> **Tip**: If you don't use an autoscaler in the OpenShift cluster yet and don't have an AWS auto-scaling group, do not create an autoscaling group.

3. Launch an instance based on the created prime image together with the user data built on the cluster and ensure all your OpenShift AWS resources are tagged with the following tag:

`Key:kubernetes.io/cluster/<cluster-name> Value:<shared/owned>`

The tag values are:

- shared – The resource is shared with other systems.
- owned – The node belongs exclusively to the cluster.

Once the instance is up and running, a new `csr` request will be waiting:

`oc get csr`

This request will output all the pending CSRs.

Use the following request to approve the one that is relevant to the instance you've launched.

`oc approve csr csrname`

When the new instance with the correct user data, image, and tags is joined to the cluster, you are ready integrate OpenShift with Ocean.

## Get Started

1. In the side menu of the console, click Ocean/Cloud Clusters.

<img src="/ocean/_media/tools-openshift-4x-01.png" width="220" height="133" />

2. Click Create Cluster.
3. Click the use case for OpenShift, `Connect an Existing OpenShift Cluster`.

<img src="/ocean/_media/tools-openshift-4x-02.png" width="300" height="385" />

## Step 1: Enter General Information

1. Enter a Cluster Name and Identifier and choose a Region.
2. Choose an Auto Scaling Group or worker node Instance to import the cluster configuration from.

<img src="/ocean/_media/tools-openshift-4x-03.png" width="450" height="349" />

Step 2: Review Compute Settings
Confirm or change the settings imported by the Ocean Creation Wizard.

<img src="/ocean/_media/tools-openshift-4x-04.png" />

Step 3: Set up Connectivity

1. Create a Spot token or use an existing one.
2. Install the Ocean Controller Pod. Learn more about the Ocean Controller Pod and Ocean's anatomy here.
3. Ensure enable-csr-approval is set to True.
4. Click Test Connectivity to ensure the controller functionality.

```bash
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/scripts/init.sh | \
SPOTINST_TOKEN=<ENTER YOUR TOKEN HERE> \
SPOTINST_ACCOUNT=act-54c5d1ab \
SPOTINST_CLUSTER_IDENTIFIER=open-shift \
ENABLE-CSR-APPROVAL=True \
bash
```

<img src="/ocean/_media/tools-openshift-4x-05.png" />

5. When the connectivity test is complete, click Create.

You're all set! Ocean will now ensure the most cost-effective capacity and size possible for your cluster.

## What's Next?

Learn more about Ocean scaling and optimization [features](ocean/features/).
