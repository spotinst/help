# Configure Permissions

This topic describes setting up permissions for **Ocean for Apache Spark** product users.

If you're unfamiliar with how permissions work in Spot, see [Permission Policies](/administration/policies).

## Overview

Ocean for Apache Spark lets you configure permission policies for **Actions** for these resource types:

- Clusters
- Apps
- Jobs
- Configuration templates
- Workspaces

All these resource types are at least bound to a **Cluster** resource.
In Ocean for Apache Spark, clusters are identified by an id with the format `osc-xxxxxxxx`

## Account-Level Managed Permission Policies

To get started, you can use one of the following managed policies, which apply at the account level.  
If you want to set permissions with more granularity, see [Granular Permissions Policies How-to Guides](#granular-permissions-policies-how-to-guides).

| Policy                                | Level        | Effect                                                    | Product Scope                                      | Ocean Spark Resource Scope                                                                      |
| ------------------------------------- | ------------ | --------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Account Viewer                        | Spot account | Give read access                                          | All Spot products including Ocean for Apache Spark | All Resources                                                                                   |
| Account Editor                        | Spot account | Give edit access<br>**including app submission**          | All Spot products including Ocean for Apache Spark | All Resources                                                                                   |

## Granular Permissions Policies How-to Guides

The patterns described below are for "edit" actions only.
Users should have read-access managed policies attached to their profile.

### How to Define Permissions for One or Several Clusters

Cluster is the default resource to scope a permission policy.
You can do it by using the `resources` field in the policy :

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": ["spark:*"],
      "resources": [
        "sparkClusterId:osc-cluster1",
        "sparkClusterId:osc-cluster2",
        "sparkConfigTemplateId:*",
        "sparkJobId:*"
      ]
    }
  ]
}
```

### How to Define Permissions for a Specific Set of config-templates

You can specify a clusterId and several configTemplateId like this:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": ["spark:*"],
      "resources": [
        "sparkClusterId:osc-cluster1",
        "sparkConfigTemplateId:config-template-1",
        "sparkConfigTemplateId:config-template-2",
        "sparkJobId:*"
      ]
    }
  ]
}
```

You can also use a wildcard `*` in the config-template resource value like this:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": ["spark:*"],
      "resources": [
        "sparkClusterId:osc-cluster1",
        "sparkConfigTemplateId:config-template-*-abc-*",
        "sparkJobId:*"
      ]
    }
  ]
}
```

> **Important Note 1:** If you specify several clusters and several config-templates,
> it will allow users to do operations related to any config-template specified against any cluster specified, even if you declare several `statements` with different `resources` arrays

> **Important Note 2:** If you want to force users to use a `configTemplateId` in-app submissions, use the `condition` field as described below.

Use the 'condition' field to allow operations only for a specific set of config templates against a specific set of clusters.
For example, to allow a user to:

- use config-templates with pattern `ct-team-a-*` against `cluster-1` and `cluster-2`
- use config-templates with pattern `ct-notebook-*` only against `cluster-1`

The permission might look like this:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": ["spark:*"],
      "resources": ["*"],
      "condition": {
        "Or": [
          {
            "And": [
              {
                "Or": [
                  {
                    "StringEquals": {
                      "sparkClusterId": "osc-cluster1"
                    }
                  },
                  {
                    "StringEquals": {
                      "sparkClusterId": "osc-cluster2"
                    }
                  }
                ]
              },
              {
                "StringPatternMatch": {
                  "sparkConfigTemplateId": "ct-team-a-*"
                }
              }
            ]
          },
          {
            "And": [
              {
                "StringEquals": {
                  "sparkClusterId": "osc-cluster1"
                }
              },
              {
                "StringPatternMatch": {
                  "sparkConfigTemplateId": "ct-notebook-*"
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

## Use Cases

### Set Permissions to Isolate App Submission by Team

Let's say you want each of your teams to have their own config-templates and to be able only to submit Spark applications using their config-templates.

For each team, you can:

1. Create config-templates using a specific pattern for the id
   For example : `team-A-config-template-1`, `team-A-config-template-2`, `team-B-config-template-1`

2. Attach a managed policy like `Account Viewer` to your users.

3. Create and attach one of the following policies by team:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": [
        "spark:createApplication",
        "spark:deleteApplication", // optional
        "spark:createConfigTemplate",
        "spark:updateConfigTemplate",
        "spark:deleteConfigTemplate"
      ],
      "resources": ["sparkClusterId:*", "sparkConfigTemplateId:team-a*"]
    }
  ]
}
```

