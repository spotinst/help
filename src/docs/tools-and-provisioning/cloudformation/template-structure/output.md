# Output

Optional: Describes the values that are returned when viewing the stack properties.

Each custom resource has an optional output that will return the ID of the created resource

## Request JSON Example

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "SpotinstElastigroup": {
      "Type": "Custom::elasticgroup",
      "Properties": {}
    }
  },
  "Outputs": {
    "groupId": {
      "Value": {
        "Ref": "SpotinstElastigroup"
      }
    }
  }
}
```
