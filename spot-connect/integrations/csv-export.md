CSV Export 

CSV Export snippet allows data in the form of JSON Maplist to be passed into the snippet, along with a destination S3 bucket.  

 

CSV Export is a utility snippet which can accept inbound data as JSON Maplist. If this data is successfully converted to a CSV file, using the standard Python csv module, it creates a CSV file with a unique name that is generated during run-time, followed by its upload to the destination S3 bucket.  

It subsequently returns this S3 bucket along with the actual key (CSV File name) to the caller workflow. 

 

CSV Export in a Spot Connect workflow lets you: 

export raw tabular data coming from another source as CSV. 

perform simple conversion of JSON Maplist to CSV. 

upload the converted data into a S3 bucket which can then be accessed from subsequent steps. 

Configure CSV Export in Spot Connect 

In the workflow editor/pallette, drop the CSV Export snippet 

Details needed to set up a CSV Export snippet in Spot Connect: 

Parameter 

Description 

Required 

Input Data 

Inbound data in the form of JSON Maplist, which may be fed manually, or from one of the last steps of a workflow. 

True 

S3 Bucket 

The destination S3 bucket where the output CSV would be placed. 

True 

 

CSV Export snippet in action, with Input Data fetched from the last step.  

 

 

Sample JSON Maplist Data 

When the execution is complete, the output of the snippet can be found in the Executions page. 

Click Execution Detail ...  

 

Executions > Execution Detail <Workflow Name: Version> > Step > Step ID - CSV Export > Outputs 

 

 
