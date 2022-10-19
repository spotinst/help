<meta name="robots" content="noindex">

# Persist Root Volume

Root Volume Persistence maintains the data stored in your root volume, such as OS and configuration data, during Spot instance replacements. This way you can start the application exactly where you left off. By default, the root device volume is deleted when the instance terminates. To change the default behavior, enable the Root Volume Persistence feature.

## How Root Volume Persistence Works

Periodic snapshots of the root volume are taken continuously while the instance is running. When a Spot interruption occurs, a `final` snapshot is taken only after the original instance is terminated and the root volume changes to an `available` state. Once the original instance is terminated, an image is registered using the final snapshot and the new instance is launched from this image.

## Enable Root Volume Persistence

1. Enter the Elastigroup Creation Wizard.
2. Under the Compute tab open Stateful and select Persist Root Volume.

<img src="/elastigroup/_media/stateful-persist-rootvolume-01.png" />

## Change the Image of Existing Stateful Instances

Changing the image in an Elastigroup only affects Stateful instances with root persistence that were created after the change.To change the image of an existing Stateful instance use the steps below.

1. Remove the root persistence and update the Elastigroup with the new image.
2. Recycle the Stateful instance.
3. Re-enable the root persistence in the Elastigroup configuration.

## Backend Actions

Elastigroup automatically performs various backend actions for different states of the Stateful instance to ensure root volume persistency.

- Paused: Images (AMI) are created each time the Stateful instance is Paused using the latest root volume snapshot which was taken after the instance termination. Elastigroup only keeps the latest Snapshot for each volume.
- Running: While the instance is running, a Snapshot is taken for the root volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup).
- Deallocated: The data (Images, Volumes and Snapshots) are kept for 4 days by default.

> **Tip**: Data storage can be configured on an hourly basis.

## Persist Root on Windows Platform

In some cases, when using Windows-based instances together with root persistency, some customers encounter difficulties connecting to the instance. To avoid this, the following user data script can be added to the group configuration to create a new user and password as the machine boots up. The new user credentials will later be used to connect to the instance.

```powershell
<powershell>
$Username = "SpotinstAdmin"
$Password = "Spot@dmin1"
$group = "Administrators"
$adsi = [ADSI]"WinNT://$env:COMPUTERNAME"
$existing = $adsi.Children | where {$_.SchemaClassName -eq 'user' -and $_.Name -eq $Username }
if ($existing -eq $null) {
 NET USER $Username $Password /add /y /expires:never
 NET LOCALGROUP $group $Username /add
}
else {a
 $existing.SetPassword($Password)
}
WMIC USERACCOUNT WHERE "Name='$Username'" SET PasswordExpires=FALSE
</powershell>
<persist>true</persist>
```

For the updated user data to take effect, the instance must be recycled.

## What's Next?

Learn more about [persisting data volumes](elastigroup/features/stateful-instance/persist-data-volumes).
