# Installation

## Install kops

Download [kops](https://github.com/kubernetes/kops/releases). Ensure the binary file is executable:

```
$ chmod 755 kops && mv kops /usr/local/bin/kops
```

## Install kubectl

Download [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/). Ensure the binary file is executable:

```sh
$ chmod 755 kubectl && mv kubectl /usr/local/bin/kubectl
```

## (Optional) Installing AWS CLI

```sh
$ pip install awscli
```

You can also use Homebrew, although this is not officially supported by AWS.

```sh
$ brew update && brew install awscli
```
