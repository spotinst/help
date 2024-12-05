# Choose AWS RI Strategy

After you click **Choose Strategy** in the Dashboard’s [Analysis](eco/tutorials/review-ri-spending-analysis) page (Eco AWS), seelect a reserved instance (RI) strategy in the Strategy Selection page.

<img src="/eco/_media/tutorials-choose-strategy-01.png" />

You can select one of the strategies:

- Short Term
- Medium Term
- Long Term
- Custom Term

When you select a strategy, a summary line with the potential yearly savings for that strategy is displayed on the right.

## Summary Line

The Summary Line displays:

- All Time Waste: Amount wasted on unused reserved instances.
- Current RI Commitment: The monthly amount of reserved instance compute capacity you are currently committed to.
- Recommended RI Commitment: The monthly amount recommended for your workload following the Eco analysis.

## Potential Yearly Savings per AWS Service

This chart shows the yearly savings that can be achieved with reserved instances per AWS service. The figures in this chart vary according to the strategy you choose.

<img src="/eco/_media/tutorials-choose-strategy-02.png" />

## Apply Strategy

Once you have marked a strategy, click Apply Strategy. Eco will then analyze your AWS strategy and start managing your RIs and Savings Plans.

## Reduce Commitments

To reduce commitments, you can launch Spot instances. Commitments are necessary for on-demand usage. However, by leveraging Ocean and Elastigroup to launch EC2 instances as Spot, the overall commitment can be reduced. Eco is integrated with Ocean, allowing it to manage commitments effectively. Eco recognizes when Ocean and Elastigroup have launched instances to utilize commitments and reduces commitments accordingly to maximize Spot usage and savings.
