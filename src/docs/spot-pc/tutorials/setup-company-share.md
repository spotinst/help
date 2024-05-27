<meta name=“robots” content=“noindex”>

# Spot PC Tutorial: Add Company Share

Spot PC does not automatically assign a company share folder, nor do we managed the permissions on any file shares. This guide is a quick and simple way you can add a company share a manage the permissions, similar to a traditional on-premises sysadmin.

* Log in to Spot PC Web App and navigate to the tenant.
* Select the Data Volumes tab and copy the path <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-setup-company-share-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-setup-company-share-01.png" alt="Click to Enlarge" width="1000"> </a>
* Connect to the SpotPCManager1 using Quick Actions <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-setup-company-share-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-setup-company-share-02.png" alt="Click to Enlarge" width="1000"> </a>
* Use file explorer to navigate to the previously copied path and create a new directory <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-setup-company-share-03.png" target="_blank"><img src="/spot-pc/_media/tutorials-setup-company-share-03.png" alt="Click to Enlarge" width="1000"> </a>
* There is now a new directory for shared data that is accessible via Spot PC <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-setup-company-share-04.png" target="_blank"><img src="/spot-pc/_media/tutorials-setup-company-share-04.png" alt="Click to Enlarge" width="1000"> </a>
* If you'd like, you can set permissions on the directory or sub-directories to limit access. It may be best to disable inheritance of the permissions on the new directory from the root of the share to set the permissions the way you'd like. 
* Group policy can be used to map to the new path (ie \\spotpcfffd32e3.file.core.windows.net\spotpc\data)





## What’s Next?

Lean how to deploy [Spot PC desktops](spot-pc/tutorials/deploy-spot-pc) and/or [Windows 365 Cloud PC desktops.](spot-pc/tutorials/deploy-windows-365-cloud-pc)
