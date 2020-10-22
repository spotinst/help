# Advanced Expressions

The scaling action to be performed can also be defined as a mathematical expression.

If you don't want to use a static value for scaling, you can specify a scaling action parameter using expressions which will be calculated on-the-fly.

## Variables

The following variables are allowed:

- currCapacity – the number of active instances at the time of scaling.
- value – the value of the metric by which this policy scales (For example, CPUUtilization).

## Operators

The following mathematical operations are allowed:

- Addition: +
- Subtraction: –
- Division: /
- Multiplication \*
- Power: ^
- Square root: SQRT()
- Conditionals: IF(boolean expression, result if true, result if false)
- Minimum Value: MIN(v1,v2,v3…)
- Maximum Value: MAX(v1,v2,v3…)

## Examples

- currCapacity \* 0.5
- value \* 2 + 5
- SQRT(value \* 10)
- IF(value > 50, currCapacity _ 0.6, currCapacity _ 0.2)
- MAX(value _ 10, currCapacity _ 3, 5)
- IF(value > 50 && currCapacity <100, 20, 10)

## Fields

The fields below accept these expressions:

| Field                                 | Type   | Description             |
| ------------------------------------- | ------ | ----------------------- |
| scaling.up.action.adjustment          | String | Mathematical expression |
| scaling.up.action.minTargetCapacity   | String | Mathematical expression |
| scaling.up.action.target              | String | Mathematical expression |
| scaling.up.action.maximum             | String | Mathematical expression |
| scaling.up.action.minimum             | String | Mathematical expression |
| scaling.down.action.adjustment        | String | Mathematical expression |
| scaling.down.action.maxTargetCapacity | String | Mathematical expression |
| scaling.down.action.target            | String | Mathematical expression |
| scaling.down.action.maximum           | String | Mathematical expression |
| scaling.down.action.maximum           | String | Mathematical expression |
