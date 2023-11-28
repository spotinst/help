# Cluster Release Notes

## [0.4.4-68] - 2023-11-27

Changelog

- [0.2.1] bigdata-notebook-service
  - increase port range for notebook service
- [0.1.2] bigdata-notebook-service-static
  - increase port range for notebook service

## [0.4.4-67] - 2023-11-14

Changelog

- [0.4.4] bigdata-operator
  - retrieve the deployer namespace

## [0.4.2-67] - 2023-10-24

Changelog

- [0.4.3] bigdata-proxy
  - update the secret token when starting a Notebook Workspace
- [0.4.2] bigdata-operator
  - stop refreshing ocean-controller namespace

## [0.4.1-66] - 2023-10-12

Changelog

- [0.1.22] spark-operator
  - performance improvements
- [0.4.2] bigdata-proxy
  - increase ingress read timeout to 600 seconds by default

## [0.4.1-65] - 2023-09-28

Changelog

- [0.4.1] bigdata-proxy
  - Workspace reverse proxy

## [0.4.1-64] - 2023-09-13

Changelog

- [0.4.1] bigdata-operator

  - respect proxy-url from `spotinst-kubernetes-cluster-controller-config`

- [0.5.0] bigdata-spark-watcher
- [0.2.0] bigdata-notebook-service
  - Support for HTTP_PROXY and HTTPS_PROXY environment variables

## [0.4.0-63] - 2023-09-12

Changelog

- [0.4.6] bigdata-spark-watcher
  - fix bug in the executor storm handling
- [0.4.0] bigdata-operator
  - manage bigdata CRDs via Helm chart

## [0.3.0-62] - 2023-09-08

Changelog

- [0.3.0] bigdata-operator
  - support bigdatacomponents.bigdata.spot.io CRD

## [0.2.8-62] - 2023-09-06

Changelog

- [0.4.0] bigdata-proxy
  - support for notebook workspace management

## [0.2.8-61] - 2023-09-04

Changelog

- [0.4.3] bigdata-spark-watcher
  - executor storm handling improvements

## [0.2.8-60] - 2023-08-25

Changelog

- [0.3.5] bigdata-proxy
  - add ability to delete Spark application pods cluster wide

## [0.2.8-59] - 2023-08-17

Changelog

- [0.2.8] bigdata-operator
  - add telemetry fluentbit-sidecar to collect and output logs
- [0.1.30] bigdata-notebook-service

  - logger improvements
  - add telemetry fluentbit-sidecar

- [0.1.10] bigdata-notebook-service-storage-server

  - add telemetry fluentbit-sidecar

- [0.3.4] bigdata-proxy

  - add telemetry fluentbit-sidecar

- [0.4.2] bigdata-spark-watcher

  - add telemetry fluentbit-sidecar

- [0.1.21] spark-operator
  - add telemetry fluentbit-sidecar

## [0.2.7-58] - 2023-08-07

Changelog

- [0.4.1] bigdata-spark-watcher
  - send regular heartbeats
