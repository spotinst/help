<meta name="robots" content="noindex">

# FAQs for review

<!---------------------------------- <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="xxxx">?</summary>

  <div style="padding-left:16px">

   text
   
 </div>

 </details>
 ---------------------------------->

<!----------------------------------where to put these?---------------------------------->

<!--## Where do these go?
 
<!----------------------------------general---------------------------------->

## General

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="SSOaddlattributes">SSO: What additional attributes (if any) does the application need from the assertion?</summary>

  <div style="padding-left:16px">

There are a number of <a href="/administration/sso-access-control">attributes that can be sent</a>. These are the default and required attributes:

<font color="#FC01CC">I don't see in the documentation what attributes can be sent. is this the correct link?</font>

* Relay State
* Email
* FirstName
* LastName
  
 </div>

 </details>
<!----------------------------------ocean---------------------------------->

## Ocean

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanpodod"><font color="#FC01CC">???</font>: How can I make sure my pods only schedule on-demand nodes?</summary>

  <div style="padding-left:16px">

   You can use taints, tolerations, and node selector to make sure that only pods with the on-demand lifecycle label are scheduled on on-demand nodes. Pods that don't have this label cannot be scheduled on these nodes. Taints and tolerations work together to make sure pods are scheduled on the right nodes.

   1. Make sure your [pod has the tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) set to:

      <pre><code>tolerations:
      - key: "key"
        operator: "Equal"
        value: "value"
        effect: "NoSchedule"</code></pre>

   > **Note**: If the <b>operator</b> is <i>Exists</i>, the LS <font color="#FC01CC">what's LS?? launch specification - is this a virtual node group??</font> needs to be <i>null</i>.

2. Configure a [node selector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) with the on-demand lifecycle label (<code>spotinst.io/node-lifecycle: od</code>).<font color="#FC01CC">where do they do this?? is this link useful?</font>

    <details>
   <summary markdown="span">Sample deployment with node selector set to <i>od</i></summary>

   <pre><code>apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nginx-deployment
     labels:
       app: nginx
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: nginx
     template:
       metadata:
         labels:
           app: nginx
       spec:
         containers:
         - name: nginx
           image: nginx:1.14.2
           ports:
           - containerPort: 80
         tolerations:
         - key: "key"
           operator: "Equal"
           value: "value"
           effect: "NoSchedule"
         nodeSelector:
           spotinst.io/node-lifecycle: od</code></pre>

   </details>


   <font color="#FC01CC">On the pod side -

You should configure the tolerations:

For example:

<pre><code>
 tolerations:
  - key: "key"
    operator: "Equal"
    value: "value"
    effect: "NoSchedule"
</code></pre>

Important note! If the operator is Exists - no value should be specified (in that case the value in the LS should be ‘null’).

You should configure a node selector with the od lifecycle label.

Here is an example of a deployment:

<pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
      tolerations:
      - key: "key"
        operator: "Equal"
        value: "value"
        effect: "NoSchedule"
      nodeSelector:
        spotinst.io/node-lifecycle: od
</code></pre>
   
</font>

3. In the Spot console, configure 

<font color="#FC01CC">original

On the node side (Ocean configuration) -

You should configure a LS with a “matching” taints (a toleration "matches" a taint if the keys and the effects are the same).

For example:
####no example in the article.....####


Important note:

If there are several LS configured in the cluster, you should add a custom label to the specific LS, as well as to the pod. The reason another custom label should be added is that only tolerations that configured on the pod, will not trigger a scale-up from the dedicated LS.

Please note, in case a customer wishes to run only a specific workload on the nodes launched from the LS, simply adjust the node selector to the dedicated node selector of the workload.

For example, in case the customer uses LS for GPU instance and he wishes only pods with a dedicated node selector would run on the node, he should follow the same steps and simply adjust the node selector to the dedicated one.

</font>
 </div>

 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxspot">AWS: Why can't I spin new spot instances (MaxSpotInstanceCountExceeded)?</summary>

  <div style="padding-left:16px">

   You can get this message if AWS's spot service limit is reached:
   
   <code>Can't Spin Spot Instances:Code: MaxSpotInstanceCountExceeded, Message: Max spot instance count exceeded</code>

You may also get an email from AWS: <i>Spot Proactive Monitoring | Max Spot Instance Count Exceeded</i>. This email includes instructions how to create a support request with AWS, including the instance type and region that triggered the error.

Reach out to AWS to open a support case for service limit increase.

