# Controller Version History

## [1.0.64] – 2020-08-18

Added

Align node with launchSpec labels once on startup.

Changed

Deployment.yaml : added 'readinessProbe'

## [1.0.63] – 2020-08-06

Added

Fail the Controller healthCheck when failing to report heartbeat

## [1.0.62] – 2020-07-27

Added

CRDs and support for Custom Objects. The controller now collects data of CRDs and custom objects (custom resources).

## [1.0.61] – 2020-06-22

Added

Support for k8s 1.17 API deprecations

## [1.0.60] – 2020-06-21

Added

Add support for NFS

## [1.0.59] – 2020-06-03

Added

Upgraded k8s SDK

## [1.0.58] – 2020-03-30

Added

Upgrade UBI dependencies (libarchive, sqlite-libs and systemd)

## [1.0.57] – 2020-03-08

Added

Support for k8s 1.16 API deprecations

## [1.0.56] – 2020-03-05

Added

Overall stability improvement

## [1.0.55] – 2020-02-19

Added

Support dynamic properties on auto update

## [1.0.54] – 2020-01-26

Added

Shutdown hook & health check based on controller heartbeat

## [1.0.53] – 2020-01-06

Added
Support for OpenShift CSR Approval
Changed
Use RedHat UBI as base image

## [1.0.52] – 2019-12-25

Added

Support for terminated nodes cleanup in Azure

## [1.0.51] – 2019-12-15

Support ServiceNodeExclusion labels on node draining

Fix autoUpdate process when using proxy server

## [1.0.50] – 2019-12-09

Overall stability improvement

## [1.0.49] – 2019-12-05

Performance improvement

## [1.0.48] – 2019-11-20

Added 'horizontalpodautoscalers' reporting
Support 'disable-auto-update' parameter via configMap

## [1.0.47] – 2019-10-22

Handle controller graceful shutdown

## [1.0.46] – 2019-10-10

Support pod evictions for cluster migration

## [1.0.45] – 2019-09-26

Added dnsutils & tcpdump to image

Support proxy (if defined on the controller config map)

## [1.0.44] – 2019-09-23

Added namespaces, daemon sets, stateful sets and jobs reporting

## [1.0.43] – 2019-09-08

Added Timeout to lock mechanism

## [1.0.42] – 2019-08-14

Push Storage classes

## [1.0.41] – 2019-07-14

Performance improvement

## [1.0.40] – 2019-05-28

Added support for azure disk property

## [1.0.39] – 2019-05-28

Performance improvement

## [1.0.38] – 2019-05-16

Added

Change deployment reporting interval

## [1.0.37] – 2019-05-01

Added

- Report pod priority and priorityClassName
- Report node ephemeral storage

## [1.0.36] – 2019-04-15

Added

Add support for spotinst-apply actions

## [1.0.35] – 2019-04-02

Added

Reduce scaling reaction time to 5 seconds

## [1.0.34] – 2019-03-22

Added

Use ProviderId for k8s versions 1.11 and above

## [1.0.33] – 2019-03-20

Added

Add support for GCE node labeling

## [1.0.32] – 2019-03-12

Added

Add support for GCE Persistent disk

## [1.0.31] – 2019-03-12

Added

Spot apply – resize deployment

## [1.0.30] – 2019-01-24

Fixed

General fixes

## [1.0.29] – 2019-01-22

Added

Improve network efficiency

## [1.0.28] – 2019-01-08

Added

Overall stability improvement

## [1.0.27] – 2019-01-06

Added

Report pod metrics.

Fixed

Fix conversion bugs in reported pods

## [1.0.26] – 2019-01-04

Fixed
Fix the auto update process in controllers that were installed via the kops

## [1.0.25] – 2019-01-03

Added

Add liveness to support all kubernetes versions
