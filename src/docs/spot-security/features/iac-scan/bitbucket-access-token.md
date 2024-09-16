# Bitbucket Cloud Access Token Generation Steps

Spot Security requires a valid Bitbucket Cloud Personal Access token to scan the repositories. The steps to generate the token can be found at [Access Tokens | Bitbucket Cloud | Atlassian Support](https://support.atlassian.com/bitbucket-cloud/docs/access-tokens/). 

* Access tokens can be generated at the user level or the project/repository level.

As part of the steps, you will be asked to select Scopes. The following scopes are required:

| Scopes                | Spot Security Use case   |
|-----------------------|--------------------------|
| Repositories → Read   | IaC Scan                 |
| Pull requests → Read  | PR integration           |
| Pull requests → Write | PR integration           |

## Validate the Token

The easiest way to validate is to use the hints provided on the Gitlab portal when generating the token. If your repo is accessible only from your AWS/Azure network, you can try running the command below from the network where Spot Security will access it.

Run the following command after replacing the values with <> (do not include the <>) to test your token:

```
git clone https://x-token-auth:<your-accesstoken-value>@bitbucket.org/<your-project-name/your-repo-name>.git
``` 

