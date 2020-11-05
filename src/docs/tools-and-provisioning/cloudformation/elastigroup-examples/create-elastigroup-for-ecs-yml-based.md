# Create Elastigroup for ECS – YAML Based

Create a new Elastigroup for ECS cluster.

The full body attributes list is available on the [https://docs.spot.io/api/#operation/elastigroupAwsCreate) page of the API documentation.

```yml
AWSTemplateFormatVersion: "2010-09-09"
Metadata:
  AWS::CloudFormation::Interface:
    ParameterGroups:
      - Label:
          default: ECS Configuration
        Parameters:
          - ECSName
      - Label:
          default: Spot Configuraiton
        Parameters:
          - AccountID
          - AccessToken
      - Label:
          default: Elastigroup Configuration
        Parameters:
          - ElastigroupName
          - ClusterOrientation
          - SpotPercentage
          - CapacityTarget
          - CapacityMin
          - CapacityMax
          - OnDemandInstanceType
          - SpotInstancesType
          - SubnetIds
          - DetailedMonitoring
          - KeyName
          - SecurityGroupsIds
          - ProductType
      - Label:
          default: ECS AutoScaler Configuration
        Parameters:
          - AutoScaleraEnable
          - AutoScalerHeadroomAutoConfig
          - AutoScalerCooldown
          - AutoScalerEvaluationPeriods
          - AutoScalerHeadroomUnitCount
          - AutoScalerHeadroomCPU
          - AutoScalerHeadroomRAM
    ParameterLabels:
      ElastigroupName:
        default: Elastigroup Name
      AccessToken:
        default: Spotint Access Token
      AccountID:
        default: Spot Account ID
      ClusterOrientation:
        default: Cluster Orientation
      SpotPercentage:
        default: Spot Instances Percantage
      CapacityTarget:
        default: Instances Capacity Target
      CapacityMin:
        default: Instances Capacity Minimum
      CapacityMax:
        default: Instances Capacity Maximum
      OnDemandInstanceType:
        default: On-Demand Instance Type
      SpotInstancesType:
        default: Spot Instances Type
      SubnetIds:
        default: SubentIds
      DetailedMonitoring:
        default: Detailed Monitoring
      KeyName:
        default: Key Pair Name
      SecurityGroupsIds:
        default: Security Groups ID
      ProductType:
        default: Product Type
      ECSName:
        default: ECS Name
      AutoScaleraEnable:
        default: Enable ECS AutoScaler?
      AutoScalerHeadroomAutoConfig:
        default: AutoScaler Headroom Auto Config
      AutoScalerCooldown:
        default: AutoScaler Cooldown
      AutoScalerEvaluationPeriods:
        default: AutoScaler Evaluation Periods
      AutoScalerHeadroomUnitCount:
        default: AutoScaler Headroom Units Count
      AutoScalerHeadroomCPU:
        default: AutoScaler Headroom CPU
      AutoScalerHeadroomRAM:
        default: AutoScaler Headroom RAM
Parameters:
  ElastigroupName:
    Type: String
    Description: Provide a Name for the Elastigroup
  AccessToken:
    Type: String
    Description: Provide Spot API Token
  AccountID:
    Type: String
    Description: Provide Spot Account ID
  ShouldRoll:
    Type: String
    Description: Should roll when updating
    Default: "true"
  ShouldUpdateTargetCapacity:
    Type: String
    Default: "true"
  BatchSizePercentage:
    Type: Number
    Default: "20"
  ClusterOrientation:
    Type: String
    AllowedValues:
      - balanced
      - availabilityOriented
      - costOriented
    Default: balanced
    Description: Specify Cluster Orientation
  SpotPercentage:
    Type: Number
    MinValue: "0"
    MaxValue: "100"
    Default: "100"
    Description: Spot Instances Percentage in the Cluster
    ConstraintDescription: Select a Number Between 0 and 100
  CapacityTarget:
    Type: Number
    Description: Desired Amount of Instances in the Cluster
  CapacityMin:
    Type: Number
    Description: Minimal Amount of Instances in the Cluster
  CapacityMax:
    Type: Number
    Description: Maximal Amount of Instances in the Cluster
  OnDemandInstanceType:
    Type: String
    Default: c4.large
    AllowedValues:
      - t1.micro
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
      - c1.medium
      - c1.xlarge
      - c3.large
      - c3.xlarge
      - c3.2xlarge
      - c3.4xlarge
      - c3.8xlarge
      - c4.large
      - c4.xlarge
      - c4.2xlarge
      - c4.4xlarge
      - c4.8xlarge
      - g2.2xlarge
      - g2.8xlarge
      - r3.large
      - r3.xlarge
      - r3.2xlarge
      - r3.4xlarge
      - r3.8xlarge
      - i2.xlarge
      - i2.2xlarge
      - i2.4xlarge
      - i2.8xlarge
      - d2.xlarge
      - d2.2xlarge
      - d2.4xlarge
      - d2.8xlarge
      - hi1.4xlarge
      - hs1.8xlarge
      - cr1.8xlarge
      - cc2.8xlarge
      - cg1.4xlarge
    ConstraintDescription: must be a valid EC2 instance type
    Description: Which on-demand instance type should we use to base Elastigroup upon?
  SpotInstancesType:
    Type: CommaDelimitedList
    Default: c4.large,c5.large
    Description: Provide a comma separated List of Spot Instances Available to Elastigroup
  SubnetIds:
    Type: List<AWS::EC2::Subnet::Id>
    Description: Provide Subnet IDs for the Cluster (Must be from selected VPC
  DetailedMonitoring:
    Type: String
    AllowedValues:
      - "True"
      - "False"
    Default: "False"
    Description: Allow Detailed CloudWatch Monitoring?
  KeyName:
    Description: Provide of an existing EC2 KeyPair to enable SSH access to the instances
    Type: AWS::EC2::KeyPair::KeyName
    ConstraintDescription: Must be the name of an existing EC2 KeyPair.
  SecurityGroupsIds:
    Type: List<AWS::EC2::SecurityGroup::Id>
    Description: Provide comma seperated list of Securtiy Group IDs
  ProductType:
    Type: String
    AllowedValues:
      - Linux/UNIX
      - SUSE Linux
      - Windows
    Default: Linux/UNIX
    Description: Choose OS Type
  ECSName:
    Description: Provide a name for the ECS Cluster
    Type: String
  AutoScaleraEnable:
    Description: Would you like to Enable Spotinst's ECS AutoScaler?
    Type: String
    Default: "true"
    AllowedValues:
      - "true"
      - "false"
  AutoScalerHeadroomAutoConfig:
    Description: Provide an automated option to configure headroom (Ignore if
      not using AutoScaler)
    Type: String
    Default: "true"
    AllowedValues:
      - "true"
      - "false"
  AutoScalerCooldown:
    Description:
      Provide the time in seconds, between scaling activities (Ignore if
      not using AutoScaler)
    Type: String
    Default: "180"
  AutoScalerEvaluationPeriods:
    Description:
      Provide the number of consecutive periods that should pass before
      scaling down (Ignore if not using AutoScaler)
    Type: String
    Default: "3"
  AutoScalerHeadroomUnitCount:
    Description:
      Provide the number of Headroom units to keep available at all times
      (Ignore if not using AutoScaler)
    Type: String
    Default: "0"
  AutoScalerHeadroomCPU:
    Description:
      Provide the amount of CPU units reserved in each Headroom unit (Ignore
      if not using AutoScaler)
    Type: String
    Default: "0"
  AutoScalerHeadroomRAM:
    Description:
      Provide the amount in memory (in MB) reserved in each Headroom unit
      (Ignore if not using AutoScaler)
    Type: String
    Default: "0"
Mappings:
  AWSRegionToAMI:
    AMI:
      AMZECSOTP: amzn-ami-2018.03.a-amazon-ecs-optimized
    us-east-2:
      AMI: ami-0307f7ccf6ea35750
    us-east-1:
      AMI: ami-045f1b3f87ed83659
    us-west-2:
      AMI: ami-01b70aea4161476b7
    us-west-1:
      AMI: ami-0285183bbef6224bd
    eu-west-3:
      AMI: ami-0f4738fbeb53e6c3a
    eu-west-2:
      AMI: ami-01bee3897bba49d78
    eu-west-1:
      AMI: ami-0627e141ce928067c
    eu-central-1:
      AMI: ami-0eaa3baf6969912ba
    ap-northeast-2:
      AMI: ami-00294948a592fc052
    ap-northeast-1:
      AMI: ami-05b296a384694dfa4
    ap-southeast-2:
      AMI: ami-02c73ee1100ce3e7a
    ap-southeast-1:
      AMI: ami-050865a806e0dae53
    ca-central-1:
      AMI: ami-0f552e0a86f08b660
    ap-south-1:
      AMI: ami-01ef9f6a829ae3956
    sa-east-1:
      AMI: ami-084b1eee100c102ee
Resources:
  ECSCluster:
    Type: AWS::ECS::Cluster
    Properties:
      ClusterName:
        Ref: ECSName
  SpotinstElastigroup:
    Type: Custom::elasticgroup
    Properties:
      ServiceToken:
        Fn::Sub: arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation
      accessToken:
        Ref: AccessToken
      accountId:
        Ref: AccountID
      updatePolicy:
        shouldRoll:
          Ref: ShouldRoll
        shouldUpdateTargetCapacity:
          Ref: ShouldUpdateTargetCapacity
        rollConfig:
          roll:
            batchSizePercentage:
              Ref: BatchSizePercentage
      group:
        name:
          Ref: ElastigroupName
        region:
          Ref: AWS::Region
        strategy:
          risk:
            Ref: SpotPercentage
          availabilityVsCost:
            Ref: ClusterOrientation
        capacity:
          target:
            Ref: CapacityTarget
          minimum:
            Ref: CapacityMin
          maximum:
            Ref: CapacityMax
        scaling: {}
        compute:
          instanceTypes:
            ondemand:
              Ref: OnDemandInstanceType
            spot:
              Ref: SpotInstancesType
          subnetIds:
            Ref: SubnetIds
          launchSpecification:
            tags:
              - tagKey: Name
                tagValue:
                  Fn::Sub: "${ECSName}-ECS-Host"
            monitoring:
              Ref: DetailedMonitoring
            imageId:
              Fn::FindInMap:
                - AWSRegionToAMI
                - Ref: AWS::Region
                - AMI
            keyPair:
              Ref: KeyName
            securityGroupIds:
              Ref: SecurityGroupsIds
            iamRole:
              arn:
                Fn::GetAtt:
                  - ECSInstanceProfile
                  - Arn
            userData:
              Fn::Base64:
                Fn::Sub:
                  - |-
                    #!/bin/bash
                    echo ECS_CLUSTER=${ECSClustername} >> /etc/ecs/ecs.config;yum install -y aws-cfn-bootstrap; /opt/aws/bin/cfn-init -v --stack ${StackName} --resource SpotinstElastigroup --role ${ECSRole} --region ${AWS::Region}
                  - ECSClustername:
                      Ref: ECSName
                    StackName:
                      Ref: AWS::StackName
                    ECSRole:
                      Ref: ECSRole
          product:
            Ref: ProductType
        scheduling: {}
        thirdPartiesIntegration:
          ecs:
            clusterName:
              Ref: ECSName
            autoScale:
              isEnabled:
                Ref: AutoScaleraEnable
              isAutoConfig:
                Ref: AutoScalerHeadroomAutoConfig
              cooldown:
                Ref: AutoScalerCooldown
              down:
                evaluationPeriods:
                  Ref: AutoScalerEvaluationPeriods
              headroom:
                cpuPerUnit:
                  Ref: AutoScalerHeadroomCPU
                memoryPerUnit:
                  Ref: AutoScalerHeadroomRAM
                numOfUnits:
                  Ref: AutoScalerHeadroomUnitCount
  ECSRole:
    Type: AWS::IAM::Role
    Properties:
      Path: "/"
      RoleName:
        Fn::Sub: "${ECSName}-ECSRole-${AWS::Region}"
      AssumeRolePolicyDocument:
        Statement:
          - Action: sts:AssumeRole
            Effect: Allow
            Principal:
              Service: ec2.amazonaws.com
      Policies:
        - PolicyName: ecs-service
          PolicyDocument:
            Statement:
              - Effect: Allow
                Action:
                  - ecs:CreateCluster
                  - ecs:DeregisterContainerInstance
                  - ecs:DiscoverPollEndpoint
                  - ecs:Poll
                  - ecs:RegisterContainerInstance
                  - ecs:StartTelemetrySession
                  - ecs:Submit*
                  - logs:CreateLogStream
                  - logs:PutLogEvents
                  - ecr:BatchCheckLayerAvailability
                  - ecr:BatchGetImage
                  - ecr:GetDownloadUrlForLayer
                  - ecr:GetAuthorizationToken
                  - ssm:DescribeAssociation
                  - ssm:GetDeployablePatchSnapshotForInstance
                  - ssm:GetDocument
                  - ssm:GetManifest
                  - ssm:GetParameters
                  - ssm:ListAssociations
                  - ssm:ListInstanceAssociations
                  - ssm:PutInventory
                  - ssm:PutComplianceItems
                  - ssm:PutConfigurePackageResult
                  - ssm:UpdateAssociationStatus
                  - ssm:UpdateInstanceAssociationStatus
                  - ssm:UpdateInstanceInformation
                  - ec2messages:AcknowledgeMessage
                  - ec2messages:DeleteMessage
                  - ec2messages:FailMessage
                  - ec2messages:GetEndpoint
                  - ec2messages:GetMessages
                  - ec2messages:SendReply
                  - cloudwatch:PutMetricData
                  - ec2:DescribeInstanceStatus
                  - ds:CreateComputer
                  - ds:DescribeDirectories
                  - logs:CreateLogGroup
                  - logs:CreateLogStream
                  - logs:DescribeLogGroups
                  - logs:DescribeLogStreams
                  - logs:PutLogEvents
                  - s3:PutObject
                  - s3:GetObject
                  - s3:AbortMultipartUpload
                  - s3:ListMultipartUploadParts
                  - s3:ListBucket
                  - s3:ListBucketMultipartUploads
                  - cloudformation:SignalResource
                  - cloudformation:DescribeStackResource
                Resource: "*"
  ECSInstanceProfile:
    Type: AWS::IAM::InstanceProfile
    Properties:
      Path: "/"
      Roles:
        - Ref: ECSRole
Outputs:
  Cluster:
    Description: A reference to the ECS cluster
    Value:
      Ref: ECSName
  SpotinstGroupId:
    Description: A reference to Spot Elastigroup Id
    Value:
      Ref: SpotinstElastigroup
```
