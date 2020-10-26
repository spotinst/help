# Import ASG

Allows you to create an Elastigroup based on the setup of an ASG. For full API documentation, check out [Import ASG](https://docs.spot.io/api/#operation/elastigroupAwsImportAsg).

If you want your Elastigroup to persist even after you delete the CloudFormation Stack, add the section `` DeletionPolicy`:`retain `` to the JSON or YAML.

## Request - CloudFormation - JSON

```json
{
  "SpotinstASG": {
    "Type": "Custom::importAsg",
    "Properties": {
      "ServiceToken": "!Sub arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation",
      "accessToken": "YOUR SPOTINST API TOKEN",
      "accountId": "YOUR SPOTINST ACCOUNT ID",
      "asgName": "NAME OF THE ASG YOU WANT TO IMPORT",
      "region": "REGION WHERE ASG IS LOCATED",
      "group": {
        "product": "IMAGE TYPE",
        "spotInstanceTypes": ["ARRAY OF INSTANCE TYPES"],
        "name": "NAME OF NEW ELASTIGROUP TO CREATE"
      },
      "deletePolicy": {
        "asgScaleTarget": "NUMBER"
      },
      "groupConfig": {}
    }
  }
}
```

## Request - CloudFormation - YAML

```yaml
SpotinstASG:
Type: Custom::importAsg
Properties:
  ServiceToken: !Sub arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation
  accessToken: Your Spot API Token
  accountId: Your Spot Account ID
  asgName: Name of ASG to Import
  region: Region where ASG is located
  group:
    product: Image Type
    spotInstanceTypes:
      - Array of instance types
    name: Name of New Elastigroup Created
```

## Request - Import ASG and Scale Once

```yaml
SpotinstASG:
  Type: "Custom::importAsg"
  Properties:
    ServiceToken: !Sub arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation
    accessToken: !Ref SpotinstToken
    accountId: !Ref SpotinstAccountId
    asgName: !Ref ASGImportName
    region: !Sub ${AWS::Region}
    group:
      product: !Ref GroupProduct
      spotInstanceTypes: !Ref SpotInstanceType
      name: !Ref ElastigroupName
    asgOperation:
      elastigroupThreshold: 0
      asgTarget: 0
    deletePolicy:
      asgScaleTarget: 5
```
