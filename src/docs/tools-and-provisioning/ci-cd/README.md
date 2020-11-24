# CI/CD

Spot easily plugs into your delivery pipeline, including major CI/CD platforms such as Jenkins, Chef, and GitLab, and extends your Continuous Integration/Continuous Deployment (CI/CD) pipeline of choice with Continuous Optimization (CO) to complete the application delivery pipeline.

<img src="/connect-your-cloud-provider/_media/introduction-to-spot-03a.png" width="500" height="177" />

Below are just two examples of the many ways Spot turns CI/CD into CI/CD/CO.

## CI/CD, Kubernetes, and Spot

In modern organizations, continuous integration and continuous deployment (CI/CD) not only streamline the process of code delivery and software deployment, it also plays a significant role in auditing and optimization. For Kubernetes workloads this translates into checking deployment configurations and pod definitions to ensure they are scoped correctly for both CPU and memory allocation. Over-provisioning at this step can lead to resource and infrastructure waste at scale, potentially eliminating any efficiency Kubernetes originally brought to the table.

When you add Spot to your pipeline, you benefit from the addition of "continuous optimization" (CO). Spot ensures that the ongoing resources a cluster needs are handled in the most efficient manner, simplifying Kubernetes infrastructure management while reducing costs by optimizing cluster scaling and pod sizing.

## Chef and Spot

Chef is a powerful automation platform, that allows you to manage thousands of servers as one.

One of the greatest challenges of using Chef in the Cloud is when using it in dynamic workloads that scale up and down. While on-demand instances can be stopped gracefully and guarantees to run infinitely, Spot Instances, are more likely to be terminated over time and the Chef server is unaware of Spot Instance interruptions, which causes a ‘Zombie’ scenario and potential errors.

The Spot integration with Chef uses Chef API calls to trigger register and deregister operations for instances that were spun up by Spot. This ensures that whenever instances are terminated and Spot spins up new replacements, Chef will be fully aware.

## What's Next?

This section includes information about using Spot with major CI/CD tools. To learn more, choose a topic in the sidebar on the left.
