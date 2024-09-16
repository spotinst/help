# On Demand & Spot Virtual Machines

There are two options for configuring the desired number of Spot virtual machines within an Elastigroup:

* OD count
*  Spot Percentage

## OD Count

The OD count parameter lets you specify the number of OD virtual machines within a particular group. This configuration ensures that the minimum required number of ODs is maintained. For example, if an Elastigroup consists of 3 virtual machines and an OD Count of 1 is set, the group will have 1 OD and 2 Spot virtual machines. Spot instances will fulfill the remaining virtual machines.

![od-vs-spot-1](https://github.com/spotinst/help/assets/106514736/e8dccd0f-fdff-4404-b309-6a1c8364f525)

## Spot Percentage

Alternatively, you can configure the percentage of Spot virtual machines within the group using the Spot Percentage parameter. This option maintains the minimum number of OD virtual machines within the specified percentage. For instance, if an Elastigroup consists of 3 virtual machines and a Spot percentage of 50% is set, the group will have 2 ODs and 1 Spot virtual machine. This ensures that at least 50% of the group's capacity is fulfilled by Spot instances while still meeting the minimum OD requirement.

![od-vs-spot-2](https://github.com/spotinst/help/assets/106514736/5f096793-e9ac-4f4b-9528-66a12c7796d6)

Understanding the differences between OD and Spot virtual machines is crucial when configuring an Elastigroup. By carefully considering the OD Count and Spot Percentage parameters, you can balance cost optimization and availability based on their specific requirements. Spot recommends evaluating the potential risks and benefits of each option to make an informed decision.

