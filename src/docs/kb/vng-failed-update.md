<meta name="“robots”" content="“noindex”">

# Error Message "Virtual Node Group configuration failed to update" 

## Question
What does this error message mean?

`Virtual Node Group configuration failed to update. Reason: Error while trying to create LaunchSpec. spotPercentage cannot be set on both ocean cluster and launch spec.`

## Answer

The <i>spotPercentage</i> parameter cannot be used on both Ocean and one of its virtual node groups at the same time. For example, if you define the value on Ocean, you cannot set it on the virtual node group in addition.

You don't need to set it explicitly at Ocean level. You can choose to remove it from the cluster configuration and then set it at the virtual node group level.

![vng-failed-update1](https://github.com/spotinst/help/assets/167069628/8594fc53-d609-4dfa-9b2c-e6d09ee4a942)
