# Connect Your First Cloud Account to Spot 

In order to take advantage of Spot’s optimization and cost savings features, you need to connect your cloud account to Spot. The procedure on this page walks you through the steps to connect your account. 

## Step 1: Create Your Spot Organization 

If you are signing in to Spot for the first time (e.g., signing in from a [spot.io](https://spot.io/) page or registering for a free trial), complete the basic information as shown in the example below. 

<img width="350" alt="connect-your-first-cloud-account-001" src="https://github.com/spotinst/help/assets/106514736/e34449cc-b29f-4b1e-80ac-17abeded0492">

When you complete the initial registration, the company name you enter will be your Organization name in Spot. This can be the company you represent or any other name you would like to use as your organization name in Spot. 

## Step 2: Select a Cloud Provider 

On the Dashboard page, click the cloud provider that you would like to connect to your Spot account and click **Next**. 

If you have multiple accounts with your cloud provider, you will be able to connect them all later, after you have connected your first account. In addition, you will be able to connect accounts from multiple cloud providers. 
 
<img width=500 src="https://github.com/user-attachments/assets/65471999-45fa-46a1-b451-716dbe39a738">

## Step 3: Connect Your Cloud Account 

In this step, you make some choices about what type of account you are creating and how you would like to connect the account to Spot. The procedures are explained in detail in the wizard, but to help you along the way, the key concepts are explained below. 

>**Important**: Follow the flow for your cloud service provider: 
>
> - Connect [AWS](connect-your-cloud-provider/first-account/?id=connect-aws)
>
> - Connect [GCP](connect-your-cloud-provider/first-account/?id=connect-gcp)
>
> - Connect [Azure](connect-your-cloud-provider/first-account/?id=connect-azure)

### Connect AWS
#### Linked Account

A linked account is an “ordinary” Spot account you use for optimizing cost and usage by using spot instances and taking advantage of numerous Spot features. Choose Linked Account to use Elastigroup or Ocean. 

<img width="500" alt="image" src="https://github.com/user-attachments/assets/d99911eb-68fb-4888-a466-04e16e9c86e7" />

You can connect a linked account in two ways:  
* Automatically
* Manually 

##### Connect Automatically

Connecting automatically is the quicker option. Using a CloudFormation stack, this option chooses a policy and a role and associates the two for you. 

<img width="483" alt="connect-1st-cloud-account-5" src="https://github.com/spotinst/help/assets/106514736/d24f3f14-3915-4653-882f-4808aeb40b73">

##### Connect Manually 

When you [connect manually](connect-your-cloud-provider/first-account/aws-manually), you use your provider’s console (AWS) to choose the policy and role to associate the two. 

<img width="472" alt="connect-1st-cloud-account-6" src="https://github.com/spotinst/help/assets/106514736/de0c0f55-c6d0-41a3-ae35-1f25955fbe01">

#### Management Account 

[Connection to a management account](https://docs.spot.io/eco/getting-started/connect-your-aws-account) is required to use Eco. A management account will enable Spot to analyze your cost and usage reports and help you to save even more on your cloud expenses. 

<img width="500" alt="image" src="https://github.com/user-attachments/assets/c0207cb7-6e9c-4964-9716-ccc6a8573fb8" />

### Connect GCP 
#### Linked Account 

A linked account is an “ordinary” Spot account you use for optimizing cost and usage by using spot instances and taking advantage of numerous Spot features. You need a Linked Account to use Elastigroup or Ocean. 

For GCP, there is currently no option to link a management account, so by default you start directly in the wizard to connect a linked account. 

You can connect a linked account in two ways:
* Manually
* Automatically

##### Connect Manually 

When you [connect manually](https://docs.spot.io/connect-your-cloud-provider/first-account/gcp-manually), you use your provider’s console (GCP) to choose the policy and role to associate the two. For GCP, this is a quick option and Spot recommends choosing Manually. 

<img width="472" alt="connect-1st-cloud-account-7" src="https://github.com/spotinst/help/assets/106514736/fe87ede2-8985-47bd-b0f7-a98c6ef72a8e">

##### Connect Automatically  

This option automatically chooses a policy and a role and associates the two for you. To connect automatically with GCP, you must have gcloud with permissions to create a service account. 

### Connect Azure 
#### Subscription 

[Connection to your Azure Subscription](https://docs.spot.io/connect-your-cloud-provider/first-account/azure) is required to use Spot Elastigroup or Spot Ocean. Continue with the wizard in Spot after you choose Azure as the cloud provider.

<img width="500" alt="image" src="https://github.com/user-attachments/assets/8b3bc52f-20f7-4780-ab1d-9d3f2452d80a" />

#### Billing Account 

[Connection to your Azure Billing Account](https://docs.spot.io/connect-your-cloud-provider/azure-ea-account) is required to use Spot Eco. A connected billing account enables Spot Eco to analyze your cost, usage, and commitment data and help you save even more on your cloud expenses.  
 
<img width="500" src="https://github.com/user-attachments/assets/a7d0cef8-cff4-4603-a042-3e79f5fd63f6" />

## Step 4: Complete Your Connection 

Once you have successfully completed all the steps in the wizard and connected your cloud provider to Spot, you will see the Spot Dashboard. 

> Note: Spot could take up to 24 hours to acquire all the data necessary to display in the Dashboard.

The Dashboard displays savings potential data about your cloud usage and provides recommendations about actions you can take next.

<img width="478" alt="connect-1st-cloud-account-8" src="https://github.com/spotinst/help/assets/106514736/55963618-dd4d-4223-b3d2-779b179c85e7">
