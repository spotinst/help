<meta name="robots" content="noindex">

# Ocean | Error Message "Can't Spin Spot Instances"

## Problem

This message is shown in the console logs if Ocean attempts to scale up a certain spot instance type in a particular availability zone. This happens because of a lack of capacity on the AWS side.

`Can't Spin Spot Instances: Code: InsufficientInstanceCapacity, Message: We currently do not have sufficient m5.2xlarge capacity in the Availability Zone you requested (us-east-1a). Our system will be working on provisioning additional capacity. You can currently get m5.2xlarge capacity by not specifying an Availability Zone in your request or choosing us-east-1b, us-east-1c, us-east-1d, us-east-1f.`

![error-cant-spin-instance1](https://github.com/spotinst/help/assets/167069628/77033b4c-b136-4068-b0b4-e47f0dec6884)

## Cause

Ocean is aware of a pending pod and is spinning up an instance. Based on your current instance market, Ocean chooses the instance type in a particular availability zone and attempts to scale up. If it fails due to a lack of capacity, the error message is shown in the console logs.

## Solution
* Have many instance types so Ocean can choose the best available markets.
* Have multiple availability zones to provide more availability.
* For workloads that are not resilient to disruptions, configure the [on demand label](https://docs.spot.io/ocean/features/labels-and-taints?id=spotinstionode-lifecycle) `spotinst.io/node-lifecycle`.
