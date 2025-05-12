# Multitenancy

You can use multitenancy to create hierarchies in your Spot organizations. You can set up your child orgs to use role-based access control (RBAC). Admins for your parent orgs can have admin rights for the child orgs.

Multitenancy is useful for managed service providers (MSP) and resellers. It lets you configure your child orgs at the parent level. You can then give your customers access to the child orgs.

Some of the benefits of multitenancy include:

* Simplification of complex, multi-customer structures
* Organization Admin privileges granted to parent org administrators
* Admins for the parent org can control which subaccounts and cost data types admins for the child org can see

Keep in mind, you can only create a user once for each org and all its child orgs.

![image](https://github.com/user-attachments/assets/e56c2c26-0ce1-457c-93c1-e6318a446ba6)


An organization hierarchy includes:

* A **parent** organization (L1)

   If you have permission to view the parent org, you can see a yellow star next to the name of the parent org.

   ![image](https://github.com/user-attachments/assets/e3804457-73ac-4c2a-9ef1-68a5a2196fd2)

   New roles for the parent organization:

    * **Organization Admin** has access to the child organization page and <i>write</i> permissions for user management.

    * **Organization Editor** has <i>Organization Admin</i> permissions for the parent org only. Doesn’t have access to the child organization page.

* **Child** organizations (L2)

   You can see a list of all the child orgs under the parent. You can also see the number of accounts and total users for each child org.

   <ol style="list-style-type: lower-alpha;">
   <li>In the Spot console, click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png" /> > <b>Settings</b>.</li>
   <li>Make sure you’re in the parent org.</li>
   <li>Click <b>Organization</b> > <b>Child Organizations</b>.</li>
   <li><p>Switch to any of the orgs by hovering the child org in the list and clicking <b>Switch</b> <img height="18" src="https://github.com/user-attachments/assets/9d90a800-44d7-4446-ae4a-f90d04f20c7e" />.</p>

     <p><img src="https://github.com/user-attachments/assets/bd7a64ba-72bb-48cc-952e-f71ebaac8a17" /></p></li>

    <p>From the list of child orgs, click the Total Users number to go to the Users page. The Users page shows the users for that child org.</p>
    </ol>

## Create a Child Organization

1. In the Spot console, click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png" /> > <b>Settings</b>.
2. Make sure you’re in the parent org.
3. Click <b>Organization</b> > <b>Child Organizations</b> > **Add Organization**.
4. Enter a **Name** and click **Create**.
5. Click **Product Access** <img height="18" src="https://github.com/user-attachments/assets/5ca1d4bc-2aea-40d0-85f5-938cdcfbefd3" /> for the new child org and select the Spot products for this child org. You can set the default products.
6. For Billing Engine, you can assign a family and the default provider cost for the child org. Click **Edit** <img height="18" src="https://github.com/user-attachments/assets/b5df3c94-bf99-4ac0-a24a-e4a043668e93" /> on the new child org and select the **Family Assignments** and **Organization Cost Default**.
7. [Switch to the new child org](administration/organizations/?id=switch-organizations).
8. [Connect the child org to a cloud service provider](connect-your-cloud-provider/first-account/).
9. Set up [users](administration/users-a/), [groups](administration/groups/), and [permission policies](administration/policies/).

    > **Note**: you can only create a user once for each org and all its child orgs.

## Remove a User from an Org

If you remove a user from an org, it doesn’t delete the user from the Spot console. If the user has permanent tokens used for APIs, those APIs will no longer work. You cannot remove a user from an org if that user is the only Organization Admin.

You can remove a user from an org:
1. In the Spot console, click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png" /> > <b>Settings</b>.
2. Go to the org you want to remove the users from.
3. Click the Total Users number to go to the Users page.
4. Select the user you want to remove and click **Delete User**.

## Set Default Spot Product Access for New Child Orgs
1. In the Spot console, click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png" /> > <b>Settings</b>.
2. Click **Organization** > **General Details** > **Default Spot Product Access for New Child Organizations**.
3. Click **Configure Access**, select the Spot products, and click **Update**.

## Billing Engine and Multitenancy

As an admin for the parent org using Billing Engine, you can use [families](billing-engine/tutorials/families) and cost types to help manage your child orgs. These are designed to help you bill and manage your end-customers' operations.

Let’s say a family represents a customer you provide cloud services for. You can give them a view of the Spot platform, but with adjusted figures to reflect what you are charging them. You can associate a family with another organization and give that customer’s users access to that organization.

### Assign Family and Cost Type to Child Org

1. In the Spot console, click the user icon <img height="18" src="https://docs.spot.io/administration/_media/usericon.png" /> > <b>Settings</b>.
2. Click **Organization** > **Child Organization**.
3. Click **Edit** <img height="18" src="https://github.com/user-attachments/assets/b5df3c94-bf99-4ac0-a24a-e4a043668e93" /> on an existing child org.
4. Update **Family Assignments**.
5. Select **Organization Cost Default**.
     <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span">More about costs</summary>

   <div style="padding-left:16px">

    <b>Billed Cost</b>
       
      Billed cost is the basis for invoicing:
   
      <ul>
       <li>Includes all reduced rates and discounts.</li>
        
      <li>Excludes amortization of one-time or recurring purchases paid to cover future eligible charges. </li>
       </ul>
       
      Billed cost is typically used for cash-basis accounting, such as cost allocation, budgeting, and invoice reconciliation.
   
     <b>Effective Cost</b>
     
      Effective cost includes:

   <ul>
       <li>All reduced rates and discounts. </li>
     
      <li><p>Amortization of one-time or recurring purchases paid to cover future eligible charges. The amortized part is proportional to the data's pricing quantity and time granularity. </p>

      <p>Effective cost does not mix or blend costs across multiple charges of the same service. Effective cost is typically used to track and analyze spending trends.</p></li>
       </ul>
       
      <b>List Cost</b>

      List cost is calculated: <i>list unit price × corresponding pricing quantity</i>.
   
      List cost is typically used for calculating savings based on rate optimization activities, by comparing it with the billed cost and the effective cost.

   </div></details>

7. Click **Update**.
