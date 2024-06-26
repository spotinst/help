<meta name="robots" content="noindex">

# Remediate

You can fix risks identified in Spot Security using the remediation flow.

You can remediate the risks using:
* [Automatic remediation from the Spot console](https://docs.spot.io/spot-security/features/analyze-risks/remediate?id=automatic-remediation-from-the-console)
* [Manual remediation](https://docs.spot.io/spot-security/features/analyze-risks/remediate?id=remediate-manually)

## Automatic Remediation from the Console
### Set Up Auto Remediation

1. In the left main menu, click **Spot Security** > **Administration**.
2. Click the **Auto Remediation** tab and click <img src="https://github.com/spotinst/help/assets/167069628/d5813c33-269c-4ee3-9cc3-cf66997bbc1e" height="14" /> to enable auto remediation. Only users with <i>Organization Admin</i> or <i>Spot Connect Full Access</i> can enable auto remediation.
   <details>
     <summary markdown="span">View image</summary>
   
     ![features-remediation-001](https://github.com/spotinst/help/assets/167069628/aa171688-aa28-40e6-b1d0-294256191187)

   </details>
 
3. Onboard your account to Spot Connect:

    <ol style="list-style-type: lower-alpha;">
      <li>At the top of the Administration page, click the Spot Connect link in the message.

   <details>
     <summary markdown="span">View image</summary>
   
   <img src="https://github.com/spotinst/help/assets/167069628/dbc2f36b-cb7d-418d-a95f-c41ffe4a3c70" width=40% />

   </details>
   </li>
   <li>Click <b>Add Account</b> and <a href="https://docs.spot.io/spot-connect/integrations/aws?id=configure-aws-in-spot-connect">configure AWS in Spot Connect</a>.</li>
   </ol>
   
4. You can give other users permissions for auto remediation:

   <ol style="list-style-type: lower-alpha;">
   <li>In Spot Connect, select the workspace <b>Spot Security Auto Remediation</b>.</li>
   <li>Go to <b>Settings</b> > <b>Workspace Users</b>.</li>
   <li>Update the permissions:
     <ul>
     <li>To onboard a new account to Spot Connect, select <b>Integration</b> <i>Create/Edit</i>.</li>
     <li>To activate an individual rule in Spot Security, select <b>Workflow</b> <i>Create/Edit</i>.</li>
     <li>To click <b>Run Remediation</b> in Spot Security, select <b>Workflow</b> <i>Execute</i>.</li>
     <li>To delegate access management to other users, select <b>Workspace</b> <i>Edit</i>. These users must also have <i>Organization Admin</i> or <i>Spot Connect Full Access</i>.</li>
     </ul>
   <details>
     <summary markdown="span">View image</summary>
     <img src="https://github.com/spotinst/help/assets/167069628/933d216a-b8a9-4ac9-8991-60cde9129463" width=60% />
   </details>
     <li>Click <b>Update</b>.</li>

  </ol>

5. Go to **Spot Security** > **Administration** > **Auto Remediation**.
6. Turn on **Activate** for the rules you want to use auto remediation for.
   <details>
     <summary markdown="span">View image</summary>
   
   ![features-remediation-004](https://github.com/spotinst/help/assets/167069628/2a5beb7b-19b1-4a0e-bb0e-9fe40a998629)

   </details>


### Run Remediation for Eligible Rules with Failed Assets

1. Go to the Risk Analysis Page and sort the list by the auto remediation column or filter on <i>auto remediation: eligible</i>.
2. Click on the failed assets link for a security rule that is eligible.
   <details>
     <summary markdown="span">View image</summary>
   
     ![features-remediation-005](https://github.com/spotinst/help/assets/167069628/3f4de98b-aef0-4266-ab71-0c8b11c3f68a)

   </details>
3. Select the eligible failed assets to remediate, and then click **Actions** > **Run Remediation**.
   <details>
     <summary markdown="span">View image</summary>
   
     <img src="https://github.com/spotinst/help/assets/167069628/83b58dbe-3ff0-4b84-a5ba-ae6be64565df" width=60% />

   </details>
4. You can select multiple risks to remediate, or click **Add New** to add one risk at a time.
   <details>
     <summary markdown="span">View image</summary>
   
     <img alt="features-remediation-007" src="https://github.com/spotinst/help/assets/167069628/6d8ae52b-9ffc-4417-b8af-be5225d3cdbd">

   </details>
5. Click **Remediate**.

### Recently Auto Remediated and Rollback

Once auto remediation starts, the asset is grayed out. If the remediation is successful, the asset still appears in the Failed Assets tab until the next scan removes it. 

You can see the remediated risks in the Recently Auto Remediated tab. Rollback risks by selecting them and clicking **Rollback**.

You can only Rollback risks where **Operation Type** is <i>Auto Remediation</i>, and less than 72 hours passed since you fixed it.
 <details>
  <summary markdown="span">View image</summary>
   
  ![features-remediation-008](https://github.com/spotinst/help/assets/167069628/1a74545c-7abd-4eb8-a966-52dd55e16426)

</details>

Select **Show Failed Execution** to see which auto remediation actions failed. You can add the Reason column to see more information about why it failed.
 <details>
  <summary markdown="span">View image</summary>
   
  ![features-remediation-009](https://github.com/spotinst/help/assets/167069628/3160f517-14b0-4169-8d7e-16c58262ee8a)

</details>


## Remediate Manually
You can get to the manual Remediation page from:

* **Security Dashboard**: click **Remediate** <img src="https://github.com/spotinst/help/assets/167069628/2dd70167-ae0b-47eb-9e32-902a3dd3a8a7" height="14" /> on a security rule.
* **Risk Analysis**: click **Remediate** <img src="https://github.com/spotinst/help/assets/167069628/2dd70167-ae0b-47eb-9e32-902a3dd3a8a7" height="14" /> on a failed asset, and then click **Remediation Steps**.


### Using CLI
Copy and paste the commands listed in Using AWS CLI. Replace the placeholder values with the actual asset details.

You can also edit the commands directly in the console before copying.

 <details>
  <summary markdown="span">View image</summary>
   
  <img src="https://github.com/spotinst/help/assets/167069628/536a855e-5528-4d3f-9447-dcdcd5610245" width=60% />

</details>


### Using AWS Console
Follow the steps listed to remediate in the AWS Console.

 <details>
  <summary markdown="span">View image</summary>
   
  <img width="515" alt="features-remediation-013" src="https://github.com/spotinst/help/assets/167069628/e224ea2e-d031-4d97-90ce-ee10c768a9ae">

</details>


### Using Python
Copy the code from Using Python. Replace the placeholder values with the actual asset details.

You can also edit the commands directly in the console before copying.

In addition, you can write Lambda functions to automate remediation using the Python script. This lets Spot automate remediations of security issues.

 <details>
  <summary markdown="span">View image</summary>
   
  <img src="https://github.com/spotinst/help/assets/167069628/bd152c3f-4fca-42a9-88a1-89c91b6e59e4" width=60% />

</details>
