# EC2 

EC2 actions allow you to perform targeted operations against EC2 resources. 

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow: 

* [EC2 Filter Reserved Instances](spot-connect/actions/ec2?id=ec2-filter-reserved-instances) 
* [EC2 Filter Savings Plans](spot-connect/actions/ec2?id=ec2-filter-savings-plans) 
* [EC2 Filter Snapshots](spot-connect/actions/ec2?id=ec2-filter-snapshots)
* [EC2 Get Sizing Recommendations](spot-connect/actions/ec2?id=ec2-get-sizing-recommendations) 
* [EC2 Revoke Security Group Ingress](spot-connect/actions/ec2?id=ec2-revoke-security-group-ingress) 
* [EC2 Resize Instances](spot-connect/actions/ec2?id=ec2-resize-instances) 

### EC2 Filter Reserved Instances 

This node returns the list of reserved instances using filters of days to expiration and minimum purchase price. 

#### Input 

|       Parameter                                   |                               Description                          |      Required  |   |
|---------------------------------------------------|:------------------------------------------------------------------:|:--------------:|---|
|      Target Account Alias                         |     Can select multiple AWS account to filter the savings plans    |     True       |   |
|      Maximum number of days to expiration         |     Filter Reserved Instances by the number of days to expiration  |     True       |   |
|      Minimum dollar amount for Reserved Instance  |     Minimum purchase price for the Reserved instance               |     True       |   |

#### Output 

|       Parameter          |       Type  |                                                          Description                                                     |   |
|--------------------------|:-----------:|:------------------------------------------------------------------------------------------------------------------------:|---|
|      reserved_instances  |     Object  |     List of object w.r.t Alias which specifies the Reserved_Instance_Id, Offering_Type, Fixed_Price and Expiry_In_Days.  |   |
|      execution_status    |     String  |     Status of run (ie: S_OK / E_FAIL)                                                                                    |   |

#### Action Example  

* Target Account Aliases: Select the target accounts.  
* Maximum number of days to expiration: Add the maximum number of days to expiration. 
* Minimum dollar amount for Reserved Instance: Add the minimum dollar amount for reserved instances.

#### Input 

