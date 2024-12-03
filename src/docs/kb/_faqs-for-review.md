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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanoutofstrategy">ECS: Why is the out of strategy replacement getting canceled for standalone tasks?</summary>

  <div style="padding-left:16px">

   If your virtual node group or Elastigroup has more on-demand instances than defined, your extra instances are reverted to spot instances when they become available. This is called the fix strategy.

If you see this message in the log:

<pre><code>DEBUG, Replacement of type Out of strategy for instance i-xxx has been canceled. Reason for cancelation: Instance contains stand-alone tasks, and the group's configuration doesn't allow termination of stand-alone tasks.</code></pre>

It means that your strategy cannot be fixed and your spot instances cannot be reverted to spots. This is because you have standalone tasks in the instances, and the group's configuration can't stop standalone tasks. These instances cannot be scaled down by the autoscaler.

[Update the cluster](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSClusterUpdate) to include <code>"shouldScaleDownNonServiceTasks": true</code>.

The standalone task and instance are terminated and are not redeployed in Elastigroup because they weren't created as part of a service.

See [What is Amazon Elastic Container Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_run_task.html).
   
 </div>

 </details>

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanunregcontainer">ECS: Why are my container instances unregistered?</summary>

  <div style="padding-left:16px">

Your container instances may be unregistered if the newly launched Ocean ECS container instance:

* Has unregistered contain instance events
* Doesn’t have a Container Instance ID
* Is eventually scaled down
* CPU and memory resource allocations are 0%
* Status: Can’t determine

<img alt="unregistered-container-instance1" src="https://github.com/spotinst/help/assets/167069628/acd9d60a-4952-4955-b119-593ccfb9c067">

</br>

<img alt="unregistered-container-instance2" src="https://github.com/spotinst/help/assets/167069628/d7713e91-2850-48ee-9d1a-aa439dcf91d1">

Your container instance must be registered with an ECS cluster. If the container instance isn't registered, its status is <i>unhealthy</i>. Registering a container instance with an ECS cluster means you are telling the ECS service that a specific EC2 instance is available to run containers. It also sends information to ECS about the EC2 instance, such as its IP address, the docker daemon endpoint.

If your container is unregistered, you should make sure:

* **User Data**
  
  1. Go to the cluster in the Spot console and click **Actions** > **Edit Configuration** > **Compute**.
  2. Add this script to **User Data**, using your cluster name.

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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ssn-bdm">AWS: Why am I getting a <i>Volume of size</i> (InvalidBlockDeviceMapping) error?</summary>

  <div style="padding-left:16px">

You get this message:

<code>ERROR, Can't Spin Spot Instances: Code: InvalidBlockDeviceMapping, Message: Volume of size xx GB is smaller than snapshot 'snap-xxx', expect size >= xx GB"</code>

If the current volume size is updated, it can cause a mismatch between the volume size and the snapshot size.

Update the 
In the stateful node, go to **Actions** > **Edit Configuration** > **Review** > **JSON** > **Edit Mode**. Update the group configuration and click **Update**.


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
