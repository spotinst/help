# Use Existing Environment

|**Attribute**|**Type**| **Description**|
|---|---|---|
|beanstalkElastigroup.beanstalk.environmentId *|String|The beanstalk environment ID
Example: e-12345|
|beanstalkElastigroup.beanstalk.managedActions|	Object|	managedActions schema|
|beanstalkElastigroup.beanstalk.managedActions.platformUpdate|	Object|	platformUpdate schema|
|beanstalkElastigroup.beanstalk.managedActions.platformUpdate.performAt| String|	|Either never or timeWindow. if set to timeWindow then timeWindow parameter must be set|
|beanstalkElastigroup.beanstalk.managedActions.platformUpdate.timeWindow|	String|	Time window range
Example: ddd:hh:mm-ddd:hh:mm|
