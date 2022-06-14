# Concept: Spot PC Manager VM

Within the Spot PC Azure Subscription, we deploy an administration and orchestration VM known as "Spotpcmanager1." The VM is sized as a Standard_D2s_v3 running Windows Server 2019 and its costs are fully covered by NetApp.

This VM handles communication and management of Spot PC VM’s, Spot Agent installations on Spot PC VMs and more.

Command Center is a Spot PC web-based administration tool installed to Spotpcmanager1. Among other things, this application can:
1. Create Azure and ANF file shares
2.	Create additional sites to Horizontally scale a SpotPC deployment
3.	Create images

Spotpcmanager1 hosts rwo core Spot PC services:
1.	Spoc Service – listens for automated requests coming from SpotPC UI
2.	SpotPC Agent – Gets installed on all new session hosts within the deployment


## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