If you also want to restrict which cluster users are allowed to submit applications to:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": [
        "spark:createApplication",
        "spark:deleteApplication", // optional
        "spark:createConfigTemplate",
        "spark:updateConfigTemplate",
        "spark:deleteConfigTemplate"
      ],
      "resources": [
        "sparkClusterId:osc-xxxxxx",
        "sparkConfigTemplateId:team-a*"
      ]
    }
  ]
}
```

If you want to **force users to use a config-template when submitting an app**, use the `condition` field like this:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": [
        "spark:createApplication",
        "spark:deleteApplication", // optional
        "spark:createConfigTemplate",
        "spark:updateConfigTemplate",
        "spark:deleteConfigTemplate"
      ],
      "resources": ["*"],
      "condition": {
        "And": [
          {
            "StringEquals": {
              "sparkClusterId": "osc-xxxxxx"
            },
            "StringPatternMatch": {
              "sparkConfigTemplateId": "ct-team-a-*"
            }
          }
        ]
      }
    }
  ]
}
```

### Set Permissions for Notebook Users

If you want to give your users access to the notebook feature using local Jupyter notebooks or a JupyterLab instance,
you can use this policy:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": [
        "spark:createApplication",
        "spark:deleteApplication",
        "spark:createNotebook",
        "spark:updateNotebook",
        "spark:deleteNotebook"
      ],
      "resources": ["*"]
    }
  ]
}
```

If you want to allow notebook use only for a subset of config-templates, you can do it like this:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": [
        "spark:createApplication",
        "spark:deleteApplication",
        "spark:createNotebook",
        "spark:updateNotebook",
        "spark:deleteNotebook"
      ],
      "resources": [
        "sparkClusterId:osc-xxxxxx",
        "sparkConfigTemplateId:team-a*"
      ]
    }
  ]
}
```

### Set Permissions for Workspace Users

If you want to give your users only access to the integrated notebook workspace feature,
you can use this policy.

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": [
        "spark:createApplication",
        "spark:deleteApplication",
        "spark:createNotebook",
        "spark:updateNotebook",
        "spark:deleteNotebook",
        "spark:createWorkspace",
        "spark:updateWorkspace",
        "spark:deleteWorkspace",
        "spark:createWorkspaceProxy",
        "spark:updateWorkspaceProxy",
        "spark:deleteWorkspaceProxy"
      ],
      "resources": ["*"]
    }
  ]
}
```

If you want to allow workspace use only for a subset of config-templates, you can do it like this:

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": [
        "spark:createApplication",
        "spark:deleteApplication",
        "spark:createNotebook",
        "spark:updateNotebook",
        "spark:deleteNotebook",
        "spark:createWorkspace",
        "spark:updateWorkspace",
        "spark:deleteWorkspace",
        "spark:createWorkspaceProxy",
        "spark:updateWorkspaceProxy",
        "spark:deleteWorkspaceProxy"
      ],
      "resources": [
        "sparkClusterId:osc-xxxxxx",
        "sparkConfigTemplateId:team-a*"
      ]
    }
  ]
}
```

## Advanced Policy Patterns

If you want more complex rules and combinations between resources, you can use the `condition` field.
Learn more here: [Policy conditions](/administration/policies/create-new-policy?id=policy-conditions)

## Reference

All actions listed below are "edit" permissions

| Actions                                                                                      | Resources bound                                 |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `spark:createApplication`                                                                    | - `sparkClusterId`<br>- `sparkConfigTemplateId` |
| `spark:deleteApplication`                                                                    | - `sparkClusterId`                              |
| `spark:createCluster`<br>`spark:updateCluster`<br>`spark:deleteCluster`                      | - `sparkClusterId`                              |
| `spark:createConfigTemplate`                                                                 | - `sparkClusterId`                              |
| `spark:updateConfigTemplate`<br>`spark:deleteConfigTemplate`                                 | - `sparkClusterId`<br>- `sparkConfigTemplateId` |
| `spark:createNotebook`<br>`spark:updateNotebook`<br>`spark:deleteNotebook`                   | - `sparkClusterId`                              |
| `spark:createWorkspace`<br>`spark:updateWorkspace`<br>`spark:deleteWorkspace`                | - `sparkClusterId`                              |
| `spark:createWorkspaceProxy`<br>`spark:updateWorkspaceProxy`<br>`spark:deleteWorkspaceProxy` | - `sparkClusterId`                              |
| `spark:updateJob`<br>`spark:updateConfig`                                                    | - `sparkClusterId`<br>- `sparkJobId`            |
| `spark:createVirtualNodeGroup`<br>`spark:deleteVirtualNodeGroup`                             | - `sparkClusterId`                              |
