<meta name="robots" content="noindex">

# Risk Analysis

The risk analysis feature provides visibility into your risks on several levels of granularity including a top-level aggregation per risk level, a listing of all risks, and a drill-down level of [Risk Details](spot-security/features/analyze-risks/view-risk-details) per each risk.

To analyze your risks, go to Spot Security in the left tree of the console and click Risk Analysis.

## Filters and Presets

The default filter or preset on this page is the same filter or preset that you chose on the Dashboard. You can change the filters or choose a different preset from the list of presets.

## Risk Totals per Level

This top-level view shows the total number of risks per risk-level. Each level also shows the number of new risks identified since the last scan.

<img src="/spot-security/_media/features-analyze-risks-01.png" />

## List of Risks

To see the full list of risks for a particular risk level, click on the arrow for that risk level.

<img src="/spot-security/_media/features-analyze-risks-02.png" />

The example above shows the expanded list of high risks. You can sort the list by risk score or by recommended remediation. Items that have an easy remediation are flagged so you can take care of them right away.

## Risk Info Sidebar

To read basic information about a risk, click on the risk. A sidebar appears on the right with some details about the risk and suggestions for further action.

<img src="/spot-security/_media/features-analyze-risks-03.png" />

The risk sidebar includes the risk title, a brief description, and an option to change the risk level. You change the risk level only if you have the permissions for that. The sidebar also includes the following information about the risk:
- Severity
- Risk Score
- Resources Affected: The total number of affected resources within the filters or preset selected.
- Account
- Status
- Days Open
- Last Scanned: Date and time of the last scan.
- First Discovered: Date and time the risk was detected.
- User
- Rule ID

### Affected Resources

The sidebar shows a summary of affected resources which includes the total number of each type of resource.

<img src="/spot-security/_media/features-analyze-risks-04.png" />

To see a list of resources in each type, just click the arrow.

### Remediation Steps

When you click this button, you go directly to the remediation for this risk in the Remediation module. If you decide to take the recommendation, you can take immediate action.

### View Affected Resources

Click this button to go to the [Risk Details](spot-security/features/analyze-risks/view-risk-details) page, which shows more information about the risk, including a risk impact map.

## What’s Next?

Learn more about how you can [Remediate](spot-security/features/analyze-risks/remediate) your risks.
