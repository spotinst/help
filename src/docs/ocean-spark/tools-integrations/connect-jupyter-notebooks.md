# Connect Jupyter Notebooks

Ocean Spark’s integration with Jupyter Notebooks enables you to run Jupyter kernels with Spark support on an Ocean Spark cluster. You can connect your notebooks from a Jupyter or Jupyterlab server running locally or from a hosted JupyterHub.

Assumption: You already know how to [create and manage Config templates](ocean-spark/configure-spark-apps/?id=configuration-templates) for Ocean Spark.

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-01.png" />

## Connect a local Jupyter server

The Jupyter notebook server has an option to specify a gateway service in charge of running kernels on its behalf. Ocean Spark can fill this role and enables you to run Jupyter Spark kernels on the platform.

Install the Jupyter notebook Python package locally. Be sure to use the latest version (or at least 6.0.0) with:

```
pip install notebook --upgrade
```

Here’s how to launch a local Jupyter notebook server configured to interact with an Ocean Spark cluster:

```
jupyter notebook \
    --GatewayClient.url=https://api.spotinst.io/ocean/spark/cluster/<your ocean spark cluster id>/notebook/ \
    --GatewayClient.auth_token=<spot token> \
    --GatewayClient.request_timeout=600
```

- The GatewayClient.url points to an Ocean Spark cluster, with an Ocean Spark cluster ID of the format *osc-xxxxxxxx* that you can find on the [Clusters](https://console.spotinst.com/ocean/spark/clusters) list in the Spot console.
- The GatewayClient.auth_token is a [Spot API token](administration/api/create-api-token).
- The GatewayClient.request_timeout parameter specifies the maximum amount of time Jupyter will wait until the Spark driver starts. If you have capacity available in your cluster, the wait time should be very short. If there isn't capacity, the Kubernetes cluster will automatically get a new node from the cloud provider, which usually takes a couple of minutes. *You should set the request_timeout to 10 minutes to give you a security margin.* Omitting this parameter will prevent you from starting a notebook.

> **Tip**: If you run into issues starting the Jupyter notebook server, ensure that your Ocean for Apache Spark cluster is marked as available in the Spot console.

Ocean Spark is also compatible with JupyterLab. Install with:

```
pip install jupyterlab --upgrade
```

and run with:

```
jupyter lab \
    --GatewayClient.url=https://api.spotinst.io/ocean/spark/cluster/<your ocean spark cluster id>/notebook/ \
    --GatewayClient.auth_token=<spot token> \
    --GatewayClient.request_timeout=600
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

## Close a notebook

To close a notebook application, you should not use the "Kill" action from the Spot console, because Jupyter interprets this as a kernel failure and will automatically restart your kernel, causing a new notebook application to appear.

You should close your notebooks from Jupyter (File > Close & Halt). This will terminate the Spark app in the Ocean Spark cluster.

### Important Note

In some cases, a notebook may be "leaked", for example, if the Jupyter server (running on your laptop) quits abruptly or loses internet connection. This may leave a notebook application running on Ocean Spark without being linked to a Jupyter server. In this scenario, use the Kill action to terminate it. If no action is taken, the inactive kernel will be culled in 60 minutes.

## Inject environment variables

If you need to pass some information from your local environment to the notebook kernel in a dynamic way, you can use environment variables.

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

Ocean Spark essentially makes no distinction between notebooks and Spark applications launched by API requests. All options and features of Spark applications are available to notebooks.

Notebooks appear in the [Applications](ocean-spark/product-tour/monitor-applications) list, so you can see their logs and configurations, access the Spark UI, and more:

<img src="/ocean-spark/_media/tools-connect-jupyter-notebooks-06.png" />

You can use the Type dropdown, as shown above, to filter on notebooks.
Additionally, any configuration option for Spark applications can be applied to notebooks via the Config template mechanism.

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
