#  Import AKS Cluster with Availability Zone Zero

If your AKS cluster configuration has AZ=null (“Availability Zone Zero”), you can safely run your workloads (for any PVC or storage type) in Ocean by setting this option.

>**Note**: Select this option separately or with other Availability Zones.

To specify Availability Zone Zero for a workload:

1.  In the left main menu, click **Ocean** > **Cloud Clusters**.

2.  Select a cluster from the list of clusters.

3.  In the Virtual Node Groups (VNG) tab, select the specific Virtual Node Group where you want to define a zero-availability Zone.

4.  Edit the configuration.

      -   By Form: In the Availablity Zones area, click 0 (no infrastructure redundancy).

           ![az-equals-zero-under-vng](https://github.com/spotinst/help/assets/159915991/fdfb1e80-8e2c-4d17-909a-2af7e5777061)

      -   By JSON: "availabilityZones": [ "0", "1", "2", "3" ].
  
   
