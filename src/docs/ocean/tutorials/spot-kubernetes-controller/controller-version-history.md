# Controller Version History

## [1.0.97] - 2023-12-18

Added

- Update 3rd party libraries versions

## [1.0.96] - 2023-09-27

Added

- Update 3rd party libraries versions

## [1.0.95] - 2023-06-15

Added

- overall stability improvement

## [1.0.94] - 2023-06-11

Added

- Improve the scale up process for a large number of pods

## [1.0.93] - 2023-05-21

Added

- Improved the removal process of a large number of nodes

## [1.0.92] - 2023-05-07

Added

- Update 3rd party libraries versions

## [1.0.91] - 2023-04-30

Added

- Support Kubernetes new API versions

## [1.0.90] - 2023-04-16

Added

- Update 3rd party libraries versions
- Improve the removal process of a large number of nodes


## [1.0.89] - 2023-03-20

Added

- Update 3rd party libraries versions

## [1.0.88] - 2023-02-06

Added

- Update 3rd party libraries versions
- Update EULA

## [1.0.87] - 2022-11-21

Added

- Java version update to JDK17
- Update 3rd party libraries versions
- Added toleration for node-role.kubernetes.io/control-plane
- Ocean Controller restarts after a Java heap space out of memory error

## [1.0.86] - 2022-10-11

Added

- Update 3rd party libraries versions

## [1.0.85] - 2022-08-14

Added

- Added support for match expressions in topology spread constraints

## [1.0.84] - 2022-07-31

Added

- Update 3rd party libraries versions

## [1.0.83] - 2022-07-03

Added

- Upgraded Kubernetes SDK
- Added support for IPv6 clusters

## [1.0.82] - 2022-05-03

Added

- Upgraded UBI dependencies
- Added support for user/pass proxy authentication
- Added support for reporting init container data

## [1.0.81] - 2022-01-04

Added

- Upgraded UBI dependencies

## [1.0.80] - 2021-11-29

Added

- Upgraded UBI dependencies

## [1.0.79] - 2021-11-08

Added

- support for user environments custom certificates
- overall stability improvement
- Upgraded dependencies

## [1.0.78] - 2021-10-03

Added

- Wave big data topology

## [1.0.77] - 2021-07-12

Added

- Support for Kubernetes 1.22 deprecated APIs

## [1.0.76] - 2021-06-27

Added

- Upgraded UBI dependencies

## [1.0.75] - 2021-05-18

Added

- Upgraded Kubernetes SDK

## [1.0.74] - 2021-04-22

Added

- Support for Kubernetes 1.19 deprecated APIs

## [1.0.73] - 2021-02-14

Added

- Support for GKE shielded nodes

## [1.0.72] - 2021-01-27

Added

- Improvements in GCP preemption handling

## [1.0.71] - 2021-01-20

Added

- Support CSI volumes 'allowed topologies'
- Support BigData crd for wave application

## [1.0.70] - 2021-01-12

Added

- Support for multiple architectures, such as ARM64
- Set 'dnsPolicy: Default' on Deployment.yaml

## [1.0.69] - 2020-12-15

Added

- Support for big data CRDs

## [1.0.68] - 2020-10-25

Added

- Support for Spark scheduled applications
- Support DaemonSet affinities

## [1.0.67] – 2020-09-22

Added

Upgraded Kubernetes SDK

## [1.0.66] – 2020-09-08

Added

Support spotinst-token and spotinst-account in secret

## [1.0.65] – 2020-09-07

Added

- Overall stability improvement
- Added OpenShift CSR Approval required permissions

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
Fix the auto update process in controllers that were installed via the kOps

## [1.0.25] – 2019-01-03

Added

Add liveness to support all kubernetes versions
