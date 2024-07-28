# EKS AMI Auto-Update

Cloud service provider relevance: <font color="#FC01CC">EKS</font>  

Operating an Amazon EKS cluster involves managing the compatibility between the Kubernetes control plane and the nodes, especially when upgrading the EKS cluster version. While the control plane and worker nodes don't need to run identical versions, keeping the worker nodes’ version updated with the control plane is crucial for using the latest features and improvements in Kubernetes. Moreover, ensuring that the worker nodes are running the latest AMIs is vital for maintaining the overall security of your cluster. However, manually updating the worker nodes each time the control plane is upgraded or when new security patches are released can be challenging, error-prone, and time-consuming. 

The Ocean EKS AMI Auto-Update feature addresses these challenges. This feature automates updating the nodes' AMIs, which are set on the Ocean Virtual Node Group (VNG), when the control plane is upgraded or when new security patches are available. This new process saves time, reduces the likelihood of errors, and enhances the overall security of your EKS cluster by ensuring that the nodes always run the most secure and compatible version of the AMI. 
 
When the EKS control plane is upgraded or new security patches are released, the feature immediately detects the need to upgrade the nodes. It takes action accordingly, eliminating the need for manual intervention. It also allows flexibility by configuring a specific time for checking updates, ensuring the update process does not cause unexpected disruptions. 

Important: To use the EKS AMI Auto-Update feature for minor version upgrades, your controller version must be `1.0.99 or later`. If updating the controller is not possible, make sure to restart the Ocean controller pod after upgrading the EKS control plane. 

Beyond updating the VNGs’ AMI, the feature also offers an optional, controlled update process for applying the new AMI. If this option is set, the new AMI is applied in a phased manner by dividing the nodes into batches, ensuring minimal impact on the cluster. If any issues occur during the update process, you can monitor it and take necessary action.   

Finally, this feature also notifies when a new AMI is in use in the Ocean VNGs, and when issues arise, offering transparency and control over your Ocean EKS environment. 

## How it Works 

The Ocean EKS AMI Auto-Update feature involves two processes: 
1. Updating the Virtual Node Groups’ (VNGs) AMI to match the Kubernetes control plane version. 
2. Updating the Virtual Node Groups’ (VNGs) AMI with the latest security patches. 

There are two key limitations to note: 
* **Public AMIs Only**: This feature applies only to public AMIs. If you are using a private AMI, the AMI auto-update process will not be triggered. 
* **Single AMI Virtual Node Groups**: The auto-update feature is designed to work effectively with VNGs that use a single AMI. VNGs using dual AMIs are not compatible with this feature.  

### Enabling the Auto Update Feature 

There are two options to enable the auto-update feature: 

#### Option 1: Configuration in the Cluster 

Add the new `amiAutoUpdate` object under `ocean.scheduling.tasks.parameters`. In this object, configure the `patch` and `minor version` parameters. 

* `"patch": true` - The auto-update process will update the VNGs’ images with the latest security patches. 
* `"minorVersion": true` - The auto-update process will update the VNGs’ AMI with the AMI to match the Kubernetes control plane version. 
* `"clusterRoll"` (optional) - When the AMI is updated according to the configuration set, a cluster roll can be triggered, providing an automatic and seamless transition to the updated environment. When set to ‘null’, once the AMIs are updated, a cluster roll will not be triggered. 

Under `scheduling.tasks`, set `isEnabled` to true and the `taskType` to `amiAutoUpdate` to activate the process. You also have the option to add a cron expression that sets the frequency of the auto-update process's triggering. Without a cron, the auto-update process will be triggered every 24 hours. 

Example of the JSON object: 

```json
  "scheduling": { 
      "tasks": [ 
        { 
          "isEnabled": true, 
          "taskType": "amiAutoUpdate", 
          "cronExpression": "0 * * * *", 
          "parameters": { 
            "amiAutoUpdate": { 
              "patch": true, 
              "minorVersion": true,
              "applyRoll": "true",
              "clusterRoll": { 
                "batchSizePercentage": 20, 
                "comment": "this is just an example", 
                "batchMinHealthyPercentage": 100 
              } 
            } 
          } 
        } 
      ] 
    } 
``` 

#### Option 2: Manual Trigger 

Use the API to [manually trigger the AMI auto-update](https://docs.spot.io/api/#tag/Ocean-AWS/operation/oceanAwsAmiAutoUpdate) process. The body of the API call should contain the following parameters: 

* `"patch": true` - The auto-update process will update the VNGs’ images with the latest security patches. 
* `"minorVersion": true` - The auto-update process will update the VNGs’ images with the AMI to match the Kubernetes control plane version. 
* `"clusterRoll"` - When the AMI is updated according to the configuration set, a cluster roll will be triggered. When set to ‘null’, once the AMIs are updated, a cluster roll will not be triggered. 

Example of the JSON object for the API call: 

```json
{ 
    "amiAutoUpdate": { 
        "patch": true, 
        "minorVersion": true, 
        "applyRoll": true, 
        "clusterRoll": { 
            "batchSizePercentage": 20, 
            "comment": "this is just an example", 
            "batchMinHealthyPercentage": 100 
        } 
    } 
}  
```

Once the API call is triggered, if a new AMI is available, the VNGs will be updated with the new AMI, and a cluster roll will be triggered if it is set. 


 

 

 
