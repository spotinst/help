# Connect Your First Cloud Account to Spot

Connect your cloud account to Spot to get the most out of Spot's optimization and cost-saving features.

## Step 1: Create Your Spot Organization 

Sign in to [Spot](https://spot.io/) or register for a free trial.

Keep in mind that the company name you enter will be your organization name in Spot. This can be the company you represent or any other name you would like to use as your organization name in Spot.

## Step 2: Select a Cloud Provider

Select the cloud service provider to connect to your Spot account and click **Next**. 

If you have multiple accounts with a cloud provider, you can connect them all later, after you have connected your first account. You can also connect accounts from multiple cloud providers.

## Step 3: Connect Your Cloud Account 

When you connect your cloud account to Spot, you decide the type of account you're creating and how to connect it to Spot.

>**Important**: Follow the instructions for the cloud service provider you're connecting: 
> 
> * [AWS](connect-your-cloud-provider/first-account/?id=connect-aws)
> * [GCP](connect-your-cloud-provider/first-account/?id=connect-gcp)
> * [Azure](connect-your-cloud-provider/first-account/?id=connect-azure)

### Connect AWS

You can connect your AWS account as a:
* **Linked account** is a regular spot account. You use it to optimize costs and usage by using spot instances and taking advantage of many of Spot's features. Choose **Linked Account** to use Elastigroup or Ocean.
  
     You can connect your AWS account:
     * **Automatically** using CloudFormation stack. This is the quicker option, which chooses a policy and role, and associates them for you.
     * [Manually](connect-your-cloud-provider/first-account/aws-manually) using the AWS console to choose the policy and role, and associate them. 
  
* **Management account** is required to use Eco. A management account lets Spot analyze your cost and usage reports and helps you save even more on your cloud expenses. [Connect to Eco](eco/getting-started/connect-your-aws-account).
* **FinOps products** to connect your account to Cost Intelligence or Billing Engine. This gives you advanced analysis, rating, and reporting on your cloud accounts.

### Connect GCP

You can connect your GCP account as a **linked account**. A linked account is a regular spot account. You use it to optimize costs and usage by using spot instances and taking advantage of many of Spot's features.

You can connect your GCP account:
     * **Automatically** This option automatically chooses a policy and a role and associates the two for you. To connect automatically with GCP, you must have gcloud with permissions to create a service account.
     * [Manually](connect-your-cloud-provider/first-account/gcp-manually) using the GCP console to choose the policy and role, and associate them. This is the recommended method and is a simple process.

### Connect Azure

You can connect your Azure account as a:
* **Subscription** is required to use Elastigroup or Ocean. [Connect your Azure account to Spot](connect-your-cloud-provider/first-account/azure).
  
* **Billing account** is required to use Eco. A billing account lets Spot analyze your cost, usage, and commitment data, and helps you save even more on your cloud expenses. [Connect to Eco](connect-your-cloud-provider/azure-ea-account).
* **FinOps products** to connect your account to Cost Intelligence or Billing Engine. This gives you advanced analysis, rating, and reporting on your cloud accounts.
#### Subscription 

#### Billing Account 

Connection to your Azure Billing Account is required to use Spot Eco. A connected billing account enables Spot Eco to analyze your cost, usage, and commitment data and help you save even more on your cloud expenses.  
 
To connect your Azure Billing Account to Spot Eco, use the procedure described in [Connect Azure billing account to Spot](https://docs.spot.io/connect-your-cloud-provider/azure-ea-account). 

![connect-1st-cloud-account-10](https://github.com/spotinst/help/assets/106514736/be43db83-c19d-4585-b0bf-92a79b3e5b38)

#### FinOps Products 

Connect an account to the Billing Engine or Cost Intelligence solutions. This enables advanced analysis, rating and reporting on your cloud accounts. 

![connect-1st-cloud-account-11](https://github.com/spotinst/help/assets/106514736/58d85cba-1b80-403b-bab6-2138c87daca2)

## Step 4: Complete Your Connection 

Once you have successfully completed all the steps in the wizard and connected your cloud provider to Spot, you will see the Spot Dashboard. 

> Note: Spot could take up to 24 hours to acquire all the data necessary to display in the Dashboard.

The Dashboard displays savings potential data about your cloud usage and provides recommendations about actions you can take next.

<img width="478" alt="connect-1st-cloud-account-8" src="https://github.com/spotinst/help/assets/106514736/55963618-dd4d-4223-b3d2-779b179c85e7">
