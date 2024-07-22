#  Log Integration with Azure Blob

You can view the Ocean logs in the Spot console or retrieve them via the [Spot OpenAPI](https://docs.spot.io/api/).

This topic describes Ocean’s log integration with Azure Blob. You can configure Ocean to export logs to an Azure Blob, and then you can access the logs using your central monitoring tool. 
You can read and troubleshoot the Ocean logs in the same central interface where you access your other logs. 

For example, Azure Functions can send logs from Azure Blob to the New Relic monitoring application.

##  Prerequisites
Add this to the Spot data actions policy permissions to write to your Azure Blob storage account and container.  

```json
"dataActions": 
["Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write" ]
```
>**Note**: View the full [Azure permissions file](https://docs.spot.io/administration/api/spot-policy-aks-azure).

##  Set up Ocean Export Log Integration

The integration consists of two parts:

*  Define the Azure Blob data integration between the Spot platform, storage account, and container. This definition is at the Spot account level, and you can use it for multiple Ocean clusters.
*  Define the data integration usage on an ocean cluster. This activates the logging export to the storage account and container defined in the data integration.

Once you complete the setup, log files from the defined cluster will be exported to the defined storage account and container.

###  Define Azure Blob Data Integration

1.  Use the [Create Data Integration](https://docs.spot.io/api/#operation/DataIntegrationCreate) API call to configure the integration's basic parameters, such as the vendor name, a name to identify the integration (you may have multiple integrations and need to keep them separate), the storage account, and the container for the exported log files.

**Request example**:
```json
{
  "dataIntegration": {
    "vendor": "azureBlob",
    "name": "ocean-logs",
    "config": {
      "storageAccount": "myBlobStore",
      "container": "OceanLogs"
    }
  }
}
```
2.  When you get the response to the Create Data Integration API, copy the returned integration ID. You will need it for the next procedure. In the example below, you would copy di-123.

**Response example**:

```json
{
  "request": {
    "id": "e593ff58-067d-4340-92f9-8b1c0bad70d7",
    "url": "/insights/dataIntegration",
    "method": "POST",
    "timestamp": "2018-06-20T11:35:01.745Z"
  },
  "response": {
    "status": {
      "code": 200,
      "message": "OK"
    },
    "items": [
      {
        "id": "di-123",
        "vendor": "azureBlob",
        "name": "my-azure-blob-integration",
        "status": "enabled",
        "health": "valid",
        "code": 200,
        "message": "ok",
        "lastHealthCheck": "2021-08-1T10:00:00.000Z",
        "config": {
          "storageAccount": "mystorage",
          "container": "dev"
        }
      }
    ],
    "count": 1,
    "kind": "spotinst:dataIntegration"
  }
}
```

###  Define Integration on Ocean Cluster

Use the [Create Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterCreate) or [Update Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterUpdate) (for an existing cluster) API call to enter the integration ID in the Ocean cluster you want to export. (This is the ID you copied in Step 2 of the previous procedure.)

**Example**:
```json
{
  "cluster": {
    "logging": {
      "export": {
        "azureBlob": {
          "id": "di-123"         
        }
      }
    }
  }
}
```
>**Note**: If you want to monitor multiple Ocean clusters, repeat the procedure for each cluster. The log file name format (described below) allows you to distinguish between the logs from different clusters.

##  Log Files

Each Ocean log file on the container in the defined storage account takes three minutes of logging and has the following format for the filename:

`accountId_oceanId_oceanName_startDate.log`

For example, a filename would look like:

`act-12345_o-12345678_cluster.k8s.com_2021-08-18T08:06:00Z.log`

