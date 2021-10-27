<meta name="robots" content="noindex">

# Remediate

In line with the Spot Security methodology of Analyze, Detect, Act, the primary purpose of the Remediation feature is to enable you to act swiftly once your risks have been detected.

## Take Action Now

There are several ways to get to the Remediation page.

**From the Dashboard**:

In the [Security Dashboard](spot-security/security-dashboard/), go to one of the Highest Impact Recommendations and click Remediate Risk Now.

<img src="/spot-security/_media/features-remediation-01.png" width="423" height="137" />

**From Risk Analysis**:

In the sidebar of the [Risk Analysis](spot-security/features/analyze-risks/) page, click Remediation Steps.

<img src="/spot-security/_media/features-remediation-02.png" />

**From Risk Analysis Details**:

In the sidebar of the [Risk Analysis Details](spot-security/features/analyze-risks/view-risk-details) page, click Remediation Steps.

## Ways to Remediate

The Remediation page shows the name of the risk at the top, the risk details in a sidebar on the right, and the remediation actions in the middle of the page. The tabs indicate the different ways to implement the remediation, which are described below.

### Using AWS CLI

The default method displayed provides the steps for using AWS CLI. You can copy and paste the commands illustrated in the steps, and you can also edit the commands directly in the console before copying them for use in the CLI.

<img src="/spot-security/_media/features-remediation-03.png" />

### Using AWS Console

This tab specifies the steps you need to complete to implement the remediation in the AWS Console.

<img src="/spot-security/_media/features-remediation-04.png" width="332" height="159" />

The relevant data fields you need to change in the AWS console are indicated by a colored rectangle.

<img src="/spot-security/_media/features-remediation-05.png" width="547" height="80" />

### Using Python

For using Python, this tab shows the necessary Python code.

<img src="/spot-security/_media/features-remediation-06.png" />

## Mark as Remediated

Once you have completed your changes, click Mark as Remediated in the sidebar on the right. Then, the risk will be indicated as Risk Remediated in the Dashboard and the Risk Analysis pages. The Risk Remediated tag will appear until the next scan is complete.

## What’s Next?

Learn more about how the [Topology](spot-security/features/topology) views can help you in your security analysis.
