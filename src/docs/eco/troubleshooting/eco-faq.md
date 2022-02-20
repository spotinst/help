# Eco FAQ

## Question: Savings Calculation

When I purchase reserved instances, how are savings calculated?

### Answer:

The savings calculation of reserved instances works as follows:

ECO gathers data about all of your instances before you are using reserved instances.
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

Does Eco also recommend spot instances in the projected savings?

### Answer:

Eco is a tool for management and optimization of reserved instances. The projected savings by using Eco relates only to reserved instances. We suggest using Eco for managing the reserved instances in your organization, while using Elastigroup or Ocean to optimize the combined use of spot and reserved instances in the workload.

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
