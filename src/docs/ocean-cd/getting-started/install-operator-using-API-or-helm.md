# Install Operator Manager

The Ocean CD Operator Manager is made of three pods that reside in your Kubernetes cluster, enabling the integration with the Spot Ocean CD solution: 

* Operator Manager - responsible for the installation and upgrade of Ocean CD Operator and Argo Rollouts. 
* Ocean CD Operator - responsible for the report of the cluster resources, manages SpotDeployment CRDs, and runs operations on the user’s clusters.  
* Argo Rollouts - the engine responsible for running the rollouts. 

## Prerequisites 

* A Kubernetes cluster up and running (on AWS, Azure or GCP). 
* A workstation with the Kubernetes cluster context and kubectl installed. 
* An existing Spot API Token. If not, you can create one using [this tutorial](https://docs.spot.io/administration/api/create-api-token?id=create-an-api-token). 

## Install the Operator Manager 

1. In the left main menu, click **Ocean CD** and then click **Settings**.  
2. Click **+ Add Cluster**. 

![install-operator-1](https://github.com/spotinst/help/assets/106514736/2fba9cf5-3c32-4844-852c-da82bb45f35b)

3. In the Add Cluster window, complete the information: 

![install-operator-2](https://github.com/spotinst/help/assets/106514736/1ac89008-c337-45ce-a39c-feb8df820b39)

* **Cluster Identifier**: Your cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces. It does not need to be related to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. 
* **Spot API Token**: This token is required for authentication and authorization of your API requests. 

To install the operator manager using a values.yaml file, click **Advanced** or download it directly from our [GitHub Repository](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/spot-oceancd-operator-manager/values.yaml). 

![install-operator-3](https://github.com/spotinst/help/assets/106514736/cf065c18-e2ae-48de-9304-4dff5557c189)

**Note: If you are already using Argo Rollouts, you need to cuztomize the values.yaml accordingly with your current configuration. If not, Ocean CD will override it**.  

In addition: 

* Installation using a Helm template is not supported. 
* Ocean CD supports the addition of your own flags and personal Argo customization.  
* By default, the operator manager is created without any resource limits. However, if you prefer to set limits on them, you have the option to do so manually. 
* Additional supported resources are affinity, tolerations, podSecurityContext, and nodeSelector. 

## Uninstall Ocean CD Operator Manager 

You can delete the operator manager by running the following command:  

`helm uninstall ${RELEASE_NAME}` 

To customize the deletion of your operator manager and keep CRDs accordingly, use the values.yaml file found in the GitHubRepository and set the KeepCRDs parameters to `false`.  

## What’s Next?

Learn how to create a [Spot deployment](ocean-cd/getting-started/create-deployment).  

