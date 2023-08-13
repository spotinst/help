# Send Email Action 

An action that sends an email to multiple recipients. 

Use the Send Email action to send an email when the action executes. When you create a Send Email action, specify the recipient, subject, and content of the email as custom text or from the previous step output or set value at runtime. 

Insert a Send Email node in the workflow editor page and provide the required inputs for the node. Configure the send email node either from the previous step output, set value now or at runtime. 

#### Input

|       Parameter         |                        Description                   |      Required  |   |
|-------------------------|:----------------------------------------------------:|:--------------:|---|
|      recipients email   |     Recipient email list                             |     True       |   |
|      subject            |     Subject in the email                             |     True       |   |
|      content            |     String specifying email body (HTML/text format)  |     True       |   |

#### Output

|       Parameter        |       Type  |             Description        |   |
|------------------------|:-----------:|:------------------------------:|---|
|      message_id        |     String  |     Message Id                 |   |
|      execution_status  |     String  |     Snippet execution status   |   |

#### Action Example 

1. Drop the Send Email node on the workflow editor page. Select the node and enter the required information such as recipient emails, subject, and content.  



2. After the execution of the workflow above you can see the output of the node in the Executions page.  