You can read the AWS documentation on [spot instance quotas](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html).

   
 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunnamedvng">AWS, Azure, GCP: Why is my instance in an unnamed virtual node group?</summary>

  <div style="padding-left:16px">

A node is running in an Ocean cluster and is an unnamed virtual node group.

<img width="900" src="https://github.com/user-attachments/assets/5e581d00-b1c8-4bdb-8e89-c19ef79ad1f1">

This can happen if your virtual node group was deleted in Terraform. When you delete a virtual node group in Terraform, the `spotinst_ocean_aws_launch_spec` > `delete_nodes` needs to be manually set to <i>true</i> in the [Terraform resource](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#delete_nodes). If it's not set to <i>true</i>, the node will keep running and not be in a virtual node group.

 </div>
 
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanscaleup">AKS, EKS, GKE: How does the scale-up recovery process work?</summary>

  <div style="padding-left:16px">

Ocean monitors for pending Kubernetes pods and automatically adjusts the size of the cluster based on the workload constraints and labels. Ocean ensures that the cluster resources are utilized and scales down underutilized nodes to ensure maximal cost optimization.

When it comes to a scale-up as part of an instance recovery, the scale-up mechanism behaves differently. The recovery process receives a list of markets that can accommodate the pods' requirements according to the virtual node group configuration and not the workload configuration (the pod's metadata constraints). Ocean scales a new instance to replace the old instance that was reclaimed as quickly as possible. This means the node affinity is not taken into account.

If the list of required instance types is not part of the virtual node group, the list includes different types than what is set in the workload configuration.

If one of the workloads is unscheduled after the launching of the new instance, the autoscaler scales up an instance to accommodate the requirements of that particular workload. When this happens, there's a long list of optional instance types that the workload can be scheduled on. These workloads are configured by the Kubernetes labels on the dedicated deployment.

You should configure the allowlist instance types at the virtual node group level, not for the deployment. This will prevent launching of other instance types and, eventually, a momentary scenario in which the workload is unscheduled.

If you have multiple deployments that can be scheduled on different instance types, you can create different virtual node groups for each use case.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sheadroom">AKS, EKS, GKE: Can I configure automatic headroom using Kubernetes Operations (kOps)?</summary>

  <div style="padding-left:16px">

You can configure [automatic headroom](ocean/features/headroom) using kOps at the cluster level, not at a virtual node group level. Add these [metadata labels](/ocean/tools-and-integrations/kops/metadata-labels):

<code>spotinst.io/autoscaler-auto-config: "true"
spotinst.io/autoscaler-auto-headroom-percentage : {Value}
spotinst.io/ocean-default-launchspec: "true"</code>

Here's an example of a config file:

<code>apiVersion: kops.k8s.io/v1alpha2
kind: InstanceGroup
metadata:
name: "test-vng-2"

labels:
kops.k8s.io/cluster: "erez-via-2.ts.ek8s.com"
spotinst.io/spot-percentage: "50"
spotinst.io/autoscaler-auto-config: "true"
spotinst.io/ocean-default-launchspec: "true"
spotinst.io/autoscaler-auto-headroom-percentage: "20"
spotinst.io/autoscaler-headroom-num-of-units: "2"
spotinst.io/autoscaler-resource-limits-max-vcpu: "2"
spotinst.io/autoscaler-headroom-mem-per-unit: "1024"
spotinst.io/autoscaler-headroom-gpu-per-unit: "0"

spec:
role: Node
maxSize: 1
minSize: 1</code>

 </div>

 </details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanhelm">AKS, EKS, GKE: Can I manage my Kubernetes cluster deployment using Helm charts?</summary>

  <div style="padding-left:16px">

  You can manage your Kubernetes cluster deployment using Helm charts. You can can also [update the Ocean controller version](/tutorials/spot-kubernetes-controller/install-with-helm) using Helm charts.

