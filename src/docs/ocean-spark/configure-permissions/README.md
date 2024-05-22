# Configure Permissions

This section details how to setup permissions for users of the **Ocean for Apache Spark** product.

If you're not familiar with how permissions work in Spot, we recommend you take a look at this section : [Permission Policies](/administration/policies)

## Overview

Ocean for Apache Spark let you configure permission policies for **Actions** for the following resource types:

- Clusters
- Apps
- Jobs
- Config-templates
- Workspaces

All these resource types at least bound to a **Cluster** resource.
In Ocean for Apache Spark, clusters are identified by an id with the format `osc-xxxxxxxx`

## Account-level Managed Permission Policies

To get started, you can use one of the following managed policies.  
They will apply at the account level. If you want to set permissions more granular, look at [Granular Permissions Policies How-to Guides section](#granular-permissions-policies-how-to-guides)

| Policy                                | Level        | Effect                                                    | Product Scope                                      | Ocean Spark Resource Scope                                                                      |
| ------------------------------------- | ------------ | --------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Account Viewer                        | Spot account | Give read access                                          | All Spot products including Ocean for Apache Spark | All Resources                                                                                   |
| Account Editor                        | Spot account | Give edit access<br>**including app submission**          | All Spot products including Ocean for Apache Spark | All Resources                                                                                   |

## Granular Permissions Policies How-to Guides

Patterns describe below are for "edit" actions only.
Users should have a read-access managed policies attached to their profile.

### How to define permissions for one or several clusters

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

### How to define permissions for a specific set of config-template

You can specify a clusterId and several configTemplateId like this :

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

You can also use a wildcard `*` in the config-template resource value like :

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

**Important Note:** If you specify several clusters and several config-templates,
it will allow users to do operations related to any config-template specified against any cluster specified, even if you declare several `statements` with different `resources` array

If you wish to only allow operations for a specific set of config-templates against a specific clusters, you'll need to use `condition` field.
For example if we want to allow a user to :

- use config-templates with pattern `ct-team-a-*` against `cluster-1` and `cluster-2`
- use config-templates with pattern `ct-notebook-*` only against `cluster-1`

The permission could look like this:

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

## Use cases

### Set permissions to isolate app submission by team

Let's say you want each of your team to have their own config-templates and to be able to only submit spark application for their config-template.

For each team, you can :

1. Create config-template using a specific pattern for the id
   For example : `team-A-config-template-1`, `team-A-config-template-2`, `team-B-config-template-1`

2. Attach a managed policy like `Account Viewer` to your users.

3. Create and attach one of the following policy by team using the condition operator `StringPatternMatch` :

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

If you want to also restrict the cluster users are allowed to submit to :

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

### Set permissions for notebook users

If you want to give your users only access to notebook feature using local Jupyter notebook or local JupyterLab instance,
you can use the following policy

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

If you want to allow notebook use only for a subset of config-template, you can have something like :

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

### Set permissions for workspace users

If you want to give your users only access to integrated workspace feature,
you can use the following policy

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

If you want to allow workspace use only for a subset of config-template, you can have something like :

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

If you want more complex rules and combination between resources, you can use the `condition` field,
you can learn more about it here: [Policy conditions](/administration/policies/create-new-policy?id=policy-conditions)

## Reference

All actions are listed below are "edit" permissions

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
