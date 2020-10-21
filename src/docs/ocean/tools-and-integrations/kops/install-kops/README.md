# Install Kops

## Install Kops Binaries

Download the proper binary file for your operating system:

KOPS v1.15.0

- [linux_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.15.0-ce593adb9/linux/amd64/kops)
- [darwin_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.15.0-ce593adb9/darwin/amd64/kops)
- [windows_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.15.0-ce593adb9/windows/amd64/kops.exe)

You can track and download the latest Kops versions at [Kops releases](https://github.com/spotinst/kubernetes-kops/releases).

Ensure the KOPS binary file is executable:

`chmod 755 kops && mv kops /usr/local/bin/kops`

## Install Kubectl Dependencies

Download the proper [binarykubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) file.

Ensure the binary file is executable:

`chmod 755 kubectl && mv kubectl /usr/local/bin/kubectl`

## (Optional) Installing AWS CLI

`pip install awscli`

You can also use Homebrew, although this is not officially supported by AWS.

`brew update && brew install awscli`
