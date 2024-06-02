<meta name=“robots” content=“noindex”>

#  Log Integration with Azure Blob

You can view the Ocean logs in the Spot console or retrieve them via the [Spot OpenAPI](https://docs.spot.io/api/).
This topic describes Ocean’s log integration with Azure Blob. You can configure Ocean to export logs to an Azure Blob, and then you can access the logs using your central monitoring tool. 
You can read and troubleshoot the Ocean logs in the same central interface where you access your other logs. 

For example, Azure Functions can be used to send logs from Azure Blob to the [New Relic](https://newrelic.com/search?q=Azure+Blob&p=1) monitoring application.
```
"dataActions": 
["Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write" ]
```
>**Note**: View the full [Azure permissions file](https://docs.spot.io/administration/api/spot-policy-aks-azure).


