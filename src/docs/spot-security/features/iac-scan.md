# IaC scanning

Infrastructure as Code (IaC) scanning examines your source code repository to identify misconfigurations. It checks your pull requests (PRs) and provides comments on detected misconfigurations, allowing you to address them before merging the pull request. 

To view this feature, in the left main menu in the Spot console, click **Spot Security** and then **IaC Scanning**.  

## Configure IaC Scanning 

To set up IaC Scanning: 

1. In the left main menu, click **Administration**.  
2. Click the **Onboarding** tab and click **IaC Scanning**.  
3. Click **Actions** and then **Configure Scanning**.   

![iac-1](https://github.com/spotinst/help/assets/106514736/cba7ef0c-61d7-4529-ac83-034bd603f66b)

### Configure Repo URL  

To configure the repo scanning: 

![iac-2](https://github.com/spotinst/help/assets/106514736/74bbb912-854d-45a5-9b2e-0ba82a44beaa)

1. Click **Add Repo** and enter the following information:  

* Repo URL: Enter the repo URL.  
* Repo Type: If your repo URL does not contain the domain name of GitHub, Gitlab or Bitbucket, select the repo type from the dropdown menu.  
* Token: Configure the access token.  

Github Access Token Generation Steps (Please add these redirection)  

Gitlab Cloud Access Token Generation Steps (Please add these redirection)  

Bitbucket Cloud Access Token Generation Steps (Please add these redirection)  

2. To add specific branches from the repo you can: 
* Click **+ Add Branch** and enter the name of the branch. 
* If you want to scan only the default branch you can turn on the **Include Default Branch** toggle. 
3. If the repo is accessible from the internet, select the **The above Repos are accessible from the internet** checkbox.   
* If you want to set up PR integration, complete the integration (Link PR Integration). 
* If you do **not** want to set up PR integration, click **Configure** to set up Iac Scanning. 

If the repo is **not** accessible from the Internet, click **Next** to configure a scanner instance. 

### Configure Scanner Instance 

To configure a scanner instance:  

![iac-3](https://github.com/spotinst/help/assets/106514736/d5e364c8-1933-476e-9c8b-757ac459e299)

1. Select the cloud provider to host the scanner instance. 
2. Select the AWS account, region, and subnet ID you want to run the scanner instance in.  
* If the subnet ID needs to be entered manually, check the box **Manually enter the Subnet ID** and enter the value in this format- **“vpc-id:subnet-id"**. 
3. To provide sufficient permission to log into the AWS account, click **Run Template**.  
4. Enter the organization ID and click **Next**. Wait until the CloudFormation template has run successfully.  
5. To get the organization ID from the Spot Security console, click the profile icon and then **Settings**.  
6. Click the **Output** tab and copy the Value column.  
7. In the Spot Security console, enter the Role ARN you copied in the previous step in the Role ARN field. 
8. Proceed to the next step to set up PR integration or click **Configure** to set up the Iac scanning. 

<details>
  <summary markdown="span">View image</summary>

![iac-4](https://github.com/spotinst/help/assets/106514736/585fd5e7-f65b-4efa-8008-9fd7eb2fd545)

</details><br>

### PR Integration (Optional) 

In the PR integration, you receive a unique Webhook URL associated with a single URL per organization. You need to enter a Secret string (6-255 characters) in the Spot Security console. The repo's GitHub administrator should configure the Webhook URL and secret string. 

**Note: PR integration is only applicable if the repos are accessible from the Internet and is only supported for Github**.  

The Github Administrator needs to complete the following steps:   

1. In GitHub, click the **Settings** tab and click Webhooks in the left menu. 
2. Configure the following fields:  
* **Payload URL**: The Webhook URL obtained from Spot Security. 
* **Content type**: application/json. 
* **Secret**: The secret string was entered in Spot Security. 
* **SSL verifications**: Select **Enable SSL Verification**. 
* **Which events would you like to trigger this webhook?** Select **Let me select individual events**.   

<details>
  <summary markdown="span">View image</summary>
  
![iac-5](https://github.com/spotinst/help/assets/106514736/61ece9c0-a6de-423e-88bb-c983cfa28214)

</details><br>

3. Select: **Pull Requests** and **Active**.

<details>
  <summary markdown="span">View image</summary>

![iac-6](https://github.com/spotinst/help/assets/106514736/2bbcc679-b020-4a75-9c42-36ba3a7c3216)

</details><be>

4. Click **Add Webhook** to add the webhook. 
5. To test the functionality, click **Recent Deliveries** to send a test message. 
6. Return to the Spot Security console and click **Configure**. Learn how to [configure the webhook](https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks).

You can view the details on the Administration page after completing the configuration. 

Click the edit icon to add a new branch, delete an existing branch, change the token and scanner instances, etc.  

You can also turn the toggle off, which pauses the repo scan.  

The Health Check column displays two possible statuses: **Healthy** and **Unhealthy**. Click each one to view the details. 

<details>
  <summary markdown="span">Click to view an example of a description of the health results.</summary>

![iac-7](https://github.com/spotinst/help/assets/106514736/b323d9e8-5be1-4e86-b04f-0172b86878d9)

</details><be>

On the Administration page, you can delete a repo scanning in the Repo Onboarding section by selecting one or more repos in the checkbox. Click **Action** and then **Delete**.  

### View Result  

You can view two types of results:  

* In the IaC Findings tab in the Spot Security console: The security findings of the onboarded repos.  
* In your pull request (only available for GitHub): The security findings on the individual pull requests. 

The Iac Scanning page presents the scanning results of the branches that you have added with the following data:  

* Rule Name  
* Rule Description  
* Rule Type  
* Severity Level   
* Repo  
* Branch   
* Path  
* Issue Snippet  
* Resolution   
* Reference   

You can filter the results based on the repo to see the value for only one repo.  

![iac-8](https://github.com/spotinst/help/assets/106514736/f6d6dccc-ab04-4183-b5a8-1a62462bbbbf)

After the PR integration is completed, pull requests will receive a comment from Spot Security if any findings are detected. The user that initiated the comment will be the user whose access token was used to configure Repo Scanning. 

<details>
  <summary markdown="span">Click to view an example of a comment.</summary>

![iac-9](https://github.com/spotinst/help/assets/106514736/5889a7e1-ef3a-40a3-92be-0a0a929b8c0a)

</details><be>  
