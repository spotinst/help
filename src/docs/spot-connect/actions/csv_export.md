# CSV Export 

The CSV Export node allows data in the form of JSON Maplist to be passed into the node, along with a destination S3 bucket.  

CSV Export is a utility node which can accept inbound data as JSON Maplist. If this data is successfully converted to a CSV file, using the standard Python csv module, it creates a CSV file with a unique name that is generated during run-time, followed by its upload to the destination S3 bucket.  

It subsequently returns this S3 bucket along with the actual key (CSV File name) to the caller workflow. 

CSV Export in a Spot Connect workflow enables you to: 

* export raw tabular data coming from another source as CSV. 
* perform simple conversion of JSON Maplist to CSV. 
* upload the converted data into a S3 bucket which can then be accessed from subsequent steps. 

## Configure CSV Export in Spot Connect 

From the workflow builder in the left panel, drag and drop the CSV Export node in the workflow editor.  

Details needed to set up a CSV Export node in Spot Connect: 

|       Parameter  |                                                         Description                                                    |      Required  |   |
|------------------|:----------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Input Data  |     Inbound data in the form of JSON Maplist, which may be fed manually, or from one of the last steps of a workflow.  |     True       |   |
|      S3 Bucket   |     The destination S3 bucket where the output CSV would be placed.                                                    |     True       |   |

<img width="1133" alt="csv-1" src="https://github.com/spotinst/help/assets/106514736/e55ebf38-c84e-4e76-a3f2-860b8fb0b25c">

CSV Export node in action, with the input data fetched from the last step.  

<img width="450" alt="csv-2" src="https://github.com/spotinst/help/assets/106514736/14e471e7-7790-40e9-878c-eb6782835522">

###  Sample JSON Maplist Data 

When the execution is complete, the output of the node can be found in the Executions page. 

1. In the left main menu, click Connect and Executions.  
2. Click **Executions** and **Execution Detail <Workflow Name: Version>**.  
3. Click the **Outputs** tab.  

<img width="1222" alt="csv-3" src="https://github.com/spotinst/help/assets/106514736/3cb069d7-b42d-4656-9219-9dcdcceb83e6">
