# Organization-Level SSO

For organization-level login, you can give a user permissions to an organization based on their role or user group using a SAML attribute. This lets a user sign in to different organizations using the same user and IDP app. The user can different permissions for each organization.

## Organization and Role

You can configure role and organization attributes using a SAML attribute. The organization and role combination are configured for each user using this IDP format:

```xml
<Attribute Name="OrgAndRole" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"> <AttributeValue>SPOTINST-OrganizationID-ADMIN</AttributeValue> <AttributeValue>SPOTINST-OrganizationID-VIEWER</AttributeValue> <AttributeValue>SPOTINST-OrganizationID-VIEWER</AttributeValue> </Attribute>
```

The SAML attribute <i>OrgAndRole</i> allows the organization ID to be set dynamically on each request, and not once as a RelayState. The attribute value is in this format: `SPOTINST-<AccountId>-<Role>`. Make sure the `<AccountId>` and `<Role>` are separated by a dash.

This attribute lets a user sign in to different organizations using the same user and IDP app, while setting the organization ID dynamically.

Keep in mind:
- If <i>OrgAndRole</i> exists, the system overrides the RelayState and the Role (if the Role is provided as a different attribute).
- The <i>OrgAndRole</i> attribute and attribute value are case sensitive.
- If a user logs in through SSO with a Role attribute, the role of that user is set accordingly, which means that these settings affect both existing users and new users. For example, an XML attribute:

```xml
<saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" Name="Role"> <saml:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">ADMIN</saml:AttributeValue> </saml:Attribute>
```

### Supported Role Attributes
- ADMIN is equivalent to Account Editor
- VIEWER is an account viewer
- NO_ACCESS has no access to console

In this case, an Account Admin role is provided, meaning an Account Editor. This is not an Organization Admin.

## Organization and User Group

You can configure a user to one or many user groups under a certain organization, so that the policy-based permissions that are configured to those groups will be enforced on the user. The Organization and User Group combination are configured for each user using this IDP format:

```xml
<Attribute Name="OrgAndUserGroups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
<AttributeValue>SPOTINST-OrganizationID:ugr-1234</AttributeValue>
<AttributeValue>SPOTINST-OrganizationID:ugr-1a3a,ugr-2443</AttributeValue>
<AttributeValue>SPOTINST-OrganizationID:ugr-223s,ugr-2333,ugr-a21c</AttributeValue>
</Attribute>
```

Keep in mind:
- Multiple <i>UserGroupIds</i> for the same organization are separated with a comma.
- All <i>UserGroupIds</i> provided in the configuration must exist for the relevant <i>OrganizationId</i>.
- The attribute value is in the format `SPOTINST-<OrganizationID>:<UserGroupId>`
- If multiple <i>userGroups</i> are applied to an organization, this is the format:

```
SPOTINST-<OrganizationID>:<UserGroupId1>,<UserGroupId2>
```
