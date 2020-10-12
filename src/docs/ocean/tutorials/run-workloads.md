# Run Workloads

In this tutorial, you will learn how to use the Run Workloads feature.

## Relevance

This tutorial is relevant for Kubernetes on AWS.

## Description

Using Run Workloads, you can completely adjust and manage Kubernetes clusters from the Ocean dashboard without the overhead in provisioning pods via the cluster itself. This will allow both the infrastructure and the pod provisioning to be handled by Ocean.

This feature enables you to manage the cluster configuration and run operations such as the creation of workloads. You can achieve this easily by using the Spot console and gaining the full picture of your cluster provided by Ocean.

This feature is available for customers using Spot Controller version 1.0.38 and later. If you are using an older version, you must [update your controller](ocean/tutorials/spot-kubernetes-controller/update-controller.md).

## Step 1: Run Workload

In the console, go to Actions and click Run Workloads.

<img src="/ocean/_media/tutorials-run-workload-01.png" />

You can choose to run the workloads by completing the form or by running a YAML script.

## Option 1: Fill in the Form

Under the Form tab, complete the information in the form.

<img src="/ocean/_media/tutorials-run-workload-02.png" />

- Namespace. Drop down list of namespaces imported from the cluster by the Spot controller.
- Kind. Run workloads supports running workloads of Deployment, Daemonset, Pod.

Additional parameters are related to environmental variables, resource requests, and constraints such as Node Selector and Pod Affinity.

After completing the form, click Deploy.

Upon successful creation, a confirmation pop-up will appear.

## Option 2: Use a YAML Script

Alternatively, you can run the workloads by using a YAML script. Click the YAML tab to edit the script.

<img src="/ocean/_media/tutorials-run-workload-03.png" />
