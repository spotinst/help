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
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="oceanmaxpods">EKS: Why am I getting a <i>Maximum Pods configuration reached</i> error?</summary>

  <div style="padding-left:16px">

   If you get a `Maximum Pods configuration reached` message for a node in the console:
   * It usually means that you reached the EKS [maximum pod limit](https://github.com/awslabs/amazon-eks-ami/blob/main/templates/shared/runtime/eni-max-pods.txt). For example, the EKS maximum pod limitation for <i>r4.large</i> is 29.
     
     You can [increase the EKS maximum pods](https://aws.amazon.com/blogs/containers/amazon-vpc-cni-increases-pods-per-node-limits/) in AWS. You can see more information about the number of pods per EKS instance on [Stack Overflow](https://stackoverflow.com/questions/57970896/pod-limit-on-node-aws-eks#:~:text=For%20t3.,22%20pods%20in%20your%20cluster).
     
   * If the node has fewer pods than the EKS maximum pod limit, then check if the **max-pods** limit is set at the user data level in the Ocean configuration.

     Increase this limit for the user data in Ocean:

      <ol style="list-style-type: lower-alpha;">
      <li>Go to the cluster in the Spot console and click <b>Actions</b> > <b>Edit Configuration</b> > <b>Compute</b>.</li>
      <li>In <b>User Data (Startup Script)</b>, increase the max-pods limit.</li>
      <li><a href="ocean/features/roll-gen">Roll the cluster</a>.</li>
   </ol>
   
   If you continue to get this error, [roll the cluster](ocean/features/roll-gen) again and disable [Respect Pod Disruption Budget (PDB)](ocean/features/roll-gen?id=respect-pod-disruption-budget). You can also manually terminate the node.
   
 </div>

 </details>



<!----------------------------------elastigroup---------------------------------->
## Elastigroup



<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

