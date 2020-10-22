# Third-Party Integrations

Spot Managed Instances can be configured to receive traffic from Amazon Route 53 or one of the following Load Balancers:

- ELB – Classic Load Balancer
- ALB – Application Load Balancer Target Group
- MLB – Spot Multai Load Balancer Target Set

Once one or more load balancers are specified, Managed Instances will register managed EC2 instances with the required load balancers upon launch. In addition, Managed Instance will also de-register instances from the load balancer upon termination.

## Integrate Load Balancer or Route 53

In order to configure the Managed Instance to receive traffic from either Route53 or one or more Load Balancers, follow these steps:

1. Enter the Managed Instance's Configuration Wizard.
2. Head over to the Persisted Resources tab.
3. Under Network, check the `Receive Traffic From` checkbox.
4. Choose your source:

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
