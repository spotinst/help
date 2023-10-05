# Create Permission Policy

Creating a [permission policy](administration/policies/) enables you to define the granted permissions that are set for groups and users inside the organization. You can choose the policy type, and specify which services and actions are included. The detailed procedures are described below.

## Get Started
1. Click the User icon in the Spot console and click **Settings**.

<img src="/administration/_media/create-new-user-01.png" width="381" height="258" />

2. Under Organization in the left menu, click **Permission Policies**, then on the right, click **Create New Policy**.

<img src="/administration/_media/create-policy-01.png" />

The Create New Policy wizard opens.

## Create New Policy
1. Enter a name for the policy.
2. Enter a few words describing the purpose of the policy.

<img src="/administration/_media/create-policy-02.png" />

3. Under Permission Management, choose the type of policy to create. There are two types of policies:
   - Account: These permissions relate to products and services that have resources at the account level. You will select the relevant accounts separately for each user or group once you attach the policy to them.
   - Organization: The permissions relate to products and services that have resources at the organization level.

Once a policy has been created, you can not change the policy type.

### Service

A service can allow use of a particular product within the Spot Suite, such as Ocean or Elastigroup. It could also provide a specific function such as Setup.

Choose the relevant service (e.g., Ocean, Elastigroup) for the policy.

<img src="/administration/_media/create-policy-03.png" width="421" height="101" />

### Actions

Once you choose a service, the service opens below with its set of standard Create, Update, and Delete actions that are granted with the service.

<img src="/administration/_media/create-policy-04.png" width="406" height="166" />

### Manually Selection of Actions

If you do not want to allow all of the high level actions included in the standard set of actions, uncheck **All Actions**. Then you can mark only the specific high level actions to be allowed.

If you need more granular control of the actions to be allowed, click one of the arrows. For example, when you click the arrow by Create, a list of individual Create actions allowed for this service opens.

Mark any actions that will be allowed.

Below is an example of the individual Create actions for the Elastigroup service. Since the Delete action is unmarked, this policy will not allow the users to delete anything in Elastigroup.

<img src="/administration/_media/create-policy-05.png" />

### Effect

You can control the logic used to allow and deny actions.
- Allow: Means that actions marked are allowed. Any unmarked items will not be allowed. This is the default behavior for defining a service.
- Deny: Means that actions marked are denied. Any unmarked items will not be denied.

## Add Permissions

To add more permissions, click Add Permissions by the plus sign at the bottom. This enables you to add additional services and their related actions.

## Remove

To remove a service and all of its corresponding actions, click the Trash icon on the right.

## Edit the JSON

You can also edit a policy using the JSON format. To edit the policy using the JSON editor, complete the following steps:

1. Open an existing permission policy or create a new one, navigate to the **Services and permissions**, click **JSON**.
2. Enable the **Edit Mode** to enable editing the JSON file.

<img src="/administration/_media/create-policy-06.png" />

### Statements

A statement contains the following elements:

* **Effect** – Determines whether the following actions are allowed or denied. The value for this field can be either ALLOW or DENY.

* **Actions** – An array of actions defined by the pattern [serviceName]:[actionName]. Using wildcards (*) is supported both in the [serviceName] and in the [actionName] parts.  
Examples:
  - elastigroup:update
  - ocean:roll
  - elastigroup:describe* will allow all Describe actions, for example: -elastigroup:describeDeployments, elastigroup:describeGroup, etc.
- elastigroup:* will allow all Elastigroup actions.

* **Resources** – An array of resources to which the actions and effect apply (Using camelCase). Each one represents a Spot resource (e.g., Ocean cluster, Elastigroup). A resource is defined by the pattern: [serviceName]:[ResourceId]. Wildcards (*) are supported in [serviceName] and [actionName].  
Examples:
- all resources: *
- all Elastigroup resources: elastigroup:*
- all groups starting with sig-214: sig-214*

### Policy Rules
The following rules apply to policies:
* An action that is not explicitly allowed by a policy is denied by default.
* A policy-based user with no policies is equivalent to a viewer user. Organization administrators, account editors, and policy-based users with the proper permissions are able to grant permissions.
* All API tokens that belong to you will be affected by the your current policy.
* Permissions to create objects (for example: elastigroup:create*) do not grant permissions on the created objects themselves.

### Policy Conditions

Custom policy conditions enables you to create conditions within policies for granular control.

Supported resources include Spot managed AWS, Azure, and Ocean CD resources.

**Conditions consist of five parts**:

* **Logical operator** (optional):  

Defines the logic between the value based operators.

>**Note**: Using a logical operator requires at least two value-based operators.

* **Value-based operator**:  
    - StringEquals - Compares two strings and returns true if equals, otherwise returns false.
    - StringNotEquals - Compares two strings and returns false if equals, otherwise returns true.
    - StringContains - Compares two strings and returns true if the first string contains the second, otherwise returns false.
    - StringEqualsIgnoreCase - Compares two strings and returns true if the strings are in the same length, and corresponding characters in the two strings are equal ignoring case.
    - StringPatternMatch – Compares two strings and returns true if the string matches the given regular expression.

In case the condition contains more than one condition operator, an **AND** will be 	used between them.
This means that all the operators should return true.

* **Resource retrieval**:  
Currently supports AWS, Azure, and Ocean CD resources.
This part is responsible for the definition of which resource should be tested with the condition operator. It consists of a Spot prefix (`spot`) and resource name (`elastigroup`, `ocean`, etc.), separated by the character:
When specifying an Ocean CD resource, the correct usage should be:

```
"resources": [
    "oceancdStrategyName:iair-julia-test-copy"
  ],
```

* **Resource attribute**:  
Name, tags, or resource attribute (optional).
Examples for a full resource retrieval definition:  
  - "spot:ocean:name"
  - "spot:elastigroup:tags/Email"

**Note**: Ocean CD resources are a combination of resource retrieval and resource attribute. For example:

  - oceancdClusterId
  - oceancdWorkloadName
  - oceancdWorkloadType
  - OceancdNamespace

* **Attribute value**:
Single string, single variable (e.g., ${spot:userEmail}), or array of values.
Multiple attribute values of the same field is possible  
(e.g `spot:elastigroup:name": ["elastigroup-1","elastigroup-2"]`, In this case the logical `OR` will take place.

### Policy Conditions Examples

**Example 1: Update Elastigroup resource**

Given an Elastigroup resource:

```json
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
```
The following policy will allow users with example@mail.com email address to update the Elastigroup resource:

```json
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
```

The policy checks the existence and value of the `DeveloperEmail` tag, and permits users with this email address to perform the update Elastigroup action.

**Example 2: Resource name contains**

```json
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
```

The policy enable performing ocean-related operations on clusters with names containing `ocean-example-1` or `ocean-example-2`.

**Example 3: Ocean CD Workload Policy**

```json
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
```   

The policy enables restarting workloads on Ocean CD with specific conditions, including: cluster ID, workload type, namespace, and workload name.

* Workload type - “SpotDeployment”
* Cluster id - “cluster-labs”
* Namespace - “nslab”
* Workload name equals to “workload1” or contains “workload2”

## What’s Next?

Learn how to [edit a permission policy](administration/policies/edit-policy-details) once you have created it.
