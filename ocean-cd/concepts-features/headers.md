# Headers-based Traffic

OceanCD provides support for the Headers-based Traffic feature using Istio Traffic Manager that enables to send all of your traffic during any phase of your Canary or rolling update rollouts to an http request header value.

The feature works in a similar manner for both Subset and Host Levels.  

You can set the Headers-based Traffic feature while using Ocean CD according to the following tutorial.

**Note: OceanCD’s tutorial uses a Subset Level Istio Traffic.**

1. Make sure to configure the relevant YAML services as part of your RolloutSpec and apply them accordingly into your cluster.  
These include: DestinationRule, Stable Service, Gateway & Virtual Service YAMLs.

* Templates can be found in Spot's public GitHub.

2. Create an Ocean CD strategy that includes the headers you wish to set for each phase. You can find a template below:

```yaml
kind: Strategy
  name: headers-strategy
  canary:
    steps:
      - name: first
        setWeight: 25
        verification:
          templateNames:
            - My-first-verification
        setHeaderRoute:
          name: set-header-1
          match:
            - headerName: Alfa-Tester
              headerValue:
                exact: Enable
        pause: { }
      - name: second
        setHeaderRoute:
          name: set-header-2
          match:
            - headerName: User-Agent
              headerValue:
                regex: "(.*)Explorer(.*)"
        setWeight: 75
        pause: { }
      - name: third
        setWeight: 100
```

A detailed explanation of all of the above parameters may be found as part of our API documentation.

Rules of the behavior of the headers:  

* Any header that was set as a part of any phase, will remain running until the end of the rollout. Headers may not be deleted throughout the rollout, they need to be part of consecutive phases.  
* There is no limitation to the amount of headers you may add along the way.
* There is no limitation to the number of Matches per HeaderRoute.
* Each headerValue must include one of the following options: exact, prefix, regex.

3. Create the OceanCD remaining entities: RolloutSpec, Verification Template & Verification Providers.
4. Trigger a rollout. With the detailed rollout you can see the amount of headers set per phase as well as their details when clicking on the rollout details button.  

<img src="/ocean-cd/_media/headers-1.png" />

Note: Headers can not be configured using the console. Use Spot's API to set the strategy accordingly.  


## What's Next?

Learn more about [entities](ocean-cd/concepts-features/entities). 
