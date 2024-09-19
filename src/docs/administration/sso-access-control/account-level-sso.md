# Account-Level SSO

Assign account permissions with SAML attribute. For account-level login, you can grant a user permissions to accounts per [user role](administration/users/) and per [permission policy](administration/policies/). These are defined using SAML attributes. The attributes allow login to different accounts by the same user and the same IDP app while setting the roles dynamically on each request.

## Account and Role

Sign in to an account with a specific role is defined with an Account and Role combination. The combination is configured using this IDP format:

```
<Attribute Name="AccAndRole" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
<AttributeValue>SPOTINST-AccountID-EDITOR</AttributeValue>
<AttributeValue>SPOTINST-AccountID-VIEWER</AttributeValue>
<AttributeValue>SPOTINST-AccountID-VIEWER</AttributeValue>
</Attribute>
```

The attribute value is in this format: `SPOTINST-<AccountId>-<Role>`. Make sure the `<AccountId>` and `<Role>` are separated by a dash.

## Account and Policy

It is also possible to assign account and policy combinations for each user so that a user can get policy-based permissions. This user can also log in to an account with one or multiple policies applied.

This is the format:

```
<Attribute Name="AccAndPolicyIds" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
<AttributeValue>SPOTINST-AccountID:pol-1234</AttributeValue>
<AttributeValue>SPOTINST-AccountID:pol-1a3a,pol-2443</AttributeValue>
<AttributeValue>SPOTINST-AccountID:pol-223s,pol-2333,pol-a21c</AttributeValue>
</Attribute>
```

Keep in mind:
- Multiple <i>PolicyIds</i> for the same account are separated with a comma.
- All <i>PolicyIds</i> provided in the configuration must exist for the relevant <i>AccountId</i>.
- The attribute value is in the format: `SPOTINST-<AccountId>:<PolicyId>`. Make sure the `<AccountId>` and `<PolicyId>` are separated by a colon.
- If multiple policies are applied to an account, this is the format: `SPOTINST-<AccountId>:<PolicyId1>,<PolicyId2>,<PolicyId3>`
- For a given user, an attribute may be assigned by itself (for example, just an <i>AccAndRole</i> definition or just an <i>AccAndPolicyIds</i> definition). If the user is accessing multiple accounts, both the attributes <i>AccAndRole</i> and <i>AccAndPolicyIds</i> may be specified.
- <i>AccAndRole</i> and <i>AccAndPolicyIds</i> cannot be used for the same account of the same user.
- For <i>AccAndRole</i> and <i>AccAndPolicyIds</i>, the attribute name and the attribute value are case sensitive.

## Example

This example from Onelogin shows entries in the Custom Fields for both <i>AccAndRole</i> and <i>AccAndPolicyIds</i>:

<img width=600 src="/administration/_media/account-level-sso-01.png" />

