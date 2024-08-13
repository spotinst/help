# Connect Your First Cloud Account to Spot 

In order to take advantage of Spot’s optimization and cost savings features, you need to connect your cloud account to Spot. The procedure on this page walks you through the steps to connect your account. 

## Step 1: Create Your Spot Organization 

If you are signing in to Spot for the first time (e.g., signing in from a [spot.io](https://spot.io/) page or registering for a free trial), complete the basic information as shown in the example below. 

<img width="502" alt="connect-your-first-cloud-account-001" src="https://github.com/spotinst/help/assets/106514736/e34449cc-b29f-4b1e-80ac-17abeded0492">

When you complete the initial registration, the company name you enter will be your Organization name in Spot. This can be the company you represent or any other name you would like to use as your organization name in Spot. 

## Step 2: Select a Cloud Provider 

On the Dashboard page, click the cloud provider that you would like to connect to your Spot account and click **Next**. 

If you have multiple accounts with your cloud provider, you will be able to connect them all later, after you have connected your first account. In addition, you will be able to connect accounts from multiple cloud providers. 
 
![connect-1st-cloud-account-12](https://github.com/spotinst/help/assets/106514736/a8ad87bb-40f4-4647-be81-5e3c1efd0f01)

## Step 3: Connect Your Cloud Account 

In this step, you make some choices about what type of account you are creating and how you would like to connect the account to Spot. The procedures are explained in detail in the wizard, but to help you along the way, the key concepts are explained below. 

>**Important**: Follow the flow for your cloud service provider: 

* Connect [<font color="#FC01CC">AWS</font>](connect-your-cloud-provider/first-account/?id=connect-aws)
* Connect [<font color="#FC01CC">GCP</font>](connect-your-cloud-provider/first-account/?id=connect-gcp)
* Connect [<font color="#FC01CC">Azure</font>](connect-your-cloud-provider/first-account/?id=connect-azure)

### Connect AWS
#### Linked Account

A linked account is an “ordinary” Spot account you use for optimizing cost and usage by using spot instances and taking advantage of numerous Spot features. Choose Linked Account to use Elastigroup or Ocean. 

![connect-1st-cloud-account-1](https://github.com/spotinst/help/assets/106514736/6247bed1-a377-4446-b9f4-09b65f0fdf31)

You can connect a linked account in two ways:  
* Automatically
* Manually 

##### Connect Automatically

Connecting automatically is the quicker option. Using a CloudFormation stack, this option chooses a policy and a role and associates the two for you. 

<img width="483" alt="connect-1st-cloud-account-5" src="https://github.com/spotinst/help/assets/106514736/d24f3f14-3915-4653-882f-4808aeb40b73">

##### Connect Manually 

When you connect manually, you use your provider’s console (AWS) to choose the policy and role to associate the two. 

<img width="472" alt="connect-1st-cloud-account-6" src="https://github.com/spotinst/help/assets/106514736/de0c0f55-c6d0-41a3-ae35-1f25955fbe01">

Please see the detailed [procedures](connect-your-cloud-provider/first-account/aws-manually) for connecting manually. 

#### Management Account 

Connection to a management account is required to use Eco. A management account will enable Spot to analyze your cost and usage reports and help you to save even more on your cloud expenses. Learn how to connect to [Eco](https://docs.spot.io/eco/getting-started/connect-your-aws-account). 

![connect-1st-cloud-account-2](https://github.com/spotinst/help/assets/106514736/d34a05ab-6316-4744-80e2-d93148d2efa5)

#### FinOps Products 

Connect an account to the Billing Engine or Cost Intelligence solutions. This enables advanced analysis, rating and reporting on your cloud accounts. 

![connect-1st-cloud-account-13](https://github.com/spotinst/help/assets/106514736/c32be20a-120b-4355-a307-fdc1808b2473)

### Connect GCP 
#### Linked Account 

A linked account is an “ordinary” Spot account you use for optimizing cost and usage by using spot instances and taking advantage of numerous Spot features. You need a Linked Account to use Elastigroup or Ocean. 

For GCP, there is currently no option to link a management account, so by default you start directly in the wizard to connect a linked account. 

You can connect a linked account in two ways:
* Manually
* Automatically

##### Connect Manually 

When you connect manually, you use your provider’s console (GCP) to choose the policy and role to associate the two. For GCP, this is a quick option and Spot recommends choosing Manually. 

<img width="472" alt="connect-1st-cloud-account-7" src="https://github.com/spotinst/help/assets/106514736/fe87ede2-8985-47bd-b0f7-a98c6ef72a8e">

Please see the [detailed procedures for connecting manually](https://docs.spot.io/connect-your-cloud-provider/first-account/gcp-manually). 

##### Connect Automatically  

This option automatically chooses a policy and a role and associates the two for you. To connect automatically with GCP, you must have gcloud with permissions to create a service account. 

### Connect Azure 
#### Subscription 

Connection to your Azure subscription is required to use Spot Elastigroup or Spot Ocean. Continue with the wizard in Spot after you choose Azure as the cloud provider. You can find a detailed description of this procedure in [Connect Azure Subscription](https://docs.spot.io/connect-your-cloud-provider/first-account/azure). 

![connect-1st-cloud-account-9](https://github.com/spotinst/help/assets/106514736/aeddf12d-f678-4e53-837b-4fe989963d10)

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
