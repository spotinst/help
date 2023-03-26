# Use the Spot Storage Dashboard

The Spot Storage Dashboard provides an overview of your storage resources in the cloud (AWS) and presents recommendations for you to achieve cost savings for your storage use.

To get started, go to Spot Storage in the left sidebar and click Dashboard.

## Storage Highlights

Storage highlights for this account are displayed at the top of the Dashboard and include an overview of your storage resources. All information is on the account level.

<img src="/spot-storage/_media/dashboard-n001a.png" />

- Estimated Mon. Savings: The amount you could have saved in the last month if all of the recommendations on this page had been enacted. The month is calculated as the last 30 days from the date that appears in the upper right by Last Update.
- Savings Percentage: A comparison of your theoretical storage cost over the last month with all recommendations taken vs. your actual storage cost.
- EBS Volumes: Total number of EBS volumes in your cloud.
- Allocated Size: Total size of storage you have in your cloud.
- Avg. EBS Size: Your total allocated size divided by the total number of EBS volumes you have.
- S3 Objects: Total number of S3 objects in your cloud.
- Allocated Size: Total amount of S3 storage space in your cloud.

### Refresh

Click Refresh in the upper right to refresh the data displayed in the Dashboard.

## Volume Recommendations

Spot analyzes your storage resources and presents recommendations that you can act on immediately. The default view of the Recommendations area is on the Volumes tab. When you view the Volumes tab all the recommendations and the Potential Savings by Region relate to volumes.

<img src="/spot-storage/_media/dashboard-n002.png" />

Volume recommendations are either to remove volumes or to modify the volume type. These are explained below.

### Remove Volumes

Spot recommends removing a volume for various reasons, and the reason is always displayed. For example, unattached volumes and volumes that are attached to stopped instances can be removed. If a volume is attached to an instance that has been stopped for more than three hours, the volume is recommended for removal.

In addition, Spot displays that amount you can save over the next month by deleting the volumes recommended.

<img src="/spot-storage/_media/dashboard-n003.png" width="400" />

1. Click Remove Volumes (or anywhere on the card) to see the list of unattached volumes recommended for removal. See below for more information about the Unattached Volumes table that appears.

<img src="/spot-storage/_media/dashboard-n004.png" />

2. To remove one or more volumes, mark the checkboxes on the left and click Delete Volumes.
3. You will be prompted to confirm the volumes you want to remove. Enter the requested information and click Yes, Delete.

<img src="/spot-storage/_media/dashboard-n005.png" width="400" />

#### Unattached Volumes Table

This table displays the full list of unattached volumes recommended for removal. Use the filter to display only a subset of unattached volumes or to search for a specific volume.
- Click the Volume ID to see more detailed information about a volume. This will take you to the detailed Volume page in the AWS console.
- Click Download to CSV to download the list of volumes. This will download the full list of volumes recommended to a comma separated list in a text file.

### Modify EBS Type

Spot identifies your EBS types and recommends suitable EBS types that would cost you less. For example, Spot may recommend that you change your EBS type from gp2 to gp3.

<img src="/spot-storage/_media/dashboard-n006.png" width="400" />

1. Click Modify Type (or anywhere on the card) to see the list of recommendations to modify EBS type. See below for more information about the Unoptimized EBS Type table that appears.

<img src="/spot-storage/_media/dashboard-n007.png" />

2. To modify one or more volumes, mark the checkboxes on the left and click Apply Modifications.
3, You will be prompted to confirm the volumes you want to modify. Enter the requested information and click Yes, Modify. The Unoptimized EBS Type table, opened to the Optimization Status view, will then appear.

#### Unoptimized EBS Type Table: Optimization Status View

This view of the table shows the status of EBS volumes that are having their type modified. Information includes the Volume ID, the current volume type, and target volume type, and the status of the modification process. The modifications could take several minutes.

<img src="/spot-storage/_media/dashboard-n0081.png" />

To see more information about a specific volume, click the Volume ID. This will show you the volume details in the AWS console.

To get back to the Volumes view (shown below) click the Volumes tab above the table. You can continue making additional modifications to volumes even if there are modifications currently in progress.

#### Unoptimized EBS Type Table: Volumes View

This table shows the full list of unoptimized EBS volumes in your cloud recommended for modification.

<img src="/spot-storage/_media/dashboard-n0082.png" />

- Click the Volume ID to see more detailed information about a volume. This will take you to the detailed Volume page in the AWS console.
- Click an Instance ID to see more details about the instance attached to the volume. This also takes you to a page in the AWS console.
- Click Download to CSV to download the list of volumes. This will download the full list of volumes recommended to a comma separated list in a text file.

### Potential Savings by Region

The bar chart shows you the potential savings you could achieve in each region where your instances are located. The potential savings is calculated over the next 30 days and assumes you modify all the instances recommended.

<img src="/spot-storage/_media/dashboard-n009.png" />

When you hover the mouse over a bar, the details of that region are displayed, including:
- Estimated monthly savings
- Number of EBS volumes
- Total amount of storage allocated to you (Allocated size)

When you click a bar, a full breakdown for that region appears on the right. This includes a list of all EBS types detected, the number of volumes (i.e., count) having each EBS type, and the total storage size allocated to the volumes of that type.

The default view of the summary table (i.e., before you click on any of the bars) shows data for your entire cloud. You can always get back to the default view by clicking Clear Selection.

## FileSystems Recommendations

You can see these recommendations by clicking on the FileSystems tab in the Recommendations.

<img src="/spot-storage/_media/dashboard-n010.png" />

### Remove EFS

Spot checks the last read time on your EFS file systems. An EFS is recommended for removal if there were no reads in the last two weeks.

1. To remove an EFS, click Remove EFS or anywhere on the card.

<img src="/spot-storage/_media/dashboard-n011.png" />

2. Mark the file systems for removal and click Delete Volumes.
3. You will be prompted to confirm the deletion. Enter the information requested and click Yes, Delete.

<img src="/spot-storage/_media/dashboard-n012.png" width="400" />

## What’s Next?

Spot Storage keeps a log of the actions you have taken based on the Recommendations presented. Learn more about the [Recommendations Log](spot-storage/recommendations-log).
