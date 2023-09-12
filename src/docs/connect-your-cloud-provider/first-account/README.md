# Connect Your First Cloud Account to Spot

In order to take advantage of Spot’s optimization and cost savings features, you need to connect your cloud account to Spot. The procedure on this page walks you through the steps to connect your account.

## Step 1: Create Your Spot Organization

If you are signing in to Spot for the first time (e.g., signing in from a [spot.io](https://spot.io/) page or registering for a free trial), complete the basic information as shown in the example below.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-001.png" width="350" />

When you complete this initial registration, the Company name you enter will be your Organization name in Spot. This can be the company you represent or any other name you would like to use as your organization name in Spot.

## Step 2: Select a Cloud Provider

On the Dashboard page, click the cloud provider that you would like to connect to your Spot account and click Next.

If you have multiple accounts with your cloud provider, you will be able to connect them all later, after you have connected your first account. In addition, you will be able to connect accounts from multiple cloud providers.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-002.png" width="500" />

## Step 3: Connect Your Cloud Account

In this step, you make some choices about what type of account you are creating and how you would like to connect the account to Spot. The procedures are explained in detail in the wizard, but to help you along the way, the key concepts are explained below.

The decisions are slightly different depending on the cloud provider you choose, so please follow the flow for your cloud provider: [AWS](connect-your-cloud-provider/first-account/?id=connect-aws), [GCP](connect-your-cloud-provider/first-account/?id=connect-gcp), [Azure](connect-your-cloud-provider/first-account/?id=connect-azure)

### Connect AWS
#### Linked Account

A linked account is an “ordinary” Spot account you use for optimizing cost and usage by using spot instances and taking advantage of numerous Spot features. Choose Linked Account to use Elastigroup or Ocean.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-003.png" width="500" />

#### Connect Automatically

Connecting automatically is the quicker option. Using a CloudFormation stack, this option chooses a policy and a role and associates the two for you.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-005.png" width="500" />

#### Connect Manually

When you connect manually, you use your provider’s console (AWS) to choose the policy and role and to associate the two.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-0051.png" width="500" />

Please see the [detailed procedures for connecting manually](connect-your-cloud-provider/first-account/aws-manually).                                                                                                                                             
#### Management Account

Connection to a management account is required to use Eco. A management account will enable Spot to analyze your cost and usage reports and help you save even more on your cloud expenses.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-004.png" width="500" />

### Connect GCP
#### Linked Account

A linked account is an “ordinary” Spot account you use for optimizing cost and usage by using spot instances and taking advantage of numerous Spot features. You need a Linked Account to use Elastigroup or Ocean.

For GCP, there is currently no option to link a management account, so by default you start directly in the wizard to connect a linked account.

#### Connect Manually
When you connect manually, you use your provider’s console (GCP) to choose the policy and role and to associate the two. For GCP, this is a quick option and we recommend choosing Manually.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-006.png" width="500" />

Please see the detailed procedures for connecting manually.

#### Connect Automatically

This option automatically chooses a policy and a role and associates the two for you. To connect automatically with GCP, you must have gcloud with permissions to create a service account.

### Connect Azure
#### Subscription

Connection to your Azure subscription is required to use Spot Elastigroup or Spot Ocean, just continue with the wizard in Spot after you choose Azure as the cloud provider. You can find a detailed description of this procedure in [Connect Azure Subscription](connect-your-cloud-provider/first-account/azure).

#### Billing Account

Connection to your Azure Billing Account is required to use Spot Eco. A connected billing account enables Spot Eco to analyze your cost, usage, and commitment data and help you save even more on your cloud expenses.  

To connect your Azure Billing Account to Spot Eco, use the procedure described in [Connect Azure billing account to Spot](connect-your-cloud-provider/azure-ea-account). 

### Complete Your Connection

Once you have successfully completed all the steps in the wizard and connected your cloud provider to Spot, you will see the Spot Dashboard.

> Note: Spot could take up to 24 hours to acquire all the data necessary to display in the Dashboard.

The Dashboard displays savings potential data about your cloud usage and provides recommendations about actions you can take next.

<img src="/connect-your-cloud-provider/_media/connect-your-first-cloud-account-007.png" />

## What’s Next?

Learn how you can use Spot Insights & Recommendations in the [Dashboard](connect-your-cloud-provider/dashboard) and understand your Savings Potential analysis with immediate steps you can take.


