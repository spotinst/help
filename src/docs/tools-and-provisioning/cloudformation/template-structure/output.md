# Output

Optional: Describes the values that are returned when viewing the stack properties.

## Request

### Body

```
{
    "AWSTemplateFormatVersion": "2010-09-09",
    "Resources": -{
        "SpotinstElastigroup": -{
            "Type": "Custom::elasticgroup",
            "Properties": {}
        }
    },
    "Outputs": -{
        "groupId": -{
            "Value": -{
                "Ref": "SpotinstElastigroup"
            }
        }
    }
}
```
