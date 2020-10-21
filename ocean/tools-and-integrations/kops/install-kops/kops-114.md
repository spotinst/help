# Install Kops 1.14

Download the proper binary file for your operating system:

## Kops V1.14.0-Alpha.2

- [linux_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.0-alpha.2-d2516dab8/linux/amd64/kops)
- [darwin_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.0-alpha.2-d2516dab8/darwin/amd64/kops)
- [windows_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.0-alpha.2-d2516dab8/windows/amd64/kops.exe)

## Kops V1.14.0-Beta.2

- [linux_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.0-beta.2-828d75d28/linux/amd64/kops)
- [darwin_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.0-beta.2-cd9317f63/darwin/amd64/kops)
- [windows_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.0-beta.2-cd9317f63/windows/amd64/kops.exe)

## Kops V1.14.1

- [linux_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.1-8aeefa9a4/linux/amd64/kops)
- [darwin_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.1-8aeefa9a4/darwin/amd64/kops)
- [windows_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.14.1-8aeefa9a4/windows/amd64/kops.exe)

You can track and download the latest Kops versions using the below link:

[Kops releases](https://github.com/spotinst/kubernetes-kops/releases)

Make sure the Kops binary file is executable.

```
chmod 755 kops && mv kops /usr/local/bin/kops
```

## Installing Kubectl Dependencies

Download the proper binary `kubectl` [file](https://kubernetes.io/docs/tasks/tools/install-kubectl/).

Make sure the binary file is executable.

```
chmod 755 kubectl && mv kubectl /usr/local/bin/kubectl
```

## (Optional) Installing AWS CLI

```
pip install awscli
```

You can also use homebrew, although this is not officially supported by AWS.

```
brew update && brew install awscli
```
