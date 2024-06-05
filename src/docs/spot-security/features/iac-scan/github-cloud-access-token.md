Generate a Gitlab Cloud Access Token

Spot Security requires a valid Gitlab Personal Access token to scan the repositories. The steps to generate it can be found at [Personal access tokens | GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).  

* Access tokens can be generated at the user level or the project level. 

As part of the steps, you will be asked to select scopes. The following scopes are required:

+------------------+------------------------+
| Scopes           | Spot Security Use case |
|                  |                        |
+------------------+------------------------+
| read_api         | IaC Scan               |
+------------------+------------------------+
| read_repository  | IaC Scan               |
+------------------+------------------------+
| api              | PR integration         |
+------------------+------------------------+
| write_repository | PR integration         |
+------------------+------------------------+

If you are creating a token at the project level, in Select a Role, select **Developer**.

## Validating the Token

If your repo is accessible only from your AWS/Azure network, run the command below from the network where Spot Security will access it.

Run the following command after replacing the git URL with the correct repo values. Replace the username with any non-empty string. Replace <group-name> and <project-name> with the right values of your repo URL. Dont include <>.

```
git clone https://<username>:<access_token>@gitlab.com/<group-name>/<project-name>.git
```

For more information, see: [Personal access tokens | GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).
