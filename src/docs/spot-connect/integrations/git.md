# GitHub/Bitbucket Cloud

The GitHub/Bitbucket cloud integration manages Git repositories while enabling you to clone Git repositories and create pull requests.  

## Configure Github/Bitbucket in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Github/Bitbucket Cloud**.  
3. Configure a new integration instance with the information below. 

Details needed to set up a Github/Bitbucket Cloud instance in Spot Connect: 

|       Parameter                           |                           Description                       |                       Required                  |   |
|-------------------------------------------|:-----------------------------------------------------------:|:-----------------------------------------------:|---|
|       Resource Alias                      |     A name for the integration instance                     |     True                                        |   |
|      SSH Key                              |     Private Key                                             |     Required when Access Token is not provided  |   |
|      URL                                  |     Repository URL                                          |     True                                        |   |
|      Access Token                         |     Access Token from GitHub/Bitbucket cloud                |     Required when SSH Key is not provided       |   |
|      GitHub or Bitbucket Cloud Repo Name  |     Name of the Git repository from GitHub/Bitbucket cloud  |     True                                        |   |
|      GitHub or Bitbucket Cloud User Name  |     Username of GitHub/Bitbucket cloud                      |     True                                        |   |

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow: 

* [GitHub/Bitbucket Cloud Clone](spot-connect/integrations/git?id=githubbitbucket-cloud-clone) 
* [GitHub/Bitbucket Cloud Create PR](spot-connect/integrations/git?id=githubbitbucket-cloud-create-pr) 
* [GitHub Filter Runners](spot-connect/integrations/git?id=github-filter-runners) 

## GitHub/Bitbucket Cloud Clone 

Action to clone a GitHub/Bitbucket Cloud repository and copy repository content to AWS S3 bucket. 

#### Input

|       Parameter                         |                                      Description                                  |      Required  |   |
|-----------------------------------------|:---------------------------------------------------------------------------------:|:--------------:|---|
|      GitHub/Bitbucket Cloud Repository  |     Select a repository added to GitHub/Bitbucket cloud in Spot Connect settings  |     True       |   |
|      AWS S3 Bucket                      |     Select AWS S3 bucket added to Spot Connect resources                          |     True       |   |

#### Output

|       Parameter        |       Type  |                        Description                   |   |
|------------------------|:-----------:|:----------------------------------------------------:|---|
|      s3_bucket         |     String  |     S3 bucket uploaded with Git repository content   |   |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)                |   |

#### Action Example 

Select GitHub/Bitbucket Cloud Repository and AWS S3 Bucket inputs to configure the action. 

<img width="969" alt="github-bitbucket-1" src="https://github.com/spotinst/help/assets/106514736/d5b8c61c-38ed-4e8b-8b9c-df43cf8b07f4">


### GitHub/Bitbucket Cloud Create PR 

This action creates a pull request for a given Github/Bitbucket Cloud repository. 

#### Input

|       Parameter                                 |                                                         Description                                                     |      Required  |   |
|-------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      AWS S3 Bucket with Base Branch Content     |     AWS S3 bucket for storing the repository content of the base branch on which changes are to be applied              |     True       |   |
|      AWS S3 Bucket with Head Branch Content     |     AWS S3 bucket for storing the repository content (changed files) of the head branch                                 |     True       |   |
|      GitHub/Bitbucket Cloud Repository          |     GitHub/Bitbucket Cloud base repository to which pull request is to be created                                       |     True       |   |
|      GitHub/Bitbucket Cloud Pull Request Title  |     Title of the pull request                                                                                           |     True       |   |
|      GitHub/Bitbucket Cloud Current Branch      |     GitHub/Bitbucket Cloud active branch name with changes, that are to be updated in the base branch                   |     True       |   |
|      GitHub/Bitbucket Cloud Base Branch         |     GitHub/Bitbucket Cloud branch that needs to be updated using pull request                                           |     True       |   |
|      Reviewers                                  |     An array of user logins that will be requested for a review (user email for GitHub or user ID for Bitbucket Cloud)  |     False      |   |
|      Description                                |     Pull Request description                                                                                            |     False      |   |

#### Output

|       Parameter        |       Type  |                           Description                       |   |
|------------------------|:-----------:|:-----------------------------------------------------------:|---|
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)                       |   |
|      pull_request_url  |     String  |     URL of pull request created in GitHub/Bitbucket cloud   |   |

#### Action Example

<img width="814" alt="github-bitbucket-2" src="https://github.com/spotinst/help/assets/106514736/9a8119ab-2442-4d99-965b-8f4e8f793290">

### GitHub Filter Runners 

This action lists GitHub runners based on the status, busy and labels filters.  

#### Input

|       Parameter           |                 Description             |      Required  |   |
|---------------------------|:---------------------------------------:|:--------------:|---|
|      GitHub Repository    |     Select a spot integration instance  |     True       |   |
|      Busy To Filter By    |     Select a Spot account               |     True       |   |
|      Status To Filter By  |     Select a Spot Account Group         |     True       |   |
|      Specify Labels       |     Add Instance Id to be detached      |     True       |   |

#### Output

|       Parameter          |         Type    |                           Description                      |   |
|--------------------------|:---------------:|:----------------------------------------------------------:|---|
|      identified_runners  |     StringList  |     List of identified GitHub runners matching the filter  |   |
|      count_of_runners    |     Integer     |     Number of GitHub runners matching the filter           |   |
|      execution_status    |     String      |     Status of run (ie: S_OK / E_FAIL)                      |   |

#### Action Example

1. Select GitHub repository and GitHub runner busy state to filter by. 

<img width="526" alt="github-bitbucket-3" src="https://github.com/spotinst/help/assets/106514736/b6405a76-e253-41ad-8d4a-c514b79ea76f">

2. Select state of GitHub runner to filter. 

<img width="518" alt="github-bitbucket-4" src="https://github.com/spotinst/help/assets/106514736/70b9387c-dac4-46dc-96ae-6a8ff1d06971">

3. Provide labels to match GitHub runners. 

<img width="519" alt="github-bitbucket-5" src="https://github.com/spotinst/help/assets/106514736/d9ad7c43-286e-4faf-9a0a-64b9e144e3b7">



<img width="1001" alt="github-bitbucket-6" src="https://github.com/spotinst/help/assets/106514736/eb2fd408-18cc-4a35-a758-3862f4049444">
