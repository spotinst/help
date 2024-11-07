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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunnamedvng">AWS, Azure, GCP: Why is my instance in an unnamed virtual node group?</summary>

  <div style="padding-left:16px">

A node is running in an Ocean cluster and is an unnamed virtual node group.

<img width="900" src="https://github.com/user-attachments/assets/5e581d00-b1c8-4bdb-8e89-c19ef79ad1f1">

This can happen if your virtual node group was deleted in Terraform. When you delete a virtual node group in Terraform, the `spotinst_ocean_aws_launch_spec` > `delete_nodes` needs to be manually set to <i>true</i> in the [Terraform resource](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#delete_nodes). If it's not set to <i>true</i>, the node will keep running and not be in a virtual node group.

 </div>
 
 </details>

 
  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceancost">AKS, ECS, EKS, GKE: Why is the cost analysis in the Ocean dashboard unusually high for yesterday?</summary>

  <div style="padding-left:16px">

Cost Analysis in the Ocean Dashboard can show an unusually high cost for yesterday.

![oceancostanalysis](https://github.com/user-attachments/assets/96cbe1c7-fa63-4df1-89bb-18154e9778cb)

If you look at the same day a few days later, the cost will be similar to the other days.

![oceancostanalysis2](https://github.com/user-attachments/assets/6a11a3a9-a2b1-405a-b274-c2a5370bff43)

Spot's Cost Analysis reviews the cost data after one day. For instance, if today is August 20, the cost analysis data will be finalized only on August 21.

Initially, the costs are compared with the on demand value of the instance types, followed by the Spot value. Afterwards, the costs are compared with reserved instances and saving plans. So, if the you have reserved instances and saving plans configured, the cost gap from the previous day can be higher. 


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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceank8sreadiness">AKS, EKS, GKE: Why am I getting an <i>exit code 137</i> error?</summary>

  <div style="padding-left:16px">

Your liveness probe failed, and you’re getting exit code 137. <font color="#FC01CC">liveliness or readiness probe failed?</font>

Controller pod error:
<code>Warning Unhealthy 3m44s (x273 over 78m) kubelet Readiness probe failed: Get http://172.16.6.53:4401/healthcheck: dial tcp 172.16.6.53:4401: connect: connection refused</code> <font color="#FC01CC">is all this okay to include? or do I need to anonymize the urls?</font>

Exit code from controller logs:
<pre><code>INFO [2024-01-03 19:10:31,863] [main] PushAutoScalerDataCmd - Pushing autoScaler data

command terminated with exit code 137</code></pre>

The liveness probe failed error typically happens when a node is overcommitted, and the controller pod does not respond to the check at the right time.
Exit code 137 usually means out-of-memory issues.vlivelness or readiness?</font>

**Liveness probe failure** <font color="#FC01CC">include these links? livelness or readiness?</font>

•	Define readiness probes: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes
•	Kubernetes readiness probe failed error: https://stackoverflow.com/questions/48540929/kubernetes-readiness-probe-failed-error

**Exit code 137** <font color="#FC01CC">include these links?</font>
What Is Exit Code 137? https://foxutech.medium.com/how-to-fix-exit-code-137-kubernetes-memory-issues-c3a40f89c90d#:~:text=A%20137%20code%20is%20issued,encounter%20a%20137%20exit%20code


<code>Kubernetes Autoscaler, Deadlock for Pod: '{pod-name}' 
Can't scale up an Instance since PersistentVolumeClaim: 
'{PVC-name}' 
VolumeId: '{vol-name}' is already attached to an existing Instance: 
'{instance-ID}' Please consider using a new PersistentVolumeClaim or open a 
support ticket.
</code>

This can happen when the pod has a claim for a specific volume owned by a different instance, and that instance does not have free space for the pod.

By freeing up space, the pod can be placed on its attached node and can use the volume it claimed.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunauthorized">EKS: Why am I getting a <i>You must be logged in to the server (unauthorized)</i> error when creating an EKS cluster?</summary>

  <div style="padding-left:16px">

   When you create an Ocean EKS cluster, you may get this error when in step 4 (run 'kubectl get svc'):
   <code>You must be logged in to the server (Unauthorized).</code>

   This can happen:
   * When an Amazon EKS cluster is created, the IAM entity (user or role) that creates the cluster is added to the Kubernetes RBAC authorization table as the administrator. Initially, only that IAM user can make calls to the Kubernetes API server using kubectl. The user trying to run the 'kubectl get svc' command has no permission at all. You need to [add access to other AWS users](https://stackoverflow.com/questions/50791303/kubectl-error-you-must-be-logged-in-to-the-server-unauthorized-when-accessing).<font color="#FC01CC">should we link to stackoverflow or to an AWS page?</font>
   * If you're using a different IAM account for AWS CLI than the IAM account you used for the CloudFormation template when you created the EKS in the AWS console. Run 'aws configure' and switch the AWS CLI to use the same IAM account that was used for the CloudFormation template when you created the EKS.
   
 </div>

 </details>

 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxpods">EKS: I got a <i>Maximum Pods configuration reached</i> message, how do I troubleshoot?</summary>

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

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egmemoryscalepolicy">AWS: How can I set a memory-based scaling policy in Elastigroup?</summary>

  <div style="padding-left:16px">

Scaling policies typically include CloudWatch metrics such as CPU utilization, network out, and latency.

You can configure a custom scaling policy that is based on another metric. For example, you may want to scale according to memory utilization.

1.	To set a simple scaling policy, revert the Elastigroup configurations to the legacy design:

    <ol style="list-style-type: lower-alpha;">
     <li>In the Spot console, go to <b>Elastigroup</b> > <b>Groups</b>, and click on the name of an Elastigroup.</li>
     <li>Go to <b>Actions</b> > <b>Edit Configuration</b>.</li>
     <li>Click <b>Revert to Legacy Design</b>.
     
     <img src="https://github.com/user-attachments/assets/edd8803d-a05b-4850-82e1-e87104006879" />
     </li>

    </ol>

2.	Click <b>Scaling</b> > <b>Simple Scaling Policies</b>.
3.	Select <b>Up Scaling Policies</b> or <b>Down Scaling Policies</b> and click <b>Add Policy</b>.
4.	Set these parameters:
    * <b>Policy Type</b>: <i>Simple scaling</i>
    * <b>Source</b>: <i>AWS CloudWatch</i>
    * <b>Auto Scale Based On</b>: <i>Other</i>
    * <b>Namespace</b>: <i>Custom</i>
    * <b>Custom Namespace</b>: <i>CWagent</i>
    * <b>Metric Name</b>: this [AWS document](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html) contains the metrics you can use. These metrics are collected by the CloudWatch agent. For example, you can use <i>mem_used</i> or <i>mem_used_percent</i>.
     
     <img width=450 src="https://github.com/user-attachments/assets/430e1adc-458b-4723-ba8a-061c766daef3" >
    
5. Verify the [CloudWatch agent is installed](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance.html).

The next steps are intuitive and should be configured according to the customer's considerations.
<font color="#FC01CC">what are the next steps? should I delete this line?</font>

 </div>

 </details>



<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-delete">AWS: Are stateful node resources deallocated when I delete an instance?</summary>

  <div style="padding-left:16px">

   When you delete a stateful node:
   
   * [In the Spot console](managed-instance/features/data-volume-persistence?id=deallocated), you choose what gets deallocated.

   * [Using the API](api/#tag/Stateful-Node-AWS/operation/AWSManagedInstanceDelete), `deallocationConfig` defaults to <i>false</i> and the <font color="#FC01CC">resources are deallocated</font>.

   * Using Terraform, ______________
<font color="#FC01CC">link? and what's the command?  When using Terraform and executing the following command - terraform destroy the default values for deleting a node are set to true.</font>
   
 </div>

 </details>
