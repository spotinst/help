# Spot PC Tutorial: Setup MFA with Azure AD Conditional Access

Requiring Multi-factor authentication for end users connecting to Spot PC is highly recommended as a bare-minimum security policy. Configuration of Conditional Access is not a feature of Spot PC and licensing required for Conditional Access is not included in the Spot PC service. However, we believe this is such a critical component of a modern security approach that we've documented how Conditional Access can be setup to protect the end user connection into Spot PC. This is not the only method for securing end user connections, and more advanced configurations (e.g., geographic blocking, corporate network exceptions, etc.) are certainly possible and encouraged.

## Conditional Access Licensing
Azure AD Conditional Access licensing is included in Azure Active Directory Premium P1. Fortunately, this licensing is included in many of the Microsoft 365 packages commonly purchased to support AVD and Spot PC. Prior to implementing MFA with Conditional Access, please confirm appropriate licensing is in place.

As shown in the screenshot below, when viewing "Azure AD: Conditional Access" within the Azure Management Portal, the "Policies" page will display an offer to add licensing if not currently applied.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-setup-mfa-conditional-access-01.png" target="_blank"><img src="/spot-pc/_media/tutorials-setup-mfa-conditional-access-01.png" alt="Click to Enlarge" width="1000"> </a>


## Implementing MFA
Note: These instructions are adapted from Microsoft's official documentation found at: https://docs.microsoft.com/en-us/azure/virtual-desktop/set-up-mfa

1. Sign in to the **Azure portal** as a global administrator, security administrator, or Conditional Access administrator.
1. Browse to **Azure Active Directory > Security > Conditional Access**.
1. Select **New policy**.
1. Give your policy a **name**. We recommend that organizations create a meaningful standard for the names of their policies. (Below is an example naming standard that you may wish to adopt)
1. Under **Assignments**, select **Users and groups**.
1. Under **Include**, select Select **users and groups > Users and groups**, Choose the group(s) that contain all Spot PC users such that these users all receive this policy.
1. Select **Done**.
1. Under **Cloud apps or actions > Include**, select **Select apps**.
1. Select the following app:
  1. **Azure Virtual Desktop** (App ID 9cdead84-a844-4324-93f2-b2e6bb768d07)
1. Go to **Conditions > Client apps**. In **Configure**, select **Yes**, and then select where to apply the policy:
  1. Select **Browser** if you want the policy to apply to the web client.
  1. Select **Mobile apps and desktop clients** if you want to apply the policy to other clients.
  1. Select both check boxes if you want to apply the policy to all clients.
  <br><a href="https://docs.spot.io/spot-pc/_media/tutorials-setup-mfa-conditional-access-02.png" target="_blank"><img src="/spot-pc/_media/tutorials-setup-mfa-conditional-access-02.png" alt="Click to Enlarge" width="800"> </a>
1. Once you've selected your app, choose **Select**, and then select **Done**.
<br><a href="https://docs.spot.io/spot-pc/_media/tutorials-setup-mfa-conditional-access-03.png" target="_blank"><img src="/spot-pc/_media/tutorials-setup-mfa-conditional-access-03.png" alt="Click to Enlarge" width="400"> </a>
1. Under **Access controls > Grant**, select **Grant access, Require multi-factor authentication**, and then **Select**.
1. Under **Access controls > Session**, select **Sign-in frequency**, set the value to the time you want between prompts, and then select **Select**. For example, setting the value to 1 and the unit to Hours, will require multi-factor authentication if a connection is launched an hour after the last one.
1. Confirm your settings and set **Enable policy** to **On**.
1. Select **Create** to enable your policy.



### Example Conditional Access Naming Standard
**Examples:**
* **P-Require_MFA-for-All_Users-AVD** (Production, Requiring MFA for All Users, Applies to AVD, without conditions)
* **P-Require_MFA-for-All_Users-AVD-when-Not_On_Corporate_Network** (Production, Requiring MFA for All Users, Applies to AVD, exception for users connecting from the corporate network)

| **Structure**      | **Description**                                                          |
| ------------------ | ------------------------------------------------------------------------ |
|T/P                 | Test, Production                                                         |
| Control            | Block, Allow, Require configured control                                 |
| Principal          | All or Single User(s), Individual or Ring group (R1,R2), Azure AD Role   |
| Cloud_App          | All or individual application(s)                                         |
| Conditions         | (optional) If there are conditions specified like network, platform etc. |






## What’s Next?

Lean how to deploy [Spot PC desktops](spot-pc/tutorials/deploy-spot-pc) and/or [Windows 365 Cloud PC desktops.](spot-pc/tutorials/deploy-windows-365-cloud-pc)
