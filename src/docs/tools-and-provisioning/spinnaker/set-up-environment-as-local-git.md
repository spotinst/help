# Set up Environment as Local Git

This page describes the prerequisites and procedures for setting up Spinnaker on a local Git environment. For more information about using Spinnaker on a local Git, see [Local Git](https://spinnaker.io/setup/install/environment/#local-git).

## Prerequisites

Before setting up the Git, ensure that you have installed the following:

1. Brew, the MacOSX package management tool. Use the following command:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

2. Git client:

`brew install git`

3. Curl:

`brew instal curl`

4. Netcat:

`brew install netcat`

5. Redis:

`brew install redisbrew services start redis`

6. Java JDK and NodeJS:

```
brew cask install adoptopenjdk/openjdk/adoptopenjdk8curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bashnvm install v12.16.0npm install -g yarn
```

## Set up Git SSH

To set up SSH on the Git, complete the following steps:

1. Generate a new SSH key with the following command and supply your email address:

`ssh-keygen -t rsa -b 4096 -C "<EMAIL_ADDRESS>"`

2. Add the newly created SSH Key as a trusted SSH Key:

`ssh-add -K ~/.ssh/id_rsa`

3. Use the following command to copy the SSH token:

`pbcopy < ~/.ssh/id_rsa.pub`

4. Open GitHub.com from the following link and complete the steps to pair the SSH key to your GitHub account: [Adding a new SSH key to your GitHub account](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

## Set up Halyard Environment

To finish setting up the environment, complete the following steps:

1. Set up Halyard environment from a local git using the following command:

`./hal config deploy edit --type localgit --git-origin-user=spotinst./hal config version edit --version branch:origin/master`

2. Add AWS S3 Storage for Halyard config:

`./hal config storage s3 edit --access-key-id <AWS_ACCESS_KEY> --secret-access-key --region <AWS_REGION>./hal config storage edit --type s3./hal deploy apply`

3. Use the following command to change branch in the git repository:

`git checkout remotes/origin/poc`

4. Run the following commands to start the modified Spinnaker services:

```
~/dev/spinnaker/scripts/clouddriver-start.sh~/dev/spinnaker/scripts/orca-start.sh~/dev/spinnaker/scripts/echo-start.sh~/dev/spinnaker/scripts/deck-start.sh
```

5. Open the Spinnaker browser URL: [http://localhost:9000/](http://localhost:9000/#/applications/spotapp/clusters/instanceDetails/spot/i-0b473d5302ae60464)

In the Spinnaker browser, you should see the Spot information as shown in the example below on the Applications page (see spotapp-prod-v001 on the right side).

<img src="/tools-and-provisioning/_media/set up environment as local git_1.png" />

## What's Next?

Now you are ready to start using Elastigroups within the Spinnaker environment and take advantage of all the Spot optimization, scaling, and cost-saving features.
