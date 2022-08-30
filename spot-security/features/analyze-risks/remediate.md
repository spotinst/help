<meta name="robots" content="noindex">

# Remediate

In line with the Spot Security methodology of Analyze, Detect, Act, the primary purpose of the Remediation feature is to enable you to act swiftly once your risks have been detected.

## Take Action Now

There are several ways to get to the Remediation page.

**From the Dashboard**:
In the Security Dashboard, go to one of the Highest Impact Recommendations and click Remediate Risk Now.

<img src="/spot-security/_media/remediation-a.png" />

**From Risk Analysis**:
1. Under the Risk Analysis page, click the Asset Detail of any of the Assets. Using the sidebar, click Remediation Steps.
<img src="/spot-security/_media/remediation-b.png" />

2. Click Action on the right side of each asset and click Remediate.
<img src="/spot-security/_media/remediation-g.png" />

## Ways to Remediate

The Remediation page shows the name of the risk at the top, the risk details in a sidebar on the right, and the remediation actions in the middle of the page. The tabs indicate the different ways to implement the remediation, which are described below.

### Using AWS CLI

The default method displayed provides the steps for using AWS CLI. You can copy and paste the commands illustrated in the steps, and you can also edit the commands directly in the console before copying them for use in the CLI.

Spot Security provides guided remediation of assets. You only need to replace the placeholder values to the actual asset details that they remediate.

<img src="/spot-security/_media/remediation-c.png" />

### Using AWS Console

This tab specifies the steps you need to complete to implement the remediation in the AWS Console.

<img src="/spot-security/_media/remediation-e.png" />

### Using Python

For using Python, this tab shows the necessary Python code. In addition, you can write Lambda functions to automate remediation using the Python script. Therefore, Spot can automate remediations of security issues.

Spot Security provides guided remediation of assets. You only need to replace the placeholder values to the actual asset details that they are remediating.

<img src="/spot-security/_media/remediation-f.png" />

## Mark as Remediated

Once you have completed your changes, click Mark as Remediated in the sidebar on the right. Then, the risk will be indicated as Risk Remediated in the dashboard along with the details of the user who marked it as remediated.

## What’s Next?
Learn more about how the [Topology view](spot-security/features/topology) can help you in your security analysis.
