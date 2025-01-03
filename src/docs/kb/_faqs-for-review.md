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

     > **Note**: If the <b>operator</b> is <i>Exists</i>, the launch specification needs to be <i>null</i>.

2. Configure a [node selector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) with the on-demand lifecycle label (<code>spotinst.io/node-lifecycle: od</code>).<font color="#FC01CC">where do they do this?? is this link correct?</font>

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


3. In the Spot console, [configure Ocean custom launch specificatoins](ocean/tutorials/migrate-existing-egs-ekskops?id=step-2-configure-ocean-custom-launch-specifications).

   If there are several launch specifications configured in the cluster, you should add a custom label to the specific launch specification, as well as to the pod. The reason another custom label should be added is that only tolerations that configured on the pod, will not trigger a scale-up from the dedicated launch specification.

If you want to run only a specific workload on the nodes launched from the launch specification, adjust the node selector to the dedicated node selector of the workload. For example, if you use launch specification for GPU instance and only want pods with a dedicated node selector to run on the node, adjust the node selector to the dedicated one.
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



<!----------------------------------elastigroup---------------------------------->
## Elastigroup



<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

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
