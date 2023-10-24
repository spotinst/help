# Google Kubernetes Engine (GKE)

Use the GKE integration in Spot Connect to manage the clusters deployed in Google infrastructure. 

Google Kubernetes Engine (GKE) provides a managed environment for deploying, managing, and scaling your containerized applications using Google infrastructure. 

With the integration between Spot Connect and GKE, you can build and manage container-based applications in Google Cloud Platform. The integration provides an abstraction layer over the Kubernetes API server and exposes meaningful actions. 

## Configure Google Kubernetes Engine in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Google Kubernetes Engine**.  
3. Click **Add Integration**.  

Details needed to set up a Google Kubernetes Engine instance in Spot Connect: 

|       Parameter           |                               Description                          |      Required  |   |
|---------------------------|:------------------------------------------------------------------:|:--------------:|---|
|      Integration Alias    |     A name for integration resource                                |     True       |   |
|      Service Account Key  |     Service account key of Google Cloud Platform (in JSON format)  |     True       |   |

Follow the steps below in your GCP account and complete the integration setup by configuring your Service Account Key. 

## Configure GKE instance in Spot Connect 

To register Spot Connect application in GCP and grant access to a project's Kubernetes engine account to manage cluster resources from Spot Connect, you need to complete the steps below. 

**Create a Service Account (if you already have one go to next step)** 

1. In the Cloud Console, go to the Service accounts page. Go to the [Service accounts page](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts?supportedpurview=project). 
2. Select a project. 
3. Click **Create service account**.
  
