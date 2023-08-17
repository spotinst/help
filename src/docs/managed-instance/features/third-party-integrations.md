# Third-Party Integrations

Spot Stateful Nodes can be configured to receive traffic from Amazon Route 53 or one of the following Load Balancers:

- ELB – Classic Load Balancer
- ALB – Application Load Balancer Target Group

Once one or more load balancers are specified, Stateful Nodes will register stateful EC2 nodes with the required load balancers upon launch. In addition, Stateful Nodes will also de-register nodes from the load balancer upon termination.

## Integrate Load Balancer or Route 53

In order to configure the Stateful Node to receive traffic from either Route53 or one or more Load Balancers, follow these steps:

1. If you are using Spot and are in another location in the site, such as Elastigroup, Ocean or Eco, click the three bars in the upper left corner.

<img src="/connect-your-cloud-provider/_media/connect-additional-account-002.png" />

2. In the left menu, click Elastigroup.
3. In the same left menu, click Stateful Nodes.
4. Choose a node from the list.
5. Click Actions on the top right.
6. Choose Edit Configuration.
7. Click Persistent Resources tab.
8. Under Network, check the `Receive Traffic From` checkbox.
9. Choose your source:

   - For a Load Balancer Integration:

     Select your desired Load Balancer from the dropdown menu.

<img src="/managed-instance/_media/third-party-integrations-01.png" />

- For Route 53 integration:
  1.  Select Route 53 from the dropdown menu.
  2.  Select the Hosted Zone ID.
  3.  Select Record Sets.
  4.  If needed, check the `Register Public IP` option.
  5.  Click `Add a Record`.

<img src="/managed-instance/_media/third-party-integrations-02.png" />
