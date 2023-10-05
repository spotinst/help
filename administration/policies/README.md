# Permission Policies

In Spot, a *permission policy* (also referred to as a policy) is a set of one or more permissions. When a policy is attached to a [user](administration/users-a/) or a [group](administration/groups/) of users, the policy grants its permissions to those users. A permission policy can apply to one or more individual Spot accounts, or a policy can apply to an entire Spot organization.

A *permission* allows a user access to a Spot service (e.g., Ocean and Elastigroup in the illustration below) and specifies which actions a user can take.

<img src="/administration/_media/policies-01.png" />

## How it Works

We make it really easy for you to create a new policy with the creation wizard. The wizard includes the simple steps summarized below. For the detailed procedures, see Create New Policy.
1. You define the most basic policy details such as the policy name and a brief description of the policy purpose.
2. You define the policy type, which can be either Organization or Account. Policy type cannot be changed after you have created the policy. (If you need the permissions in this policy to apply to a different policy type, you can always create a new policy.)
3. You choose one or multiple Spot services. Usually all the actions you need to operate that service are provided just by choosing the service. If you need to allow or deny specific actions, you can do so.

Once you have created a policy, you can edit the policy information, add and remove permissions and individual actions at any time. You can also remove a policy.

## Default Permission Policies

Spot comes with a number of default policies. You can use these out of the box and create new policies that are specific to your organization.

- Account level permissions:
  - Account Editor
  - Account Viewer
  - Elastigroup Full Access
  - Ocean Full Access
- Organization level Permissions:
  - Credit Card Editor
  - Cloud Analyzer Editor
- Organization and Account level permissions
  - Admin

## Custom Policy Conditions

Custom Policy Conditions give you more granular control of your Spot resources on the organization and account level. This feature enables you to create conditions with policy modification access and add another granular level for the policy effect, which occur only if the condition requirements are met:     

* condition operators that contain the condition keys :
  - resource retrieval
  - resource attribute
* condition values (attribute value) that should match keys and values received for the given resource in the request.

This feature provides allow or deny access to a specific resource only if the condition in the  policy matches the requested data (i.e resource name, resource inner configuration etc.)    

This is supported for AWS and Azure users.  

## What’s Next?

Learn how to [create a new permission policy](administration/policies/create-new-policy).
