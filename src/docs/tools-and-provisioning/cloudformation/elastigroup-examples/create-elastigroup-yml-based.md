# Create Elastigroup – YAML Based

Create a new Elastigroup.

The full body attribute list is available on the [Create](https://docs.spot.io/api/#operation/elastigroupAwsCreate) page of the API documentation.

```yml
AWSTemplateFormatVersion: 2010-09-09
Description: YAML based CFN template
Parameters:
  DesiredCapacityAtStart:
    Type: Number
    Default: 0
  MaxCapacityAtStart:
    Type: Number
    Default: 1
  InstanceType:
    Description: Select On-Demand Instance Type.
    Type: String
    Default: m4.large
    AllowedValues:
      - t2.nano
      - t2.micro
      - t2.small
      - t2.medium
      - t2.large
      - m1.small
      - m1.medium
      - m1.large
      - m1.xlarge
      - m2.xlarge
      - m2.2xlarge
      - m2.4xlarge
      - m3.medium
      - m3.large
      - m3.xlarge
      - m3.2xlarge
      - m4.large
      - m4.xlarge
      - m4.2xlarge
      - m4.4xlarge
      - m4.10xlarge
  GlobalPrivateSubnetsIds:
    Type: String
    Default: "subnet-12345"
  SecurityGroups:
    Type: String
    Default: "sg-12345"
  LatestAMIId:
    Type: String
    Default: "ami-12345"
  GlobalAzSubnets:
    Type: String
    Default: "us-west-1c"
  SpotinstToken:
    Type: String
    Default: "spotinst-token"
  SpotinstAccountId:
    Type: String
    Default: "act-12345"
Resources:
  SpotinstElastigroup:
    Type: "Custom::elasticgroup"
    Properties:
      ServiceToken: !Sub "arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation"
      accessToken: !Ref SpotinstToken
      accountId: !Ref SpotinstAccountId
      group:
        name: "CFN-elastigroup"
        strategy:
          risk: 100
          availabilityVsCost: costOriented
          drainingTimeout: 10
          lifetimePeriod: days
          utilizeReservedInstances: false
        capacity:
          target: !Ref DesiredCapacityAtStart
          minimum: !Ref DesiredCapacityAtStart
          maximum: !Ref MaxCapacityAtStart
          unit: instance
        compute:
          instanceTypes:
            ondemand: !Ref InstanceType
            spot:
              - t2.micro
              - t2.small
              - t2.medium
              - t2.large
              - t2.xlarge
              - t2.2xlarge
              - m3.medium
              - m3.large
              - m3.xlarge
              - m3.2xlarge
              - m4.4xlarge
              - m4.2xlarge
              - m4.xlarge
              - m4.large
          availabilityZones:
            - name: !Ref GlobalAzSubnets
              subnetId: !Ref GlobalPrivateSubnetsIds
          launchSpecification:
            monitoring: false
            imageId: !Ref LatestAMIId
            securityGroupIds: [!Ref SecurityGroups]
          product: Linux/UNIX
        scheduling:
          tasks:
            - isEnabled: true
              taskType: scale
              cronExpression: 0 23 * * 1-5
              scaleTargetCapacity: 0
              scaleMinCapacity: 0
              scaleMaxCapacity: 0
            - isEnabled: true
              taskType: scale
              cronExpression: 0 6 * * 1-5
              scaleTargetCapacity: 0
              scaleMinCapacity: !Ref DesiredCapacityAtStart
              scaleMaxCapacity: !Ref MaxCapacityAtStart
```
