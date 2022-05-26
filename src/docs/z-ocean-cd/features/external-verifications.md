<meta name="robots" content="noindex">

# External Verifications

External Verification is an Ocean CD feature that enables you to integrate your unique test outcomes as part of an orchestrated release process.

You can define where in the rollout process Ocean CD should send an API webhook to an external endpoint. This allows your external tools to listen and activate the relevant test suites at the right times. Once the tests are completed, your external test system needs to send an [API request](https://docs.spot.io/api/#operation/OceanCDExternalVerificationUpdate) back to Ocean CD with instructions to continue with the rollout process or, if necessary, to activate a failure policy. If no request is received, then a fallback policy is activated. Ocean CD gives you live visibility of this process as experienced by the Ocean CD SaaS.

## How it Works

The external verification process is described on a high level in the steps below.

1. The Ocean CD Controller detects an incoming deployment.
2. The Kubernetes rolling update is triggered.
3. Once the rolling update is completed, Ocean CD SaaS sends a webhook API (of Type [start-external-verification](ocean-cd/features/webhook-notifications?id=notification-event-types)), including the rollout metadata, to a predefined endpoint.
4. The relevant tests are executed outside the rollout process. During this time, Ocean CD waits for a response from the external system.
5. When the response is received (using the [API Request link](https://docs.spot.io/api/#operation/OceanCDExternalVerificationUpdate)), Ocean CD promotes the rollout process to the next phase.

### Example

An example is shown below in the Detailed Rollout View.

<img src="/ocean-cd/_media/features-external-verifications-01.png" />

In this example, an external verification called DevOps Tests was sent to a Jenkins endpoint, and the Jenkins system sent an API message back indicating that the external verification passed. There was no need to activate the failure policy, and the rollout process will be promoted to the Finished phase.

## Set up External Verifications

Define the external verification using the [Create Rollout Spec API](https://docs.spot.io/api/#operation/OceanCDRolloutSpecCreate) under the Verification section. In the API, you will define attributes that correspond to the following:

- Initial delay: Define this parameter if initial delay is required. This is helpful if you want to ensure bootstrapping related actions are completed before getting the notification that triggers your external tests.
- Timeout: The amount of time Ocean CD should wait before activating a fallback policy (i.e., if an API request is not received).
- Fallback policy: Continue to the next rollout phase or fail the rollout and activate a failure policy.
- Notification provider: The end point(s) to which Ocean CD webhook API will be sent. Your external test tools should listen to these webhooks and look for the following event type: Start external verification.

In addition, you must ensure that your external verification system (e.g., Jenkins) sends a return [API message](https://docs.spot.io/api/#operation/OceanCDExternalVerificationUpdate) indicating the status of the verification.

## What’s Next?

Learn more about the visibility you have into the rollout process in [Granular Visibility](ocean-cd/features/granular-visibility/).
