<meta name="robots" content="noindex">

# Connecting to Spot PC Desktops

As the end user, you have many options for how to connect to your Spot PC desktop. For the purposes of end use access, Spot PC is functionally identical to Azure Virtual Desktop, any connection process that works for AVD should work for Spot PC.

End user prerequisites are documented [here.](spot-pc/getting-started/prerequisites/end-user-prerequisites)

## End User Tips

### Use a native client if possible

Below you'll find a list of available clients for Spot PC and AVD. You'll experience the best performance with an installed client as opposed to the web client. When possible use the client available for your device type (e.g. Windows, Android, etc...).

### Understanding User Sessions and Inactivity Timeouts

When you connect to your Spot PC desktop, a "user session" is created on the virtual machine (vm) that hosts user sessions. This user session contains all of your running applications and helps keep your apps and data seperate from other users who may be using the same vm for their user session.

A disconnected sesison is one where your session and applications continue to run. This can happen when you close the remote desktop window (aka. "X-out" of the window), choose **"disconnect"** from the start menu, lose internet connectivity, close their laptop or otherwise ends the remote connection between you and your remote desktop. When you reconnect, you'll be connected with your existing session, exactly as you left your desktop. User sessions are also disconnected after two hours of inactivity on a connected session.

In a remote dekstop environment, allowing user sessions to remain open (even when disconnected) for extended periods of time is considered a bad practice. Open sessions consume resources and prevent system maintnenace which can add up to significant performance issues if left unaddressed.

Therefore, if your user session is running in a disconnected state for two consecutive hours, it will be automatiaclly closed. There is the potential that unsaved work is lost, in practice this is rare as most modern applications (including Microsoft Office) automatically save work. These two idel/inactivity timers combine so that an active session that is idle for 2 hours will be disconnected, if that sessions then remains disconnected for two additional hours it will be closed automatically.

You can help maximize the performance of your team's Spot PC environment by logging off when not using the session. This is done by click the start Menu, clicking your username and then on **"Sign out"**. Below is a screenshot showing the difference beween a

<img src="/spot-pc/_media/connect-to-desktop-01.png" />

## Available Clients

Most devices have a specific AVD client built to optimize your experience. This client application can be acquired from Microsoft and installed by you or your IT administrator.

**Windows Installer**

- [Download and install](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-windows-7-10) the client application.
- Instructions for the [Download and install ](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-windows-7-10#subscribe-to-a-workspace) client.
- NOTE: When asked, enter **https<area>://rdweb.wvd.microsoft.com/api/arm/feeddiscovery** as the workspace URL.

**Windows Microsoft Store Install**

- Install from the [Microsoft Store](https://www.microsoft.com/store/productId/9WZDNCRFJ3PS)
- Instructions for the [Microsoft Store](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-microsoft-store#subscribe-to-a-workspace) client.
- NOTE: When asked, enter **https<area>://rdweb.wvd.microsoft.com/api/arm/feeddiscovery** as the workspace URL.

**MacOS**

- Install the client application from the [Mac App Store.](https://apps.apple.com/app/microsoft-remote-desktop/id1295203466?mt=12)
- After installing the application, add your Spot PC workspace as [documented here.](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-macos#subscribe-to-a-feed)
- NOTE: When asked, enter **https<area>://rdweb.wvd.microsoft.com/api/arm/feeddiscovery** as the workspace URL.

**iOS**

- Install the iOS client app from the Apple [App Store.](https://aka.ms/rdios)
- After installing the application, add your Spot PC workspace as [documented here.](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-ios#subscribe-to-a-feed)
- NOTE: When asked, enter **https<area>://rdweb.wvd.microsoft.com/api/arm/feeddiscovery** as the workspace URL.

**Android**

- Install the Android client app from [Google Play.](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx)
- After installing the application, add your Spot PC workspace as [documented here.](https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/connect-android#subscribe-to-a-feed)
- NOTE: When asked, enter **https<area>://rdweb.wvd.microsoft.com/api/arm/feeddiscovery** as the workspace URL.

**Web Client**

- Any modern web browser (with HTML5 support) should be able to open the web client provided by Microsoft at: https://rdweb.wvd.microsoft.com/arm/webclient

**Thin Clients**

- Several 3rd-parties have created thin client devices that support the Spot PC desktop.
- A list of the supported vendors is maintained by Microsoft at: https://docs.microsoft.com/en-us/azure/virtual-desktop/user-documentation/linux-overview
- Follow the thin client Vendor's instructions to connect to your Spot PC desktop.

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
