# Route 53

This integration provides the ability to use Route 53 as a load balancer for the EC2 resources provisioned by the Elastigorup, allowing to define multiple recordset domain names (FQDN) for each Elastigroup. EC2 instances will be registered and deregister to and from all domains configured for instance launch and termination respectively.

Prerequisites
Make sure you have existing domains (record sets)
Only domain record set type A (IP) is supported
Record set alias are not supported
Make sure you are using the latest Spotinst policy
Create a New Elastigroup
Enter the Creation Wizard and complete the General tab.
In the 3rd party integration section (under the Compute tab) choose Route 53 and click on the plus icon:

Add the required Domains Hosted Zone Id and RecordSets while specifying the Name and usage of public IP:

Complete the Creation Wizard and create your Elastigroup.
Your Elastigroup is up and running with a Route53 load balancer.

(Optional) Cross-account Route53 Integration
Optionally, you can configure your elastigroup to utilize a Route53 record-set that is managed in one of your other AWS accounts.

After configuring your Route53 integration, go to the Spotinst JSON review tab, and edit it.
To utilize cross-account Route53 integration, edit the JSON as follows:

"thirdPartiesIntegration": {
        "route53": {
                "domains": [
                   {
                        "hostedZoneId": "<Hosted Zone ID>",
                        "spotinstAccountId":"act-1234567",
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
