# Elasticsearch

Elasticsearch is a tool that is used for full-text search and analytics. It is widely used as an open-source logging database and offers real-time, distributed, and analytics capabilities. It is a highly scalable document storage engine, that stores data in document format, and allows users to perform advanced queries for detailed analysis. The integration of Elasticsearch with Spot Connect provides you with the ability to interact with data in Elasticsearch within their automation workflows, utilizing the search API. 

The integration between Spot Connect and Elasticsearch enables you to use the search action – it returns search requests that match the query defined in the request. You can provide search queries using the [query string parameter](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html#search-api-query-params-q) or [request body](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html). 

## Configure Elasticsearch in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Elasticsearch**.   
3. Configure a new integration instance with the information below. 

Details needed to set up an Elasticsearch integration instance in Spot Connect: 

|       Parameter                   |                                       Description                                  |      Required  |
|-----------------------------------|:----------------------------------------------------------------------------------:|:--------------:|
|      Integration Alias            |     Name for an Elasticsearch integration instance                                 |     True       |
|      Elasticsearch Cloud Id       |     Unique Id to configure your client to work with your Elastic Cloud deployment  |     True       |
|      Elasticsearch API key Id     |     Elasticsearch API key id                                                       |     True       |
|      Elasticsearch API key value  |     Elasticsearch API key value                                                    |     True       |

Follow the steps listed below in your Elasticsearch Account and get the desired parameters to enter in Spot Connect. 

1. Login to your Elasticsearch cloud. 

![elasticsearch-1](https://github.com/spotinst/help/assets/106514736/79260317-fa6b-465d-8316-f94f23941939)

2. Open your created deployment (eg: sample_deploy) that you want to integrate. 
3. In the left menu, click **Management** and then click **Dev Tools**. 
4. Run the following query and copy the output: 

```json
POST /_security/api_key
{
  "name": "spotconnect_api_key",
  "role_descriptors": {
    "role1": {
      "indices": [
        {
          "names": [
            "*"
          ],
          "privileges": [
            "read"
          ]
        }
      ]
    }
  }
}
```
 
The output should be: 

```json
{
  "id": "HxRjM4wBFbfDSJb",
  "name": "spotconnect_api_key",
  "api_key": "Uu0nmfAWSJWZ",
  "encoded": "SHhSak00d0JGYmZEU0piOF9"
}
```

5. Copy the value of `id` and enter it in the `Elasticsearch API key id` field. Copy value of `api_key` and enter it in the `Elastic Search API key value` field. 

## Integration Actions 

You can add these actions in the Spot Connect workflow builder, as part of your workflow.  

* [Elasticsearch Search](spot-connect/integrations/elasticsearch?id=elasticsearch-search) 

### Elasticsearch Search 

Use this action to perform an Elasticsearch Search. 

#### Input 

|       Parameter Name         |                              Description                          |      Required  |
|------------------------------|:-----------------------------------------------------------------:|:--------------:|
|      Elasticsearch Instance  |     Select an Elasticsearch integration instance                  |     True       |
|      Index                   |     Elasticsearch index where query to be performed               |     True       |
|      Query                   |     Search query to be run on the given index                     |     True       |
|      S3 Bucket               |     S3 bucket name where query and result would be stored         |     False      |
|      Offset                  |     Offset of query result                                        |     False      |
|      Limit                   |     Limit of query result                                         |     False      |
|      Timeout                 |     Time in seconds to timeout the search query (Default: 300 s)  |     False      |

#### Output 

|       Parameter Name      |       Type   |                               Description                          |
|---------------------------|:------------:|:------------------------------------------------------------------:|
|      result               |     Object   |     Query result                                                   |
|      is_result_truncated  |     Boolean  |     Boolean value which denotes if the result is truncated or not  |
|      result_bucket_key    |     String   |     Name of the file where result is written                       |
|      s3_bucket            |     String   |     Name of the bucket                                             |
|      execution_status     |     String   |     Status of run (ie: S_OK / E_FAIL)                              |

> **Note**: The Spot Connect workflow execution engine has a limit for the response object size of about 100 KB. If the query has a result greater than this value, then a truncated result would be returned. If the S3 Bucket name is provided, then the whole result would be written in the bucket. 

#### Action Example 

#### Input 

![elasticsearch-2](https://github.com/spotinst/help/assets/106514736/34d03041-84e1-4128-950c-a6bfc9fcc3f8)

#### Output 

![elasticsearch-3](https://github.com/spotinst/help/assets/106514736/c8afd299-e880-4c17-af66-c54922e93c49)

![elasticsearch-4](https://github.com/spotinst/help/assets/106514736/a9cb13b0-4a01-42b0-abc6-fd03cd373c41)


 

 
