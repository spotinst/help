# Concept: Spot Group
Spot Group is a concept used in the Spot PC UI to organize users, images, session hosts and a variety of other concepts.  Spot Groups are deployed into a single Azure Region and cannot span regions.

If properly licensed, a named user can be assigned to more than one Spot Group. Users in multiple Spot Groups may select which desktop to use when logging into Spot PC.

The organization of users into Spot Groups in a logical manner can be simple or support complex configurations.  The topics below are here to help you decide how to define and configure your Spot Group assignment.

## Assigning AD Group(s)
As part of the onboarding workflow (and the Add Tenant workflow), one of more AD Group can be assigned to the Spot Group. When editing a Spot Group, the assignment and/or removal of AD Groups can also be performed.  

When an AD Group is assigned to a Spot Group, it means that all users in that AD Group are authorized to login to that Spot Group. For some user types, an additional step of assigning/allocating resources (i.e. a Desktop) is also required so that the user is both authorized to login and entitled to a specific resource.

## Assigning an Image
As part of the onboarding workflow (and the Add Tenant workflow), one version of one Image Set can be assigned to the Spot Group. When updating a Spot Group, the assignment of a new version from the existing Image Set can be made.

Whenever a new VM host is needed for a Spot Group, the assigned Image Set version is used as the template for the new VM.

## Spot Group User Types
Each Spot Group can contain one and only one Spot PC user license type. Some behavior of the Spot Groups vary depending on the type of user licenses assigned to the Spot Group and other deployment options. These nuances are outlined below for the following situations: Pooled Users, Personal Users (Standard) and Personal Users (Dedicated Desktop). For Personal (Dedicated Desktop) user types, there are also nuanced outlined for "Automatic" and "Direct" user assignment.

  - **Pooled Users**

  Pooled (aka Shared) users run their session on shared VM hosts, with up to 10 users sharing a single VM.  Additional VM hosts are created by Spot PC so that there is capacity for all licensed users in the Spot Group without exceeding the 10-to-1 ratio.

  When Pooled users login to Spot PC, they are intelligently routed to any available host VM based on current usage patterns.

  Most unused VM hosts are kept in an offline state but a buffer of available session resources are kept online and available for quickly accept additional user sessions. In the event the that all online buffer capacity is taken, Spot PC will automate the activation of additional session capacity and the initial connection time for users may (temporarily) take a couple minutes.

  - **Personal Users**

  Personal (aka VDI) users run their session on unshared VM hosts, with only 1 user sharing a single VM.  VM hosts are created by Spot PC so that there is capacity for all Personal users in the Spot Group to connect to their own VM host. Different SKUs for Personal Users may have access to different levels of resources, from additional vCPU and RAM to advanced GPU resources.

  When Personal users login to Spot PC, they are intelligently routed to any available VM.  

  Most unused VM hosts are kept in an offline state but a buffer of available VMs are kept online and available to quickly accept additional user sessions. In the event that all online buffer VMs are taken, Spot PC will automate the activation of additional VM hosts and the initial connection time for users may (temporarily) take a couple minutes.
    - **Dedicated Desktops**

        At deployment, Personal User Spot Groups can be set to "Dedicated Desktop".  When activated, each Personal User will be assigned a specific VM and always be routed to that VM when they connect. This is commonly used to support unique requirements such as unique software licensing mechanisms or customizations that can't be successfully captured in a VM image.

        All unused Personal (Dedicated Desktop) VM hosts are kept in an offline state. No VMs are kept online and available however Spot PC automation will wake the appropriate VM host when each user logs in.  The connection time for Personal (Dedicated Desktop) users is longer as each login must wait for their specific VM to boot and be ready to accept their connection.  This typically takes a couple minutes.

        The designation of a Spot Group as Dedicated Desktop is permanent and can not be changed after deployment.

        While new VM hosts for Dedicated Desktops are built from the current assigned VM Image Set Version.  Unlike Pooled and Personal (Standard) Spot Groups, the VM hosts in a Personal (Dedicated Desktop) Spot Group are not automatically rebuilt from the current Image.  Updates tot he assigned Image Set Version will not re-build existing VM hosts. Once a VM host is built, it is persistent and must be managed/maintained individually.
      - **Automatic Assignment**

          For Personal (Dedicated Desktop) Spot Groups, the assignment of specific users to specific VM hosts can be performed automatically.

          At deployment each user is assigned to a new VM host, built from the current Image Set Version, and that assignment is persistent and unchangeable. Removing a user from Spot PC will remove their VM host.  New users will always get a fresh VM host based on the current Image Set Version.

          Spot Groups set to Automatic Assignment can be changed to "Direct Assignment" after the initial deployment.
      - **Direct Assignment**

          For Personal (Dedicated Desktop) Spot Groups, the assignment of specific users to specific VM hosts can be managed manually.

          When set to "Direct Assignment" the initial deployment of a new Spot Group operates in a similar way as the "Automatic Assignment" setting. The onboarding workflow does add an option to define which users in the Spot Group AD Group(s) are entitled to a desktop. Only selected users will have access to a desktop resource.

          Direct assignment Spot Groups can be edited to add/remove/reassign users to existing or new VM hosts. This enables VM hosts to become persistent through the reassignment from one user to another, much like a physical machine.  

## Azure Region
Each Spot Group is deployed into a defined Azure Region and cannot span multiple regions. Spot Groups cannot be moved to another Azure region.

## Profile Path
Each Spot Group has one (and only one) defined profile path.  This path can be changed but all users in the Spot Group must share the same setting.

## Logoff Settings
Each Spot Group has [logoff settings](spot-pc/tutorials/edit-spot-group?id=logoff-settings) that define the "Active Idle" and "Disconnect Idle." These settings can be changed but all users in the Spot Group must share the same settings.

## Custom RDP Properties
Each Spot Group has [custom properties](spot-pc/tutorials/edit-spot-group?id=set-custom-properties) that define several aspect of the remote session experience. These settings can be changed but all users in the Spot Group must share the same settings.

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
