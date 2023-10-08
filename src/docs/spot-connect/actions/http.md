# HTTP Send Request  

The HTTP Send Request node sends a request to the provided URL with available HTTP request options. Use this operation to send an HTTP request to your services. 

The HTTP Send Request enables functionality to send requests to a provided endpoint. You can use it to build more complex use cases that require triggering to an external service based on a condition. You can also use it to send generalized information from between the workflow execution steps to an outside service.  

Insert a HTTP Send Request node into your workflow. In the right panel, you can enter the URL and http method. You can also add the optional fields listed in the panel below and add it to the node. The output of the http request can also be saved inside an S3 bucket and its value can be passed in the options panel. 

#### Input 

|       Parameter Name     |                                    Description                                |      Required  |   |
|--------------------------|:-----------------------------------------------------------------------------:|:--------------:|---|
|      Url                 |     Url of the endpoint where you want to send a request.                     |     True       |   |
|      Http Method         |     HTTP method to choose from GET,PUT,POST,DELETE                            |     True       |   |
|      Authorization Type  |     If the request needs to be authenticated provide authenticate mechanism.  |     False      |   |
|      Request Headers     |     If additional headers are required to perform the request.                |     False      |   |
|      Query Parameters    |     Query parameters passed with the request.                                 |     False      |   |
|      CA Cert             |     Server Cert File                                                          |     False      |   |
|      Timeout             |     Request timeout in ms.                                                    |     False      |   |
|      Body                |     Request body if you want to send payload.                                 |     False      |   |
|      s3_bucket           |     S3 bucket where to upload the response data.                              |     False      |   |
|      alias               |     AWS account alias which has access to the s3 bucket.                      |     False      |   | 

#### Output

|       Parameter Name      |         Type    |                         Description                    |   |
|---------------------------|:---------------:|:------------------------------------------------------:|---|
|      json_resp            |     Object      |     Response of request in json format.                |   |
|      html_resp            |     String      |     Response of request.                               |   |
|      bucket_keys          |     StringList  |                                                        |   |
|      is_result_truncated  |     Boolean     |                                                        |   |
|      s3_bucket            |     String      |     Bucket where the output of the request is stored.  |   |
|      url                  |     String      |     Url to which the http request is made.             |   |
|      elapsed_time_ms      |     Integer     |     Time in ms taken to perform the request.           |   |
|      http_status_code     |     Integer     |     Http status code of the response.                  |   |
|      execution_status     |     String      |     Status of run (ie: S_OK / E_FAIL)                  |   |
|                           |                 |                                                        |   |

The output for the Http Send Request node is a JSON dict and has the values that are listed above inside of it. These can be used as input to the next node in your workflow. 

#### HTTP Send Request Example 

1. Create a new workflow and give it a name. 
2. From the workflow builder in the left panel, drag and drop the HTTP Send Request node in the workflow builder. 

![http-send-rq-1](https://github.com/spotinst/help/assets/106514736/e1840c5d-ecf4-4204-8ef6-7462daa363f2)

3. Enter the URL in which you want to create the HTTP request. Select the appropriate HTTP method and the authentication type. 

![http-send-rq-2](https://github.com/spotinst/help/assets/106514736/4c84b529-ccee-4962-a2dd-0b4155a6be56)

4. You can save the workflow by clicking Save Workflow in the top right corner. 
5. Click **Run Now** in the top left corner, to execute the workflow. 
6. On the Execution Details page, click the HTTP node to see the execution output. 

![http-send-rq-3](https://github.com/spotinst/help/assets/106514736/ecc48a60-6400-4c71-a731-97f4135fa4c0)

7. On the Execution Step Detail page, click the **Outputs** tab in the Execution step details to see the output of the http request.

![http-send-rq-4](https://github.com/spotinst/help/assets/106514736/d2154bfc-beb0-4e04-af25-a560cc370c4e)
