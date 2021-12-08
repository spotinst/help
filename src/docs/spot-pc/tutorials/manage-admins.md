<meta name="robots" content="noindex">

# Manage Spot PC Admins

Spot PC allows for granular control over admin access to tenants including detailed permission sets.

## Admin Identity

Spot PC admins authenticate with a single identity. That identity can be invited to access and manage any tenant(s) in Spot PC, across all organizations and tenants. This flexibility is designed to support all sorts of support relationships including MSPs, contract admins, vendor access and more.

Admins can login with their existing identities from Azure AD, Google or NetApp Cloud Central. When an admin is invited to and organization or a tenant, they are prompted to login to accept the invitation and

Assigning tenant level permissions and managing those permissions has not been implemented yet in web app. So, you can not currently use organization user role.

## Admin Types
A Spot PC Admin can be invited to multiple organizations, admin type is configurable per-organization. Thus the same Spot PC Admin could be an _Org Admin_ for Org1 and _Tenant Creator_ for Org2.

### Organization Administrator
* Has full permissions to all tenants in the org.
* Can create new tenant(s) in the org.
* Can invite new users to the org.
* Can assign tenant-level permissions to users.

### Tenant Administrator
* Has full permissions to all tenants in the org.
* Can _not_ invite new users to the org.
* Can assign tenant-level permissions to users.

### Tenant Creator
* Has _no_ default permissions to any org tenants.
* Can be assigned tenant-level permissions.
* Can create new tenant(s) in the org, gains tenant-level permission on created tenant(s).
* Can _not_ invite new users to the org.
* Can _not_ assign tenant-level permissions to users.

### Organization User
* Has _no_ default permissions to any org tenants.
* Can be assigned tenant-level permissions.
* Can _not_ invite new users to the org.
* Can _not_ assign tenant-level permissions to users.

## Inviting a new Admin

New admins can be added to an organization by an Organization Admin in the the Admins section of the Spot PC console home page.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-manage-admins-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-manage-admins-01.png" alt="Click to Enlarge" width="500"> </a>

When adding an admin, the email address field is only used to deliver their invitation. They can accept and authenticate with any supported identity. Admins should only maintain one identity in Spot PC, there is no reason to have different logins to Spot PC.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-manage-admins-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-manage-admins-02.png" alt="Click to Enlarge" width="500"> </a>

The new admin will receive an email with a link to accept the invitation.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-manage-admins-03.png" target="_blank"><img src="/spot-pc/_media/tutorials-manage-admins-03.png" alt="Click to Enlarge" width="500"> </a>

## What’s Next?

Lean how to deploy [Spot PC desktops](spot-pc/tutorials/deploy-spot-pc) or [Windows 365 Cloud PC desktops.](spot-pc/tutorials/deploy-windows-365-cloud-pc)
