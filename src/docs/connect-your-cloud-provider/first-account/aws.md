# Connect AWS Account

You can automatically or manually connect your AWS account to Spot. Customize your account by selecting permissions for specific Spot products and integrations with AWS.  

After you've [created your first Spot organization](connect-your-cloud-provider/first-account/), you need to connect your Spot account to your AWS account as a linked account.

## Connect Automatically

1. After you select AWS as the [cloud provider](connect-your-cloud-provider/first-account/), click **Linked Account** > **Automatically**.

   <details>
     <summary markdown="span">View image</summary>

      <img width=600 src="https://github.com/user-attachments/assets/36547eb1-b462-4bca-9499-337c0115bbbc">

  </details>

2. If you're not connecting an AWS GovCLoud or China account, select **No**.

    **Note**: If you are connected to an AWS GovCloud or China account, you cannot customize your policy.  

3. Sign in to the AWS account that you want to connect to your Spot account and click **Next**. 

4. Set up the permissions:

    * **Customize Permissions** lets you select specific products and integrations you want to enable in your account. Each product or integration contains a list of actions that are required for it to operate in the console.
      
      <details>
      <summary markdown="span">More about custom permissions</summary>
     
        When you connect your cloud account to Spot, you can select permissions for specific Spot products and integrations with AWS. Select the products and the integrations of the specific product.

        ![connect-aws-manually-005a](https://github.com/spotinst/help/assets/106514736/dc54fa20-56bc-4ad3-b776-d080c654974a)

        Expand each integration to view the actions under it.

        ![connect-aws-manually-006a](https://github.com/spotinst/help/assets/106514736/beb14e09-7b2e-4d89-b60a-c0590969fe0d)
 
        If a permission bundle is not selected, the list of permissions under it won’t be included in the policy JSON.

        Click **View JSON** to view the permissions in the JSON preview that is updated according to your selection.

       </details>

    * **Default Permissions** provides the default IAM Policy.

5. Run the IAM template. The IAM Policy is created in the AWS console. Click **Run IAM Template** to generate the IAM policy:

    <ol style="list-style-type: lower-alpha;">
      <li>In the AWS console, go to the **Capabilities** tab, mark ‘I acknowledge that AWS CloudFormation might create IAM resources’.</li>
      <li>Click **Create stack** and return to the Spot console.</li>
      <li>Click **Connect**.</li>
    </ol>

   This step can take a few minutes. When the stack is successfully created, a message will open and you will be redirected to the new account in the Spot console.  


## Connect Manually

1. After you select AWS as the [cloud provider](connect-your-cloud-provider/first-account/), click **Linked Account** > **Manually**.

   <details>
     <summary markdown="span">View image</summary>

      <img width=600 src="https://github.com/user-attachments/assets/817b17fe-c972-439c-8f40-d2f62bde1b05">

  </details>
  
2. If you're not connecting an AWS GovCLoud or China account, select **No**.

    **Note**: If you are connected to an AWS GovCloud or China account, you cannot customize your policy.  

3. Sign in to the AWS account that you want to connect to your Spot account and click **Next**. 

4. Set up the permissions:

    * **Customize Permissions** lets you select specific products and integrations you want to enable in your account. Each product or integration contains a list of actions that are required for it to operate in the console.
      
      <details>
      <summary markdown="span">More about custom permissions</summary>
     
        When you connect your cloud account to Spot, you can select permissions for specific Spot products and integrations with AWS. Select the products and the integrations of the specific product.

        ![connect-aws-manually-005a](https://github.com/spotinst/help/assets/106514736/dc54fa20-56bc-4ad3-b776-d080c654974a)

        Expand each integration to view the actions under it.

        ![connect-aws-manually-006a](https://github.com/spotinst/help/assets/106514736/beb14e09-7b2e-4d89-b60a-c0590969fe0d)
 
        If a permission bundle is not selected, the list of permissions under it won’t be included in the policy JSON.

        Click **View JSON** to view the permissions in the JSON preview that is updated according to your selection.

       </details>

    * **Default Permissions** provides the default IAM Policy.

5. Run the IAM template. The IAM Policy is created in the AWS console. Click **Run IAM Template** to generate the IAM policy:

    <ol style="list-style-type: lower-alpha;">
      <li>In the AWS console, go to the **Capabilities** tab, mark ‘I acknowledge that AWS CloudFormation might create IAM resources’.</li>
      <li>Click **Create stack** and return to the Spot console.</li>
      <li>Click **Connect**.</li>
    </ol>

   This step can take a few minutes. When the stack is successfully created, a message will open and you will be redirected to the new account in the Spot console.  


### Step 1.6 Create IAM Policy

In this step you create the policy that the Spot role will use to manage resources in your AWS account. Complete this step in the order of the instructions in the wizard.

![connect-aws-manually-007a](https://github.com/spotinst/help/assets/106514736/ff69f127-5b8e-4ceb-9a38-7ea9efb3b9c7)

1. In AWS, go to the IAM dashboard. In the sidebar on the left, click **Policies**.

![connect-aws-manually-008a](https://github.com/spotinst/help/assets/106514736/824d67a9-3e59-4864-962f-e093d16d97d8)

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

## Edit a Policy

In order to edit the policy after the account has been created, you need to update the policy directly in AWS. You can edit the policy after it has been created in the AWS console.  

1. In AWS, go to the IAM dashboard. In the sidebar on the left, click **Policies**. 

![connect-aws-manually-008a](https://github.com/spotinst/help/assets/106514736/f7fbfc90-4619-4ba9-b695-31912b57b3bc)

2. Enter the policy you want to edit. You can search for a policy in the searchbar. Enter the `spotinst-iam-stack` prefix in the searchbar to find your policy.  
3. Select the policy and click **Edit**. You can edit directly in the JSON policy editor.  

![connect-aws-manually-016a](https://github.com/spotinst/help/assets/106514736/a59ef32c-b490-4fa0-be74-ec9b637be2f4)

4. Click **Next**.  

**Permissions Page** 

![connect-aws-manually-017a](https://github.com/spotinst/help/assets/106514736/87db1b00-6fec-4c82-8cad-21627bce21b3)

This page displays the permissions and you can review them.  If you aprrove the changes, click **Save changes** and your policy will successfully be updated.  
