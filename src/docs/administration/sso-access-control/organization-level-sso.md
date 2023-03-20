# Organization Level SSO

For organization level login, it is possible to grant a user permission's to an organization per role or per user groups using a SAML attribute. The attributes allow login to different organizations by the same user and the same IDP app while setting the permissions dynamically for each organization. The attributes are described below.

## Organization and Role

You can configure role and organization attributes using a SAML attribute. The Organization and Role combination are configured for each user using the following IDP format:

```xml
<Attribute Name="OrgAndRole" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"> <AttributeValue>SPOTINST-OrganizationID-ADMIN</AttributeValue> <AttributeValue>SPOTINST-OrganizationID-VIEWER</AttributeValue> <AttributeValue>SPOTINST-OrganizationID-VIEWER</AttributeValue> </Attribute>
```

The SAML attribute OrgAndRole (ignore case) allows the organization ID to be set dynamically on each request, and not once as a RelayState. The attribute is in the Format: "Spotinst-<organizationID>-<role>".

This attribute will allow login into different organizations with the same user and the same IDP app while setting the organization ID dynamically.

### Usage Notes
- If OrgAndRole exists, the system overrides the RelayState and the Role (if the Role is provided as a different attribute).
- The OrgAndRole attribute and attribute value are case sensitive.
- If a user logs in through SSO with a Role attribute, the role of that user will be set accordingly, which means that these settings will affect both existing users and new users, i.e., an XML attribute:

```xml
<saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" Name="Role"> <saml:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">ADMIN</saml:AttributeValue> </saml:Attribute>
```

### Supported Role Attributes
- ADMIN – Equivalent to Account Editor
- VIEWER – Account viewer
- NO_ACCESS – No access to console

In this case, an Account Admin role is provided, meaning an Account Editor. This is not an Organization Admin.

## Organization and User Group

You can configure a user to one or many user groups under a certain organization, so that the policy-based permissions that are configured to those groups will be enforced on the user. The Organization and User Group combination are configured for each user using the following IDP format:

```xml
<Attribute Name="OrgAndUserGroups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
<AttributeValue>SPOTINST-OrganizationID:ugr-1234</AttributeValue>
<AttributeValue>SPOTINST-OrganizationID:ugr-1a3a,ugr-2443</AttributeValue>
<AttributeValue>SPOTINST-OrganizationID:ugr-223s,ugr-2333,ugr-a21c</AttributeValue>
</Attribute>
```

### Usage Notes
- Multiple UserGroupIds for the same organization are separated with a comma.
- All UserGroupIds provided in the configuration must exist for the relevant OrganizationId.
- The attribute value is in the format `SPOTINST-<OrganizationID>:<UserGroupId>`
- If multiple userGroups are applied to an organization, the format is as follows:

```
SPOTINST-<OrganizationID>:<UserGroupId1>,<UserGroupId2>
```

## What’s Next?

Learn more about configuring [account level SSO](administration/sso-access-control/account-level-sso).
