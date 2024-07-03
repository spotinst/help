# Ocean Controller Version 2 History

## [2.0.59] - 2024-06-03

### Added
* Upgraded to Golang 1.22.
* Upgraded Kubernetes SDK to 1.30.
* Initial support for Azure - Support for interruption detection using `PreemptScheduled` events.

## [2.0.58] - 2024-05-27

### Added
* Improved event pushing mechanism - we are now spliting events into chunks to avoid large gRPC messages.
* Improved controller heartbeat mechanism.
* Support `http` and `https` formats for the `base-url` key in the controller's configmap. Internally we are converting into `HOSTNAME:PORT` format for the gRPC client.

## [2.0.57] - 2024-05-06

### Bug Fixes
* Fixed empty error log (added in `v2.0.56`).

## [2.0.56] - 2024-05-06

### Bug Fixes
* Fixed controller not starting due to an error in the initial  preferred resource discovery process (added in `v2.0.55`).

## [2.0.55] - 2024-05-05

### Added
* We are now using the same backend host as controller V1 - `api.spotinst.io`.

## [2.0.54] - 2024-04-25

### Bug Fixes
* <p>
   Improved mechanism for getting resources to report to the backend. We now support older APIs of resources (for example: `autoscaling/v2beta2`, `node.k8s.io/v1beta1`, `policy/v1beta1`, etc.).
   </p>

    <p>
    Also, we now validate read permissions for each resource before initializing the informers.
    </p>

## [2.0.53] - 2024-04-18

### Added
* Switched internal logger and adjusted log levels.
* Initial support for GCP - support CSR approval mechanism.

### Bug Fixes
* Sync process now runs immediately after a new leader is elected.

## [2.0.52] - 2024-04-02

### Added
* Initial support for Azure - Added AKS Interruption handler.
* Upgraded Kubernetes SDK to version 1.29.
* Supported Kubernetes resource deletion for custom resources.

### Bug Fixes
* Leader Election process now waits for V1 controller pods to terminate before starting.

## [2.0.51] - 2024-03-20

### Added
* When Controller V2 recognizes that Controller V1 is active in the same cluster it will remain in standby mode (not pushing events to the platform), until Controller V1 is terminated.
* Added delete Kubernetes resource capability.
* Added update Kubernetes Deployment capability.

## [2.0.50] - 2024-03-17

### Security
* Updated base image to `gcr.io/distroless/static-debian12@sha256:aa09b5ebfd7181b30717b95a057557389135ac4df8aa78dd07ab8b50ca9954c6`

### Added
* Added Sync capability to make sure the controller's cache and the backend stay in sync.
* Added ability to patch Kubernetes sub-resources.