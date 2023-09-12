# Eco FAQ

## Question: Savings Calculation

When I purchase reserved instances, how are savings calculated?

### Answer:

The savings calculation of reserved instances works as follows:

Eco gathers data about all of your instances before you are using reserved instances.
Savings are calculated each month. This means that we do not charge the customer at the purchasing moment, but for each month separately.
The calculation of each purchase is multiplied by the number of instances.

Example:

- Eco purchases one reserved instance at a price of \$24 for a duration of one year (amounting to two dollars per month).
- Running an on-demand instance would cost three dollars per month.
- Therefore, Eco saves the customer one dollar per month, and your are charged based on one dollar savings each month.

## Question: Selling Fees

Does the pricing for Eco include the AWS charge for selling reserved instances in the marketplace?

### Answer:

If there is a fee for selling on the marketplace, the customer pays AWS based on the current AWS selling fee. Eco pricing is based on the actual savings you achieve.

## Question: Eco And Spot Instances

Does Eco also recommend Spot instances in the projected savings?

### Answer:

Eco is a tool for management and optimization of commitment discounts (reservations and savings plans). The projected savings by using Eco relates to commitments. We suggest using Eco for managing commitments in your organization, while using Elastigroup or Ocean to optimize the combined use of Spot and reserved instances in the workload.

## Question: Reserved Instances Existing At Purchase

If my management account already has reserved instances when I install Eco, how are the savings calculated?

### Answer:

Eco charges only for the reserved instances that have a start date after Eco started.

## Question: Convertible Reserved Instances

If I have convertible AWS reserved instances, does the savings recommendation include the savings by exchanging these?

### Answer:

Yes. Eco is not able to sell convertible reserved instances. It can only replace them with other reserved instances under AWS constraints. Therefore, Eco suggests how to manage your convertibles. Also, Eco may purchase convertibles for customers.

## Question: AWS Customer Outside USA

My company is not located in the USA. How can I connect my bank account to the AWS marketplace?

### Answer:

Please contact your account executive for more information.

## Question: How Does Eco Consider RI Volume Discounts?

### Answer:

RI Volume Discounts drive the cost of reservations down. When Eco makes a large RI purchase which generates the RI Volume Discount, it is by design. Eco includes the cost reductions in our net savings calculations, which may impact your Eco fee.

## Question: I am seeing the following notification “Invalid ARN".

<img src="/eco/_media/invalid-arn.png" />

### Answer:

Please review the [Getting Started](https://docs.spot.io/eco/getting-started/connect-your-aws-account) documentation for Eco and compare it to your Management account resources. Ensure the Cloud Formation stack providing the ARN has not been changed. Additionally, ensure no AWS Service Control Policies restrict access.

Please contact [Spot support](https://spot.io/support/) for additional assistance.

## Question: I am seeing a notification “No Access to S3 Bucket".

<img src="/eco/_media/faq-no-access-s3-bucket.png" />

### Answer:

There are insufficient permissions. Please review the [Getting Started](https://docs.spot.io/eco/getting-started/connect-your-aws-account) documentation for Eco. Confirm that the S3 bucket still exists, bucket policies and Service Control policies have not changed, and the Cost and Usage report is still scheduled to create data within the bucket.

If this error persists, please contact [Spot support](https://spot.io/support/) for additional assistance.

## Question: I am seeing a notification “S3 Bucket No Longer Exists".

<img src="/eco/_media/faq-s3-bucket-no-longer-exists.png" />

### Answer:

Please review the [Getting Started](https://docs.spot.io/eco/getting-started/connect-your-aws-account) documentation for Eco. Confirm the S3 bucket still exists, bucket policies and Service Control policies have not changed, and the Cost and Usage report is still scheduled to create data within the bucket.

If this error persists, please contact [Spot support](https://spot.io/support/) for additional assistance.

## Question: I am seeing a notification “No new data in S3 Bucket for over 48 hours״.  

<img src="/eco/_media/faq-no-new-data-s3-bucket-48-hours.png" />

### Answer:

Please review the [Getting Started](https://docs.spot.io/eco/getting-started/connect-your-aws-account) documentation for Eco. Confirm the Cost and Usage report is still scheduled to create data within the bucket.

If this error persists, please contact [Spot support](https://spot.io/support/) for additional assistance.

## Question: I am seeing a notification “No CE Access".

<img src="/eco/_media/faq-no-ce-access.png" />

### Answer:

There are insufficient permissions to read CE data. Please review the Eco permissions policy in Spot’s public documentation.

If this error persists, please contact [Spot support](https://spot.io/support/) for additional assistance.

## Question: I am seeing a notification “We were not able to access data in the S3 bucket".

<img src="/eco/_media/faq-no-s3-bucket-48-hours.png" />

### Answer:

This is normal if the AWS CUR was only recently configured. If your CUR was configured more than 48 hours ago, please submit a support ticket.

Please contact [Spot support](https://spot.io/support/) for additional assistance.

## Question: I am seeing a notification “Failure to retrieve data from < bucket >. Last Successful sync is < insert last_cur_sync_timestamp >. Expecting parquet format.”

<img src="/eco/_media/faq-invalid-arn-not-parquet-format.png" />

### Answer:

Review [Getting Started](https://docs.spot.io/eco/getting-started/connect-your-aws-account) documentation. If needed, contact [Spot support](https://spot.io/support/) for additional assistance.  

## Question: No Data in Eco AWS Dashboard

Why don't I see data in my dashboard?

### Answer:

There are several reasons why data might not appear in the Eco AWS dashboard. Please check possibilities below.

- Data appears for the first time 48 hours after registration. If 48 hours have not passed yet, please try again when this period has finished.
- S3 bucket name is missing. Verify that the bucket name you inserted during your registration to Eco appears in the AWS Cost and Usage report list.

<img src="/eco/_media/troubleshooting-faq-01.png" />

- If data still does not appear, the IAMRole permissions may be missing or incorrect. Verify that your permissions are complete and the same as in the [Eco Policy](eco/tutorials/eco-policy/).
- If you have checked the items above and still cannot see data in your dashboard, please contact the Spot support team.

## Question: No Data in Eco Azure Dashboard

Why don't I see data in my dashboard?

### Answer:

Please contact the Spot support team, and the Eco team will invstigate.

## Question: Lease Renewal

What does the end date of a reservation mean in the context of renewal?

### Answer:

When a reservation expires, Eco first makes sure a renewal is the right course of action. If so, expired coverage will be replaced with the best commitment to provide a blend of flexibility and savings. When an expiration is renewed, a new lease ID will be created. Depending on the situation, an expired reservation may be renewed under different parameters, so do not be concerned if you do not see an exact match.

## Question: Elastigroup

Where can I learn about Elastigroup?

### Answer:

Review [Elastigroup documentation](https://docs.spot.io/elastigroup/).
