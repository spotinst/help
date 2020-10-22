# RightScale

The RightScale Universal Cloud Management Platform allows customers to orchestrate, automate, and govern applications across public cloud or private infrastructure. Today we are announcing a new integration with RightScale that will allow you to easily manage your RightScale clusters and provide you with amazing cost savings by utilizing Spot Elastigroups.

## RightScale

Before we dive into the integration, let's first go over a few vocabulary terms utilized by RightScale.

- ServerTemplate – A server configuration template that defines a virtual machine that can be launched in any supported cloud provider. This template is defined in a somewhat generic manner to ensure support across multiple cloud providers.
- ServerInstance – Virtual machine instance that is launched via the RightScale `ServerTemplate` configuration template as noted above.
- Instance – a standalone Virtual machine instance that was launched by the cloud provider console (EC2 console for example).

## How it Works

There are two components for the integration. Instance launch (which RightScale has already taken care of via a batch file on startup) and instance termination. Let's go over instance launch first.

### Server Launch

In the Elastigroup configuration simply add the following script into the User Data section [rightlink.enable.sh](http://docs.rightscale.com/rl10/reference/10.5.2/rl10_enable_running_instances.html). This script will automatically add a new Server and ServerInstance into the RightScale console for each EC2 instance launched.

<img src="/elastigroup/_media/rightscale-01.png" />

### Server Termination

When an EC2 instance is terminated in AWS, the corresponding ServerInstance is also removed from the RightScale console. If not managed correctly, there will be server artifacts leftover for each instance launched. As you can imagine, this can leave quite a mess in your RightScale console. This where Spot gets into the picture.

When we terminate an instance launched by an Elastigroup we'll automatically remove the Server object in RightScale. Server objects can only be deleted after all corresponding ServerInstances have first been deleted.

## Enable the Integration

To enable this integration simply go into the `Compute` tab of your Elastigroup and enter your RightScale.
RefreshToken – that will be used to generate the access token to your RightScale account. You will also need to enter the corresponding the Account ID.

<img src="/elastigroup/_media/rightscale-02.png" />

That's it! We hope you enjoy this integration with the RightScale platform. Please let us know if you have other integration ideas that will help you supercharge your workloads.
