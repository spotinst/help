# Permission Policies

In Spot, a permission policy is a set of one or more permissions. When a policy is attached to a [user](administration/users-a/) or a [group](administration/groups/) of users, the policy grants its permissions to those users. A permission policy can apply to one or more individual Spot accounts, or a policy can apply to an entire Spot organization.

A permission allows a user access to a Spot service (such as Ocean or Elastigroup) and specifies which actions a user can take.

## Default Permission Policies

Spot comes with a number of default policies. You can use these out of the box and create new policies that are specific to your organization.

- Account-level permissions:
  - Account Editor
  - Account Viewer
  - Elastigroup Full Access
  - Ocean Full Access
- Organization-level permissions:
  - Credit Card Editor
  - Cloud Analyzer Editor
- Organization and account-level permissions
  - Admin

## Custom Policy Conditions

Custom policy conditions give you more control of your Spot resources on the organization and account level:

* Condition operators that contain the condition keys:
  - Resource retrieval
  - Resource attribute
* Condition values (attribute value) that should match keys and values received for the given resource in the request.

You can allow or deny access to a specific resource if the condition in the policy matches the requested data (such as resource name, resource inner configuration).

This is supported for AWS and Azure users.

## Policy Rules

These rules apply to policies:

* An action that is not explicitly allowed by a policy is denied by default.
* A policy-based user with no policies is equivalent to a viewer user. Organization administrators, account editors, and policy-based users with the proper permissions are able to grant permissions.
* All API tokens that belong to you are affected by your current policy.
* Permissions to create objects (such as <i>elastigroup:create*</i>) do not grant permissions on the created objects themselves.
  
## Create a Permission Policy

1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Click **Organization** > **Permission Policies** > **Create New Policy**.
3. Enter a **Policy Name** (and **Policy Description**).
4. Select the type of **Permission Management**:
   * **Account Permissions**: These permissions are for products and services that have resources at the account level. You select the relevant accounts separately for each user or group once you attach the policy to them.
   * **Organization Permissions**: These permissions are for products and services that have resources at the organization level.
  
   > **Note**: Keep in mind that once a policy has been created, you cannot change the policy type.

5. Click **Continue**.
6. Select the **Service** and **Effect**:
   * <i>Allow</i> means that actions marked are allowed. Any unmarked items are not allowed. This is the default behavior for defining a service.
   * <i>Deny</i> means that actions marked are denied. Any unmarked items will not be denied.
7. Select the **Actions** for the Service. If you do not want to allow all of the high level actions included in the standard set of actions, remove the selection from the high level action and select only the specific actions.
   <details>
   <summary markdown="span">Example of create actions for the Elastigroup service</summary>

   Since the **Delete** action is unmarked, this policy will not allow users to delete anything in Elastigroup.
 
   <img src="https://github.com/user-attachments/assets/72c61b07-7867-4909-a7dd-1210bb7ca2cb">

  </details>
   
## Edit the JSON

