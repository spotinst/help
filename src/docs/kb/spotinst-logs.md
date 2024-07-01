<meta name="“robots”" content="“noindex”">

# Disable Spotinst Agent from sending logs to Syslog.Spotinst-Agent Log Path

You can stop log messages from saving in `/lib/systemd/system/spotinst-agent.service`. <font color="#FC01CC">You’re actually stopping the logging, not changing the folder, right?</font>

You can run this script to stop Spotinst-Agent from sending logs to syslog:

````
sed -i 's/[Service]/[Service]\nStandardOutput=null\nStandardError=null/g' /lib/systemd/system/spotinst-agent.service
systemctl daemon-reload
systemctl restart spotinst-agent
````
<font color="#FC01CC">Isn’t this restarting the service?</font>

~~And then restart the service~~
