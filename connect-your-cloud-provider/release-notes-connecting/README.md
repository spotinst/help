#  Connecting Your Accounts Release Notes

*  **CFA-0001 March 18, 2025:** [Onboarding an Azure subscription](connect-your-cloud-provider/first-account/azure) to Spot includes the date your Azure client secret expires. Update the secret and expiration in Spot using the [set credentials for Azure API](https://docs.spot.io/api/#tag/Accounts/operation/OrganizationsAndAccountsSetCloudCredentialsForAzure). Make sure your automated scripts and processes related to this action are updated. Any scripts or processes that don’t include this expiration date will not work as of April 7, 2025.
