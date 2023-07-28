# Connect Jupyter Notebooks

Ocean Spark’s integration with Jupyter Notebooks enables you to run Jupyter kernels with Spark support on an Ocean Spark cluster. You can connect your notebooks from a Jupyter or Jupyterlab server running locally or from a hosted JupyterHub.

Assumption: You already know how to [create and manage Config templates](ocean-spark/configure-spark-apps/?id=configuration-templates) for Ocean Spark.

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-01.png" />

## Connect a Local Jupyter Server

The Jupyter notebook server has an option to specify a gateway service in charge of running kernels on its behalf. Ocean Spark can fill this role and enables you to run Jupyter Spark kernels on the platform.

Install the Jupyter notebook Python package locally. Be sure to use the latest version (or at least 6.0.0) with:

```
pip install notebook --upgrade
```

Launch a local Jupyter notebook server configured to interact with an Ocean Spark cluster:

```
jupyter notebook \
    --GatewayClient.url=https://api.spotinst.io/ocean/spark/cluster/<your ocean spark cluster id>/notebook/ \
    --GatewayClient.auth_token=<spot token> \
    --GatewayClient.request_timeout=600

# With Notebook v7+, add this option : 
    --GatewayWebSocketConnection.kernel_ws_protocol=""
```

- The GatewayClient.url points to an Ocean Spark cluster, with an Ocean Spark cluster ID of the format *osc-xxxxxxxx* that you can find on the [Clusters](https://console.spotinst.com/ocean/spark/clusters) list in the Spot console.
- The GatewayClient.auth_token is a [Spot API token](administration/api/create-api-token).
- The GatewayClient.request_timeout parameter specifies the maximum amount of time Jupyter will wait until the Spark driver starts. If you have capacity available in your cluster, the waiting time should be very short. If there isn't capacity, the Kubernetes cluster will get a new node from the cloud provider, which usually takes a couple of minutes. *You should set the request_timeout to 10 minutes to give you a security margin.* Omitting this parameter prevents you from starting a notebook.
- The GatewayWebSocketConnection.kernel_ws_protocol specifies we want to use the legacy websocket subprotocol for compatibility reason.

> **Tip**: If you run into issues starting the Jupyter notebook server, ensure that your Ocean for Apache Spark cluster is marked as available in the Spot console.

Ocean Spark is also compatible with JupyterLab. Install with:

```
pip install jupyterlab --upgrade
```

and run with:

```
jupyter lab \
    --GatewayClient.url=https://api.spotinst.io/ocean/spark/cluster/<your ocean spark cluster id>/notebook/ \
    --GatewayClient.request_timeout=600 \
    --GatewayClient.auth_token=<spot token>

# With JupyterLab v4+, add this option : 
    --GatewayWebSocketConnection.kernel_ws_protocol=""
```

## Define Jupyter kernels with configuration templates

Jupyter uses [kernels](https://jupyter.readthedocs.io/en/latest/glossary.html#term-kernel) to provide support for different languages and to configure notebook behavior. When a Jupyter server is connected to Ocean Spark, any Configuration template can be used as a kernel.

You can use the Spot console or the API to create a Configuration template. Here’s a configuration template example to help you get started:

```json
{
    "type": "Python",
    "sparkVersion": "3.2.1",
    "sparkConf": {
        "spark.dynamicAllocation.enabled": "true",
        "spark.dynamicAllocation.minExecutors": "0",
        "spark.dynamicAllocation.maxExecutors": "10",
        "spark.dynamicAllocation.initialExecutors": "1"
    }      
 }
```

After creating it in the Spot console:

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-02.png" width="594" height="429" />

The Configuration Template “notebook-template” appears in the list of kernels in the Jupyter dashboard:

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-03.png" width="344" height="298" />

## Scala Kernels

Ocean Spark also supports Jupyter Scala kernels. To open up a Scala kernel, all you need is to change the `type` field
in your configuration template. Here's an example configuration for a Scala kernel:

```json
{
    "type": "Scala",
    "sparkVersion": "3.2.1",
    "sparkConf": {
        "spark.dynamicAllocation.enabled": "true",
        "spark.dynamicAllocation.minExecutors": "0",
        "spark.dynamicAllocation.maxExecutors": "10",
        "spark.dynamicAllocation.initialExecutors": "1"
    }      
 }
```

**Warning**: Adding external JAR dependencies to Scala Notebooks
The `deps.jars` field in the application configuration does not work with Scala Notebooks and **should not be set**. The JARs specified in this field are not available on the driver Java classpath.

Instead, you can add external JARs to the Spark context from the notebook with these magic commands (once the Spark session is up):

- Add a JAR with URL: `%AddJar <URL>`
  ```
  %AddJar https://repo1.maven.org/maven2/org/postgresql/postgresql/42.2.20/postgresql-42.2.20.jar
  ```
- Add a dependency from maven repo: `%AddDeps <group-id> <artifact-id> <version>`
  ```
  %AddDeps org.postgresql postgresql 42.2.20
  ```
  If the dependency has transitive dependencies, you can add the `--transitive` flag to add those dependencies.

More documentation for these magic commands is available in the [Toree documentation](https://toree.incubator.apache.org/docs/current/user/faq/).

## Use a notebook

When you open a notebook, you need to wait for the kernel (i.e., the Spark driver) to be ready. As long as the kernel is marked as "busy" in the top right corner of the page, it means it has not started yet. This can take a few minutes. You can track the progress by looking at your [Spark application page](ocean-spark/product-tour/view-application-details) in the Spot console.

Here are the objects you can use to interact with Spark:
- The Spark context in variable sc
- The Spark SQL context in variable sqlContext

If those objects are not ready yet, you should see something like this upon invocation:

```
<__main__.WaitingForSparkSessionToBeInitialized at 0x7f8c15f4f240>
```

After a few seconds, they should be ready and you can use them to run Spark commands:

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-04.png" width="354" height="158" />

You can install your own libraries by running:

```
!pip3 install <some-library>
```

> **Tip**: Installing the libraries this way makes them available only for the driver. If the libraries need to be available for both driver and executors, install directly in the Docker image.

If you are new to Jupyter notebooks, you can use this [tutorial](https://www.dataquest.io/blog/jupyter-notebook-tutorial/) as a starting point.

## Close a Notebook

To close a notebook application, you should not use the "Kill" action from the Spot console, because Jupyter interprets this as a kernel failure and it restarts your kernel, causing a new notebook application to appear.

Close your notebooks from Jupyter (File > Close & Halt). This terminates the Spark app in the Ocean Spark cluster.

### Important Note

In some cases, a notebook may be "leaked", for example, if the Jupyter server (running on your laptop) quits abruptly or loses internet connection. This may leave a notebook application running on Ocean Spark without being linked to a Jupyter server. In this scenario, use the Kill action to terminate it. If no action is taken, the inactive kernel will be culled in 60 minutes.

## Inject environment variables

If you need to transfer information from your local environment to the notebook kernel in a dynamic way, you can use environment variables.

The environment variables are only injected into the notebook kernel if they are prefixed with KERNEL_VAR_. In the kernel, the environment variables are stripped of their prefix, for instance, if you run the following command and open a notebook:

```
KERNEL_VAR_FOO=bar jupyter notebook \
    --GatewayClient.url=https://api.spotinst.io/ocean/spark/cluster/<your ocean spark cluster id>/notebook/ \
    --GatewayClient.auth_token=<spot token> \
    --GatewayClient.request_timeout=600
```

The env variable FOO=bar is available in the notebook:

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-05.png" width="257" height="106" />

## Notebooks are regular Spark applications

Ocean for Spark essentially makes no distinction between notebooks and Spark applications launched by API requests. All options and features of Spark applications are available to notebooks.

Notebooks appear in the [Applications](ocean-spark/product-tour/monitor-applications) list, so you can see their logs and configurations, access the Spark UI, and more:

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-06.png" />

You can use the Type dropdown, as shown above, to filter on notebooks.
Additionally, any configuration option for Spark applications can be applied to notebooks via the Config template mechanism.

## Launch Jupyter Notebook with VS Code IDE

Ocean for Apache Spark (OfAS) provides a continuously optimized and autoscaled infrastructure and has featured support for integration with Jupyter notebooks. You can have this interactive notebook within your familiar IDE, such as VS Code, to benefit from other IDE built-in features including Git integration.  

This procedure describes how to use VS Code to run Jupyter notebooks, while the code runs on an Ocean for Apache Spark cluster.

### Step 1: Install VS Code Editor

Click the following link to find information on how to install VS Code locally: https://code.visualstudio.com/download.   

Verify that you have the latest version.  

If this is already installed, proceed to the next step.  

### Step 2: Install OfAS Jupyter Extension

The OfAS extension to the VS Code IDE enables you to interactively launch your work as an OfAS Spark application, while writing the Notebook’s code, without needing to switch to a different tool.

If you already have the VS Code editor installed, connect a notebook to your cluster as instructed below.

1. Click [Ocean for Apache Spark Jupyter extension](https://marketplace.visualstudio.com/items?itemName=spot-by-netapp.spot-jupyter-extension).  

2. Click Install. When the VS Code editor is installed, the VS Code window opens.

 <img src="/ocean-spark/_media/jupyter-vscode-ide-1.png" />

3. Click Install.

### Step 3: Install Microsoft Jupyter Extension

Repeat the steps from Step 2 in the following link to install the Microsoft Jupyter extension: https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter .

#### Connect Notebook to your OfAS Cluster  

1. Create or open a Jupyter notebook file.
2. In the VS Code window, click "Select Kernel" in the top-right corner.

 <img src="/ocean-spark/_media/jupyter-vscode-ide-2.png" />

3. Select Spot Ocean for Apache Spark item in the list.
4. Enter your account ID, token and select the cluster you want to use from your account that appears in the dropdown menu.
5. Select the config-template you want to use. (Config-templates can take few seconds to appear in the list)
6. Run the code in your notebook. The first execution can take approximately 1-5 minutes as a Spark application needs to be started in your cluster.  

> **Tip**: Closing your notebook may not result in the termination of the notebook application. You may have to do so from the Spot console. You can also shutdown kernels without leaving VSCode in the [Jupyter PowerToys](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-powertoys) extension.

#### Troubleshooting

* If Spot Ocean for Apache Spark in the Jupyter Connection options doesn’t appear, ensure that the VSCode and Jupyter extensions are updated to their latest version. 

* If your cluster doesn't appear in the list, check if it appears as `AVAILABLE` in the Spot console

* If config-templates in the kernel picker doesn’t appear, follow these steps :

  1. Close your notebook files.
  2. Open the Command Palette (Cmd+Shift+P) and select `Python: Clear Cache and Reload Window`.
  3. Open the file again and connect to cluster again.
  4. Your config-templates should appear in the kernel picker.

## Connecting to JupyterHub

If you prefer to run your Jupyter Notebooks in a hosted environment that can be shared across teams and developers, JupyterHub is an excellent solution. JupyterHub will give you the same developer experience that you are familiar with using local notebooks, but with added features and functionality for managing authentication, user access, and multiple configuration environments and templates.

To help you get started, we've built a simple Docker image that can get you running notebooks in minutes. Follow these steps to deploy JupyterHub on your local machine:
1. Pull this repo - https://github.com/spotinst/ocean-spark-examples/tree/master/jupyterhub-in-docker
2. Add your Ocean Spark cluster-id to the `jupyterhub_config.py`
3. Run the command `make run`
4. Navigate to `localhost:8000` and input your Ocean Spark API key when prompted.
5. Select a kernel (i.e., an Ocean Spark configuration template), and begin executing Spark code.

This template is a great starting place, but feel free to adapt and alter the logic to meet your team's configuration requirements.

## What's Next?

Learn how to [run apps from Airflow](ocean-spark/tools-integrations/run-apps-from-airflow).
