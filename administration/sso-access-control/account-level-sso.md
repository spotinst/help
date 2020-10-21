# Account Level SSO

Assign Account Permissions with SAML Attribute. For account level login, it is possible to grant a user permissions to accounts per [user role](administration/users/) and per [access policy](administration/access-policies/). These are defined using SAML attributes. The attributes allow login to different accounts by the same user and the same IDP app while setting the roles dynamically on each request.

## Account and Role

Login to an account with a specific role is defined with an Account and Role combination. The combination is configured using the following IDP format:

```
<Attribute Name="AccAndRole" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
<AttributeValue>SPOTINST-AccountID-EDITOR</AttributeValue>
<AttributeValue>SPOTINST-AccountID-VIEWER</AttributeValue>
<AttributeValue>SPOTINST-AccountID-VIEWER</AttributeValue>
</Attribute>
```

The attribute value is in the format:
`SPOTINST-<AccountId>-<Role>`

The <AccountId> and <Role> are separated by a dash.

## Account and Policy

It is also possible to assign Account and Policy combinations for each user so that a user can get policy-based permissions. This user can also log in to an account with one or multiple policies applied.

The format is shown below:

```
<Attribute Name="AccAndPolicyIds" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
<AttributeValue>SPOTINST-AccountID:pol-1234</AttributeValue>
<AttributeValue>SPOTINST-AccountID:pol-1a3a,pol-2443</AttributeValue>
<AttributeValue>SPOTINST-AccountID:pol-223s,pol-2333,pol-a21c</AttributeValue>
</Attribute>
```

- Multiple PolicyIds for the same account are separated with a comma.
- All PolicyIds provided in the configuration must exist for the relevant AccountId.

The attribute value is in the format:
`SPOTINST-<AccountId>:<PolicyId>`

- The <AccountId> and <PolicyId> are separated by a colon.

If multiple policies are applied to an account, the format is as follows:

`SPOTINST-<AccountId>:<PolicyId1>,<PolicyId2>,<PolicyId3>`

## Example

The example below from Onelogin shows entries in the Custom Fields for both AccAndRole and AccAndPolicyIds.

<img src="/administration/_media/account-level-sso-01.png" />

## Usage Notes

- For a given user, an attribute may be assigned by itself (i.e., just an AccAndRole definition or just an AccAndPolicyIds definition). If the user is accessing multiple accounts, both the attributes AccAndRole and AccAndPolicyIds may be specified.
- AccAndRole and AccAndPolicyIds cannot be used for the same account of the same user.
- For AccAndRole and AccAndPolicyIds, the attribute name and the attribute value are case sensitive.
