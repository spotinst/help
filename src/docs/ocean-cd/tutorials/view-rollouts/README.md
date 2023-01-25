# View Rollouts

The Rollouts page provides an overview of the Spot deployments triggered.

To view the Rollouts page, click Rollouts in the left sidebar.

<img src="/ocean-cd/_media/tutorials-rollouts-05.png" />

The Rollouts page has the following main areas that are described below:
- Summary Line
- Rollouts List

## Summary Line

At the top of the page, the summary line shows statistics of your rollouts.

The default view shows data from the last seven days, but you can use the date filter to display statistics from any time period. You can also use the filter bar to display statistics such as specific clusters, SpotDeployments, and Namespaces.

<img src="/ocean-cd/_media/tutorials-rollouts-04.png" />

The summary line provides the following statistics:
* **Rollout durations**:  
  - Median: The duration that has the median time of all the durations in the defined time period.
  - Avg.: The mean time of all the durations in the time period.
* **Attention needed**: The currently paused rollouts. Phases may be found in Paused state based on your RolloutSpec and Strategy configurations. They will remain in this state as long as you have not taken any action.
* **Incident Prevention**: The number of rollouts that were prevented.
* **Successful rollouts**: The number of successful rollouts per all rollouts in the time period defined, presented as a fraction and as a percentage of all rollouts (i.e., successful, rolled back, and paused).

## Rollout List

 The list of rollouts gives you top-level information about one or more rollouts. If the list is long, you can use the filter above to display a subset of rollouts. The statistics in the summary line will be calculated according to the filter you use.

<img src="/ocean-cd/_media/tutorials-rollouts-03.png" />

The following information is included in the rollout list:
* SpotDeployment: The name given to the spotDeployment in the RolloutSpec. To see the CRD diff, click the icon to the left of the spotDeployment.
* Rollout image: The name and version of the image (i.e., the application) that is in the process of rolling out.
* Strategy: The name given to the strategy in the RolloutSpec.
* Start: The beginning date and time of the deployment (i.e., rollout).
* Duration: The amount of time the deployment ran.
* Rollout State: The current status of the deployment, which can be one of the following: In progress, Paused, Rolled back, Successful, Canceled.
* Cluster ID: The cluster identifier assigned in the RolloutSpec.
* Namespace: The namespace assigned in the RolloutSpec.
* Rollout spec: The name given to the RolloutSpec.
* Rollout ID: The unique identifier Spot has assigned to the rollout.
* Cloud provider: The provider of the cloud infrastructure; can be AWS, Microsoft Azure, or GCP.

## What’s Next?

Learn about [detailed rollouts](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
