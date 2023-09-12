# Conditional 

Use this action node to perform a conditional action based on the previous step output. 

A conditional action, in the context of programming, refers to an action or set of actions that are executed based on a certain condition or set of conditions. It enables you to make decisions and perform different actions based on the evaluation of those conditions.  

Conditional actions have numerous use cases across various domains and programming scenarios. Here are a few common cases for conditional actions: 
* **User Input Validation**: When building interactive applications, you often need to validate user input. Conditional actions can be used to check if the input meets certain criteria or constraints. 
* **Decision Making**: Conditional actions are frequently used to make decisions. Based on certain conditions, you can choose different actions or behaviors. 
* **Workflow Control**: Conditional actions can be used to control the flow of a program's execution. You can use conditions to determine whether to proceed to the next step, repeat a loop, or terminate the program altogether. This is especially useful in tasks involving iterations and loops. 

Insert a Conditional node in the workflow editor page and provide the required inputs for the node. Configure the conditional node from the previous output and connect the other two nodes based on the condition that satisfies or fails.   

Details needed to set up a Conditional instance in Spot Connect: 

#### Input

|       Parameter Name      |                    Description                |      Required  |
|---------------------------|:---------------------------------------------:|:--------------:|
|      pick variable        |     Previous Step Output                      |     True       |
|      comparison operator  |     How to evaluate the selected variable     |     True       |
|      comparison value     |     What to compare the selected variable to  |     True       |
|      destination          |     Next Step If This Rule Is Met             |     True       |

#### Output 

This node does not produce an output. It selects the destination node based on the input condition match. 

#### Action Example 

1. From the workflow builder in the left panel, drag and drop the Conditional node on the workflow editor page and click it. Define the conditional by adding a rule. 

<img width="470" alt="conditional-1" src="https://github.com/spotinst/help/assets/106514736/e7c4318d-dd50-4e91-9642-1473be5fbe8d">

2. Select the previous step’s output. 

<img width="470" alt="conditional-2" src="https://github.com/spotinst/help/assets/106514736/115af3d0-d712-4e28-b19e-df4ed37198af">

3. Select the comparison operation. 

<img width="470" alt="conditional-3" src="https://github.com/spotinst/help/assets/106514736/3ccfed5c-7b25-4cbc-8dec-54477679b5a0">

4. Set the comparison value that you want to compare it with. 

<img width="470" alt="conditional-4" src="https://github.com/spotinst/help/assets/106514736/6945b50d-5087-46b7-84db-e42b7b4c0058">

5. Set the destination node if the rule is met. 

<img width="461" alt="conditional-5" src="https://github.com/spotinst/help/assets/106514736/85439633-b67b-4aa9-ada5-0d2dcc8fd1ae">

6. In the workflow panel, click the Conditional node.  
7. In the Next step if no rule is satisfied drop-down menu, select **Fail[fail_1]**.  

<img width="461" alt="conditional-6" src="https://github.com/spotinst/help/assets/106514736/7207fc72-fe01-4cc1-8fa2-68969c51ce57">

8. After the execution of the workflow above, you can see the output of the node in the Executions page. 

![conditional-7](https://github.com/spotinst/help/assets/106514736/08525d2e-92a3-42e7-9e07-10b7ee4099c8)
