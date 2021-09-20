<meta name="robots" content="noindex">

# End User Connection Requirements

The following Remote Desktop clients support Azure Virtual Desktop:

* Windows Desktop
* Web
* macOS
* iOS
* IGEL Thin Client (Linux)
* Android (Preview)

**NOTE:** Azure Virtual Desktop does not support the RemoteApp and Desktop Connections (RADC) client or the Remote Desktop Connection (MSTSC) client.

**IMPORTANT:** Azure Virtual Desktop does not currently support the Remote Desktop client from the Windows Store. Support for this client will be added in a future release.

The Remote Desktop clients must have access to the following URLs:

| Address                         | Outbound TCP Port | Purpose                 | Client(s)       |
| ------------------------------- | ----------------- | ----------------------- | --------------- |
| *.wvd.microsoft.com             | 443               | Service traffic	        | All             |
| *.servicebus.windows.net	      | 443               | Troubleshooting data    | All             |
| go.microsoft.com                | 443               | Microsoft FWLinks     	| All             |
| aka.ms                          | 443               | Microsoft URL shortener	| All             |
| docs.microsoft.com              | 443               | Documentation	          | All             |
| privacy.microsoft.com	          | 443               | Privacy statement	      | All             |
| query.prod.cms.rt.microsoft.com	| 443               | Client updates          | Windows Desktop |

Source: https://docs.microsoft.com/en-us/azure/virtual-desktop/safe-url-list#remote-desktop-clients

**NOTE:** Opening these URLs is essential for a reliable client experience. Blocking access to these URLs is unsupported and will affect service functionality. These URLs only correspond to the client sites and resources, and do not include URLs for other services like Azure Active Directory.

## What’s Next?

Learn more about 
