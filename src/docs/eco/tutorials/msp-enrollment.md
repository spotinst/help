# Eco Reports Enrollment

There are several use cases for Eco Reports enrollment. This use case is for AWS enterprises with administrative access to their Management Account.

Although some of the enrollment steps are manual, we are actively working to make this process a streamlined, self-service experience for future users.

This procedure is for one Management Account. If more than one needs to be registered, this process will need to be repeated for each.

## Step 1. Sign up with Spot

Use the [registration procedure](https://console.spotinst.com/spt/auth/signUp) in Spot.

## Step 2. Connect your Management Account

1. Complete this [procedure](https://docs.spot.io/eco/getting-started/connect-your-aws-account).
2. Wait up to 48 hours for data generation. After that, Cost Analysis and a minimal, Eco dashboard will be available to you.
3. For full Eco, schedule a strategy call with Spot Cost specialists
   1. Convert to a paying, Eco customer by scheduling a strategy call.
   2. Four to six weeks of ‘Ramp Up’ to learn usage patterns, compare with AWS historical data, and start increasing coverage

## Step 3. Enable Subsets Feature

Submit a ticket to have the Subsets feature enabled. Specifiy the organization ID in the ticket.

## Step 4. Create Subsets

Once the Subsets feature has been enabled, create your subsets as described in [Create a Subset](eco/tutorials/manage-subsets?id=create-a-subset).

## Step 5. Set up your Billing Workflows

Create your billing workflows as described in [Manage Workflows](eco/tutorials/manage-workflows).

## Step 6. Validate Your Workflow

Run reports on existing data sets in a variety of ways with [Workflow details reports](eco/tutorials/view-workflow-details).

## Step 7. Associate Billing Workflows to Subsets (Optional)

Once you have validated the billing workflows and are comfortable with them, you may want to us to process the workflows indefinitely and embed them in the Subsets List and Cost Analysis.

1. Send a support ticket associating the subsets with the billing workflows. In the ticket, please include the following message and information:

> For our Spot Organization ID \<OrgID\>, please associate the Eco Reports billing workflow(s), below, with the subset(s), going forward. We would like the processed workflow to be embedded in Cloud Analyzer and shown as charges in our Subsets List.
>
> \<Subset Name\> : \<Billing Workflow Name\>
>
> \<Subset Name\> : \<Billing Workflow Name\>

2. Allow us approximately four days for configuration and data refresh.

## Step 8. End-Customer Association (Optional)

1. Begin the process of [setting up your end-customer console](https://console.spotinst.com/spt/auth/signUp) by creating a distinct Spot Organization for each End Customer.
2. Send a support ticket with the Spot console email and the Spot organization ID. You can locate the organization ID by clicking the User icon in the upper right of the Spot console while logged into the organization, and then click My Organization. In the ticket, please include the following message and information:

> Please associate the following end-customer organizations with these subsets, going forward. We would like our end customers to be able to log into the Spot console. Once you have confirmed, we will create their users and manage access.
>
> \<Subset name\> : \<Spot console email\> : \<Spot Org ID\>
>
> \<Subset name\> : \<Spot console email\> : \<Spot Org ID\>
