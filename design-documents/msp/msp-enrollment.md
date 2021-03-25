<meta name="robots" content="noindex">

# MSP Enrollment

BETA RELEASE

There are several use cases for MSP enrollment. This use case is for AWS MSPs with administrative access to their MPA.

Thank you for your patience during this "beta" phase. Some of the enrollment steps are manual. We are actively working to make this process a streamlined, self-service experience for future users.

This procedure is for one MPA. If more than one MPA needs to be registered, this process will need to be repeated for each.

## Step 1. Sign up with Spot

Use the [registration procedure](https://console.spotinst.com/spt/auth/signUp) in Spot.

## Step 2. Connect your Management Account

1. Complete this [procedure](https://docs.spot.io/cloud-analyzer/getting-started/connect-your-aws-master-payer-account-existing-customer).
2. Wait up to 48 hours for data generation. After that, Cloud Analyzer and a minimal, ECO dashboard will be available to you.
3. For full ECO, schedule a strategy call with Spot Cost specialists
   1. Convert to a paying, ECO customer by scheduling a strategy call.
   2. Four to six weeks of ‘Ramp Up’ to learn usage patterns, compare with AWS historical data, and start increasing coverage

## Step 3. Enable Subsets Feature

Contact your Spot representative to have the Subsets feature enabled.

## Step 4. Create Subsets

Once the Subsets feature has been enabled, create your subsets as described in [Create a Subset](cloud-analyzer/tutorials/manage-subsets?id=create-a-subset).

## Step 5. Set up your Billing Workflows

Contact your account representative and ben.swoboda@netapp.com to let us know about the customer billing workflows you offer and the order in which you process billing. You may have one or more sets of billing workflows.

Example Billing Workflow Name 1:

1. Replace RI Discount with Public on-demand price when RIs are puchased by <accountID>
2. Replace Savings Plan Discount with Public on-demand price when RIs are puchased by <accountID>
3. Remove EDP Discount so it is not shared with customer
4. Uplift the price of all services by 3%

Example Billing Workflow Name 2:

1. Replace RI Discount with public on-demand price when Ris are purchased by any account
2. Replace free tier usage with the first billable rate
3. Discount <serviceName> by 2% when the usage occurs on Tuesdays in any US-East data center in the summer months of an odd-numbered year. (This is an unusual example, but you may have billing rules in mind which we may have never dreamed of.)

## Step 6. Associate Billing Workflows to Subsets

1. Send email with spreadsheet associating the subsets with Billing Workflows. 

<img src="/design-documents/_media/msp-enrollment-02a.png" />
 

2. Allow us approximately a week to configure this. We will ask for your review and approval.

## Step 7. End-Customer Association

Begin the process of [setting up your End Customer console](https://console.spotinst.com/spt/auth/signUp) by creating a distinct, Spot Organization for each End Customer.

1. Update the spreadsheet with the Spot console email and the Spot org ID. You can locate the org ID by clicking the "user" icon in the upper right corner of the Spot console while logged into the org and then click "My Organization."

<img src="/design-documents/_media/msp-enrollment-03a.png" />

2. Allow us approximately a week to configure this. We will ask for your review and approval.
