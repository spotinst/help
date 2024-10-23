# Zendesk

These action snippets let you send comments made on a Jira ticket to its linked Zendesk tickets. You can also send individual comments on a Zendesk ticket.

## Configure Zendesk in Spot Connect

1. In Zendesk, [create an API token](https://developer.zendesk.com/api-reference/introduction/security-and-auth/#api-token).
2. In the Spot Console, go to **Connect** > **Settings** > **Integrations**.
3. Click **Zendesk** > **Add Integration**.
4. Enter the email associated with your Zendesk account.
5. Paste the Zendesk API token.
6. Enter your Zendesk subdomain name.
7. Click **Add Instance**.

## Integration Action: Get Comment from Jira Payload

1. In Jira, [create an action](https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/) for any new comment posted in any Jira ticket:
    * The first node in the action needs to be <i>All comment to ticket</i>.
    * The second node in the action needs to be [Send web request](https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/#Send-web-request). The <b>HTTP method</b> needs to be <i>POST</i> and the <b>Web request body</b> needs to be <i>Issue data (Automation format)</i>
    * In the Spot console, copy the <i>Webhook API key value</i> and <i>workflow webhook URL</i> and paste in the Jira node.

2. In the Spot console, select **Connect** > **Workflows**.
3. Go to Templates and search for **Update Zendesk Tickets with Comment from Linked Jira Issue**.
4. Click <img height=18 src="https://github.com/user-attachments/assets/41e9c493-0e32-40f8-9721-cfecaca9fb9f"> and select **Duplicate**.
5. Enter a name for the workflow and click **Duplicate Workflow**.
6. Click the **Generic Webhook** node to open the right panel.
7. In the **Webhook API Key Name**, select the API key you created earlier.
8. Enter the **Webhook API Key Value** and the **Workflow Webhook URL**.
9. In Jira, get the [custom field ID value](https://confluence.atlassian.com/jirakb/how-to-find-any-custom-field-s-ids-744522503.html).
10. In the Spot console, in the **JSONPath** action, add the Jira custom field ID in this format: `$.fields.customfield_{ID}`.
11. Click the **Zendesk Update Tickets with Comment** node.
12. Select the **Zendesk Instance** and **Jira Instance**.
13. Click **Save**.


### Input

| Parameter                                             | Description                                             | Required  |
|-------------------------------------------------------|---------------------------------------------------------|-----------|
| Zendesk Instance                                      | Select Zendesk Instance to post comment to              | Required  |
| Zendesk Ticket Id                                     | Zendesk Ticket IDs to post comment to, for example, 123 | Required  |
| Type of Comment Input - Get comment from JIRA payload | Get payload directly from Jira                          | Required  |
| Comment Payload                                       | Get payload from Jira webhook response                  | Required  |
| Jira Instance                                         | Select Jira instance                                    | Required  |

### Output

| Parameter          | Type       | Description                                                                           |
|--------------------|------------|---------------------------------------------------------------------------------------|
| zendesk_ticket_ids | StringList | Comments posted to Zendesk tickets linked to Jira ticket                              |
| comment_posted     | String     | The “Comment” which was posted in Jira ticket will be sent to linked Zendesk tickets  |
| response           | String     | Zendesk post comment API response.                                                    |
| execution_status   | String     | Status of run (for example, S_OK, E_FAIL)                                             |

## Integration Action: Add a Comment to Zendesk Tickets

1. In the Spot console, select **Connect** > **Workflows**.
2. Click **New Workflow** > **Manual**.
3. Enter a name for the workflow and click **Create Workflow**.
4. Add **Zendesk Update Tickets with Comment** action.
5. Select the **Zendesk Instance**, **Zendesk Ticket IDs**, the **Type of Comment Input**: <i>Add Single Comment</i>, and the comment.
6. Click **Save**.
   
### Input

| Parameter                                  | Description                                     | Required      |
|--------------------------------------------|-------------------------------------------------|---------------|
| Zendesk Instance                           | Select Zendesk Instance to post comment to      | Required      |
| Zendesk Ticket Id                          | Zendesk Ticket Ids to post comment to. ex - 123 | Required      |
| Type of Comment Input - Add Single Comment | Single comment to post in Zendesk tickets       | Required      |
| Comment                                    | Add comment to post to Zendesk ticket           | Required      |

### Output

| Parameter          | Type       | Description                                        |
|--------------------|------------|----------------------------------------------------|
| zendesk_ticket_ids | StringList | Comments posted to Zendesk tickets                 |
| comment_posted     | String     | The “Comment” which was posted in Zendesk tickets  |
| response           | String     | Zendesk post comment API response.                 |
| execution_status   | String     | Status of run (for example, S_OK, E_FAIL)          |
