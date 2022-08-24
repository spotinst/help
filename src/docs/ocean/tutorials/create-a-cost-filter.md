# Create a Cost Filter

Sometimes it is useful to create a [Cost Analysis](ocean/features/cost-analysis) that takes only certain workloads into consideration. You can do this by adding a filter.

## Relevance

The following procedures are relevant for Kubernetes users.

## Get Started

- To apply a filter to your cost analysis, choose a filter from the list of saved filters.
- To add a new filter, click Add Filter and fill in the filter criteria.

## Filter Criteria

When you click Add Filter, the Add Filter form appears as shown below.

<img src="/ocean/_media/tutorials-create-cost-filter-01.png" />

You will need to complete the following:

- Filter Name: The name of the filter.
- Calculation Scope: Specifies whether the filter should operate on Kubernetes Resources or Namespaces.
- Type: Specifies whether filtering is on labels or annotations.
- Key: The Key for the label or annotation.
- Operator: The operation to be used in the filter. Examples include Equals, Not Equals, Exists, and Not Exists.
- Value: The value to be applied by the operator. (Required only for Equals and Not Equals operators.)

You can add multiple conditions to the filter and relate them with AND or OR operators. If you need to create nested conditions that use parentheses, click Add More Filters.

Once you have defined the filter conditions, check the summary statement at the bottom. Then you can do the following:

- Save and apply the filter for re-use. Filters saved for a cluster can be applied to another cluster as well.
- Apply only (if you do not want to save it)

## Filter Example

In the example below, the filter will operate on Kubernetes resources. The filter will include labels that have the key `codename` with value `kafkanamo` and the labels with key `Family` and value `production`.

<img src="/ocean/_media/tutorials-create-cost-filter-02.png" />

The applied filter produces a breakdown table as shown below.

<img src="/ocean/_media/cost-analysis-4.png" />

## What's Next?

Learn how to [Migrate the Workload to Ocean](ocean/tutorials/migrate-workload).
