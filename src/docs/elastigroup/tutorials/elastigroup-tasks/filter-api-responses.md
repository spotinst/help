# Filter API Responses

## Introduction

While using the Spot API you might want to filter the response you are getting for long outputs, such as the list of Elastigroups based on Tag values. In order to filter the API response, we recommend on using jq framework, as it is a lightweight tool. You can get this add-on via https://stedolan.github.io/jq/.

## Step 1

Install jq on your system: https://stedolan.github.io/jq/download/

## Step 2

Run your API calls via curl with the added jq query.

## Example 1

```
curl -s -X GET -H "Authorization: Bearer ${token}"
https://api.spotinst.io/aws/ec2/group |
jq '.response|.items[]|select(.compute|.launchSpecification|.tags[]|.tagValue| test("staging"))'
```

This will show the Elastigroups configurations that have a tag value equal to `staging`.

## Example 2

```
curl -s -X GET -H "Authorization: Bearer ${token}"
https://api.spotinst.io/aws/ec2/group |
jq '.response|.items[]|select(.compute|.launchSpecification|.tags[]|.tagValue| test("TagValue") ) | {name: .name, id: .id}'
```

This will show the name and ID for Elastigroups that have a tag value equal to `TagValue`.

For more operators and additional options please see: https://stedolan.github.io/jq/tutorial/.
