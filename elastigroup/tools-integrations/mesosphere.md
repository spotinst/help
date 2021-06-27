# Mesosphere

Mesosphere DC/OS is based on the production-proven Apache Mesos distributed systems kernel and provides APIs for resource management and scheduling across the entire data center and cloud environments.

## Benefits of using the Spot Mesosphere Integration

- Spot will automatically provision instances for you for the best availability and cost. You can even use scaling metrics or custom API scripts to automate this even further.
- Running Spot instances manually on a production workload is unpredictable. You will need to carefully consider all scenarios in which your Spot instances can be interrupted and you also have to compensate for sudden market fluctuations.
  - The Spot algorithm will predict when fluctuations in the market will occur and pre-emptively provision new instances for you well before the interruption.
- The Spot API integration will automatically communicate with your DC/OS Primary and send a connection draining signal to all instances affected. This ensures that new tasks are not added to servers that are about to go down. This feature sounds simple, but it makes the process of managing nodes completely automated!
- You have both the availability your production workloads require and you get to save money.
- Spot can provision a heterogeneous cluster for your entire DC/OS environment. Do you want to have exactly 30 vCPUs and don't care about instances types? We can do that as well with our cluster weighting option.

## How it Works

To start, let's build a new DC/OS environment with the very convenient AWS Cloud Formation Template that can be found at the top of the [installation guide](https://downloads.dcos.io/dcos/stable/aws.html). If you have a cluster already, you can skip down to step 7.

## Step 1

You'll find a link to the cloud formation template at the top of the page. Select the region and click on `Launch Stack` link for `Single Master`.

<img src="/elastigroup/_media/mesosphere-01.png" width="600" height="204" />

## Step 2

You will need to fill in parameters for the template on the launch wizard like the key pair, agent node count, and OAuthEnabled. I kept everything to the bare minimum for simplicity sake.

## Step 3

The template will take about 10 minutes to deploy so go enjoy a nice cup of coffee or tea while you're waiting.

## Step 4

Once the deployment has completed, you should now see the status change to `CREATE_COMPLETE` as you can see below. If you do not see this, make sure you are in the Cloud Formation console for the correct AWS region.

<img src="/elastigroup/_media/mesosphere-02.png" />

## Step 5

Click on the stack name to see details of the deployment.

## Step 6

Expand the `Outputs` and `Resources` sections.

## Step 7

Now let's get the Primary's external IP address, go back to `Resources` from step 6.

1. Scroll down to `ElasticLoadBalancer` and click on the link.
2. Click on the `Instances` tab and then click on the instance ID for the primary.
3. Copy the public IP of the primary into a text editor for later.
4. You should see two security groups for the primary, click on the MasterSecurityGroup.
5. In the Security Group console, add a new inbound TCP rule for the MasterSecurityGroup as shown below. (Inbound Custom TCP Rule for port 5050 and the [Permit List IPs](administration/api/whitelist-ips).)

<img src="/elastigroup/_media/mesosphere-02a.png" />

## Step 8

1. Log in to the DC/OS console.
2. Take the IP you copied back in 8.3 above and paste this into your web browser.
3. It will ask you to configure authentication. You should see at least three nodes (depends on your CF Parameters in step two above).

<img src="/elastigroup/_media/mesosphere-03.png" />

## Step 9

Now that the cluster is up and running let's configure some Spot instances via the Elastigroup integration.

1. Log into the Spot Console at http://console.spotinst.com (free trial at http://spotinst.com/signup).
2. Click on the `Create` button to create a new Elastigroup.
3. At the bottom left of the screen click on the red `Import` button, then select `Auto Scaling Group` from the menu.
4. Select the same region you used in step 1, and select the Auto Scaling Group with the name `-SlaveServerGroup-`.

<img src="/elastigroup/_media/mesosphere-04.png" />

5. Pick a descriptive name for your Elastigroup and click next at the bottom right of the screen.
6. Select `Linux/Unix` as the Product type.
7. Configure the strategy and configuration as you see fit, I recommend a target of two instances for testing purposes.
8. Scroll down to `Spot Types` and select m3.large, m3.xlarge, m4.large, m4.xlarge.
9. Select the checkbox for Mesosphere DC/OS in the integration section. Paste in the API server from 7.3 above as port :5050 as you can see below. Click on test connection (you should see a green checkbox if successful).

> **Tip**: Set as http rather than https.

10. Click `Next` at the bottom right of the screen.
11. Leave scaling policies as they are and click `Next` at the bottom right of the screen.
12. Review the JSON file and click `Create` to create your new Elastigroup configured with DC/OS.
13. In about 10 minutes two new Spot instances should be created and automatically added as a node to your DC/OS cluster.

**Before**:

<img src="/elastigroup/_media/mesosphere-05.png" />

**After**:

<img src="/elastigroup/_media/mesosphere-06.png" />
