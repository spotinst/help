# String Transformers

This action node manipulates a string output from the previous node. 

The String Transformers action node manipulates the String Input that comes from Set Value Now or Select Value from a previous step by using a number of operations at a time. 

## String Transformer Workflow 

Insert a String Transformers node in the workflow editor page and provide the required inputs. 

Step 1: Provide the String Input either from Set Value Now or Select Value from a previous step which depends on the previous and its configuration. 

Step 2: Provide the operation you want to perform to transform the string input.  

An operation will have a separate set of requirements which will also have Set Value Now or Select Value from a previous step option.  

#### Input 

|       Parameter     |                                     Description                                 |      Required  |   |
|---------------------|:-------------------------------------------------------------------------------:|:--------------:|---|
|       String Input  |     String Input on which transformation will happen                            |     True       |   |
|      Operation      |     String transformation is based on operations like Split, Join Strings etc.  |     True       |   |

#### Operation Inputs 

|       Operation         |           Parameter      |                                         Description                                     |      Required  |   |
|-------------------------|:------------------------:|:---------------------------------------------------------------------------------------:|:--------------:|---|
|      From String        |     prefix               |     Provides input string prefix from which remaining string will be pulled off from.   |     True       |   |
|      Join Strings       |     second_input_string  |     String Input parameter will be joined with second_input_string.                     |     True       |   |
|                         |     separator            |     Will connect two strings. A separator can be added.                                 |     False      |   |
|      Regex Extract All  |     regex_pattern        |     Extract string using regex pattern.                                                 |     True       |   |
|      Replace All        |     replace_with         |     New string to be replaced with.                                                     |     True       |   |
|                         |     to_replace           |     replaceable string                                                                  |     True       |   |
|      Split              |     delimiter            |     Using a delimiter, you can split the string input.                                  |     True       |   |
|      Strip Chars        |     strip_chars          |     Any space or chars to be removed from the string.                                   |     True       |   |
|      To Lowercase       |     N/A                  |                                                                                         |                |   |
|      To Uppercase       |     N/A                  |                                                                                         |                |   |

#### Output

|       Parameter Name    |         Type    |      Required  |   |
|-------------------------|:---------------:|:--------------:|---|
|      string_output      |     String      |     True       |   |
|      stringlist_output  |     StringList  |     True       |   |
|      execution_status   |     String      |                |   |

#### Action Example 

1. From the workflow builder in the left panel, drag and drop a String Transformers node in the workflow panel. A sample configuration opens in the right input panel. 

<img width="660" alt="string-transformers-1" src="https://github.com/spotinst/help/assets/106514736/710a2b24-55fb-4382-af97-67ddbefa79a0">


2. After the execution of the workflow above, the output of the execution step details of string transformers are shown below.  

<img width="787" alt="string-transformers-2" src="https://github.com/spotinst/help/assets/106514736/9d893bc7-1434-44de-b09e-b195d616ca95">
