

# Spot PC: End User Connection Requirements

## End User Clients

The following Remote Desktop clients support Azure Virtual Desktop:

- [Windows Desktop Client](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-windows-7-10)
- [Microsoft Store Client](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-microsoft-store)
- [Web Client](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-web)
- [macOS Client](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-macos)
- [iOS Client](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-ios)
- [Thin Clients](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/linux-overview)
- [Android Client](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-android)

More details on AVD clients and Spot PC can be found [here](spot-pc/tutorials/connect-to-desktop).

## Outbound URL Safelist

The Remote Desktop clients must have access to the following URLs:

| Address                         | Outbound TCP Port | Purpose                 | Client(s)       |
| ------------------------------- | ----------------- | ----------------------- | --------------- |
| \*.wvd.microsoft.com            | 443               | Service traffic         | All             |
| \*.servicebus.windows.net       | 443               | Troubleshooting data    | All             |
| go.microsoft.com                | 443               | Microsoft FWLinks       | All             |
| aka.ms                          | 443               | Microsoft URL shortener | All             |
| docs.microsoft.com              | 443               | Documentation           | All             |
| privacy.microsoft.com           | 443               | Privacy statement       | All             |
| query.prod.cms.rt.microsoft.com | 443               | Client updates          | Windows Desktop |

Source: https://docs.microsoft.com/en-us/azure/virtual-desktop/safe-url-list#remote-desktop-clients

**NOTE:** Opening these URLs is essential for a reliable client experience. Blocking access to these URLs is unsupported and will affect service functionality. These URLs only correspond to the client sites and resources, and do not include URLs for other services like Azure Active Directory.

## Network Performance

Depending on the use case, Microsoft recommends 1.5Mbps-15Mbps per user. Details can be found at: https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/network-guidance

The AVD Experience Estimator is a good tool for evaluating the network performance for a Spot PC deployment. https://azure.microsoft.com/en-us/services/virtual-desktop/assessment/

## What’s Next?

Get started [deploying Spot PC](spot-pc/getting-started/onboarding-workflow) by following the Onboarding Workflow.
