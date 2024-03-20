# Twilio

The Twilio integration can be used to send text messages to your team and provides web service APIs for various communication functions such as make/receive phone calls, send/receive text messages etc. 

The integration between Spot Connect and Twilio enables you to send tailor-made text messages from Spot Connect workflows to recipients. 

## Configure Twilio in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Twilio**.   
3. Configure a new integration instance with the information below. 

Details needed to set up a Twilio instance in Spot Connect: 

|       Parameter          |                      Description                 |      Required  |
|--------------------------|:------------------------------------------------:|:--------------:|
|      Integration Alias   |     A name for the integration instance          |     True       |
|      Twilio Account Sid  |     Account ID from the Twilio dashboard         |     True       |
|      Twilio Auth Token   |     Authentication token for the Twilio account  |     True       |

4. Click **Add Instance**. 

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Twilio Send SMS](spot-connect/integrations/twilio?id=twilio-send-sms) 

### Twilio Send SMS 

Send a text message to a list of recipients' phone numbers. The text message content can be hardcoded in the workflow, or it can be set during workflow execution with output from a previous workflow step. 

#### Input 

|       Parameter          |                                      Description                                  |      Required  |
|--------------------------|:---------------------------------------------------------------------------------:|:--------------:|
|      Twilio Instance     |     Select a Twilio integration instance configured in Spot Connect               |     True       |
|      Sender Number       |     This is the Send From phone number                                            |     True       |
|      Recipients Numbers  |     List of phone numbers for recipients, in the format <ISD Code><Phone Number>  |     True       |
|      Message             |     Actual content of the text message                                            |     True       |

#### Output 

|       Parameter        |       Type  |            Description        |
|------------------------|:-----------:|:-----------------------------:|
|      execution_status  |     String  |     Snippet execution status  |

#### Action Example 

#### Input 

![twilio-1](https://github.com/spotinst/help/assets/106514736/6b3b404b-b8a9-4497-b59c-878c22caa41e)

<img width="1139" alt="twilio-2" src="https://github.com/spotinst/help/assets/106514736/cc22b72d-3745-4314-9ac5-a1863f74ee92">

#### Output 

<img width="1139" alt="twilio-3" src="https://github.com/spotinst/help/assets/106514736/e32c38de-309b-4797-9bd7-32f079ada1e9">
