<meta name="robots" content="noindex">


# Define OrgAndUserGroups with Okta

You can add a user to one or many user groups in an [organization](/administration/sso-access-control/organization-level-sso?id=organization-and-user-group) in Okta spotinst application:
1.	Make sure [Okta SAML 2.0 authentication](/administration/identity-providers/okta-saml-authentication) is configured with Spot.
2.	Sign in to Okta Admin, go to **Directory** > **Profile Editor**, and select **Spotinst User**.
3.	Click **Add Attribute** and add a custom attribute:
    * **Data Type**: <i>string</i>
    * **Display Name**: <i>OrgAndUserGroups</i>
    * **Variable Name**: <i>OrgAndUserGroups</i>

4. Click **Save**.
5. In Okta Admin, go to **Applications** > **Applications**, and select **Spotinst app**.
6. On the Sign On tab, add this custom attribute under the **SAML 2.0 settings**:
   * **Attribute Name**: <i>OrgAndUserGroups</i>
   * **Name Format**: <i>Unspecified</i>
   * **Value**: <i>appuser.OrgAndUserGroups</i>

7. Generate a [new certificate](/administration/identity-providers/okta-saml-authentication) and upload it to your Spot Organization.
8. Add users to groups:
   <ol style="list-style-type: lower-alpha;">
   <li>For each user in your organization who needs to be assigned to groups, go to Okta Admin <b>Directory</b> > <b>People</b>.</li>
   <li>On the Applications tab, locate the Spotinst app and click <b>Edit</b> to add the <i>OrgAndUserGroups</i>:</li>
      <ul>
       <li><p>For a single user: <code>SPOTINST-{OrganizationID}:{UserGroupId}</code></p>
        <p>For example: <code>SPOTINST-606012345678:ugr-1234</code></p>
       </li>
       <li><p>Multiple UserGroupIds for the same organization are separated with a comma: <code>SPOTINST-{OrganizationID}:{UserGroupId1},{UserGroupId2}</code></p>
        <p>For example: <code>SPOTINST-606012345678:ugr-1234,ugr-5678</code></p>
       </li>
      </ul>
