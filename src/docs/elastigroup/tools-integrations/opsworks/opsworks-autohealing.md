# OpsWorks Autohealing

Various Elastigroup integrations offer autohealing of instances using health-check capabilities.

OpsWorks Health Check is based on the following parameters:

- OpsWorks Instance Status
- Layer Membership Verification (if an instance is a part of the OpsWorks 'layer' or not)

Based on these parameters, the Health Check status is evaluated and can return one of the following:

- Healthy: The Instance a part of the OpsWorks integrated layer.
- Unknown: The instance's unknown health status might be a result of the following:
  - The instance OpsWorks status is in one of the following states:
    - booting
    - pending
    - running_setup
    - stopping
    - terminating
    - rebooting
  - The instance is not a part of the OpsWorks layer, and its grace period has not yet passed.
- Unhealthy: The unhealthy status might be a result of one of the following situations:
  - The instance is not a part of the OpsWorks layer that was defined in the integration
  - The instance is in one of the following OpsWorks status modes:
    - stop_failed
    - start_failed
    - setup_failed
    - connection_lost

When Elastigroup detects an instance as unhealthy, and auto-healing is configured, it will replace them automatically.
