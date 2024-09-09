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
    * You can select **Web service acess only** to make this user a non-interactive user
2. In the Spot Console, go to **Connect** > **Settings** > **Integarations**.
5. Click  **ServiceNow** > **Add Integration**.
6. Enter your ServiceNow instance URL. For example, `https://dev12345.service-now.com`.
7. Enter the username and password for the ServiceNow user you created.
8. Click **Add Instance**.

## Integration Action: ServiceNow Create

Creates a new incident in ServiceNow.