1. In a permission policy, click **JSON**.
2. Turn on **Edit Mode**.
   
   ![policy2](https://github.com/user-attachments/assets/af3f9855-b464-4af8-a18d-7b18610abbe4)

### Statements

A statement includes:

* **Effect** allows or denies actions. Values are <i>ALLOW</i> or <i>DENY</i>.
* **Actions** is an array of actions formatted as <i>[serviceName]:[actionName]</i>. You can use wildcards (*) in the <i>[serviceName]</i> and <i>[actionName]</i>:
   * <i>elastigroup:update</i>
   * <i>ocean:roll</i>
   * <i>elastigroup:describe*</i> allows all <i>Describe</i> actions, such as <i>-elastigroup:describeDeployments</i>, <i>elastigroup:describeGroup</i>
* **elastigroup:*** will allow all Elastigroup actions.
* **Resources** is an array of resources formatted as <i>[serviceName]:[actionName]</i>. A resource representsa Spot resource, such as an Ocean cluster or an Elastigroup. The effect and actions are applied to the resource. You can use wildcards (*) in the <i>[serviceName]</i> and <i>[actionName]</i>:
   * All resources: <i>*</i>
   * All Elastigroup resources: <i>elastigroup:*</i>
   * All groups starting with sig-214: <i>sig-214*</i>

### Policy Conditions

Custom policy conditions let you create conditions within policies for granular control. Supported resources include Spot managed AWS, Azure, and Ocean CD resources.

Conditions include:

* **Logical operator** (optional) defines the logic between the value based operators.

  >**Note**: Using a logical operator requires at least two value-based operators.

* **Value-based operator**:  
    - <i>StringEquals</i> compares two strings and returns <i>true</i> if equals, otherwise returns <i>false</i>.
    - <i>StringNotEquals</i> compares two strings and returns <i>false</i> if equals, otherwise returns <i>true</i>.
    - <i>StringContains</i> compares two strings and returns <i>true</i> if the first string contains the second, otherwise returns <i>false</i>.
    - <i>StringEqualsIgnoreCase</i> compares two strings and returns <i>true</i> if the strings are in the same length, and corresponding characters in the two strings are equal ignoring case.
    - <i>StringPatternMatch</i> compares two strings and returns <i>true</i> if the string matches the given regular expression.

  If the condition contains more than one condition operator, <i>AND</i> is used between them. This means that all the operators should return <i>true</i>.

* **Resource retrieval** supports AWS, Azure, and Ocean CD resources.
  This part is responsible for the definition of which resource should be tested with the condition operator. It consists of a Spot prefix (`spot`) and resource name (such as `elastigroup`, `ocean`), separated by a colon `:`.
  When specifying an Ocean CD resource, use:

  ```
   "resources": [
     "oceancdStrategyName:iair-julia-test-copy"
  ],
   ```

* **Resource attribute** is an optional name, tags, or resource attribute. Examples for a full resource retrieval definition:  
   - "spot:ocean:name"
   - "spot:elastigroup:tags/Email"

   > **Note**: Ocean CD resources are a combination of resource retrieval and resource attribute. For example:
   > - oceancdClusterId
   > - oceancdWorkloadName
   > - oceancdWorkloadType
   > - OceancdNamespace

* **Attribute value** is a single string, single variable (such as `${spot:userEmail}`), or array of values. You can have multiple attribute values for the same field. For example, `spot:elastigroup:name": ["elastigroup-1","elastigroup-2"]` and  **OR** is used between them.


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Example 1: Update Elastigroup resource</summary>

<div style="padding-left:16px">

This policy lets users with example@mail.com email address update the Elastigroup resource:

<pre>
{
    "group": {
        "name": "eg-example",
        "compute": {
            "launchSpecification": {
                "tags": [
                    {
                        "tagKey": "DeveloperEmail",
                        "tagValue": "example@mail.com"
                    }
                ]
            }
        }
    }
}
</pre>

This policy checks for the `DeveloperEmail` tag, and lets users with this email address perform the update Elastigroup action.

<pre>
{
    "statements": [
        {
            "effect": "ALLOW",
            "actions": [
                "elastigroup:updateGroup"
            ],
            "resources": [
                "*"
            ],
            "condition": {
                "StringEquals": {
                    "spot:elastigroup:tags/DeveloperEmail": "${spot:userEmail}"
                }
            }
        }
    ]
}
</pre>

</div>
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Example 2: Resource name contains</summary>

<div style="padding-left:16px">

  This policy lets enables performing Ocean-related operations on clusters with names containing <i>ocean-example-1</i> or <i>ocean-example-2</i>.

<pre>
{
    "statements": [
        {
            "effect": "ALLOW",
            "actions": [
                "ocean:*"
            ],
            "resources": [
                "*"
            ],
            "condition": {
                "StringEqualsIgnoreCase": {
                    "spot:ocean:name": ["ocean-example-1", "ocean-example-2"]
                }
            }
        }
    ]
}
</pre>

</div>
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Example 3: Ocean CD Workload Policy</summary>

<div style="padding-left:16px">
    
This policy enables restarting workloads on Ocean CD with specific conditions, including cluster ID, workload type, namespace, and workload name. For example:
* Workload type - “SpotDeployment”
* Cluster id - “cluster-labs”
* Namespace - “nslab”
* Workload name equals “workload1” or contains “workload2”

<pre>
{
    "statements": [{
        "effect": "ALLOW",
        "actions": [
            "oceancd:restartWorkloadAction"
        ],
        "resources": [
            "*"
        ],
     "condition": {
        "And": [
          {
            "StringEquals": {
              "oceancdWorkloadName": "nginx-deployment"
            }
          },
          {
            "StringEquals": {
              "oceancdNamespace": "nslab"
            }
          },
          {
            "StringEquals": {
              "oceancdClusterId": "cluster-labs"
            }
          },
          {
            "StringEquals": {
              "oceancdWorkloadType": "SpotDeployment"
            }
          }
        ]
      }
    }
  ]
}  
</pre>

  
</div>
 </details>

