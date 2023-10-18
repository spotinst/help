# JSONPath 

Use this node to perform JSONpath expression on your JSON objects. 

JSONPath expressions always refer to a JSON structure in the same way as XPath expressions are used in combination with an XML document. The "root member object" in JSONPath is always referred to as $ regardless of it being an object or array. 

JSONPath expression can be used to traverse a deeply nested JSON input and filter out the interested values as output, which can be used for further actions. It can also be used to get output in a sanitized form. 

Insert a JSONPath node in the workflow editor page, provide the required inputs for the node. Enter the JSON path expression which will be evaluated on the given JSON object and this node will extract the output for you. 

#### Input 

|       Parameter Name  |           Description      |      Required  |   |
|-----------------------|:--------------------------:|:--------------:|---|
|      json_path        |     Json path expression.  |     True       |   |
|      json_object      |     Json object input.     |     True       |   |

#### Output 

|       Parameter Name   |       Type   |                       Description                  |   |
|------------------------|:------------:|:--------------------------------------------------:|---|
|      output            |     Object   |     Output of JSON path as object.                 |   |
|      output_str        |     String   |     Output of JSON path if it is in String form.   |   |
|      output_int        |     Integer  |     Output of JSON path if it is in Integer form.  |   |
|      output_bool       |     Boolean  |     Output of JSON path if it is in Bool form .    |   |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)              |   |

The output for the JSONPath action node is a JSON dict called "output", it can give you output with other variables like output_str, output_int as well if output can be typecast to other data types as well.  

### JSONPath Action Example 

1. From the workflow builder in the left panel, drag and drop JSONPath node in the workflow builder. You can provide the JSON object as direct input to the node, or you can select input from a previous node as well. 

![jsonpath-1](https://github.com/spotinst/help/assets/106514736/b5c54824-f0ab-423f-96a2-0976f7333249)

2. Enter the [JSONPath expression](https://goessner.net/articles/JsonPath/index.html#e2) in the input field. The screenshot below displays the expected output. 

![jsonpath-2](https://github.com/spotinst/help/assets/106514736/cb58eefe-a46a-4401-be85-3a1e4679ea30)

3. After the execution of the above workflow, you can view the output of the node in the Executions page in the Spot Connect menu. This page displays the output containing the names of all the authors. 

![jsonpath-3](https://github.com/spotinst/help/assets/106514736/917be504-d829-4d8f-bc87-db416e235a28)
