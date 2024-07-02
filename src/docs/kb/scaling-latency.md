<meta name="“robots”" content="“noindex”">

# Elastigroup | Configure Scaling Policy for Latency Metric

You can configure a scaling policy for latency. 
  
![scaling-latency1](https://github.com/spotinst/help/assets/167069628/bc4be548-a0d1-4fb3-85dd-0a32853d99c1)


<font color="#7632FE"> where do you do this? this is what I found in the documentation:
1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies/Up Scaling Policies, click **Add Policy**.
https://docs.spot.io/elastigroup/features/scaling/simple-scaling-policies

ORRRRRR.............

1. In the Spot console, go to **Elastigroup** and click **Groups**.
2. Click on the name of the Elastigroup and click the Load Balancers tab.

https://docs.spot.io/elastigroup/tutorials/elastigroup-actions-menu/view-load-balancers?id=go-to-the-load-balancers-tab
</font>

3. Select these parameters:
    * **Auto Scale Based on**: <i>Other</i>
    * **Namespace**: <i>AWS/Application ELB</i>
    * **Metric Name**: <i>TargetResponseTime</i>
    * **Dimensions – Name**: <i>LoadBalancer</i>
    * **Dimensions – Value**: this is the ARN of the load balancer, for example: `loadbalancer/app/<load-balancer-name>/<xxxxxxxxxxx>`
<font color="#7632FE">I added loadbalancer to the dimensions value so it's more clear. is that okay?</font>

![scaling-latency3](https://github.com/spotinst/help/assets/167069628/e9de15c8-6714-4f8f-a458-d2b4e182cf03)

4. Click **Next**.
<font color="#7632FE">is that the last step? they don't need to do anything else?</font>
