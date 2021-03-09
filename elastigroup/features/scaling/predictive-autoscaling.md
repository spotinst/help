# Predictive Autoscaling

Predictive autoscaling allows you to enjoy seamless prediction of when your Elastigroup would experience load and scale the number of instances in advance to meet business needs.

## Concepts

- Target – The active instance value that Elastigroup should have at a given moment.
- Effective-minimum – The minimum target value depicts the minimum amount of instances Elastigroup should have in order to accommodate the load required by the predicted metric. When this value is greater than Elastigroup's target value, Elastigroup will scale up instances in order to meet the Effective-minimum, depending on your predictive scaling configuration.
- Predicted Metric – The metric which Elastigroup actively predicts, in order to determine future load and scaling requirements for the group.

## How it Works

Once predictive autoscaling is set on an Elastigroup, a backend process for predicting this metric begins. Spot uses Machine Learning algorithms to predict and determine the value of the scaling metric for up to two days in advance.

Once the metric value is determined, an effective-minimum calculation begins to determine the minimum amount of instances required to handle the predicted load. This, allows your application to be ready for any workload bursts in advance.

## Configure Predictive Autoscaling

1. When using [target-based scaling](elastigroup/features/scaling/target-scaling), some metrics will offer you to use predictive autoscaling.
2. Once selected, you can choose to either use a prediction-only mode, or predict and scale mode.
3. Choosing either mode will start a metric prediction process that uses machine learning to determine the expected target metric value within the next two days, based on past behavior and other scaling activities throughout the system.
4. In both settings, a new graph will appear in the UI, showing the predicted metric, target, and effective-minimum values

<img src="/elastigroup/_media/scaling-predictive-autoscaling-01.png" />

## Predict and Scale Mode

When you select this mode, Elastigroup will present its future-predicted metric values and predicted effective-minimum values, as well as the actual metric measured and aggregated by Elastigroup. Once the metric is predicted, an effective-minimum value is calculated.

Elastigroup will scale up instances, and change its target value to meet the effective-minimum value, making sure you have enough instances at predicted loads.

## Predict Only Mode

When selecting this mode, Elastigroup will present its predicted data, but will scale instances normally, according to the regular target-based scaling behavior.

This allows you to observe Elastigroup's prediction and predicted metric values, without scaling the group according to these values.

<img src="/elastigroup/_media/scaling-predictive-autoscaling-02.png" />
