<meta name=“robots” content=“noindex”>

# This is my heading 1

<!-- This content will not appear in the rendered Markdown let's see if it really works -->

You can automatically enroll AWS member accounts as new Spot accounts using StackSets. 

## StackSets Template 

Use a [StackSets template](https://s3.us-east-1.amazonaws.com/spot-iam-permissions/finops-onboarding-stackset.yaml) to automatically create stack instances of a [StackSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html) in new AWS accounts. 

The only required parameter for this template is a Spot API token with administrator privileges. 

Each stack instance creates these resources in the target AWS account: 

* **SpotManagedPolicy**: Gives Spot access to certain services in the AWS account. It is attached to the SpotRole resource. Spot creates a unique policy for each Spot product being utilized. Policies contain permissions and group them together so it’s easier to see which permissions are required for each product. 
* **SpotinstCostIntelligencePolicy**: Gives Spot access required by Cost Intelligence. This is optional and will only be created if the Cost Intelligence enrollment option is selected. 
* **SpotRole**: Manages AWS resources according to SpotManagedPolicy and other optional policies. 
* **SpotAccount**: A Lambda-backed resource. This will potentially create a new Spot account that will be later linked to the AWS account. The name of the Spot account defaults to the AWS account’s ID. If there already is a Spot connected to the current AWS account, it will retrieve its ID. 
The generated Lambdas don’t have permissions granted to them. They are unable to modify any other resources within the AWS account. 
* **SpotExternalId**: The external ID used by Spot for AssumeRole on the SpotRole resource. 
* **SpotLinkedCredentials**: Creates the actual link between the AWS account and the Spot account. 
* **RenamedSpotAccountByAlias**: This Lambda-backed resource renames the newly associated Spot account to the current AWS account’s alias (billing name). This resource is optional. Remove this resource from the template if you don’t want the accounts renamed. 
* **EnableCostIntelligence**: The Lambda-backed resource that communicates with the Spot API to enroll in Cost Intelligence. 

## Important 

Lambda-backed resources used in this template are not provisioned in any of your AWS accounts. 

If the stack is created in an AWS account that is: 

* **Not connected to a Spot account**: a new Spot account is automatically created. The Spot account name defaults to the AWS account ID. 
* **Already connected to a Spot account**: the stack uses the existing Spot account. It creates a new policy and role and applies them to the account. **It also renames the Spot account** if the RenamedSpotAccountByAlias resource is included. If the stack is later deleted, it will delete this Spot account even though the account wasn’t originally created by the stack. 
* **Already connected to more than one Spot account**: stack creation fails. 

StackSets doesn't deploy stack instances to the organization management account. This is true even if the organization management account is in your organization or in an organization unit. See the [AWS documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html). 

## Prerequisites 

To use the Spot onboarding StackSets, you’ll need to: 

* Create a [Spot API token](administration/api/create-api-token) with admin access. 
* [Enable Trusted Access](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html) with AWS organizations. 
* Verify that your Spot organization can create additional Spot accounts. Contact the support team if you’re unsure about this permission. 
* Recommended: the organization management account is onboarded for [Billing Engine](billing-engine/get-started/connect-aws) and [Cost Intelligence](cost-intelligence/get-started/connect-aws) using the Spot Console. 
* Have an AWS management account (main account). 
* Have an AWS member account nested under an organizational unit (secondary account). 

## Create StackSets in the AWS Management Account 
<ol type="1">
<li>Log in to the AWS console and click **CloudFormation**.</li>
<li>Click **StackSets** and then click **Create StackSets**. </li>
<li>Choose a template:
<ul>
  <li>Upload the template file for the StackSets and click **Next**. </li>
  <li>Click **Amazon S3 URL**, enter this URL https://s3.us-east-1.amazonaws.com/spot-iam-permissions/finops-onboarding-stackset.yaml, and click **Next**.</li>
  <p>![stacksets-1](https://github.com/spotinst/help/assets/106514736/ca14fbad-eb28-48b4-b58b-51344092fce1)</p>
</ul></li>
<li>In the Specify StackSet details section, enter these fields, and click **Next**:
  <ul>
    <li>Name (optional)</li>
    <li>Description (optional)</li>
    <li>Spot API token with administrative privileges (required)</li>
    <li>Include the Spot Policy for Elastigroup and Ocean (default true)</li>
    <li>Include the Spot Policy for Cost Intelligence (default true)</li>
  </ul>
</li>
<li><p>In the Configure StackSets options section, you can optionally enter the key and value to tag the StackSets.</p>
<p>![stacksets-2](https://github.com/spotinst/help/assets/106514736/ce471c00-488c-4b49-a728-c4c1c1c71cc2)</p></li>
<li>The Set deployment options section defines how stacks of the StackSets are deployed. </li>
<li>In Deployment targets:
<ol type="a">
  <li>click **Deploy to organization units (OUs)** and enter the AWS OU ID where you want the stacks created.</li>
  <li>click **Automatic deployment: enabled** to auto-deploy AWS accounts under the management account.</li>
  <li>Milk</li>
</ol></li>
<li>In Specify regions, select a single region to create a Spot account for every new AWS account. It doesn’t matter which region you select—the policy will grant access to all regions in your AWS account.</li>
<li><p>Click **Submit**.</p>
<p>A new Spot account will be created for the AWS member account. The two accounts will be connected, and the Spot account will be renamed to match the AWS billing alias. </p> </li>
</ol>

---
---
---


# This is the H1
**bold text below the heading**
## This is the h2
>block quote after the h2
1. List item 1
2. list item 2
   * bullet 1
   * bullet 2
3. list item 3
    1. indented list item 1
    2. indented list item 2
4. list item 4

another list test - ol type a
<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

yet another list test - style type text/css
<style type="text/css">
    ol { list-style-type: upper-alpha; }
</style>

### this is the h3
'code just cuz'
---
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```

Let's see how this all works....
