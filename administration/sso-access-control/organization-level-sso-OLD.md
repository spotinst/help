<meta name="robots" content="noindex">

# Organization Level SSO

Configure Role and Organization Attributes via SAML Attribute. The Organization and Role combination are configured for each user using the following IDP format:

```
<Attribute Name="OrgAndRole" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
<AttributeValue>SPOTINST-OrganizationID-ADMIN</AttributeValue>
<AttributeValue>SPOTINST-OrganizationID-VIEWER</AttributeValue>
<AttributeValue>SPOTINST-OrganizationID-VIEWER</AttributeValue>
</Attribute>
```

The SAML attribute `OrgAndRole` (ignore case) allows the organization ID to be set dynamically on each request, and not once as a RelayState. The attribute is in the Format: `Spotinst-<organizationID>-<role>`.

This attribute will allow login into different organizations with the same user and the same IDP app while setting the organization ID dynamically.

## Usage Notes

- If OrgAndRole exists, the system overrides the RelayState and the Role (if the Role is provided as a different attribute).
- The OrgAndRole attribute and attribute value are case sensitive.
- If a user logs in through SSO with a Role attribute, the role of that user will be set accordingly, which means that these settings will affect both existing users and new users, i.e., an xml attribute:

```
<saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" Name="Role">
<saml:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">ADMIN</saml:AttributeValue>
</saml:Attribute>
```

## Supported Role Attributes

- ADMIN – Equivalent to Account Editor
- VIEWER – Account viewer
- NO_ACCESS – No access to console

In this case, an Account Admin role is provided, meaning an Account Editor. This is not an Organization Admin.