![ggl-k8s-eng-1](https://github.com/spotinst/help/assets/106514736/7a20e32b-b4b0-4a13-96e7-852c2614e9e3)

4. Enter a service account name to display in the Cloud Console. The Cloud console generates a service account ID based on this name. Edit the ID if necessary. You cannot change the ID later. 
5. (Optional) Enter a description of the service account. 
6. If you do not want to set access controls now, click **Done** to finish creating the service account. To set access controls now, click **Create and continue** and continue to the next step. 
7. Choose the IAM role and then Kubernetes Engine Service Agent to manage cluster resources and to grant access to the service account on the project. 
8. When you have finished adding roles, click **Continue**. 
9. (Optional) In the Service account users role field, add members that can impersonate the service account. 
10. (Optional) In the Service account admins role field, add members that can manage the service account. 
11. Click **Done** to finish creating the service account. 

Grant this service account access to project and include Kubernetes Engine Service Agent role. 

**Kubernetes Engine Service Agent role** - Gives Kubernetes Engine account access to manage cluster resources. Includes access to service accounts. 

If you did not follow step 7 while creating the service account or you already had a service account and missed adding the IAM role - Kubernetes Engine Service Agent, click the permissions tab for the specific service account and include the role. 

Create a service account key and add it to the right panel to complete the integration setup. 

1. Select the same **Service Account** used. 
2. Click the **Keys** tab. 
3. Click the **Add key** drop-down menu, then select **Create new key**. 
4. Select **JSON** as the Key type and click **Create**. 

Clicking **Create** downloads a service account key file. After you download the key file, you cannot download it again. 

The downloaded key has the following format, where `private-key` is the private portion of the public/private key pair: 

```json
{

 "type": "service_account",

 "project_id": "project-id",

 "private_key_id": "key-id",

 "private_key": "-----BEGIN PRIVATE KEY-----\nprivate-key\n-----END PRIVATE KEY-----\n",

 "client_email": "service-account-email",

 "client_id": "client-id",

 "auth_uri": "https://accounts.google.com/o/oauth2/auth",

 "token_uri": "https://accounts.google.com/o/oauth2/token",

 "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",

 "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account-email"

}
```

**Add Service Account Key JSON to Spot Connect** 

1. Copy the JSON and paste it in the Service Account Key field in the Spot Connect integration panel.  

![ggl-k8s-eng-2](https://github.com/spotinst/help/assets/106514736/d5eb1927-8acc-47d5-98e1-980d4fffaae2)

2. Click **Add Instance**.

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

**Note**: Currently Spot Connect supports only zonal clusters.  

* [GKE Get Nodes From Pending Pods](spot-connect/integrations/gke?id=gke-get-nodes-from-pending-pods) 
* [GKE Get Pending Pods](spot-connect/integrations/gke?id=gke-get-pending-pods) 
* [GKE Kill Node](spot-connect/integrations/gke?id=gke-kill-node) 
* [GKE Kubectl Run Command](spot-connect/integrations/gke?id=gke-kubectl-run-command) 

Complete one of the following:  

* Make sure you specify cluster **Location type** as zonal. 

![ggl-k8s-eng-3](https://github.com/spotinst/help/assets/106514736/3ffdc59a-a1c6-4a4d-9c98-c8d60236e9fe)

**Or**: 

* If the cluster is already created, verify its Location type is Zonal. 
 
![ggl-k8s-eng-4](https://github.com/spotinst/help/assets/106514736/3f8067fc-0801-4fb1-a64b-0910fee11bd9)

### GKE Get Nodes from Pending Pods 

Use this action to get GKE Nodes from the Pending Pods Node Selector.  

#### Input

|       Parameter    |                    Description                |      Required  |   |
|--------------------|:---------------------------------------------:|:--------------:|---|
|      GKE Instance  |     GKE integration instance in Spot Connect  |     True       |   |
|      Pod Names     |     List of pods in Pending status            |     True       |   |
|      Cluster Name  |     Name of the GKE cluster                   |     True       |   |
|      Zone          |     The zone associated with the cluster      |     True       |   |

#### Output

|       Parameter        |         Type    |                 Description            |   |
|------------------------|:---------------:|:--------------------------------------:|---|
|      execution_status  |     String      |     Status of run (ie: S_OK / E_FAIL)  |   |
|      nodes             |     StringList  |     List of nodes                      |   |

#### Action Example 

Create a workflow in your Spot Connect workspace by completing the following steps: 

1. From the left panel, drag and drop GKE Get Nodes from Pending Pods action node in the workflow builder.  
2. Click the node and complete the following information:  
    * GKE Instance: Select GKE integration instance.  
    * Pod Names: Enter the Pod Name from which you want to get Pending Pods. 
    * Cluster Name: Enter Cluster Name. 
    * Zone: Enter Zone.  
3. Click **Run Now**.

#### Input

![ggl-k8s-eng-5](https://github.com/spotinst/help/assets/106514736/6ba29e6f-68e1-495c-a106-092b07db4d30)

#### Output

![ggl-k8s-eng-6](https://github.com/spotinst/help/assets/106514736/be0c1a6b-1973-44e3-8240-d58e63fa7b9b)

### GKE Get Pending Pods 

Use this action to get pods in pending state from a GKE Cluster. 

#### Input

|       Parameter    |                    Description                |      Required  |   |
|--------------------|:---------------------------------------------:|:--------------:|---|
|      GKE Instance  |     GKE integration instance in Spot Connect  |     True       |   |
|      Cluster Name  |     Name of the GKE cluster                   |     True       |   |
|      Zone          |     The zone associated with the cluster      |     True       |   |

#### Output

|       Parameter               |         Type    |                 Description            |   |
|-------------------------------|:---------------:|:--------------------------------------:|---|
|      execution_status         |     String      |     Status of run (ie: S_OK / E_FAIL)  |   |
|      pending_pods_percentage  |     Integer     |     Pending pods in percentage         |   |
|      pending_pods             |     StringList  |     Pods list in pending state         |   |

#### Action Example 

Create a workflow in your Spot Connect workspace by completing the following steps: 

1. From the left panel, drag and drop GKE Get Pending Pods action node in the workflow builder.  
2. Click the node and complete the following information: 
    * GKE Instance: Select GKE integration instance.  
    * Cluster Name: Enter Cluster Name. 
    * Zone: Enter Zone.
3. Click **Run Now**. 

#### Input  

![ggl-k8s-eng-7](https://github.com/spotinst/help/assets/106514736/ff49ae0e-19d6-48e5-8237-b6b1d0ccd01c)

#### Output

![ggl-k8s-eng-8](https://github.com/spotinst/help/assets/106514736/e714ac88-1c78-4563-8731-62d0b98c83a7)
 
### GKE Kill Node 

Use this action to kill a node in a GKE Cluster. 

#### Input 

|       Parameter    |                      Description                  |      Required  |   |
|--------------------|:-------------------------------------------------:|:--------------:|---|
|      GKE Instance  |     GKE integration instance in Spot Connect      |     True       |   |
|      Node Name     |     Name of the node associated with the cluster  |     True       |   |
|      Cluster Name  |     Name of the GKE cluster                       |     True       |   |
|      Zone          |     The zone associated with the cluster          |     True       |   |

#### Output

|       Parameter        |       Type  |                 Description            |   |
|------------------------|:-----------:|:--------------------------------------:|---|
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)  |   |

#### Action Example 

Create a workflow in your Spot Connect workspace by completing the following steps: 

1. From the left panel, drag and drop GKE Kill Node action node in the workflow builder. 
2. Click the node and complete the following information:  
    * GKE Instance: Select GKE integration instance.  
    * Node Name: Enter Node Name you want to kill. 
    * Cluster Name: Enter Cluster Name. 
    * Zone: Enter Zone.
3. Click **Run Now**. 

#### Input  

![ggl-k8s-eng-9](https://github.com/spotinst/help/assets/106514736/03de637d-cf41-4bb0-ab6b-d50b9fe88c04)

#### Output

![ggl-k8s-eng-10](https://github.com/spotinst/help/assets/106514736/7436b8da-305c-4aa1-a6c9-dcf133870c0d)

### GKE Kubectl Run Command 

Use this node to execute a Kubectl command in a GKE Cluster.  

#### Input  

|       Parameter            |                          Description                     |      Required  |   |
|----------------------------|:--------------------------------------------------------:|:--------------:|---|
|      Cluster Name          |     Name of the GKE cluster                              |     True       |   |
|      Zone                  |     The zone associated with the cluster                 |     True       |   |
|      Arguments             |     Command Line Arguments to pass to kubectl            |     True       |   |
|      Log Bucket            |     S3 Bucket for storing output from the command        |     False      |   |
|      Target Account Alias  |     AWS target account for the above selected S3 bucket  |     False      |   |

#### Output

|       Parameter        |       Type  |                      Description                 |   |
|------------------------|:-----------:|:------------------------------------------------:|---|
|      output_str        |     String  |     Output in string format                      |   |
|      output_json       |     Object  |     Output as Json Object                        |   |
|      log_bucket        |     String  |     Bucket at which logs are saved               |   |
|      log_key           |     String  |     Object Key of the data stored in s3 bucket.  |   |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)            |   |

#### Action Example 

Create a workflow in your Spot Connect workspace by completing the following steps: 

1. From the left panel, drag and drop GKE Kubectl Run Command action node in the workflow builder. 
2. Click the node and complete the following information:  
   * GKE Instance: Select GKE integration instance.  
   * Cluster Name: Enter Cluster Name. 
   * Zone: Enter Zone.
   * Arguments: Enter the argument.
   * Optional inputs: Select a Log Bucket.  
3. Click **Run Now**. 

#### Input  

![ggl-k8s-eng-11](https://github.com/spotinst/help/assets/106514736/95505c79-357e-4152-9477-a138e19325cb)

#### Output

![ggl-k8s-eng-12](https://github.com/spotinst/help/assets/106514736/c2e9ead3-d663-490e-a96f-d8835f4291db)

