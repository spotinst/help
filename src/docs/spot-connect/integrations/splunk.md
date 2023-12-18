# Splunk

This integration assists you in retrieving data and enables Splunk in your automation workflows. 

Splunk in a Spot Connect workflow enables you to: 
* Retrieve data from Splunk based on a query described. 
* Connect the data to other workflow steps involving third-party integrations. 

## Configure Splunk in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Splunk**. 
3. Configure a new integration instance with the information below.

Details needed to set up a Splunk instance in Spot Connect: 

|       Parameter         |                   Description              |      Required  |
|-------------------------|:------------------------------------------:|:--------------:|
|      Integration Alias  |     A name for the integration instance    |     True       |
|      Splunk URL         |     URL of the Splunk Cloud                |     True       |
|      Access Token       |     Token used to access the Splunk Cloud  |     True       |

Follow the steps below to integrate your Splunk instance with Spot Connect: 

1. Enter the URL of your Splunk Cloud instance in the Splunk URL field in Spot Connect in the following format: **<yoursubdomain>.splunkcloud.com**. Do not add **https://** or **http://** at the beginning. 
2. Generate an access token by following instructions from Splunk Cloud documentation [Create authentication tokens - Splunk Documentation](https://docs.splunk.com/Documentation/SplunkCloud/latest/Security/CreateAuthTokens). Then enter the access token in the Access Token field.

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow.  

* [Splunk Search](spot-connect/integrations/splunk?id=splunk-search) 

### Splunk Search 

This action performs a search query on Splunk Service. 

#### Input 

|       Parameter       |                                 Description                             |      Required  |
|-----------------------|:-----------------------------------------------------------------------:|:--------------:|
|      Splunk Instance  |     Select a Splunk integration instance configured in Spot Connect     |     True       |
|      Search Query     |     Splunk query string to be executed during the run                   |     True       |
|      S3 Bucket        |     Name of the S3 bucket where the entire query result can be written  |     False      |

#### Output  

|       Parameter           |       Type   |                                   Description                               |
|---------------------------|:------------:|:---------------------------------------------------------------------------:|
|      result               |     String   |     String representation of a JSON payload consisting of the query result  |
|      is_result_truncated  |     Boolean  |     Is the result truncated                                                 |
|      result_bucket_key    |     String   |     Object path in the S3 bucket                                            |
|      s3_bucket            |     String   |     It shows the bucket name where the output is stored                     |
|      execution_status     |     String   |     The current status of the incident                                      |


#### Action Example 

Drag and drop the Splunk Search action node onto the center panel and enter all necessary parameters. Save and run the workflow. 

#### Input 

![splunk-1](https://github.com/spotinst/help/assets/106514736/34a3c288-0ef8-4bc9-9301-23b836e00b6b)

#### Output 

![splunk-2](https://github.com/spotinst/help/assets/106514736/91132410-d49e-492d-a90b-f353d911c880)


  

 
