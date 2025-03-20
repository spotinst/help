# Third-Party Integrations

Spot stateful nodes can be configured to receive traffic from Amazon Route 53 or one of these load balancers:

- ELB – Classic Load Balancer
- ALB – Application Load Balancer Target Group

Once one or more load balancers are specified, Stateful Nodes will register stateful EC2 nodes with the required load balancers upon launch. In addition, stateful nodes will also deregister nodes from the load balancer upon termination.

## Integrate Load Balancer or Route 53

To configure the Stateful Node to receive traffic from either Route53 or one or more Load Balancers:

1. If the Spot console, go to **Elastigroup** > **Stateful Nodes** and select the stateful node.
2. Click **Actions** > **Edit Configuration**.
7. On the Persistent Resources tab, go to **Network** and select `Receive Traffic From`.
9. Choose your source:

   - For a load balancer integration, select the load balancer.

     <img src="/managed-instance/_media/third-party-integrations-01.png" />

   - For Route 53 integration:
      1.  Select Route 53.
      2.  Select the Hosted Zone ID.
      3.  Select Record Sets.
      4.  If needed, select `Register Public IP`.
      5.  Click `Add a Record`.

      <img src="/managed-instance/_media/third-party-integrations-02.png" />
