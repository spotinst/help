# Generate a Github Access Token

You can create:

* personal access tokens (classic) or 
* fine-grained personal access tokens

GitHub recommends using fine-grained personal access tokens instead of personal access tokens (classic).

## Fine-grained Personal Access Token
The steps to create a fine-grained token is documented at [Managing your personal access tokens - GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) 

The minimum permissions required for IaC scanning and PR integration are listed below.

| GitHub Operations done by SS                         | Fine Grained Token Permissions | Spot Security Use case |
|------------------------------------------------------|--------------------------------|------------------------|
| GET /repos/{owner}/{repo}                            | Metadata: Read                 | IaC Scan               |
| GET /repos/{owner}/{repo}/pulls/comments/{number}    | Pull requests:Read             | IaC Scan               |
| DELETE /repos/{owner}/{repo}/pulls/comments/{number} | Pull requests: Write           | PR Integration         |
| GET /repos/{owner}/{repo}/pulls/{number}             | Pull requests:Read             | IaC Scan               |
| GET /repos/{owner}/{repo}/pulls/{number}/files       | Pull requests:Read             | IaC Scan               |
| GET /repos/{owner}/{repo}/pulls/{number}/commits     | Pull requests:Read             | PR Integration         |
| clone repository with checkout branch                | Contents:Read                  | IaC Scan               |
| POST /repos/{owner}/{repo}/pulls/{number}/comments   | Pull requests:Write            | PR Integration         |

## Personal Access Token (classic)
This is not the recommended approach as it generates a token with more than necessary priviliges. The scope required is “repo” as shown below:

![git-access-token](https://github.com/spotinst/help/assets/106514736/05e1ef63-24ec-48b1-86c9-b95c855c73c4)

## Validating the Token

Depending on your GitHub security settings, you may need to perform additional steps before using the GitHub token. Some common scenarios include:

* If you have SSO configured, you may have to approve your classic token in your GitHub portal.
* If your GitHub repo is protected by a firewall or accessible only from your private network, you may have to set up a network in your AWS or Azure account and specify the subnet in Spot Security during onboarding.

To verify that the token is usable, you can run the following command from a network where Spot Security will scan it from:

```
ACCESS_TOKEN=yourtokenhere
curl  -sS -f -I -H "Authorization: token $ACCESS_TOKEN" https://api.github.com

# On success you will see a 200 response code with several HTTP headers.
# Eg: github-authentication-token-expiration
```
