# Ocean Integration

Eco and Ocean are designed to optimize the cost of EC2 instances. While Eco focuses on managing commitments, Ocean specializes in managing container infrastructure. Ocean's management feature enables cost savings by launching instances as spot instances whenever the market allows. 

Ocean analyzes commitment utilization based on the configuration of the virtual node group (VNG) and prioritizes launching instances as on-demand to prevent waste of savings plans and reserved instances (RIs). While this approach ensures optimal use of commitments, using spot instances offers the highest level of savings for cloud expenses. Therefore, it is important to consider commitment capacity in relation to the availability of spot instances.  

Ocean and Eco work together to prioritize the ability to use spot instances whenever possible. If Ocean launches an instance as on demand to facilitate higher commitment usage, Eco will receive data that is leveraged in commitment management automation. To further optimize costs, Eco reduces commitments proportionally based on the opportunity in the spot market signaled by Ocean. When Eco’s commitment reduction is complete, Ocean can relaunch the on-demand instances as spot instances, leveraging the potential for greater cost savings.  

## Integration Requirements
If Eco and Ocean are enabled within the same Spot account, no further action is required. However, if Ocean is running on one or several other Spot accounts where Eco management for commitments is not set up, it may take several days for the integration to detect the account relationship. 

## Configure your VNG
Ocean actively checks for unutilized reserved instances when launching EC2 instances to optimize the usage of reserved instances and commitments. It prioritizes using reserved instances whenever possible. To maximize savings plans and ensure integration benefits from spot usage, turn off commitment usage per virtual node group. 

To configure virtual node groups in the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) (under strategy): 

* Set the `utilizeReservedInstances` parameter to `true`.

* Set the `utilizeCommitments` parameter to `false`. 

Learn how to [utilize commitments per virtual node group](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=turn-onoff-utilize-commitments-per-virtual-node-group).
