# Root Volume Persistence

Root Volume Persistence maintains the data stored in your root volume, such as OS and configuration data, during spot node replacements. This way the application can start exactly where it left off. By default, the root device volume is deleted when the node terminates. With Statefule Node, you can change the default behavior by enabling the Root Volume Persistence feature.

Periodic snapshots of the root volume are taken continuously while the node is running. When a node is terminated, an image is created from the last snapshot, and a new node is launched from this image.

The [flow diagram](elastigroup/features/z-stateful-instance/stateful-elastigroup-flow) describes on a high level how Spot manages the persistence of stateful nodes.

## Backend Actions

Stateful node performs various backend actions for different states of the node to ensure root volume persistence.

- Paused: Images (AMIs) are created each time the stateful node is paused using the latest root volume snapshot which was taken after the node termination. Only the latest snapshot is kept for each volume.
- Running: While the node is running, a snapshot is taken for the root volume every 5 minutes.
- Deallocated: When you delete a stateful node, you can choose which parts to delete.
  - If you select all parts, then they will be deleted immediately.
  - If you select only some of the parts for deletion, then those parts will be kept for four days and then deleted.

> **Tip**: Data storage time can be configured on an hourly basis. For more information, reach out to the Customer Support team.

## Enable Root Volume Persistence

1. If the Spot console, go to **Elastigroup** > **Stateful Nodes** and select the stateful node.
2. Click **Actions** > **Edit Configuration**.
3. On the Persistent Resources tab, select **Persist Root Volume**.

## Change the Image of Existing Stateful Nodes

To change the AMI used to launch a particular stateful node with root volume persistence:

1. Remove the root persistence and update the stateful node with the new AMI.
2. Recycle the stateful node.
3. Re-enable the root volume persistence in the stateful node configuration.

## Persist Root on Windows Platform

When using the persist root volume option with Windows images, images created from snapshots as part of the recycle processes, will have a Platform parameter value of `Other Linux` (default behavior of AWS). This behavior can cause issues while trying to connect to the node.

This user data script can be added to the stateful node's configuration to create a new user and password as the machine boots up, which will later be used to connect to the node:

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

> **Tip**: For the updated user data to take effect the  must be [recycled](managed-node/features/managed-instance-actions).
