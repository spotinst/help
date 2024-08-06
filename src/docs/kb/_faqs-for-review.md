<meta name=“robots” content=“noindex”>

# FAQs in progress

<!----------------------------------general---------------------------------->

## General
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="runninghours">Question?</summary>

  <div style="padding-left:16px">

body

 </div>

 </details>

<!----------------------------------ocean---------------------------------->

## Ocean
 
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="runninghours">Question?</summary>

  <div style="padding-left:16px">

body

 </div>

 </details>

<!----------------------------------elastigroup---------------------------------->
## Elastigroup

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="egsnimds">Why am I getting instance launch failed because an EBS volume cannot be encrypted error?</summary>

<div style="padding-left:16px">
If you get this error:

<pre>Spot Bad Parameters: Spot Request id: Optional<instance ID>. Code: bad-parameters Message: <timestamp>: Instance launch failed because an EBS volume cannot be encrypted. If your launch specification includes an encrypted EBS volume, you must grant the AWSServiceRoleForEC2Spot service-linked role access to any custom KMS keys.</pre>

Then there are missing permissions in the KMS custom key. You can configure KMS keys:
* [From the same AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/create-encryption-key?id=create-encryption-key)
* [From a different AWS account](https://docs.spot.io/elastigroup/tutorials/elastigroup-tasks/use-cross-account-kms-key-to-encrypt-ebs-volumes) (cross-account)

   
 </div>

 </details>

<!----------------------------------elastigroup stateful node---------------------------------->

## Elastigroup Stateful Node

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="runninghours">Question?</summary>

  <div style="padding-left:16px">

body

 </div>

 </details>
