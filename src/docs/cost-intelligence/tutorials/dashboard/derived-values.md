# Generate Derived Values 

This document describes how to utilize Cost Intelligence Dashboards to generate derived values. Before generating derived values, it is essential to upload a dataset. 

## Prerequisite 

The prerequisite to generating derived values within the Cost Intelligence Dashboards is that a dataset must be uploaded first.  

## Generate a Dataset 

Complete the following steps to generate a dataset: 

1. Click **Actions** and then **Manage Files** in the top right corner. 

![generated-derived-values-1](https://github.com/spotinst/help/assets/106514736/aae24ff9-3ef8-4ee6-b8a5-80842f133ffc)

2. Select **Create New Dataset** and then upload the file. 

## Generating Derived Values 

Complete the following steps to generate derived values: 

1. Click **Actions** and then **Manage Files** in the top right corner. 
2. Select the dataset you want to derive values from. 

![generated-derived-values-2](https://github.com/spotinst/help/assets/106514736/edec4eac-31c4-455e-8379-02f8e7fe30f9) 

3. Click **Transformations** on the right, above the **Configurations** column. 

![generated-derived-values-3](https://github.com/spotinst/help/assets/106514736/6d65f2d3-a749-48c4-8caa-cea2e5e2682d)

4. Drag the desired transformation into the **Transformations** panel. Transformations can be of the following categories: 

* Numeric 
    * Addition 
    * Division 
    * Multiplication 
    * Round 
    * Subtraction 
* Text 
    * Concatenate 
    * Lowercase 
    * Text Analysis 
    * Text Replace 
    * Trim 
    * Uppercase 
* Date 
    * Date Add 
    * Date Difference 
* Logic 
    * Array Filter 
    * Array Flatten 
    * Array Select Single Item 
    * Formula 
    * If/Else 
    * Record Copy 
* External 
    * Dataset Write 

5. Select the parameters for the transformation. In the example below, a new column called Derived Savings is created by taking the difference between the `pricing_public_on_demand_cost` and `reservation_effective_cost` columns. 

![generated-derived-values-4](https://github.com/spotinst/help/assets/106514736/673c8c8d-49fa-4aeb-862d-254c8c43c9b7)

6. Validate the transformation in the Testing section. In the example below, the new column called Derived Savings appears in the output. 

![generated-derived-values-5](https://github.com/spotinst/help/assets/106514736/530463cc-2e56-473d-a6cf-8a2da7061c7c)

7. The new column opens with an ‘Added’ tag in the dataset. To apply the transformation and save the new derived value column, click **Apply Changes**. 

![generated-derived-values-6](https://github.com/spotinst/help/assets/106514736/586f3b05-6fce-4f70-af31-2b1ed41ac1a1)

When all the steps above are completed, the derived value can be used in charts and dashboards. The new column will be available alongside the previous columns when configuring charts. 
