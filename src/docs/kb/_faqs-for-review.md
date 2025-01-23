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

   You can use taints, tolerations, and node selectors to make sure that only pods with the on-demand lifecycle label are scheduled on on-demand nodes. Pods that don't have this label cannot be scheduled on these nodes. Taints and tolerations work together to make sure pods are scheduled on the right nodes.

   Use taints and tolerations in a virtual node group to create an on-demand virtual node group that includes all your on-demand instances. If the virtual node group has a taint, only pods with a matching tolerance will be scheduled for this virtual node group.

1. Make sure your [pod has the tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) set to:

      <pre><code>tolerations:
      - key: "key"
        operator: "Equal"
        value: "value"
        effect: "NoSchedule"</code></pre>

     If the <b>operator</b> is `Exists`, the launch specification needs to be `null`.

2. Configure a [node selector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) with the on-demand [lifecycle label](ocean/features/labels-and-taints?id=spotinstionode-lifecycle).

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
   * It usually means that you reached the EKS [maximum pod limit](https://github.com/awslabs/amazon-eks-ami/blob/main/templates/shared/runtime/eni-max-pods.txt). For example, the EKS maximum pod limitation for <i>r4.large</i> is 29.
     
     You can [increase the EKS maximum pods](https://aws.amazon.com/blogs/containers/amazon-vpc-cni-increases-pods-per-node-limits/) in AWS. You can see more information about the number of pods per EKS instance on [Stack Overflow](https://stackoverflow.com/questions/57970896/pod-limit-on-node-aws-eks#:~:text=For%20t3.,22%20pods%20in%20your%20cluster).
     
   * If the node has fewer pods than the EKS maximum pod limit, then it's likely the **max-pods** limit is set at the user data level in the Ocean configuration.

     Increase this limit for the user data in Ocean:

      <ol style="list-style-type: lower-alpha;">
      <li>Go to the cluster in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b> > <b>Compute</b>.</li>
      <li>In <b>User Data (Startup Script)<b>, increase the max-pods limit.</li>
      <li><a href="ocean/features/roll-gen">Roll the cluster</a>.</li>
   </ol>
   
   If you continue to get this error, [roll the cluster](ocean/features/roll-gen) again and disable [Respect Pod Disruption Budget (PDB)](ocean/features/roll-gen?id=respect-pod-disruption-budget). You can also manually terminate the node.
   
 </div>

 </details>



<!----------------------------------elastigroup---------------------------------->
## Elastigroup



<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

