# MSP Enrollment

DRAFT VERSION

There are several use cases for MSP enrollment. This use case is for AWS MSPs with administrative access to their MPA.  

Thank you for your patience during this "design partner" phase. Some of the enrollment steps are manual. We are actively working to make this process a streamlined, self-service experience for future users.  

This procedure is for one MPA. If more than one MPA needs to be registered, this process will need to be repeated for each.

## Step 1. Sign up with Spot

Use the [registration procedure](https://console.spotinst.com/spt/auth/signUp) in Spot.

## Step 2. Connect your Master Payer Account
1. Complete this [procedure](https://docs.spot.io/cloud-analyzer/getting-started/connect-your-aws-master-payer-account-existing-customer).
2. Wait up to 48 hours for data generation. After that, Cloud Analyzer and a minimal, ECO dashboard will be available to you.
3. For full ECO, schedule a strategy call with Spot Cost specialists
   1. Convert to a paying, ECO customer by scheduling a strategy call.
   2. Four to six weeks of ‘Ramp Up’ to learn usage patterns, compare with AWS historical data, and start increasing coverage

## Step 3. Email conversations to configure your environment

### Subsets Capability

For "Subsets" capabilities (the ability to create groupings of customer accounts), wait until your data appears as expected then contact your account representative and ben.swoboda@netapp.com to request access to the feature. Include the accountIDs and the name of associated subset in your request.
   * If you want more than just Subsets and wish to also process custom billing rules, skip to step 4.b.
   * If you just want Subsets but no billing rules, send this information with your request:
     * The Account ID of your MPA.
     * The following table in .csv or .xlsx format. 

<img src="/design-documents/_media/msp-enrollment-01.png" width="321" height="114" />

### Set up your billing workflows

Let us know about the customer billing workflows you offer and the order in which you process billing. You may have one or more sets of billing workflows.  

Example Billing Workflow Name 1:

1. Replace RI Discount with Public on-demand price when Ris are puchased by <accountID>
2. Replace Savings Plan Discount  with Public on-demand price when Ris are puchased by <accountID>
3. Remove EDP Discount so it is not shared with customer
4. Uplift the price of all services by 3%

Example Billing Workflow Name 2:

1. Replace RI Discount with public on-demand price when Ris are purchased by any account
2. Replace free tier usage with the first, billable rate
3. Discount <serviceName> by 2% when the usage occurs on Tuesdays in any US-East data center in the summer months of an odd-numbered year.  (Yes, this is an absurd example, but the point is that you may have billing rules in mind which we may never have dreamed of.)  

### Associate Billing Workflows to Subsets

If you are comfortable with it, you may include this information with step four.  
1. Update your table with Subset Names and Billing Workflow Names

<img src="/design-documents/_media/msp-enrollment-02.png" width="464" height="114" />
 
2. Allow us approximately a week to configure this. We will ask for your review and approval.

### End Customer Association

Begin the process of [setting up your End Customer console](https://console.spotinst.com/spt/auth/signUp) by creating a distinct, Spot Organization for each End Customer.
1. Update the spreadsheet with the Spot Console email and the SPOT org ID. You can locate the org ID by clicking the "user" icon in the upper right-hand corner of the Spot console while logged into the org and then click "My Organization."

<img src="/design-documents/_media/msp-enrollment-03.png" width="517" height="115" />

2. Allow us approximately a week to configure this. We will ask for your review and approval.
