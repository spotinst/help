# FAQs - FinOps

<!----------------------------------eco---------------------------------->

## Eco

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecosavings">How are savings calculated when I purchase reserved instances?</summary>

  <div style="padding-left:16px">

   Eco gathers data about all of your instances before you are using reserved instances. Savings are calculated each month. This means that you are not charged at the purchasing moment, but for each month separately. The calculation of each purchase is multiplied by the number of instances. For example, Eco purchases one reserved instance at a price of $24 for a duration of one year (amounting to $2 per month). Running an on-demand instance would cost $3 per month. Therefore, Eco saves you $1 per month, and you are charged based on $1 savings each month.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecospot">Does Eco also recommend Spot instances in the projected savings?</summary>

  <div style="padding-left:16px">

   Eco is a tool for management and optimization of commitment discounts (reservations and savings plans). The projected savings by using Eco relate to commitments. You can use Eco for managing commitments in your organization, while using Elastigroup or Ocean to optimize the combined use of Spot and reserved instances in the workload.
   
 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoexistingri">If my management account already has reserved instances when I install Eco, how are the savings calculated?</summary>

  <div style="padding-left:16px">

   Eco charges only for the reserved instances that have a start date after Eco started.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoridiscounts">How does ECO consider reserved instance volume discounts?</summary>

  <div style="padding-left:16px">

   Reserved instance volume discounts drive the cost of reservations down. When Eco makes a large reserved instance purchase which generates the reserved instance volume discount, it is by design. Eco includes the cost reductions in the net savings calculations, which may impact your Eco fee.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecolease">What does the reservation end date mean for renewals?</summary>

  <div style="padding-left:16px">

When a reservation expires, Eco first makes sure a renewal is the right course of action. If so, expired coverage is replaced with the best commitment to provide a blend of flexibility and savings. When an expiration is renewed, a new lease ID is created. Depending on the situation, an expired reservation may be renewed under different parameters, so do not be concerned if you do not see an exact match.

 </div>

 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecopolicy">AWS: Is there a best practice template for limiting a policy?</summary>

 <div style="padding-left:16px">

