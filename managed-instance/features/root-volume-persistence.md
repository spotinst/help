# Root Volume Persistence

Root Volume Persistence maintains the data stored in your root volume, such as OS and configuration data, during Spot instance replacements. This way the application can start exactly where it left off. By default, the root device volume is deleted when the instance terminates. With Managed Instance, you can change the default behavior by enabling the Root Volume Persistence feature.

## How Root Volume Persistence Works

Periodic snapshots of the root volume are taken continuously while the instance is running. When a Spot interruption occurs, a “final” snapshot is taken only after the original instance is terminated and the root volume changes to an “available” state. Once the original instance is terminated, an image is registered using the final snapshot and a new instance is launched from this image.

## Enable Root Volume Persistence

Enter the Managed Instance configuration wizard. Under the “Persistent Resources” tab select “Persist Root Volume”:

<img src="/managed-instance/_media/root-volume-persistence-01.png" />

## Change the Image of Existing Stateful Instances

In order to change the AMI used to launch a particular Managed Instance with Root Volume persistence, follow these steps:

1. Remove the root persistence and update the Managed Instance with the new AMI.
2. Recycle the Managed Instance.
3. Re-enable the Root Volume Persistence in the Managed Instance’s configuration.

## Backend Actions

Managed Instance automatically performs various backend actions for different states of the instance to ensure root volume persistence:

- Paused: Images (AMIs) are created each time the Managed Instance is Paused using the latest root volume snapshot which was taken after the instance termination. Only the latest Snapshot is kept for each volume.
- Running: While the instance is running, a Snapshot is taken for the root volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup)..
- Deallocated: The data (Images, Volumes and Snapshots) are kept for 4 days by default. Note: Data storage time can be configured on an hourly basis, by reaching out to the Customer Support team.

## Persist Root on Windows Platform

When using the persist root volume option with Windows images, images created from snapshots as part of the recycle processes, will have a Platform parameter value of “Other Linux” (default behavior of AWS). This behavior can cause issues while trying to connect to the instance.

The following user data script can be added to the Managed Instance’s configuration to create a new user and password as the machine boots up, which will later be used to connect to the instance:

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

---

**Tip**: For the updated user data to take effect the instance must be [Recycled](managed-instance/features/managed-instance-actions.md).

---
