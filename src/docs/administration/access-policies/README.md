<meta name="robots" content="noindex">

# Access Policies

Access policies enable you to create customized and granular permissions in an account. In an access policy, you can define permissions:

- Per service, e.g., access to Elastigroup, but not to Ocean
- Per action, e.g., access to createBudget, but not to deleteBudget
- Per resource, e.g., access to groups starting with sig-214\*

Access policies are defined at the account level and apply only to users in the account they are defined in. Policies can be applied to UI users and programmatic users.

## Structure of an Access Policy

An Access Policy consists of the following parameters:

- Name – A name to identify the policy. Must be unique per account.
- Description – Free text used to describe the policy or its purpose.
- Policy Content – A JSON document that contains the content of the policy in the form of one or more permissions objects called Statements.

## Statements

A statement contains the following elements:

- Effect – Determines whether the following actions are allowed or denied. ALLOW or DENY
- Actions – An array of actions defined by the pattern [serviceName]:[actionName]. Using wildcards (\*) is supported both in the [serviceName] and in the [actionName] parts. Examples:
  - `elastigroup:update`
  - `ocean:roll`
  - `elastigroup:describe*` will allow all Describe actions, for example: elastigroup:describeDeployments, elastigroup:describeGroup, etc.
  - `elastigroup:*` will allow all Elastigroup actions.
- Resources – An array of resources to which the actions and effect apply (Using camelCase). Each one represents a Spot resource (e.g., Ocean cluster, Elastigroup). A resource is defined by the pattern: [serviceName]:[ResourceId]. Wildcards (\*) are supported in [serviceName] and [actionName]. Examples:
  - `–` all resources.
  - `elastigroup:*` – all Elastigroup resources.
  - `elastigroup:sig-214*` – all groups starting with `sig-214`.

## Policy Content Example

```json
{
  "statements": [
    {
      "effect": "ALLOW",
      "actions": ["elastigroup:describeAllGroups"],
      "resources": ["*"],
    }
  ]
}
```

## Policy Rules

The following rules apply to policies:

- An action that is not explicitly allowed by a policy is denied by default.
- A policy-based user with no policies is equivalent to a viewer user.
  Organization Administrators, Account Editors, and policy-based users with the proper permissions are able to grant permissions.
- All API tokens belonging to the user will be affected by the user's current policy.
- Permissions to create objects (for example: elastigroup:create\*) do not grant permissions on the created objects themselves.

## What's Next?

See the full list of [access policy actions](administration/access-policies/access-policy-actions).
