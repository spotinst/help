# Register Instances to Domain

In order to register an instance to your domain, a user data script needs to be applied to your Elastigroup settings, under the Compute tab.

The script does the following:

1. Checks if the machine is already member in the domain, if it is the script does nothing
2. Sets the DNS server on the network interface (needed to discover the domain)
3. Adds the instance to the domain
4. Restarts the machine (for changes to take effect)

Add the following User Data (the below example applies to Windows machines):

```powershell
<powershell>
$isMember = (Get-WmiObject -Class Win32_ComputerSystem).PartOfDomain
if (!$isMember)
{
$dnsserver = "10.0.0.1"
$domain = "myDomain"
$password = "myPassword!" | ConvertTo-SecureString -asPlainText -Force
$username = "$domain\myUserAccount"
$ou = "OU=testOU,DC=domain,DC=Domain,DC=com"
$nic = Get-NetAdapter
Set-DNSClientServerAddress –interfaceIndex $nic.ifIndex –ServerAddresses ($dnsserver)
$credential = New-Object System.Management.Automation.PSCredential($username,$password)
Add-Computer -DomainName $domain -Credential $credential -OUPath $ou
shutdown -r -t 00
}
</powershell>
```

The following values need to be changed to match your specifications:

- `$dnsserver`
- `$domain`
- `$password`
- `$username` – just the 'myUserAccount' part
- `$ou`

The value `$ou` is optional. If not required, delete this line and remove the ou flag and value from the Add-Computer command.

The script assumes that the instance has only one network interface, in case it has more a slight modification is required (contact us if you need that as well).
