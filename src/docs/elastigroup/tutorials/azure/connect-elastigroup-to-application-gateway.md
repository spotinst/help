# Connect Elastigroup to Application Gateway

This tutorial demonstrates how to connect an Elastigroup to the Backend Pools of Azure's Application Gateway, the go-to option for application-level load balancing on Azure.

## Prerequisites

At least one Azure Application Gateway up and running

## Step 1: Open The Elastigroup Creation Wizard

Click Elastigroups in the sidebar, then click Create to enter the Elastigroup Creation Wizard.

## Step 2: Select the Backend Pools

Under the Compute tab open the Load Balancers section and select the desired Backend Pools. The Elastigroup can be assigned to multiple Backend Pools.

<img src="/elastigroup/_media/create-elastigroup-eks-cluster_1.png" />

## Step 3: Create the Elastigroup

Complete the Elastigroup Creation Wizard and create the Elastigroup.

> **Tip**: To avoid data transfer costs, collocate the Elastigroup in the same Region as the Application Gateway.
