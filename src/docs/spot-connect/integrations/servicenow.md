<meta name="robots" content="noindex">

# ServiceNow

Use the ServiceNow integration to streamline your incidents and respond to them automatically.

The ServiceNow integration is intended for users who have ServiceNow set up as an IT Service Management/Ticket Management system.

A lot of IT teams or cloud teams use ServiceNow as a single pane of glass for their Incident Management.

With this integration, we have covered most of the incident-related functionalities.

The integration between Spot Connect and ServiceNow lets you:
* Trigger a workflow in Spot Connect, Ingest incidents as a trigger to Spot Connect workflows. (Fetch ServiceNow incidents into Spot Connect)
* ServiceNow Create Incident - Create a new ServiceNow Incident
* ServiceNow Delete Incident - Delete a specific ServiceNow Incident
* ServiceNow Search Incidents - Get the incident list according to the supplied query
* ServiceNow Update Incident - Update a specific ServiceNow Incident

## Configure ServiceNow in Spot Connect

1. In ServiceNow, [create a user](https://docs.servicenow.com/bundle/xanadu-customer-service-management/page/administer/users-and-groups/task/t_CreateAUser.html):
    * Make sure **Password needs reset** is <i>not</i> selected
    * Make sure **Locked out** is <i>not</i> selected
    * Select: Active
    * You can select **Web service access only** to make this user a non-interactive user
2. In the Spot Console, go to **Connect** > **Settings** > **Integrations**.
5. Click  **ServiceNow** > **Add Integration**.
6. Enter your ServiceNow instance URL. For example, `https://dev12345.service-now.com`.
7. Enter the username and password for the ServiceNow user you created.
8. Click **Add Instance**.

## Integration Action: ServiceNow Create

Creates a new incident in ServiceNow.

#### Input

| Parameter Name      | Description                                                    | Required |
|---------------------|----------------------------------------------------------------|----------|
| ServiceNow Instance | The name of the ServiceNow Integration                         | Required |
| Table               | The name of the table to update (e.g. “incident”)              | Required |
| Caller              | The user creating the incident.                                | Required |
| Short Description   | The title or brief description of the incident.                | Required |
| Urgency             | How long an incident can be delayed before significant impact. | Optional |
| Severity            | How severe the incident.                                       | Optional |
| Assigned To         | The ServiceNow user assigned to the incident.                  | Optional |
| Category            | ServiceNow configurable category field.                        | Optional |
| Description         | A longer description of the incident.                          | Optional |
| Due Date            | The date the incident is due.                                  | Optional |
| Made Sla            | Boolean if the SLA was honored.                                | Optional |
| Incident State      | The current state of the incident.                             | Optional |
| Impact              | ServiceNow configurable Impact field value.                    | Optional |
| Number              | System generated unique incident number.                       | Optional |
| Priority            | The priority of the incident.                                  | Optional |
| Template            | The ID of a template to use to create the incident.            | Optional |
| State               | The current state of the incident.                             | Optional |

#### Output

| Parameter Name   | Type   | Description                            |
|------------------|--------|----------------------------------------|
| output           | Object | JSON of the newly created incident.    |
| execution_status | String | S_OK if successful, E_FAIL if errored. |

## Integration Action: ServiceNow Delete

Delete an incident in ServiceNow.

#### Input

| Parameter Name      | Description                                             | Required |
|---------------------|---------------------------------------------------------|----------|
| ServiceNow Instance | The name of the ServiceNow Integration.                 | Required |
| Sys id              | The ID of the incident to delete.                       | Required |
| Table               | The ServiceNow table to delete from. (e.g. “incidents”) | Required |

#### Output

| Parameter name   | Type   | Description                                             |
|------------------|--------|---------------------------------------------------------|
| result           | Object | JSON response to the delete call.                       |
| execution_status | String | S_OK if successful, E_FAIL if an error was encountered. |

## Integration Action: ServiceNow Search

Return the results of a ServiceNow query. You can save the non-truncated results to an S3 bucket.

ServiceNow [operators available for filters and queries](https://docs.servicenow.com/bundle/xanadu-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html).

#### Input

| Parameter Name      | Description                                    | Required |
|---------------------|------------------------------------------------|----------|
| ServiceNow Instance | The name of the ServiceNow Integration.        | Required |
| Query               | Query formatted per ServiceNow query syntax.   | Required |
| Table               | The ServiceNow table to run the query against. | Required |
| S3 Bucket           | S3 bucket to save the full result list.        | Optional |

#### Output

| Parameter Name      | Type        | Description                                                                                 |
|---------------------|-------------|---------------------------------------------------------------------------------------------|
| result              | JSON object | The output of the query.                                                                    |
| is_result_truncated | Boolean     | If the result is too large (>~100k) the results will be truncated to the first 5 incidents. |
| result_bucket_key   | String      | If an S3 bucket is specified, the path to the data.                                         |
| s3_bucket           | String      | The bucket specified in the input.                                                          |
| execution_status    | String      | S_OK if successful, E_FAIL if an error was encountered.                                     |

## Integration Action: ServiceNow Update

Update an incident in ServiceNow.

### Input

| Parameter Name      | Description                                                      | Required |
|---------------------|------------------------------------------------------------------|----------|
| ServiceNow Instance | The name of the ServiceNow Integration.                          | Required |
| Table               | The ServiceNow table to update.                                  | Required |
| Sys Id              | The ID of the incident to update                                 | Required |
| Short Description   | The title or brief description of the incident.                  | Required |
| Urgency             | How long an incident can be delayed before   significant impact. | Optional |
| Severity            | How severe the incident.                                         | Optional |
| Assigned To         | The ServiceNow user assigned to the incident.                    | Optional |
| Caller Id           | The ServiceNow ID of the person submitting the   incident.       | Optional |
| Category            | ServiceNow configurable category field.                          | Optional |
| Description         | A longer description of the incident.                            | Optional |
| Due Date            | The date the incident is due.                                    | Optional |
| Made Sla            | Boolean indicating if the SLA was honored.                       | Optional |
| Incident State      | The current state of the incident.                               | Optional |
| Number              | System generated unique incident number.                         | Optional |
| Priority            | The priority of the incident.                                    | Optional |
| Template            | The ID of a template to use to create the incident.              | Optional |
| State               | The current state of the incident.                               | Optional |
| Caller              | The name of the person submitting the incident.                  | Optional |

### Output

| Parameter Name   | Type        | Description                                             |
|------------------|-------------|---------------------------------------------------------|
| result           | JSON Object | The updated incident                                    |
| execution_status | String      | S_OK if successful, E_FAIL if an error was encountered. |


## Integration Action: ​ServiceNow Webhook Trigger

The integration node triggers the automatic execution of a workflow from a selected ServiceNow Category.

1. [Create an API key](spot-connect/integrations/apikeys) to use for ServiceNow webhooks.
2. In the Spot console, select **Connect** > **Workflows**.
3. Click **New Workflow** and enter a name for the workflow.
4. Select trigger type **ServiceNow** > **Create Workflow**.

   <details>
   <summary markdown="span">View image</summary>
   <img width=900 src="https://github.com/user-attachments/assets/8ae3f041-326d-49dd-a35d-cf5457443556" />

   </details>

5. In the center panel of the workflow builder, click the ServiceNow trigger node to open the right panel.
6. In the **Webhook API Key Name**, select the API key you created earlier.  
7. Compose your workflow and save it.
8. In the workflow builder, copy the **Webhook API Key Value** and the **Workflow Webhook URL**. When you configure the third-party application, use those saved values.

#### Setting up Webhook Trigger Action for ServiceNow

1. [Create an outbound REST message](https://developer.servicenow.com/dev.do#!/learn/learning-plans/xanadu/servicenow_application_developer/app_store_learnv2_rest_xanadu_creating_an_outbound_rest_message) in ServiceNow:
   * Paste the <i>webhook API key value</i> in the **Endpoint**.
   * Set **Authentication** to <i>No Authentication</i>.

2. Reopen the REST message.
3. Create an [HTTP method](https://developer.servicenow.com/dev.do#!/learn/learning-plans/xanadu/servicenow_application_developer/app_store_learnv2_rest_xanadu_http_methods) in ServiceNow:
   * Name it **POSTCall**
   * Select **HTTP method** <i>POST</i>
   * In **HTTP Request**, add these to the headers:
      * **x-api-key**: paste the <i>webhook API key value</i>
      * **accept**: <i>application/json</i>
      * **content-type**: <i>application/json</i>
   * In **Content**, paste in the sample JSON and add the fields from the incident table:
      ````json
      {
        "sys_id":"${sys_id}",
        "number":"${number}",
        "short_description": "${short_description}",
        "urgency": "${urgency}",
        "description": "${description}",
        "impact": "${impact}",
        "state": "${state}",
        "instance_id":"${instance_id}"
       }
      ````

4. Reopen the HTTP method.
5. In **Related Links**, click **Auto-generate variables** > **Update**.
6. Go to **Business Rules** > **New**.
7. Enter a name and select a table.
8. Select **Active** > **Advanced**.
9. Enter this sample script and edit it to include your fields. Make sure:
    * **YourOutboundRestCall** is the name you gave in the outbound REST call
    * **sn_ws.RESTMessageV2()** is the name of your HTTP method

    ````javascript
    (function executeRule(current, previous /*null when async*/ ) {
    // Add your code here
    function jsonEncode(str) {
        str = new JSON().encode(str);
        return str.substring(1, str.length - 1);
    }

    try {
        var r = new sn_ws.RESTMessageV2('YourOutboundRestCall', 'POSTCall');
        r.setStringParameter("sys_id", current.sys_id);
        r.setStringParameter("number", current.number);
        r.setStringParameter("short_description", current.short_description);
        r.setStringParameter("urgency", current.urgency);
        r.setStringParameter("description", jsonEncode(current.description + ''));
        r.setStringParameter("impact", current.impact);
        r.setStringParameter("state", current.state);
        r.setStringParameter("instance_id", gs.getProperty("instance_name"));
        
        var response = r.execute();
        var responseBody = response.getBody();
        var httpStatus = response.getStatusCode();
        gs.log("getBody: " + response.getBody());
        gs.log("getStatusCode: " + response.getStatusCode());
        gs.log("getHeaders " + response.getHeaders());
    } catch (ex) {
        var message = ex.message;
    }
   })(current, previous);
 
   ````
11. On When to Run, select **After** > **Insert**.
12. Click **Submit**.

When you create a new incident in the incident table, a call will be made to Spot Connect with the JSON you defined. The JSON will include the fields in the new incident.

You can create a new Spot Connect workflow and add the ServiceNow_Alert action to it.
