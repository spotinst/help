# Installation

## Install kOps

Download [kOps](https://github.com/kubernetes/kops/releases). Ensure the binary file is executable:

```sh
$ chmod 755 kops && mv kops /usr/local/bin/kops
```

kOps is also available via Homebrew, this will install kubectl as well as a dependency.

```sh
$ brew update && brew install kops
```

## Install kubectl

Download [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/). Ensure the binary file is executable:

```sh
$ chmod 755 kubectl && mv kubectl /usr/local/bin/kubectl
```

kubectl is also available via Homebrew. It should automatically be installed if you install kOps using Homebrew.

```sh
$ brew update && brew install kubernetes-cli
```

## (Optional) Installing AWS CLI

```sh
$ pip install awscli
```

You can also use Homebrew, although this is not officially supported by AWS.

```sh
$ brew update && brew install awscli
```
