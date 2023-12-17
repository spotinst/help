# Administration 

## API Administration 

The Spot by NetApp API reference is available as an OpenAPI Specification. 

OpenAPI Specification is an industry standard that allows APIs to be defined for humans as well as machines. This allows any person or application to easily consume and build with Spot in a structured format that includes detailed descriptions and examples of every endpoint. The specification is hosted on GitHub, and full documentation is available on the Spot by NetApp API Reference site.  

## API Workflows 

After you have your Spot Org ID, follow the instructions below to create and credential a new Spot account to register it for Cost Intelligence. 

## Step 1: Create Account 

Create a new Spot Account. Use the following endpoint to create a Spot account in your organization. 

https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsCreateAccount 

## Step 2: Set Credentials 

Using the correct endpoint, based on the provider, credential the Spot account and add the required IAM policy to the account. The policy is required for Spot to collect the necessary data.    

### Set Credentials for AWS 

https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAWS 

### Set Credentials for Azure 

https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure 

### Set Credentials for GCP 

https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForGCP 

## Step 3: Get Policy Definitions 

To view the most recent policy definitions for each provider, please visit the relevant documentation links below that go into the permissions more thoroughly. 

- [AWS Cost Intelligence Policy](https://docs.spot.io/cost-intelligence/tutorials/cost-intelligence-policy/?id=cost-intelligence-aws-policy) 
- [Azure Cost Intelligence Policy](https://docs.spot.io/cost-intelligence/tutorials/cost-intelligence-policy/?id=cost-intelligence-azure-policy) 

## Step 4: Register Account with Cost Intelligence 

After having successfully linked your provider account to your Spot account. You will need to 'register’ your spot account with Cost Intelligence. Use the API information below to register both AWS and Azure accounts. 

Route: `POST /cbi/v1/setup/account` 

Header Parameters: 

- Spotinst-Organization-ID (required) 
- Type: string 
- Description: Spot organization ID 

Body 

- Sample Body: 

```json
{  
  "account": { 
    "accountId": "act-bf0377af" 
  } 
} 
```

- Body (Required) 

Type: `json` 

Response 

Sample Response 

```json
"request": { 
        "id": "4495716a-a687-46ad-91fd-f82f36c82e8b", 
        "url": "/cbi/v1/setup/account", 
        "method": "POST", 
        "timestamp": "2023-10-18T13:38:55.827Z" 
    }, 
    "response": { 
        "status": { 
            "code": 200, 
            "message": "Success" 
        }, 
        "kind": "spotinst:cbi:inventory:enrolledAccount", 
        "items": [ 
            { 
                "organizationId": "1212121212121212", 
                "accountId": "act-bf0377af", 
                "cloudProvider": "aws", 
                "externalProviderId": "11111111111", 
                "enabledDate": "2023-10-05T15:39:16.000Z", 
                "updatedDate": "2023-10-05T15:39:16.000Z" 
            } 
        ], 
        "count": 1 
}
```

