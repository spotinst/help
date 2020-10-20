# Install Kops 1.12

## Installing Kops Binaries

Download the proper binary file for your operating system:

`KOPS v1.12.1`

* [linux_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.12.2-6ab92d392/linux/amd64/kops)
* [darwin_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.12.2-6ab92d392/darwin/amd64/kops)
* [windows_amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/kops/v1.12.2-6ab92d392/windows/amd64/kops.exe)

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
