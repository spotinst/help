# Extensions for Elastigroup 

Spot Elastigroups support Azure extensions. The extensions are installed right after the VM initialization. 

## Install Extension 

To install extensions on an Elastigroup using the Spot console: 

1. In the left main menu, click **Elastigroup** and then **Stateful Nodes**.  
2. Select your stateful node and click **Edit Node**.  
3. Click **Next** until the Review tab.  
4. Click **JSON** and move the toggle to **Edit mode**. 
 

![extensions](https://github.com/spotinst/help/assets/106514736/060e9da5-8d33-4370-89b3-ece562c241b0)

4. Insert the Azure extension to the JSON in the following format: 

```yaml
"extensions": [ 

{ 

"name": "extensionName", 

"type": "customScript", 

"publisher": "Microsoft.Azure.Extensions", 

"apiVersion": "2.0", 

"minorVersionAutoUpgrade": true, 

"publicSettings": { }, 

"protectedSettings": { } 

} 

], 
```

For more details, see the [Spot API documentation](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful). 

## Import VM with Extensions  

During the import process, extensions with protected settings should be reinstalled after the migration to Spot, as these settings were encrypted and stored within the previous VM.  
Once the protected settings are set in Spot, each scaling iteration with the new VM will be launched with its protected settings.   

>**Note**: When configuring the 'Protected settings' parameter, Spot ensures its complete encryption. 
