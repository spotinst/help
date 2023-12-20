# Sumo Logic

Sumo Logic is a cloud data analytics platform focused on security, operations, and business intelligence use cases.   

Sumo Logic in a Spot Connect workflow enables you to search log data based on query described in Sumo Logic [query syntax](https://help.sumologic.com/docs/search/search-query-language/). 

## Configure Sumo Logic in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Sumo Logic**. 
3. Configure a new integration instance with the information below. 

Details needed to set up a Sumo Logic instance in Spot Connect: 

Follow the steps below in your Sumo Logic Account and get the desired parameters to enter in the Spot Connect console. 

1. Log in to your Sumo Logic Account and click your name (bottom left side).  
2. Click **Administration** and then **Security**.

![sumo-logic-1](https://github.com/spotinst/help/assets/106514736/fc110a29-72ed-4b2d-bdda-bdc2ef5a5ad6)

3. Click **Add Access Key** and enter the Access Key name. 

![sumo-logic-2](https://github.com/spotinst/help/assets/106514736/d9b4fd24-9116-495e-82df-2781a63b7733)

4. Click **Save**. 

![sumo-logic-3](https://github.com/spotinst/help/assets/106514736/73626e54-7f38-44d9-afa5-c72c10548872)

#### In Spot Connect 

1. Copy the Sumo Logic Access ID and paste it into the Sumo Logic Access ID field. 
2. Copy the Sumo Logic Access Key and paste it into the Sumo Logic Access Key field. 

|       Parameter             |                         Description                     |      Required  |
|-----------------------------|:-------------------------------------------------------:|:--------------:|
|      Integration Alias      |     A name for the integration instance                 |     True       |
|      Sumo Logic Access Id   |     Unique access_id to access your Sumo Logic account  |     True       |
|      Sumo Logic Access Key  |     API key for authorization                           |     True       | 

## Integration Actions  

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Sumo Logic Search](spot-connect/integrations/sumologic?id=sumo-logic-search) 

### Sumo Logic Search 

This action performs a search query on Sumo Logic. 

#### Input

|       Parameter           |                                  Description                             |      Required  |
|---------------------------|:------------------------------------------------------------------------:|:--------------:|
|      Sumo Logic Instance  |     Select a Sumo Logic integration instance configured in Spot Connect  |     True       |
|      Query                |     Search query to perform in Sumo Logic service                        |     True       |
|      From Time            |     Time from where search should start                                  |     True       |
|      To Time              |     Time till where search should be performed                           |     True       |
|      S3 Bucket            |     An S3 bucket to store the query and result.                          |     False      |

#### Output

|       Parameter           |       Type   |                          Description                     |
|---------------------------|:------------:|:--------------------------------------------------------:|
|      result               |     Object   |     Result of search run                                 |
|      is_result_truncated  |     Boolean  |     Is the result truncated                              |
|      result_bucket_key    |     String   |     Object path in the bucket                            |
|      s3_bucket            |     String   |     It shows the bucket name where the output is stored  |
|      execution_status     |     String   |     The current status of the incident                   |

#### Action Example 

From the left panel, drag and drop the Sumo Logic Search action node in the workflow builder. Configure the necessary parameters and save your workflow. During the workflow execution, downstream action nodes in the workflow can be designed to take action on data returned from the Sumo Logic Search action node. 

<img width="1789" alt="sumo-logic-4" src="https://github.com/spotinst/help/assets/106514736/aa83a14f-f6ac-46e0-869d-69f0dc44f05a">
