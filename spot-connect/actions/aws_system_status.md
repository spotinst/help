# AWS System Status  

Use this action node to obtain the latest operational status of AWS services.  

The AWS System Status action node queries the [AWS Service Health Dashboard](https://status.aws.amazon.com/) for information regarding a user-supplied list of services in a region and returns the most up-to-date information available on the status of that service in JSON format.  

The AWS Service Health Dashboard is a public facing website which doesn't require login credentials, so it can be a good choice for situations when authentication or authorization systems might be experiencing issues.

For more detailed information about specific AWS services and the ability to trigger workflows from service outage events, see the AWS Health Webhook Trigger action node and the [AWS Personal Health Dashboard](https://docs.aws.amazon.com/health/latest/ug/getting-started-api.html).

The AWS Service Health Dashboard is a list of RSS feeds providing information on the status of most AWS services. Given a service name and a region, the AWS System Status action node enables you to go directly to the feed of any given service to see if there are issues or outages being tracked.  

The AWS System Status action node retrieves the most recent item in the service's feed, evaluating the title of the item to see if there is currently an issue with the service. The action returns a simplified status field based on what it sees in the most recent item's header, as well as the age of the item.

The status returned will be one of the following:

Status | Description
--------- | -----------
Ok   | The service is operating normally.
Degraded   | There is something happening in the service that is leading to degraded performance or issues in a subset of the availability zones for that service.
Disrupted   | There is something wrong resulting in significant outages for that service.
Unknown   | The action node could not determine the status of the service.

## Integration Actions  

You can add this action in the Spot Connect workflow builder, as part of your workflow:
* [AWS System Status](spot-connect/integrations/aws_system_status?id=aws-system-status-1)

### AWS System Status

Insert an AWS System Status action node into your workflow. In the right panel, you can select a single AWS region, and multiple services to evaluate.  

**Note**: Many of the service names on the AWS Service Health Dashboard are different from the names used in places such as the AWS Console or AWS CLI. When in doubt, check again in the AWS Service Health Dashboard.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
Services   | AWS services. Select one or more. | True
Region Name   | AWS Region Name | True

#### Output

Parameter | Type | Description
--------- | ----------- | --------
output   | Object | Status of services in JSON
execution_status   | String | Status of run (ie: S_OK / E_FAIL)

The output for the AWS System Status action node is a JSON dict called `output`, and is in the following format:

```json
{
  "AWS Region": { # e.g. 'us-west-1'
    "your service": {  #
      "status": "string", # Status computed from looking at the below fields.
      "title": "string",  # The title of the most recent entry in the RSS for the service
      "description": null, # The description for the most recent entry.
      "last_update": "Thu, 04 Oct 2018 08:04:44 PDT", # Formatted date string for the most recent update.
      "error": null,  # Any errors reported in the most recent entry.
      "message": ""   # The message included in the most recent entry.
    }
  }
}
```


This example is the result from a query on us-west-2 for the AWS Secrets Manager service. Note that the status field is OK, because the most recent incident item in the RSS feed is marked “[RESOLVED]” and is several years old.

```json
{
  "us-west-2": {
    "secretsmanager": {
      "status": "OK",
      "title": "Service is operating normally: [RESOLVED] Elevated latencies and API Error Rates",
      "description": null,
      "last_update": "Thu, 04 Oct 2018 08:04:44 PDT",
      "error": null,
      "message": "Between 2:04 AM and 7:50 AM PDT we experienced increased API error rates and latencies in the US-WEST-2 Region. The issue has been resolved and the service is operating normally."
    }
  }
}
```

The best way to use this information is using a JSONPath node with a JSON Path Expression like:

`$.us-west-2.secretsmanager.status`

and feeding the output of that to a conditional node.

#### Action Example

<img src="/spot-connect/_media/aws-system-status.png" />

