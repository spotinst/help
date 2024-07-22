<meta name=“robots” content=“noindex”>

# Concept: Session Inactivity Timeout
Spot PC requires an inactivity timeout be set for user sessions. This functionality disconnects idle user sessions and logs-out disconnected user sessions, both after a defined time delay.

## Reasoning
This policy is required to facilitate the secure and efficient operation of Spot PC.

* Leaving unattended sessions open and connected is a potential attack vector and closing inactive user sessions is a good practice.
* Open user sessions, even when inactive, consume session host resources that could be used by active users in the environment.
T* Open user sessions on a host VM can impede regular maintenance and automated optimization tasks.

## Two Settings
The settings for inactivity timeouts are split into two distinct settings.

### Active Idle Timeout
This setting governs how long an active user's session will remain connected when idle. As an example, an active user session is displaying on the local device. When the defined idle time is exceeded the session connection is closed, showing a "session disconnected" dialog box on the end user's device. The user's session, which is running on the host VM, continues to run and is unaffected by the Active Idle Timeout setting.

### Disconnect Idle Timeout
This setting governs how long a disconnected user session will remain running on the session host. User sessions enter this state when the user closes the connection (for example by closing the remote desktop window) or after the Active Idle Timeout duration is exceeded. After the session has remained in this state for the defined duration, the session host will close the user's session including all applications running in their session.

If, at any point in this time window, the user re-connects they will be connected to their existing user session, with all their applications running just as the left them. Re-connecting re-sets both the Active and Disconnect Idle Timeout counters.

## Customizing This Setting
These settings are required but can be individually customized to any value between 1 and 240 minutes.

In an example scenario where each is set to 120 minutes (2 hours), the end user walking away from their local device would result in the remote desktop window closing after 2 hours, and the user session being ended after another 2 hours (4 hours total).

This setting is applied at the Spot Group level and can be edited by [editing the Spot Group](spot-pc/tutorials/edit-spot-group).

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
