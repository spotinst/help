# Jupyter Notebook Filesystem Plugins

With the current setup of launching a local notebook connecting to Ofas through the Jupyter Enterprise Gateway, you can launch notebooks stored on their machines. These notebooks can be shared via cloud storage services like Google Drive, Microsoft OneDrive and Dropbox installed on the desktop machine. You can also leverage Git for sharing notebooks, providing the added advantage of not storing any notebook data or results on OfAS' side. This relieves you from the responsibility of ensuring the data's protection.

This approach is also applicable to Spark Connect, allowing the notebook using Ofas to be executed from any location, including platforms like Google Colab.

Hosted notebooks offer a different scenario where everything is run within the cloud. You no longer have direct access to their local notebook files and credentials required for remote storage services must be sent over the wire.

Jupyter Notebook Filesystem Plugins provide few Jupyter plugins that enable access to remote file systems.

## jupyter-filesystem-access (https://github.com/jupyterlab-contrib/jupyterlab-filesystem-access)

Born out of the JupyterLite project, the still expoerimenal jupyter-filesystem-access plugin taps into the recently added feature added to the Chrome and Edge browser enabling access to the local filesystem. With the plugin enabled, the user can select a directory on their machine. The content will be accessible in Jupyter lab as a file tree on the left. This enables you to launch your existing notebooks stored on their macines.

## jupyterlab-git (https://github.com/jupyterlab/jupyterlab-git)

The Git extension for jupyter is an offical extension provided be the jupyter team. When enabled, a Git menu opens in the top menubar. The plugin allows you to check your notebook projects from Git repositories with the relevant credentials. The python implementation of Git is user, so there is no need for Git to be installed on the image.

## jupyterlab-github (https://github.com/jupyterlab/jupyterlab-github)

Similar to the jupyter-git extension, but more specific to Github, the Github plugin offers mount-like experience to accessing notebooks in Github, as opposed to the checkout, push and pull process with the Git plugin.

## jupyter-fs (https://github.com/jpmorganchase/jupyter-fs)

The jupyter-fs backend is build on top of PyFilesystem, while the frontend is built on top of the JupyterLab FileTree. The plugin lets you set up and use as many filebrowsers as they like, connected to whatever local and/or remote filesystem-like resources they want, such as s3://, smb:// etc.

The Git related plugins are official and are part of our notebooks images. The others can be manually installed through the Extension Manager.
