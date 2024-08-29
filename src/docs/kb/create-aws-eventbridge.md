<meta name="robots" content="noindex">

# Create AWS EventBridge

## Introduction

Normally, the Spot platform checks every 30 seconds to see if an instance is marked for an interruption.

You can use AWS EventBridge to send spot interruption warnings to the Spot platform in real time. These warnings are pushed by AWS at an account level and are region-specific. You'll need to set up notifications for each account and region.

## Instructions

Your existing EventBridge can be disconnected for a number of reasons. For example, it may be due to momentary issues or incidents with one of the services (such as <font color='#7632FE'>user management service ##this was UMS##</font>).

1. In your AWS console for the EventBridge page, make sure the EventBridge status is <i>Inactive</i>.
2. Reestablish the connection:
   <ol style="list-style-type: lower-alpha;">
     <li>Open your AWS console and select the region.</li>
     <li>Go to the AWS CloudFormation service.</li>
     <li>Create a stack with new resources.</li>
     <li>Select create from an S3 URL and use this template URL: https://spotinst-public.s3.amazonaws.com/assets/cloudformation/templates/spot-interruption-notification-event-bridge-template.json.</li>
     <li>Click <b>Next</b>.</li>
     <li>Fill in the stack name, spot account ID, and Spot token, then click <b>Next</b>.</li>
     <li>Repeat for every active region or create a StackSet with multiple regions.</li>
   </ol>

<font color='#7632FE'>Should the rest of this be in the customer-facing article??</font>
https://support.spot.io/hc/en-us/articles/13175145326749-How-to-create-AWS-EventBridge

1. Manual configuration
   Create Rule
   
   Rule detail

   Rule type – choose “Rule with event pattern”.

3. Build event pattern
   Event source – Choose “AWS events or EventBridge partner events”

   Sample event (Optional) – Choose “AWS event”


   Event pattern

   Event source – choose “AWS service”

   AWS service – choose “EC2”

   Event type – Choose “EC2 Spot Instance Interruption Warning”

5. Target

   Target types

   Choose “EventBridge API destination

   Choose “Create a new API destination”

   Name + description – free text



   API destination

   API destination endpoint = https://api.spotinst.io/aws/ec2/instance/interruptionNotification

   HTTP method – POST



   Connection

   Choose “Create a new connection”

   Connection name + description – free text

   Destination type – choose “Other”

   Authorization type – choose “API Key”



   API key

   API key name = “Authorization”, Value = “Bearer <Account_Token>”

   (Note - The account token should be generated from a user within the account that you are implementing EventBridge in and it can not be with a "Viewer" role since it must have at least "elastigroup:createInstanceinterruptionNotification" permission, "editor" role is sufficient)

   Invocation HTTP parameters

   Parameter – choose “Query string” from the drop-down menu

   Key – “accountId” value - <CUSTOMER_SPOT_ACCOUNT_ID>


Next, we need to do the following action on our end:

1. Contact the SRE team to enable monitoring and provide them with the following details - 
   
   Account ID

   Region

2. Verify that the following FF is enabled -
   'aws-detach-instances-that-got-interruption-notification'

   To make sure the EventBridge integration is working well, you can check the Kibana and DB -

   Kibana - 'Optimizer' -

   "606079873399" AND "/interruptionNotification" AND "act-d7320fba"

   DB -  'aws_ec2_events' --> Look for 'spot-interruption-notification' in the value column.

</font>
