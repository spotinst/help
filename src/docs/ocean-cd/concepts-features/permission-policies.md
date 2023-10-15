# Permission Policies using Ocean CD

Ocean CD is part of the Spot by NetApp powerful role-based access control as it supports admin, editor and viewer level permissions.  

With Ocean CD, Granular Permissions users can be granted access to specific workloads, rollouts and edit Ocean CD SaaS entities. 

Using the granular permissions, users get visibility and can edit capabilities at the most granular level of Kubernetes cluster, namespace and workload. 

Complete the following steps in the procedure: 

## Create a Policy 

1. Click the user icon and click **Settings**. 

![permission-policies-1](https://github.com/spotinst/help/assets/106514736/726dd821-0024-45aa-95fe-e571ef45f240)

2. In the left menu, click **Organization** and then **Permission Policies**.  
3. Click **Create New Policy** on the right. 

![permission-policies-2](https://github.com/spotinst/help/assets/106514736/b80279c8-6eea-4d89-bc3e-0b770f8790da)

4. Enter a name for your policy as well as an optional description of its purpose. 
5. Select the **Organization Permissions** option, as Ocean CD operates at an organizational level. 
6. In the Service drop-down menu, select **Ocean CD**. When this is complete, all of the actions that Ocean CD offers as part of the permissions policies will be displayed. You can select the relevant policies as part of the console.  

![permission-policies-3](https://github.com/spotinst/help/assets/106514736/fcda46f4-d32f-4b7b-b037-c3518dc532e2)

**Note**: To create permissions that grant users limited access to specific resources such as workloads or rollouts or even SaaS entities, you need to use the JSON option found above the service dropdown and add customized conditions and resources.   

The templates below are for some possible combinations you might need:  

### Option 1: Limit Access to Specific Workloads 

You can limit access to specific workloads for any rollout or workload actions. As part of the JSON below, you have the ability to set actions and conditions objects. The action object depicts the action Ocean CD supports, and the condition dictates the restricted workloads (Cluster ID, Namespace, Workload Name and Workload Type) allowed to perform the actions.  
 
Only the four actions found in the template below allow the configuration of a condition object. 

**Meaning of the actions**:  

* "updateRolloutAction": Any action found as part of the detailed rollout page. These include the promote, fullpromote, rollback, manualpause and retry actions. 

* "restartWorkloadAction": A restart action found as part of the detailed workload page offered for LIVE revisions. 

* "rollbackWorkloadRevisionAction": A rollback action found as part of the detailed workload page offered for any non-LIVE revisions. 

* "retryWorkloadRevisionAction": A retry action found as part of the detailed workload page offered for latest rolledback revision only.

#### Template 1: Multiple Workloads Added in the Condition 

```json
{ 
  "statements": [ 
    { 
      "effect": "ALLOW", 
      "actions": [ 
        "oceancd:updateRolloutAction", 
        "oceancd:restartWorkloadAction", 
        "oceancd:rollbackWorkloadRevisionAction", 
        "oceancd:retryWorkloadRevisionAction" 
      ], 
      "resources": [ 
        "*" 
      ], 
      "condition": { 
        "Or": [ 
          { 
            "And": [ 
              { 
                "StringEquals": { 
                 "oceancdWorkloadName": "nginx-deployment" 
                } 
              }, 
              { 
                "StringEquals": { 
                  "oceancdNamespace": "my-ns" 
                } 
              }, 
              { 
                "StringEquals": { 
                  "oceancdClusterId": "my-cluster" 
                } 
              }, 
              { 
                "StringEquals": { 
                  "oceancdWorkloadType": "SpotDeployment" 
                } 
              } 
            ] 
          }, 
          { 
            "And": [ 
              { 
                "StringEquals": { 
                  "oceancdWorkloadName": "nginx-deployment-2" 
                } 
              }, 
              { 
                "StringEquals": { 
                  "oceancdNamespace": "my-ns" 
                } 
              }, 
              { 
                "StringEquals": { 
                  "oceancdClusterId": "my-new-cluster" 
                } 
              }, 
              { 
                "StringEquals": { 
                  "oceancdWorkloadType": "SpotDeployment" 
                } 
              } 
            ] 
          } 
        ] 
      } 
    } 
  ] 
}
```

#### Template 2: One Workload Added in the Condition

```json
{ 
  "statements": [ 
    { 
      "effect": "ALLOW", 
      "actions": [ 
        "oceancd:updateRolloutAction" 
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
              "oceancdNamespace": "nsjulia" 
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

#### Template 3: Multiple WorkloadNames for the Same ClusterID & Namespace

```json
{ 
  "statements": [ 
    { 
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
            "And": [ 
              { 
                "StringEquals": { 
                  "oceancdClusterId": "cluster-labs" 
                } 
              }, 
              { 
                "StringEqualsIgnoreCase": { 
                  "oceancdWorkloadType": "SpotDeployment" 
                } 
              }, 
              { 
                "StringEquals": { 
                  "oceancdNamespace": "nsjulia" 
                } 
              }, 
              { 
                "Or": [ 
                  { 
                    "StringEquals": { 
                      "oceancdWorkloadName": "nginx-malki" 
                    } 
                  }, 
                  { 
                    "StringContains": { 
                      "oceancdWorkloadName": "Michael" 
                    } 
                  } 
                ] 
              } 
            ] 
          } 
        ] 
      } 
    } 
  ] 
}
```

**Rules**:  

* Supported values-based operator: 
  * StringEquals  
  * StringNotEquals  
  * StringContains  
  * StringEqualsIgnoreCase  

* If the ClusterID, Namespace, WorkloadName or WorkloadType parameters are not set, Spot will translate it to “*”. 

### Option 2: Limit Actions to Specific SaaS Entities 

The ability to update and delete entities can be granted with limited access by using the resources object. Provide the name of the entity using the syntax below. **If the resources object is set, conditions can not be set in parrallel**.  

In addition, each entity should have its own policy. There should not be two different entities making use of the resources field.  

Actions of Create type entities can not be set if the resources object is in use.  

```json
{ 
  "statements": [ 
    { 
      "effect": "ALLOW", 
      "actions": [ 
        "oceancd:updateStrategy", 
        "oceancd:deleteStrategy" 
      ], 
      "resources": [ 
        "oceancdStrategyName:mystrategy", 
        "oceancdStrategyName:my-new-strategy" 
      ] 
    } 
  ] 
}
```

### Option 3: Granting Access to all Actions Found as Part of Ocean CD 

**If no resources or condition objects are used**, all of the Ocean CD actions can be in the same policy.  

```json
{ 
  "statements": [ 
    { 
      "effect": "ALLOW", 
      "actions": [ 
        "oceancd:createRolloutSpec", 
        "oceancd:createVerificationProvider", 
        "oceancd:updateVerificationProvider", 
        "oceancd:patchVerificationProvider", 
        "oceancd:updateStrategy", 
        "oceancd:restartWorkloadAction", 
        "oceancd:deleteRolloutSpec", 
        "oceancd:deleteVerificationTemplate" 
      ], 
      "resources": [ 
        "*" 
      ] 
    } 
  ] 
}
```

The process is complete to grant the policies to your editor users. Refer to the folowing documentation to do so: https://docs.spot.io/administration/users-a/create-new-user. 

**Read-only users**: 

* Have access to the entire console.  
* Can not perform actions.  

**Admin users**: 

* Can perform as many actions as needed.  
