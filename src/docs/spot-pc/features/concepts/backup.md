<meta name=“robots” content=“noindex”>

# Features: Backup

Backing up the Spot PC Data Layer is configured at deployment by the Spot PC onboarding team. The specific technology and configuration of the backup policy is determined by many factors including the storage layer technology (Azure Files vs. Azure NetApp Files) as well as the region as the availability of backup services vary by region.

If the data layer is running on Azure Files, Spot PC will configure [Azure snapshots](https://docs.microsoft.com/en-us/azure/storage/files/storage-snapshots-files) to backup the data layer on a set schedule.

If the data layer is running on Azure NetApp Files (ANF), Spot PC will configure either [ANF backup](https://docs.microsoft.com/en-us/azure/azure-netapp-files/backup-introduction) or [ANF snapshots](https://docs.microsoft.com/en-us/azure/azure-netapp-files/snapshots-introduction) depending on regional availability.

Business Servers and Personal User VM hosts are also backed up as well. The backup & retention schedule is 7 daily, 5 weekly, 12 monthly, and 5 annual retention/recovery points.

NOTE: Spot PC host machines are built based on a VM image and no permanent data should reside on the VM managed disks. Thus, host machines are not backed up as part of the Spot PC service and should be considered non-persistent disks.

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
