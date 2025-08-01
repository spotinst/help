# Connect AWS Account

This page describes the procedures for automatically and manually connecting your AWS account to Spot. You can also customize your account by selecting permissions for specific Spot products and integrations with AWS.  

After signing up for Spot and creating your first Spot organization, you need to connect your Spot account to your AWS account. The following procedure describes how to connect a linked account.  

You can connect your account to AWS in two ways: 
* Connect manually 
* Connect automatically 

## Connect Manually

### Step 1.1: Connect Manually

1. After you have selected AWS as the [cloud provider](connect-your-cloud-provider/first-account/), select **Linked Account**.  

   <img width="500" alt="image" src="https://github.com/user-attachments/assets/6d72829e-a3a1-4adb-945e-f84f721ef2d9" />

2. Select **Manually**. 

   <img width=600 src="https://github.com/user-attachments/assets/1800f9e6-f686-4f5d-a7c2-edd8e5c7b4d4">

### Step 1.2: GovCloud or China Account? 

Mark the relevant answer and click **Next**. 

![connect-aws-manually-002a](https://github.com/spotinst/help/assets/106514736/a8876bfe-5d33-4e47-9823-3e0c55c47892)

**Note**: If you are connected to an AWS GovCloud or China account, you will not be able to customize your policy.  

### Step 1.3: AWS Login

Log in to the AWS account that you want to connect to your Spot account and click **Next**.

![connect-aws-manually-003a](https://github.com/spotinst/help/assets/106514736/be4a1b85-b78d-488a-b7dd-67291146af3f)

### Step 1.4: Customize or Default Permissions 

<img width=600 src="https://github.com/user-attachments/assets/7074784f-5b2e-4871-9684-3850f3adc643">

Select between the two options:  

* **Customize Permissions**: Select specific products and/or integrations you want to enable in your account. Each product or integration contains a list of actions that are required for it to operate in the console. 

* **Default Permissions**: Provides the default IAM Policy. If you select the default Permissions, continue to step 1.6.  

### Step 1.5: Customize Permissions 

When you connect your cloud account to Spot automatically or manually, you can select permissions for specific Spot products and integrations with AWS. Mark a checkbox to select a product/s and mark the checkboxes of the integrations of the specific product.  

<img width=600 src="https://github.com/user-attachments/assets/cb74c12a-f065-413b-a0ae-4c2ce44f4229">

Expand each integration to view the actions under it.  

<img width=600 src="https://github.com/user-attachments/assets/f29ba006-446c-451d-a1c2-787ac2151f72">

If a permission bundle is not selected, the list of permissions under it won’t be included in the policy JSON. 

Click **View JSON** to view the permissions in the JSON preview that is updated according to your selection.  

## Step 1.6 Create IAM Policy

In this step you create the policy that the Spot role will use to manage resources in your AWS account. Complete this step in the order of the instructions in the wizard.

![connect-aws-manually-007a](https://github.com/spotinst/help/assets/106514736/ff69f127-5b8e-4ceb-9a38-7ea9efb3b9c7)

1. In AWS, go to the IAM dashboard. In the sidebar on the left, click **Policies**.

   <img width=600 src="https://github.com/spotinst/help/assets/106514736/824d67a9-3e59-4864-962f-e093d16d97d8">

2. In the Policies page that opens, click **Create Policy**.

   ![connect-aws-manually-009a](https://github.com/spotinst/help/assets/106514736/0659e53f-5b68-4886-ae7f-2ec7536a1137)

3. In the Visual Editor page that opens, click the **JSON** tab.
4. In the Spot console, in the connection wizard, click **View JSON** at the bottom. 
5. When the policy opens in the Spot console, click the copy icon in the top right.

   ![connect-aws-manually-0010a](https://github.com/spotinst/help/assets/106514736/82db0965-e156-4a19-a43c-18bd6b134722)

6. Switch back to the JSON tab in AWS, paste in the policy over any text that was there, and click **Next**.

   ![connect-aws-manually-013a](https://github.com/spotinst/help/assets/106514736/3b76c92b-0fb1-4f8e-a053-da1fe7316cdc)

7. In the Review Policy page in the AWS console, add the name Spot-Policy for the policy and then click **Create Policy**.                                                                                                                                             
   <img width="1201" alt="connect-aws-manually-010" src="https://github.com/spotinst/help/assets/106514736/99036404-89dc-486a-86ee-8c305123a5c3">

8. In the wizard in the Spot console, click **Next**.
9. Create the IAM role by completing the steps in the order of the instructions in the wizard. 
10. Paste the RoleArn from the role’s page and paste it in the field and click **Connect**.  

   ![connect-aws-manually-009a](https://github.com/spotinst/help/assets/106514736/790c8c36-f8d9-45e2-a476-d9b07f7d149e)

11. The success message below indicates that your AWS account is linked to Spot. 

   <img width="1145" alt="connect-aws-manually-018" src="https://github.com/spotinst/help/assets/106514736/9ddbfeaa-a0f4-4632-b13b-01e111b656c8">

## Connect Automatically 

### Step 1.1: Connect Automatically 

After you have selected AWS as the [cloud provider](connect-your-cloud-provider/first-account/), select **Linked Account**. Select **Automatically**.  

<img width=600 src="https://github.com/user-attachments/assets/597b69b6-f0a0-42eb-a50f-795b4dd434d9">

### Step 1.2: GovCloud or China Account? 

Mark the relevant answer and click **Next**. 

![connect-aws-manually-002a](https://github.com/spotinst/help/assets/106514736/c756df4e-a2ca-434d-87bf-78a2fcc139a0)

**Note**: If you are connected to an AWS GovCloud or China account, you will not be able to customize your policy.  

### Step 1.3: AWS Login 

Log in to the AWS account that you want to connect to your Spot account and click **Next**. 

![connect-aws-manually-003a](https://github.com/spotinst/help/assets/106514736/a1828255-650f-46e7-a08d-4db3c8d26739)

### Step 1.4: Customize or Default Permissions 

<img width=600 src="https://github.com/user-attachments/assets/7c9a6061-898f-4ee0-b2f7-b2554858a0b3">

Select between the two options:  

* **Customize Permissions**: Select specific products and/or integrations you want to enable in your account. Each product or integration contains a list of actions that are required for it to operate in the console. For the full description of the settings, click here. 
* **Default Permissions**: Provides the default IAM Policy. Continue to step 1.5. 

### Step 1.5: Run IAM Template 

The IAM Policy is created in the AWS console. Click **Run IAM Template** to generate the IAM policy.  

<img width=600 src="https://github.com/user-attachments/assets/bafbf61c-706b-4e80-84cc-301eb69a0310">

Complete the following steps:  

1. In the AWS console, click the **Capabilities** tab, mark ‘I acknowledge that AWS CloudFormation might create IAM resources’. 

   ![connect-aws-manually-015a](https://github.com/spotinst/help/assets/106514736/81770f32-89bb-4391-9761-94ab10f8fd86)

2. Click **Create stack** and return to the Spot console.  
3. This step can take a few minutes. When the stack is successfully created, a message will open and you will be redirected to the new account in the Spot Console.  

#### Edit Policy Option 

To edit the policy after the account has been created, you need to update the policy directly in AWS. You can edit the policy after it has been created in the AWS console.  

1. In AWS, go to the IAM dashboard. In the sidebar on the left, click **Policies**. 

   <img width=600 src="https://github.com/spotinst/help/assets/106514736/f7fbfc90-4619-4ba9-b695-31912b57b3bc">

2. Enter the policy you want to edit. You can search for a policy in the searchbar. Enter the `spotinst-iam-stack` prefix in the searchbar to find your policy.  
3. Select the policy and click **Edit**. You can edit directly in the JSON policy editor.  

   ![connect-aws-manually-016a](https://github.com/spotinst/help/assets/106514736/a59ef32c-b490-4fa0-be74-ec9b637be2f4)

4. Click **Next**.  

**Permissions Page** 

![connect-aws-manually-017a](https://github.com/spotinst/help/assets/106514736/87db1b00-6fec-4c82-8cad-21627bce21b3)

This page displays the permissions and you can review them.  If you aprrove the changes, click **Save changes** and your policy will successfully be updated.  

