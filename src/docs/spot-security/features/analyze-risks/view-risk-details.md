# View Risk Details

The Risk Details page gives you the in-depth picture of a risk, including a risk impact map, affected resources, essential details, and a pathway to remediation.

To access the Risk Details page for a risk, do the following:
1. Go to the [Risk Analysis](spot-security/features/analyze-risks/view-risk-details) page and open the sidebar for the risk.
2. In the sidebar, click View Affected Risks in the bottom right.

The name of the risk appears in the bread crumbs at the top.

## Risk Impact Map

The risk impact map illustrates the relations of the various services, policies, instances, and other entities that are impacted by the risk. You can use the search tool at the top of the map to search for a resource by node name, connection, hostname, database, type, port, or username. Based on the parameter you enter, the map will filter and present a list.

<img src="/spot-security/_media/features-risk-details-01.png" />

If a resource is having a security issue, such as a misconfiguration, the map will show other resources that may be impacted. You can click on any resource icon, and you will be able to see details about that resource on a panel on the right.

When you click on the clock icon on the left, a timeline appears at the bottom of the page. You can slide the indicator on the timeline to see the state of the resources at a given time.

## Affected Resources

Below the map, a summary of affected resources shows the total number of each type of resource. For each type, you can click the arrow to see the full list of resources of that type.

<img src="/spot-security/_media/features-risk-details-02.png" />

## Sidebar Information

The sidebar presents the same information that appears on the sidebar of the Risk Analysis page.

### Location

The map at the bottom of the sidebar shows the region of the affected resources. The map indicates multiple regions if resources in multiple regions are impacted.

<img src="/spot-security/_media/features-risk-details-03.png" />

## What’s Next?

Learn more about:
- The [Remediation](spot-security/features/analyze-risks/remediate) actions you can take.
- Additional [Topology](spot-security/features/topology) views available.
