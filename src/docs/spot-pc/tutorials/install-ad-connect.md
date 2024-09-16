<meta name=“robots” content=“noindex”>

# Spot PC Tutorial: Install AD Connect

Authentication for AVD users is performed against the Azure AD and thus, the users' identities must be synced between their AD DC and Azure AD. The following is a step-by-step guide to installing AD Connect on the AD DC to facilitate this sync. The options and selections shown are recommendations and not required. Deployments should be customized to fit your specific environment and use case.

## Confirm AD Connect is Not Setup

Prior to starting, confirm the AD Connect has not already been setup and configured on this (or any other) AD DC. This can be confirmed from within the Azure portal under Azure AD Connect. The AD Connect installer can be downloaded from here as well.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-01.png" alt="Click to Enlarge" width="1000"> </a>

If Azure AD Connect is already setup and syncing between the appropriate AA DC and Azure AD tenant, this prerequisite is likely complete. The current settings may be reviewed to confirm support for Spot PC.

If Azure AD Connect is already (or was previously) setup and is non-functional or syncing between the wrong AD DC and/or Azure AD tenant, follow Microsoft's instructions for [disabling directory sync](https://docs.microsoft.com/en-US/troubleshoot/azure/active-directory/cannot-manage-objects#resolution), before [uninstalling Azure AD Connect](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-uninstall).

## Enforce TLS 1.2

Enforcing TLS 1.2 is required for AD Connect to securely sync with Azure AD. Microsoft provides guidance on enabling this for your AD DC here: https://docs.microsoft.com/en-us/azure/active-directory/hybrid/reference-connect-tls-enforcement

## Add UPNs to the AD DC

Prior to running AD Connect, add all domain UPNs to the DC by selecting the domain's Properties.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-02.png" alt="Click to Enlarge" width="1000"> </a>

The available UPNs can be located in the Azure portal under _Azure Active Directory > Custom domain names_. Copy all entries from the Azure Portal to the domain properties > Alternative UPN Suffixes.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-03.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-03.png" alt="Click to Enlarge" width="1000"> </a>
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-04.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-04.png" alt="Click to Enlarge" width="1000"> </a>

## Run the Azure AD Connect Installer on the Domain Controller

Run the AD Connect installer which can be [downloaded from Microsoft here.](https://www.microsoft.com/en-us/download/details.aspx?id=47594)
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-05.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-05.png" alt="Click to Enlarge" width="1000"> </a>

## Choose to Customize the Install
Several helpful features (e.g., AD group and password writeback) can only be enabled if AD Connect is installed using the customize option. Even is all default options are selected, the Customize install is preferred.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-06.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-06.png" alt="Click to Enlarge" width="1000"> </a>

## Install Required Components

No selections are required on this page, simply click _Install_ to continue.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-07.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-07.png" alt="Click to Enlarge" width="1000"> </a>

## User Sign-In

Select the method of end user sign-on desired. Please modify to meet your environment and use case, in most cases the defaults of _Password Hash Synchronization_ is recommended.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-08.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-08.png" alt="Click to Enlarge" width="1000"> </a>

## Connect to Azure AD

Enter the credentials of an Azure AD Global Admin to authenticate to Azure AD.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-09.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-09.png" alt="Click to Enlarge" width="1000"> </a>

## Connect your Directories
Select your AD forest and click _Add Directory_.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-10.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-10.png" alt="Click to Enlarge" width="1000"> </a>

The AD forest sync requires a service account to maintain the ongoing sync. It is strongly recommended that the _Create new AD account_ option is selected so that the account is dedicate to this sync and the permissions are set correctly.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-11.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-11.png" alt="Click to Enlarge" width="1000"> </a>

Once the directory is added, click _Next_ to continue.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-12.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-12.png" alt="Click to Enlarge" width="1000"> </a>

## Azure AD Sign-in Configuration

Ensure the existing domain is added to Azure AD. Domains ending with .onmicrosoft.com will not be added, this is not a problem. If required, the _Continue without matching all UPN suffixes to verified domains_ checkbox can be checked.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-13.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-13.png" alt="Click to Enlarge" width="1000"> </a>

## Domain and OU Filtering

You may select to filter specific domains/OUs and only sync those selected items. Please modify to meet your environment and use case, in most cases the defaults of syncing _all domains and OUs_ is recommended.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-14.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-14.png" alt="Click to Enlarge" width="1000"> </a>

## Uniquely Identifying Your Users

You may select how users should be identified across on-premises directories and Azure AD. Please modify to meet your environment and use case, in most cases the defaults of _Users are represented only once across all directories_ and _Let Azure manage the source anchor_ are recommended.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-15.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-15.png" alt="Click to Enlarge" width="1000"> </a>

## Filter Users and Devices

You may choose to limit the synced users and devices by group. For initial setup and testing this is highly recommended. This functionality can be used to test the AD Connect settings against a small subset of users, ensuring that configuration errors don't impact the entire domain.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-16.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-16.png" alt="Click to Enlarge" width="1000"> </a>

## Optional Features

You may choose to enable enhanced functionality for your environment. For Spot PC, the _Password writeback_ and _Group writeback_ settings are recommended. This guide does not cover these optional features.

An article on enabling password write back is found here: https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback

An article on enabling group write back is found here: https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-group-writeback
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-17.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-17.png" alt="Click to Enlarge" width="1000"> </a>

## Ready to Configure

Before beginning the first sync, the installer provides the option to enable staging mode. This can be helpful to delay the syncing process in case there are additional configurations or backups that need to occur prior to syncing.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-18.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-18.png" alt="Click to Enlarge" width="1000"> </a>

## Configuration Complete

Once the configuration has finished you'll be shown the following page. It recommends enabling _AD Recycle Bin_. Spot PC also _highly recommends enabling this_ to provide for simple remediation for sync changes causing unintended behaviors.

An article on enabling Active Directory Recycle Bin is found here: https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sync-recycle-bin
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-19.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-19.png" alt="Click to Enlarge" width="1000"> </a>

## Verifying Sync

You can verify that objects are syncing by checking for users and groups in the Azure portal. Users will show _Directory synced_ and groups will show their _Source_.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-20.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-20.png" alt="Click to Enlarge" width="1000"> </a>
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-install-ad-connect-21.png" target="_blank"><img src="/spot-pc/_media/tutorials-install-ad-connect-21.png" alt="Click to Enlarge" width="1000"> </a>

## What’s Next?

Lean how to deploy [Spot PC desktops](spot-pc/tutorials/deploy-spot-pc) and/or [Windows 365 Cloud PC desktops.](spot-pc/tutorials/deploy-windows-365-cloud-pc)
