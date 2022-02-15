<meta name="robots" content="noindex">

# Configure Attributes for Task Placement Constraints

## Introduction

A task placement constraint is a rule that is considered during task placement. Task placement constraints can be used to evaluate the attributes of a container instance when considering where to place a task. For example, you can use constraints to place tasks on instances based on the desired Availability Zone or instance type attributes. Attributes are key/value pairs associated with a container instance. You can also associate custom attributes (key/value pairs) with your container instances and then use a constraint to place tasks based on the associated attribute.

For further information about ECS task placement and ECS task placement constraints see AWS's ECS documentation here:

- [ECS Task Placement](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html)
- [ECS Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html)

There are two type of attributes which a task placement constraint can use when evaluating where to place a task:

- ECS's built-in container attributes. When using the built-in container attributes simply configure the constraints on the tasks, Elastigroup will automatically recognize the constraints and use the built-in attributes to evaluate them.
- Custom attributes, which are added to your desired instances and Elastigroup.

## Operators

Elastigroup for ECS supports the following operators in constraints on both Built-In and Custom attributes:

- Equal
- Not equal
- In
- Not in
- Match
- Not match

## Configure a Built-in Attribute

If a built-in task constraint is configured there's no need for any further configuration on Elastigroup's end. The built-in attributes are configured automatically when an instance in the group is launched.

### Example

Configuring a task with an instance-type constraint and the attribute of instance-type == g2.2xlarge would result in this task being placed only on g2.2xlarge instances, while tasks without this task placement constraint could run on any of the instance types the Elastigroup is configured to use.

## Configure a Custom Attribute

Custom attributes need to be configured both in the Elastigroup's configuration and in the ECS instances user data. This allows Elastigroup to take the custom attribute under consideration when scaling up with new instances.

### Example

In the example, the following custom attribute will be configured:

Key = Stack
Value = Dev

1. In Elastigroup's Creation Wizard go to the Compute tab and scroll down to the Additional Configurations section:
2. Scroll down to the User Data section and add the following line to the User Data script:

`echo ECS_INSTANCE_ATTRIBUTES='{"stack":"dev"}' >> /etc/ecs/ecs.config`

<img src="/elastigroup/_media/configure-attributes-for-task-placement-constraints_1.png" />

3. In the Compute tab scroll down to the Integrations section and click on the + button:

<img src="/elastigroup/_media/configure-attributes-for-task-placement-constraints_2.png" />

4. A key and value table will appear, add the relevant attribute Key/Value (in our example: Stack/Dev):

<img src="/elastigroup/_media/configure-attributes-for-task-placement-constraints_3.png" />

5. Click on Next and then Create the group.

That's it! Any instance that is launched by Elastigroup will include the specified attribute. The attribute will then be evaluated based on the task constraints during placement.