You can use the [AWS restricted Eco policy](https://github.com/spotinst/spotinst-examples/blob/master/Policies/AWS/Spot-AWS-Eco-Restricted-Full-Permission.json).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecosellfee">AWS: Does the pricing for Eco include the AWS charge for selling reserved instances in the marketplace?</summary>

  <div style="padding-left:16px">

   If there is a fee for selling on the marketplace, you pay AWS based on the current AWS selling fee. Eco pricing is based on the actual savings you achieve.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoconvri">AWS: If I have convertible AWS reserved instances, does the savings recommendation include the savings by exchanging these?</summary>

  <div style="padding-left:16px">

   Yes. Eco is not able to sell convertible reserved instances. It can only replace them with other reserved instances under AWS constraints. Therefore, Eco suggests how to manage your convertibles. Also, Eco may purchase convertibles for you.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econonus">AWS: Can I connect my bank account to the AWS marketplace if my company is not in the United States?</summary>

  <div style="padding-left:16px">

   Contact your account manager for more information.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecos3">AWS: Why does Eco need to sync my S3 bucket instead of just reading it?</summary>

  <div style="padding-left:16px">

Eco [syncs your S3 bucket](eco/tutorials/eco-policy/?id=s3) to Spot instead of reading the data each time from your S3 bucket. This improves response time and reduces your costs. Also, if you delete your S3 bucket, then Spot still has the historical data saved.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoarn">AWS: Why am I getting an <i>Invalid ARN</i> message?</summary>

  <div style="padding-left:16px">

   Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco and compare it to your management account resources. Make sure the CloudFormation stack providing the ARN has not been changed. Additionally, make sure no AWS Service Control Policies restrict access.

Contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econos3-1">AWS: Why am I getting a <i>No access to S3 bucket</i> message?</summary>

  <div style="padding-left:16px">

   There are insufficient permissions. Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco. Confirm that the S3 bucket still exists, bucket policies and Service Control policies have not changed, and the Cost and Usage report is still scheduled to create data within the bucket.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econos3-2">AWS: Why am I getting a <i>S3 bucket no longer exists</i> message?</summary>

  <div style="padding-left:16px">

   Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco. Confirm that the S3 bucket still exists, bucket policies and Service Control policies have not changed, and the Cost and Usage report is still scheduled to create data within the bucket.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econos3-3">AWS: Why am I getting a <i>No new data in S3 bucket for over 48 hours</i> message?</summary>

  <div style="padding-left:16px">

   Review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco. Confirm that the Cost and Usage report is still scheduled to create data within the bucket.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econoce">AWS: Why am I getting a <i>No CE access</i> message?</summary>

  <div style="padding-left:16px">

Make sure the [Eco permissions policy](eco/tutorials/eco-policy/?id=account-billing-cost-explorer-cost-and-usage-report-invoicing-payments-and-taxes) includes reading Cost Explorer data.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econodataaccess">AWS: Why am I getting a <i>We were not able to access data in the S3 bucket</i> message?</summary>

  <div style="padding-left:16px">

This is normal if the AWS CUR was only recently configured. If your CUR was configured more than 48 hours ago, submit a [support ticket](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecofailure">AWS: Why am I getting a <i>Failure to retrieve data</i> message?</summary>

  <div style="padding-left:16px">

   If you get a `Failure to retrieve data from < bucket >. Last Successful sync is < insert last_cur_sync_timestamp >. Expecting parquet format.` message, review the [Getting Started documentation](eco/getting-started/connect-your-aws-account) for Eco.

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econodataaws">AWS: Why don't I see data in the Eco Dashboard?</summary>

  <div style="padding-left:16px">

If you cannot see data in the Eco Dashboard, check if:

* 48 hours have passed since registration with Eco. Data appears for the first time 48 hours after registration.
* The S3 bucket name is missing. Verify that the bucket name you inserted during your registration to Eco appears in the AWS Cost and Usage report list.
* The IAMRole permissions may be missing or incorrect. Verify that your permissions are complete and the same as in the [Eco Policy](eco/tutorials/eco-policy/).

If you continue to get this message, contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecotenantid">Azure: Why I am getting an <i>Invalid credentials</i> (tenant ID doesn't match) message?</summary>

  <div style="padding-left:16px">

   If you get a `Tenant ID in request does not match tenant ID where Eco Azuer app was consented` message during setup, make sure to sign in to the Azure tenant that you would like to register for Eco.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoinvalidbilling">Azure: Why I am getting a billing permission message?</summary>

  <div style="padding-left:16px">

   If you get a `Permission is not valid, pleae update permissions as needed and try again` message during setup, make sure you have <i>billing account admin</i> access to Azure. Check your access:

* [Enterprise agreement](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/direct-ea-administration#add-another-enterprise-administrator)
* [Microsoft customer agreement](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-mca-roles)

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoreservation">Azure: Why I am getting a <i>Registration failure</i> (permission is not valid) message?</summary>

  <div style="padding-left:16px">

If you get a `Permission is not valid, pleae update permissions as needed and try again` message during setup, make sure you have <i>reservation admin</i> access to Azure. [Check your access](https://blog.hametbenoit.info/2022/08/03/azure-you-can-now-delegate-management-of-reservations/#.ZDmJ7OzMJf0).

 If you are not able to add reservation administrator permissions to your user, you might need to elevate the [global admin](https://learn.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) access first.

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="econodataaz">Azure: Why don't I see data in the Eco Dashboard?</summary>

  <div style="padding-left:16px">

   Contact [Spot support](https://spot.io/support/).

 </div>

 </details>

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id="ecoids">Azure: Where can I find my tenant ID and billing account ID?</summary>

  <div style="padding-left:16px">

You can get your [tenant ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant) and [billing ID](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/direct-ea-administration#manage-your-enrollment) from Azure.

 </div>

 </details>
