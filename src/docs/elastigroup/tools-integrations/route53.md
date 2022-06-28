# Route 53

This integration provides the ability to use Route 53 as a load balancer for the EC2 resources provisioned by the Elastigroup, allowing to define multiple recordset domain names (FQDN) for each Elastigroup. EC2 instances will be registered and deregister to and from all domains configured for instance launch and termination respectively.

## Prerequisites

1. Make sure you have existing domains (record sets).
2. Only domain record set type A (IP) is supported.
3. Record set aliases are not supported.
4. Make sure you are using the latest [Spot policy](administration/api/spot-policy-in-aws).

## Create a New Elastigroup

1. Enter the Creation Wizard and complete the General tab.
2. In the third-party integration section (under the Compute tab), choose Route 53 and click on the plus icon:

<img src="/elastigroup/_media/route53-01.png" width="600" height="222" />

3. Add the required Domains Hosted Zone Id and RecordSets while specifying the Name and usage of public IP:

<img src="/elastigroup/_media/route53-02.png" />

4. Complete the Creation Wizard and create your Elastigroup.

Your Elastigroup is up and running with a Route53 load balancer.

## (Optional) Cross-account Route53 Integration

Optionally, you can configure your Elastigroup to utilize a Route53 record-set that is managed in one of your other AWS accounts.

After configuring your Route53 integration, go to the Spot JSON review tab, and edit it.
To utilize cross-account Route53 integration, edit the JSON as follows:

```json
{
  "thirdPartiesIntegration": {
    "route53": {
      "domains": [
        {
          "hostedZoneId": "<Hosted Zone ID>",
          "spotinstAccountId": "act-1234567",
          "recordSets": [
            {
              "name": "<record.domain.com>",
              "usePublicIp": "<false/true>"
            }
          ]
        }
      ]
    }
  }
}
```
