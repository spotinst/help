
#  Select VMs for an AKS Virtual Node Group


This topic describes selecting VM sizes in your cluster per Virtual Node Group (custom or template) according to your application needs. An advanced attributes filter lets you search for the optimal VMs for the task from any of the VM families available on the [Azure cloud](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/overview?tabs=breakdownseries%2Cgeneralsizelist%2Ccomputesizelist%2Cmemorysizelist%2Cstoragesizelist%2Cgpusizelist%2Cfpgasizelist%2Chpcsizelist). Once you have sized your VMs, Ocean can use your customization for its scaling processes.

To select the VMs for your Cluster:

1. In the left main menu, click **Ocean** > **Cloud Clusters**.

2. Select a cluster from the list of clusters.

3. Click the  **Virtual Node Groups** tab.

4. In the panel on the top left of the screen, fill in and select the settings for the Virtual Node Group, such as Availability Zones and the maximum Number of pods per node.

5. Scroll down to the VM Selection panel.

![vm-selection-panel](https://github.com/spotinst/help/assets/159915991/ea743bc6-0a06-4fa9-a958-7b4410bc7bd3)

The VM Selection panel provides these options:

* Automatic: Let Spot select your VM sizes according to the needs of your applications.

* Advanced VM Size Selection: Use attribute filters to select VMs with customized sizes from which Ocean can scale.

<ol style="list-style-type: lower-alpha;">
<li>Select an option.</li>
<li>If you selected the Automatic option, click Save to complete the procedure. Otherwise, if you selected Advanced VM Size Selection, continue./li>
<li>In the VM Selection list, view each VM type's currently selected size, vCPU, Memory (GiB), and GPU units. The Advanced VM Size Filtering controls to the right of the VM Selection list let you filter these attributes for the VMs:</li>
</ol>

 