![ec2-1](https://github.com/spotinst/help/assets/106514736/f56c1696-c273-4b82-a115-bfd28ae01cbb)

#### Output 

![ec2-2](https://github.com/spotinst/help/assets/106514736/e8418f36-7e70-453f-bcd3-752901f2005f)

### EC2 Filter Savings Plans 

This node returns the list of savings plans using filters of days to expiration and payment option. 

#### Input

|       Parameter                            |                                 Description                            |      Required  |   |
|--------------------------------------------|:----------------------------------------------------------------------:|:--------------:|---|
|      Target Account Alias                  |     Can select multiple AWS account to filter the savings plans        |     True       |   |
|      Maximum number of days to expiration  |     Filter Reserved Instances by the number of days to expiration      |     True       |   |
|      Payment Option                        |     Allowed payment options: All Upfront, Partial Upfront, No Upfront  |     True       |   |

#### Output 

|       Parameter        |       Type  |                                                        Description                                                    |   |
|------------------------|:-----------:|:---------------------------------------------------------------------------------------------------------------------:|---|
|      savings_plans     |     Object  |     List of object w.r.t Alias which specifies the Savings_Plan_ARN, Description, Payment_Option and Expiry_In_Days.  |   |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)                                                                                 |   |

#### Action Example 

* Target Account Aliases: Select the target accounts. 
* Maximum number of days to expiration: Add the maximum number of days to expiration. 
* Payment options: Select Payment options.

#### Input

![ec2-3](https://github.com/spotinst/help/assets/106514736/b9634c1f-84f9-46de-85d7-824f16f79ad9)

#### Output 

![ec2-4](https://github.com/spotinst/help/assets/106514736/3a9bb277-5ca6-461c-88f3-6c9a81a2d429)

### EC2 Filter Snapshots 

List all EC2 snapshots created before a given number of days. 

#### Input 

|       Parameter            |                                           Description                                      |      Required  |   |
|----------------------------|:------------------------------------------------------------------------------------------:|:--------------:|---|
|      Target Account Alias  |     Select AWS account to filter snapshots.                                                |     True       |   |
|      Number of days        |     List EC2 snapshots created before provided number of days from the current timestamp.  |     True       |   |
|      Region Name           |     Specify region name to filter the snapshots.                                           |     False      |   |

#### Output

|       Parameter        |         Type    |                 Description             |   |
|------------------------|:---------------:|:---------------------------------------:|---|
|      snapshot_ids      |     StringList  |     List of all the snapshot ids        |   |
|      execution_status  |     String      |     Status of run (ie: S_OK / E_FAIL)   |   |

#### Action Example

#### Input

![ec2-5](https://github.com/spotinst/help/assets/106514736/ac63c171-692a-4a1d-99f4-736b8f15ca7a)

#### Output  

![ec2-6](https://github.com/spotinst/help/assets/106514736/8f727c3d-7d81-4aef-81cb-09b599db81c9)

### EC2 Get Sizing Recommendations 

This node gets sizing recommendations for EC2 instances. 

#### Input

|       Parameter            |                                Description                           |      Required  |   |
|----------------------------|:--------------------------------------------------------------------:|:--------------:|---|
|      Target Account Alias  |     Target account alias to be used to fetch sizing recommendations  |     True       |   |
|      Region Name           |     AWS Region Name for filtering Trusted Advisor checks             |     False      |   |

#### Output

|       Parameter        |       Type   |                 Description            |   |
|------------------------|:------------:|:--------------------------------------:|---|
|      recommendations   |     MapList  |     A list of sizing recommendations   |   |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)  |   |

#### Action Example

#### Input

![ec2-7](https://github.com/spotinst/help/assets/106514736/8ba14bf2-c310-4c76-882d-9b801e4391cc)

#### Output  

![ec2-8](https://github.com/spotinst/help/assets/106514736/d2518bfa-3bb4-4e88-8af9-1eb5ceb4bb79)

### EC2 Revoke Security Group Ingress 

This node filters the security groups using the inputs and removes the matching inbound (ingress) rule from a security group. 

#### Input

|       Parameter               |                                                          Description                                                     |      Required  |   |
|-------------------------------|:------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Target Account Alias     |     Target account alias to be used to fetch sizing recommendations                                                      |     True       |   |
|      IP Permission Protocol   |     The IP protocol for an inbound security group rule (tcp \| udp \| icmp, a protocol number, or -1 for all protocols)  |     False      |   |
|      IP Permission CIDR       |     An IPv4 CIDR block for an inbound security group rule, example: 0.0.0.0/0                                            |     False      |   |
|      IP Permission IPV6 CIDR  |     An IPv6 CIDR block for an inbound security group rule                                                                |     False      |   |
|      IP Permission from Port  |     For an inbound rule, the start of port range for the TCP and UDP protocols, or an ICMP type number                   |     False      |   |
|      IP Permission to Port    |     For an inbound rule, the end of port range for the TCP and UDP protocols, or an ICMP code                            |     False      |   |

#### Output

|       Parameter        |         Type    |                 Description            |   |
|------------------------|:---------------:|:--------------------------------------:|---|
|      execution_status  |     String      |     Status of run (ie: S_OK / E_FAIL)  |   |
|      group_ids         |     StringList  |     A list of group ids                |   |

#### Action Example

#### Input 

![ec2-9](https://github.com/spotinst/help/assets/106514736/59b039af-4803-49c3-aa5f-7937b12c9373)

#### Output 

![ec2-10](https://github.com/spotinst/help/assets/106514736/f6b208da-e32b-429c-a8a7-00a639f9d8a0)
 
### EC2 Resize Instances 

This node modifies EC2 instances based on the input. 
 
#### Input 

|       Parameter            |                                                                                  Description                                                                              |      Required  |   |
|----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Target Account Alias  |     Target account alias to be used to resize instances                                                                                                                   |     True       |   |
|      Update Config         |     A maplist of update config. (Make sure instance is stopped) Example update config in the list:  {'recommended_instance_type': 't3.nano', instance_id': 'i-abcd1234'}  |     True       |   |
|      DryRun                |     Indicate whether this is a dry run                                                                                                                                    |     False      |   |

#### Output

|       Parameter        |       Type   |                 Description            |   |
|------------------------|:------------:|:--------------------------------------:|---|
|      instances         |     MapList  |     A list of updated EC2 instances    |   |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)  |   |

#### Action Example 

#### Input

![ec2-11](https://github.com/spotinst/help/assets/106514736/649db8ff-2d84-4b55-b091-0648b1e48595)

#### Output 

![ec2-12](https://github.com/spotinst/help/assets/106514736/6eb3d706-7ac6-4207-a209-b84be4cea5e3)
