# Spinnaker Overview

Spinnaker is an open source, multi-cloud, continuous delivery platform for releasing software changes with confidence and high velocity.

Created at Netflix, Spinnaker has been battle-tested in production by hundreds of teams over millions of deployments. It combines a powerful and flexible pipeline management system with integrations to the major cloud providers.

By integrating Spinnaker with Spot, you will be able to use Elastigroup's numerous scaling, optimization, and cost-saving features within Spinnaker. With the combination into a single user interface including Spinnaker as a deployment tool and Elastigroup as an infrastructure platform, you will be able to streamline your DevOps workflow. For example, you can use Spinnaker to spawn new EC2 instances while taking advantage of all the Elastigroup cost-saving features.

## Architectural Overview

Spinnaker has a modular architecture, and each Spinnaker service has its dedicated purpose.

The overview below relates only to services relevant to the integration with Spot.

<img src="/tools-and-provisioning/_media/spinnaker overview_1.png" />

- Deck is the browser-based UI.
- Orca is the orchestration engine. It handles all ad-hoc operations and pipelines. (For more information, see [Orca Internals Overview](https://spinnaker.io/docs/community/contributing/code/developer-guides/service-overviews/orca/)).
- Clouddriver is responsible for all mutating calls to the cloud providers and for indexing and caching of deployed resources.
- Halyard is Spinnaker's configuration service. Halyard manages the lifecycle of each of the above services. It interacts with these services only during Spinnaker startup, updates, and rollbacks.

## Integration Overview

The Spinnaker integration with Spot includes the following tasks:

1. [Set up Environment as Local Git](tools-and-provisioning/spinnaker/set-up-environment-as-local-git)
2. [Set up Halyard](tools-and-provisioning/spinnaker/install-configure)

Once you have completed these steps (in the order above), you will be able to use the Spot features directly from Spinnaker.

## What's Next?

Go to the [Set up Environment as Local Git](tools-and-provisioning/spinnaker/set-up-environment-as-local-git) procedures and get started with your Spinnaker integration.
