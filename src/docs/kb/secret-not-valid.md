<meta name="robots" content="noindex">

# Azure | Secret is Not Valid

## Problem

You got this error in the logs, and it’s not possible for the cluster to perform any scaling actions:

`Invalid client secret provided. Ensure the secret being sent in the request is the client secret value, not the client secret ID, for a secret added to app`

## Solution

In Azure Kubernetes Service (AKS), there are two kinds of secrets: client secret ID and client secret value.

Generate a new client secret <i>value</i> and [update it in the API](https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure).