The Helm chart YAML file has a version that points to a specific app version in the relevant [Spotinst repository](https://github.com/spotinst/spotinst-kubernetes-helm-charts/blob/master/charts/spotinst-kubernetes-cluster-controller/Chart.yaml). Every version in the repository is compatible with a [specific controller version](https://artifacthub.io/packages/helm/spotinst/spotinst-kubernetes-cluster-controller). 
   
 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancooldowneval">EKS, GKE: What's the difference between cooldown period and evaluation period?</summary>

  <div style="padding-left:16px">

Whenever Spot performs a scaling action, there is a cooldown period during which no further scaling action takes place. After the cooldown period, another scaling action can take place if required.

**Cooldown Period**

The cooldown period is the amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.

For example, if scaling policy A has cooldown set to 60 seconds and a scale-down is triggered, then new scale-downs cannot start because of policy A for the next minute. New policies cannot go into effect while policy A is in cooldown.

Cooldown period is the amount of time, in seconds, that Ocean must wait between scaling actions.

**Evaluation Period**

The specific number of evaluation periods before a scale-down action takes place. Each cycle is one minute. Evaluation period is the length of time to collect and evaluate the metric.

> **Note**: The evaluation period is calculated based on cooldown plus 3 minutes of padding due to delay in Cloudwatch metrics. So if the cooldown is set to 300 seconds, the evaluation period is 8 minutes (3 minutes + 5 cooldown).

 </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceandaemonsetpods">EKS: Why are DaemonSet pods not scheduled on all nodes in the cluster?</summary>

  <div style="padding-left:16px">

Your DaemonSet pods are only scheduled on one specific virtual node group, not on all the nodes in a virtual node group in cluster.

This can happen if you use taints on your pods in virtual node groups. You can either use taints on all your pods, or not use taints. You can't mix pods with taints and without taints.

Update your tolerances in the DaemonSet YAML so you can schedule DaemonSet pods on the nodes in virtual node groups with taints.

For example, you can update your [DaemonSet pod YAML](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) to include:

<pre><code>
   spec:
      tolerations:
      - key: dedicated
        operator: Equal
        value: statefulset
        effect: NoSchedule
</code></pre>


   </div>

 </details>

   <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceandisconnectcluster">EKS: How can I disconnect a cluster from Ocean?</summary>

  <div style="padding-left:16px">

   You can safely disconnect Ocean from an existing EKS Cluster:

1. Increase the number of instances in the ASG attached to the EKS cluster. This way, the pods that run on the nodes managed by Spot will be able to reschedule on the new instances and avoid downtime.
2. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
3. Click **Actions** > **Edit Cluster**.
4. On the Review tab, click **JSON** > **Edit Mode**.
5. Change **capacity** > **Minimum**, **Maximum**, and **Target** to <i>0</i>.

   <img width="144" alt="oceandisconnectcluster" src="https://github.com/user-attachments/assets/ec722def-980f-4754-ab0d-b2751bf67a81">

   The instances managed by Ocean will be detached and the pods will be rescheduled on the new instances launched by AWS ASG.
6. In the Spot console, go to **Ocean** > **Cloud Clusters**, and select the cluster.
7. Click **Actions** > **Delete**.
 
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceaniaminstance">EKS: Why am I getting an <i>Invalid IAMInstanceProfile</i> error?</summary>

  <div style="padding-left:16px">
You may get an <i>Invalid IAMInstanceProfile</i> error when you're [creating an Ocean cluster using Terraform](https://registry.terraform.io/modules/spotinst/ocean-eks/spotinst/latest/examples/simple-cluster). This can happen if you use <i>IAMInstanceProfileName</i> instead of <i>IAMInstanceProfileARN</i>.

If you want to use <i>IAMInstanceProfileName</i> in Terraform, set <b>use_as_template_only</b> to <i>true</i>.

Once the cluster is configured to use the default virtual node group as a template, <i>IAMInstanceProfileName</i> can be used instead of <i>Invalid IAMInstanceProfile</i>.
      
 </div>

 </details>
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxpods">EKS: Why am I getting a <i>Maximum Pods configuration reached</i> error?</summary>

  <div style="padding-left:16px">

   If you get a `Maximum Pods configuration reached` message for a node in the console:
   * It usually means that you reached the EKS [maximum pod limit](https://github.com/awslabs/amazon-eks-ami/blob/master/files/eni-max-pods.txt). For example, the EKS maximum pod limitation for r4.large is 29.<font color="#FC01CC">broken link..is one of these correct?
     https://github.com/awslabs/amazon-eks-ami/blob/main/templates/shared/runtime/eni-max-pods.txt
     https://github.com/awslabs/amazon-eks-ami/blob/main/nodeadm/internal/kubelet/eni-max-pods.txt
     </font>
     You can [increase the EKS maximum pods](https://aws.amazon.com/blogs/containers/amazon-vpc-cni-increases-pods-per-node-limits/) in AWS.<font color="#FC01CC">should I include the stackoverflow in addition? https://stackoverflow.com/questions/57970896/pod-limit-on-node-aws-eks#:~:text=For%20t3.,22%20pods%20in%20your%20cluster</font>
     
   * If the node has less pods than the EKS maximum pod limit, then it's likely the **max-pods** limit set at the user data level in the Ocean configuration. Increase this limit for the user data in Ocean and roll the cluster.<font color="#FC01CC">how do they do this? is this relevant: https://docs.spot.io/ocean/features/roll</font>
   If you continue to get this error, roll the cluster again and disable **Respect Pod Disruption Budget (PDB)**. You can also manually terminate the node.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanhpa">EKS: Can I check Ocean EKS clusters' horizontal pod autoscaling (HPA) policy?</summary>

  <div style="padding-left:16px">

   Ocean doesn't actually have a horizontal pod autoscaling (HPA) policy. The HPA is essentially operating on the Kubernetes side so Ocean itself doesn't have an HPA.

The cluster autoscaler only takes care of provisioning the required number of nodes.

Essentially, if the load increases on your cluster, then Kubernetes will create more replicas, and Ocean will launch nodes for the new pods. Kubernetes HPA will create pods and Ocean will launch new nodes for pods to be scheduled.
   
 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunregcontainer">ECS: Why are my container instances unregistered?</summary>

  <div style="padding-left:16px">

Your container instances may be unregistered if the newly launched Ocean ECS container instance:

* Has unregistered contain instance events
* Doesn’t have a Container Instance ID
* Is eventually scaled down
* CPU and memory resource allocations are 0%
* Status: Can’t determine

<img alt="unregistered-container-instance1" src="https://github.com/spotinst/help/assets/167069628/acd9d60a-4952-4955-b119-593ccfb9c067">

    

<img alt="unregistered-container-instance2" src="https://github.com/spotinst/help/assets/167069628/d7713e91-2850-48ee-9d1a-aa439dcf91d1">

Registering a container instance with an ECS cluster means you are telling the ECS service that a specific EC2 instance is available to run containers. <font color="#7632FE">You give information to ECS about the EC2 instance, such as its IP address, the docker daemon endpoint. ##is this part useful?##</font>

<font color="#FC01CC">If a container instance is not able to register the cluster, traffic is not received and the cluster does not function. ##what does this mean? what's the result if this happens##</font>

* **User data**
  
  Make sure this code <font color="#FC01CC">is in ______ so ##where do they update this?##</font> the container instances can register the cluster. Update the cluster name.

  <pre><code>#!/bin/bash  
  echo ECS_CLUSTER="<font color="#FC01CC">MyCluster</font>" >> /etc/ecs/ecs.config</code></pre>
* **AMI**

  ECS is optimized and Agent (similar to the controller in Kubernetes) is configured in the AMI.
  
* **Security group and specific ports**
  * **Port 22 (SSH)** is required if you want to connect to your container instances using Secure Shell (SSH) for troubleshooting or maintenance.
    It is not directly related to ECS cluster registration, but it's commonly included for administrative access to the instances.
  * **Port 2375 (TCP)** is used for the ECS container agent to communicate with the ECS control plane. It allows the agent to register the container instance with the cluster, send heartbeats, and receive instructions for task placement and management.
  * **Port 2376 (TCP)** is used for secure communication between the ECS container agent and the ECS control plane. It enables encrypted communication and is recommended for improved security when managing your ECS cluster.

* **IAM role**

  Configure an instance profile with relevant permissions.

  <img alt="unregistered-container-instance3" src="https://github.com/spotinst/help/assets/167069628/b51d91f7-c067-431f-94b5-64926a6e469c">

* **IP**

  Make sure you configured Public IP according to subnet, and have NAT gateway.
  If you change the configuration in the virtual node group, such as tags/user data, it immediately overrides the cluster's configuration.

  <img alt="unregistered-container-instance4" src="https://github.com/spotinst/help/assets/167069628/98a19d66-d218-41da-bb88-5a99220dcac3">


* [AWS troubleshooting](https://aws.amazon.com/premiumsupport/knowledge-center/ecs-instance-unable-join-cluster/)   


 </div>
 
 </details>

<!----------------------------------elastigroup---------------------------------->
## Elastigroup

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egbeanstalkvariables">Integration: Is maintenance mode needed when I add Beanstalk environment variables?</summary>

  <div style="padding-left:16px">

Beanstalk [environment variables](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html) are part of the application managed on the Beanstalk side, independently from the Elastigroup. Variables are automatically picked by instances that Spotinst launches into the environment.

Add variables in the [Elastic Beanstalk console](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html?icmpid=docs_elasticbeanstalk_console#environments-cfg-softwaresettings-specific). Maintenance mode is not required as this change does not affect the infrastructure.

 </div>
 
 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egodlaunched">AWS, Azure, GCP: Why is an on-demand instance launched instead of a spot instance?</summary>

  <div style="padding-left:16px">

An on-demand instance may be launched instead of a spot instance even if a spot instance is available in the markets selected in the Elastigroup.

You can set [Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) for cluster orientation in Elastigroup. Despite this, Spot may prioritize a certain availability zone to maintain equal distribution. 

An [Elastigroup may have Equal AZ Distribution](https://docs.spot.io/elastigroup/features/core-features/equal-az-instance-distribution-orientation?id=equal-az-instance-distribution-orientation) set for cluster orientation, but the system sometimes prioritizes a certain availability zone to maintain equal distribution. When no spot instances are available, an on-demand instance spins up in the relevant availability zone.

An on-demand instance may not start, for example, if it hits an AWS instance type limit. This is like an on-demand instance that didn’t launch successfully and was replaced with spot instances in a different market.

 </div>

 </details>

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssndeallocated">AWS: Are stateful node resources deallocated when I delete an instance?</summary>

  <div style="padding-left:16px">

   <p id="ssn-delete">When you delete a stateful node:</p>

   * [In the Spot console](managed-instance/features/data-volume-persistence?id=deallocated), you choose what gets deallocated.

   * [Using the API](api/#tag/Stateful-Node-AWS/operation/AWSManagedInstanceDelete), `deallocationConfig` defaults to <i>false</i> and the <font color="#FC01CC">resources are deallocated</font>.

   * Using Terraform, ______________
<font color="#FC01CC">link? and what's the command?  When using Terraform and executing the following command - terraform destroy the default values for deleting a node are set to true.</font>
   
 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="increasedisk">Azure: Can I increase the disk size for stateful nodes?</summary>

  <div style="padding-left:16px">

Yes, you can increase the disk size for stateful nodes.

* If you have reattach persistance for OS disk:
   1. [Pause the stateful node](https://docs.spot.io/managed-instance/features/managed-instance-actions?id=pause) in the Spot console.
   2. Once the stateful node is paused, open the Azure Portal and click **Disks**.
   3. Click **Custom Disk Size**, update the disk size, and save the changes.
   4. [Change the Performance Tier](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-performance-tiers-portal#change-performance-tier).
   5. Resume the stateful node in the Spot console.

* If you have on-launch OS disk persistance:

   1. In the Azure portal, [take a snapshot of the OS disk](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk) running the stateful node (VM).
   2. [Create a new disk](https://learn.microsoft.com/en-us/azure/virtual-machines/snapshot-copy-managed-disk#next-steps) from the snapshot and change the disk size.
   3. You might also need to [change the performance tier](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-performance-tiers-portal#change-the-performance-tier-of-an-existing-disk).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-bdm">AWS: Why am I getting a <i>Volume of size</i> (InvalidBlockDeviceMapping) error?</summary>

  <div style="padding-left:16px">

You get this message:

<code>ERROR, Can't Spin Spot Instances: Code: InvalidBlockDeviceMapping, Message: Volume of size xx GB is smaller than snapshot 'snap-xxx', expect size >= xx GB"</code>

If the current volume size is updated, it can cause a mismatch between the volume size and the snapshot size.

Update the 
In the stateful node, go to Go to **Actions** > **Edit Configuration** > **Review** > **JSON** > **Edit Mode**. Update the group configuration and click **Update**.


<font color="#FC01CC">original:

In order to resolve this issue, you need to adjust the Block Device Mapping configuration and increase the Volume size in order to match the Snapshots size.

You need to edit the Block Device Mapping configuration.

Kindly navigate to Edit Configuration under the Actions button on the upper right side of your EG, then hop to the review tab and switch to JSON. Then turn on Edit Mode and go ahead and edit your group configuration as needed.

Because the EG is behind the scene, I initiated the update for the customer 

-> I executed the EG ID associated with the SMI from the DB - managed_instance table

(keep the current BDM in JSON editor in order to modify it without losing any configuration)

-> Via the UI, I updated the group with the following BDM section -> volumeSize - I increased the Volume size in order to match the Snapshots size. (according to the UI log was 1500)

<pre><code>"blockDeviceMappings": [
                {
                    "deviceName": "/dev/sda1",
                    "ebs": {
                        "deleteOnTermination": false,
                        "volumeSize": 1500,
                        "volumeType": "GP2"
                    }
                }
            ]
</code></pre>
   
Once this is done, the SMI is updated to paused state.

I asked the customer to initiate a resume action - 

The SMI is active, and the instance is running as expected. </font>


 </div>

 </details>
