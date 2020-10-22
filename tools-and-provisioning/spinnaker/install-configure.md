# Install & Configure

This page includes information required to install Halyard and set up Spot as a cloud provider in Spinnaker. Halyard is the configuration service which manages the lifecycle of Spinnaker services.

## Prerequisites

The procedures for setting up and completing the Spinnaker integration with Spot assume a working knowledge of and experience working with Spinnaker.

Before you start this procedure, you must complete the following:

1. Open a Spot account and connect your cloud provider. (See [Connect Your Cloud Provider Account](connect-your-cloud-provider/aws-account).)
2. Get an API token. (See [Create an API Token](administration/api/create-api-token).)
3. Use the Spot console to create your Elastigroups.

## Usage Notes

* It is highly recommended to have a Spot account that contains only Elastigroups managed in Spinnaker.
* Ensure that all of your Elastigroups are named according to the Spinnaker naming convention: application_name-stack-infrastructure_version
* Using the Spinnaker dashboard to create Elastigroups is not currently supported.

## Install Halyard

Use the commands below to install Halyard from the Git repository:

```
git clone https://github.com/spotinst/spinnaker-halyard.gitgit checkout add_spot_provider
```

## Add Spot as a Cloud Provider

To add Spot to Spinnaker as a cloud provider, complete the steps below. This procedure is for MacOSX.

1. Move to the folder of the git repository and change directories as follows:
```
cd ./halyard-cli
``
2. Run the local command `gradlew` that is located in the folder.
```
./gradlew halyard-web:run
```
The halyard service is running and can interact with the halyard client.
3. Open a new terminal and move to the same directory as before:

```
cd ./halyard-cli
```
4. Run the following commands to add Spot as a cloud provider and register to your Spot Account:

```
./hal config provider spot edit --api-token <SPOT_API_TOKEN>./hal config provider spot account add <SPOT_ACC_NAME> --account-id <SPOT_ACC_ID>./hal config provider spot enable
```

## What’s Next?

Continue to the next task: [Set up Environment as Local Git](elastigroup/tools-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes).
