# Mesosphere

Mesosphere DC/OS is based on the production-proven Apache Mesos distributed systems kernel and provides APIs for resource management and scheduling across the entire data center and cloud environments.

Benefits of using the Spotinst Mesosphere Integration
Spotinst will automatically provision instances for you for the best availability and cost. You can even use scaling metrics or custom API scripts to automate this even further.
Running Spot instances manually on a production workload is unpredictable. You will need to carefully consider all scenarios in which your Spot instances can be interrupted and you also have to compensate for sudden market fluctuations.
The Spotinst algorithm will predict when fluctuations in the market will occur and pre-emptively provision new instances for you well before the interruption.
The Spotinst API integration will automatically communicate with your DC/OS Master and send a connection draining signal to all instances affected. This ensures that new tasks are not added to servers that are about to go down. This feature sounds simple, but it makes the process of managing nodes completely automated!
You have both the availability your production workloads require and you get to save money.
Spotinst can provision a heterogeneous cluster for your entire DC/OS environment. Do you want to have exactly 30 vCPUs and don’t care about instances types? We can do that as well with our cluster weighting option.
How it Works
To start, let’s build a new DC/OS environment with the very convenient AWS Cloud Formation Template that can be found at the top of the installation guide here: https://downloads.dcos.io/dcos/stable/aws.html (if you have a cluster already you can skip down to step 7).

Step 1
You’ll find a link to the cloud formation template at the top of the page. Select the region and click on “Launch Stack” link for “Single Master”.


Step 2
You will need to fill in parameters for the template on the launch wizard like the key pair, slave node count, and OAuthEnabled. I kept everything to the bare minimum for simplicity sake.

Step 3
The template will take about 10 minutes to deploy so go enjoy a nice cup of coffee or tea while you’re waiting.

Step 4
Once the deployment has completed, you should now see the status change to “CREATE_COMPLETE” as you can see below. If you do not see this, make sure you are in the Cloud Formation console for the correct AWS region.


Step 5
Click on the stack name to see details of the deployment.

Step 6
Expand the “Outputs” and “Resources” sections.

Step 7
Now let’s get the Master’s external IP address, go back to “Resources” from step 6.

Scroll down to “ElasticLoadBalancer” and click on the link.
Click on the “Instances” tab and then click on the instance ID for the master.
Copy the public IP of the master into a text editor for later.
You should see two security groups for the master, click on the MasterSecurityGroup.
In the Security Group console, add a new inbound TCP rule for the MasterSecurityGroup as shown below. (Inbound Custom TCP Rule for port 5050 and the IPs defined here)

Step 8
Login to the DC/OS console

Take the IP you copied back in 8.3 above and paste this into your web browser.
It will ask you to configure authentication, I used Google since I was already signed in.
You should see at least three nodes (depends on your CF Parameters in step two above).

Step 9
Now that the cluster is up and running let’s configure some Spot instances via the Elastigroup integration.

Log into the Spotinst console at http://console.spotinst.com (free trial at http://spotinst.com/signup).
Click on the “Create” button to create a new Elastigroup.
At the bottom left of the screen click on the red “Import” button, then select “Auto Scaling Group” from the menu.
Select the same region you used in step 1, and select the Auto Scaling Group with the name “-SlaveServerGroup-“.

Pick a descriptive name for your  Elastigroup and click next at the bottom right of the screen.
Select “Linux/Unix” as the Product type.
Configure the strategy and configuration as you see fit, I recommend a target of two instances for testing purposes.
Scroll down to “Spot Types” and select m3.large, m3.xlarge, m4.large, m4.xlarge.
Select the checkbox for Mesosphere DC/OS in the integration section. Paste in the API server from 7.3 above as port :5050 as you can see below. Click on test connection (you should see a green checkbox if successful). Note: set as http rather than https.

Click “Next” at the bottom right of the screen.
Leave scaling policies as they are and click “Next” at the bottom right of the screen.
Review the JSON file and click “Create” to create your new Elastigroup configured with DC/OS.
In about 10 minutes two new Spot instances should be created and automatically added as a node to your DC/OS cluster.
Before:

After:
