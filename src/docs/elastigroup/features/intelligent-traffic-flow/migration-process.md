# Intelligent Migration Flow Migration Process

Intelligent Traffic Flow (ITF) migration is a process whereby your load balancer target groups assigned to the listener rules are replaced with target groups created by Elastigroup so that Elastigroup can optimize the distribution while applying the rules. The migration takes place in a graceful process so that you do not experience any downtime.

## How it Works

The migration process takes place per listener rule. Before the migration of a rule begins, the customer has one or more target groups assigned to the rule, and all of the traffic is directed to customer target groups only. During the migration, Elastigroup creates its own target groups, and a stepwise process begins whereby Elastigroup assigns its target groups to the rule and drops customer target groups from the rule. During part of the process, traffic will be directed to both customer target groups and Elastigroup target groups. By the end of the process, all traffic will be directed to Elastigroup target groups only.

A migration process starts any time you provide a new rule to the group. This occurs as part of a creation or an update to an Elastigroup.

The details of an example migration process are described in the steps shown below. The examples shown with each step are based on a customer rule that is assigned to two customer target groups.

<img src="/elastigroup/_media/features-itf-migration-process-01.png" width="574" height="96" />

Elastigroup calculates the traffic distribution projected at the end of the process based on the total number of vCPUs in each of its target groups and assuming that all instances are healthy.

Example:

<img src="/elastigroup/_media/features-itf-migration-process-02.png" width="586" height="119" />

### Step 1

Elastigroup assigns its target group with the highest weight (that was not assigned yet) to the rule and sets its weight to 0.

Example:

<img src="/elastigroup/_media/features-itf-migration-process-03.png" width="488" height="119" />

### Step 2

After assigning its target group to the rule, Elastigroup waits until the ratio of healthy instances in the Elastigroup target group is higher than the [minimum healthiness percentage](elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch?id=autohealing) configured, or until timeout.

- When the ratio of healthy instances is higher than configured, Elastigroup continues to the next step.
- If after the wait time the ratio of healthy instances in the assigned target group is lower than configured, then Elastigroup stops and fails the migration, producing an error message.

> Note: At this point there are no fallbacks. The customer target groups and Elastigroup target groups will both be assigned to the rule.

### Step 3

Elastigroup assigns interim weights, to be used during the migration process only, to its target group and the customer target groups. The proportions of the customer target groups will be maintained.

Example:

<img src="/elastigroup/_media/features-itf-migration-process-04.png" width="479" height="109" />

### Step 4

Elastigroup repeats Steps 1 - 3 until all new target groups are created.

Example:

<img src="/elastigroup/_media/features-itf-migration-process-05.png" width="479" height="158" />

### Step 5

Then, Elastigroup does the following:

- Drops all customer target groups that are still assigned to the rule.

  Example:

<img src="/elastigroup/_media/features-itf-migration-process-06.png" width="488" height="106" />

- Update the weights of all Elastigroup target groups again (according to the planned distribution shown before Step 1).

  Example:

<img src="/elastigroup/_media/features-itf-migration-process-07.png" width="488" height="109" />

A banner indicating the progress of the migration will appear in the Elastigroup Overview page. When this step is completed, the traffic will be optimally distributed.

## Total Number of Target Groups Greater than Five

When the total number of customer target groups and Elastigroup target groups for a rule is more than five, it is necessary to drop a customer target group before adding a new group so that the total assigned to a rule never exceeds five.

In this example, the customer rule starts with the following target groups:

<img src="/elastigroup/_media/features-itf-migration-process-08.png" width="488" height="109" />

The process begins like the simple process shown above, completes Steps 1 and 2, and begins Step 3. However, before a third Elastigroup target group (Target Group C) can be added, a customer target group must be dropped.

### Step A: Before Drop

There are five target groups assigned to the rule. Before another one can be added, a customer target group must be dropped.

<img src="/elastigroup/_media/features-itf-migration-process-09.png" width="483" height="162" />

### Step B: Drop

The customer target group with the lowest weight is dropped.

<img src="/elastigroup/_media/features-itf-migration-process-10.png" width="475" height="162" />

### Step C: Add Next Target Group

Now another Elastigroup target group is added.

<img src="/elastigroup/_media/features-itf-migration-process-11.png" width="476" height="162" />

In cases where there are more than three Elastigroup target groups, this process is repeated until all the target groups are added, and then Elastigroup continues to Step 5 above.

## What’s Next?

Learn more about the [Load Balancers](elastigroup/tutorials/elastigroup-actions-menu/view-load-balancers) tab.
