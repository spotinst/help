# Baseline

Ocean CD enables you to use the active stable version in production as a 'baseline' or reference point in a Canary deployment strategy.  

Within your Verification Template, you have the option to modify the approach for setting success or failure conditions as part of thresholds. Instead, you can determine the success or failure of your metrics based on the performance of your currently active version.  

To facilitate the process, you need to provide Ocean CD with a Baseline query that will be executed during a pre-phase triggered at the beginning of the rollout. In addition, provide a mathematical expression which will be used to compare the Canary and stable versions.   

## Supported Providers 

* Prometheus 
* Datadog 
* NewRelic  

The following tutorial explains how to use the feature in the Spot console: 

1. In the Verification Template tab, enable the Baseline toggle.
2. Enter a baseline query together with the runtime query. 
3. In the threshold drop-down menu, select an expression to perform between the runtime query and the baseline query.   

![baseline-1](https://github.com/spotinst/help/assets/106514736/e918792f-a3d2-4dd0-beaa-70bb6aa7d47e)

**Note**: In addition to basic expressions such as "<", ">", "<=", ">=", or "=", you can also utilize a range of data to compare versions. By leveraging the MinRange and MaxRange parameters, you can set a percentage that defines the acceptable results within specified upper and lower limits. 

4. When the baseline is configured, its queries will be executed during a pre-phase from the moment the rollout is triggered. The output of these queries, along with the phases in which they are discovered, will be displayed. 

![baseline-2](https://github.com/spotinst/help/assets/106514736/1cfc40a4-00cf-4b52-9172-a6368bab5e9f) 

During the rollout, any metric making use of the baseline will be displayed as below: 

![baseline-3](https://github.com/spotinst/help/assets/106514736/0c720886-e748-4ac6-af5a-f7bb5914d2e4)

## What’s Next 

Learn how to enable the [CI analysis](ocean-cd/concepts-features/ci-analysis) in your rollouts.   
