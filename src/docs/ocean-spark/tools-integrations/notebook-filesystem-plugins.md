# Jupyter Notebook Filesystem Plugins

With the current setup of launching a local notebook connecting to Ofas through the Jupyter Enterprise Gateway, users can launch notebooks stored on their machines. These notebooks can be shared via cloud storage services like Google Drive, Microsoft OneDrive and Dropbox installed on the desktop machine. Also the user has the option of using git for notebook sharing. Another advantage of this is no notebook data or results are stored on Ofas side, freeing us from the responsibility of keep the data protected.

This approach is also relevant in the case of Spark Connect. Were the notebook using Ofas can be run from anywhere, such as from Google Colab.

Hosted notebooks offer a different scenario where everything is run within the cloud. The users no longer have direct access to their local notebook files and credentials required for remote storage services must be sent over the wire.

Here we introduce few Jupyter plugins that enable access to remote file systems

## jupyter-filesystem-access (https://github.com/jupyterlab-contrib/jupyterlab-filesystem-access)

Born out of the JupyterLite project, the still expoerimenal jupyter-filesystem-access plugin taps into the recently added feature added to the Chrome and Edge browser enabling access to the local filesystem. With the plugin enabled, the user can select a directory on their machine. The contents will be accessible in Jupyter lab as a file tree on the left. This will enable users to launch their existing notebooks stored on their macines.

## jupyterlab-git (https://github.com/jupyterlab/jupyterlab-git)

The git extension for jupyter is an offical extension provided be the jupyter team. When enabled, a Git menu appears in the top menubar. The plugin allows the user to check out their notebook projects from git repositories with the relevant credentials. The python implementation of git is user, so no need for git to be installed on the image.

## jupyterlab-github (https://github.com/jupyterlab/jupyterlab-github)

Similar to the jupyter-git extension but more specific to github the github plugin offer mount like experience to accessing notebooks in github as opposed to the checkout, push and pull with the git plugin.

## jupyter-fs (https://github.com/jpmorganchase/jupyter-fs)

The jupyter-fs backend is build on top of PyFilesystem, while the frontend is built on top of the JupyterLab FileTree. The plugin lets the user set up and use as many filebrowsers as they like, connected to whatever local and/or remote filesystem-like resources they want, such as s3://, smb:// etc.

The git related plugins are official and are part of our notebooks images. The others can be manually installed through the Extension Manager.
