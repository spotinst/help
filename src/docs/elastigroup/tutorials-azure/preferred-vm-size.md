# Preferred Spot VM Size 
  
Preferred Spot VM sizes enable you to set priority tiers on the Elastigroup’s configured VM sizes. VM sizes that are selected as preferred will be prioritized over other types and will be used whenever possible.  

## Configure Preferred Spot VM Sizes in Elastigroup 

1. In the left main menu, click **Elastigroup**. On the main Elastigroup page, click **Groups**. 
2. Click an Elastigroup. The Elastigroup details page opens.  
3. Click **Edit Configuration**. 

![preferred-vm-size](https://github.com/spotinst/help/assets/106514736/5af10d51-3794-48a7-8d9f-744852fa5711)

4. Click the **Review** tab and then click the **JSON** tab. 
5. Enable the **Edit mode** toggle. 

![preferred-vm-size-2](https://github.com/spotinst/help/assets/106514736/894dbd95-1e3d-430c-8ded-bd1bfe506d97)

6. Under the **Compute** object, enter the following as an array, for example: 

`"preferredSpotSizes": [     "standard_a1_v2"]` 

**Note**: The preferred Spot size must be a subset of the Spot sizes. 

## What’s Next? 

Learn more about [Shared Image Galleries](elastigroup/features-azure/shared-image-galleries).  
