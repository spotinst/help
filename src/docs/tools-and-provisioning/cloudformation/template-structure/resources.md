# Resources

Describes the resources created and managed by the template. The resource properties depend on the resource type.

Under this section you define custom resources, for example: `SpotinstElastigroup` and its properties.

## Request: Defining a parameter

### Body

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "SpotinstElastigroup": {
      "Type": "Custom::elasticgroup",
      "Properties": {}
    }
  }
}
```
