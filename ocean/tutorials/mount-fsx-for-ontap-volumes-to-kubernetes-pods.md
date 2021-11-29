# Mount FSx for ONTAP Volumes to Kubernetes Pods

FSx for ONTAP, a service provided by AWS, enables you to easily deploy a managed NetApp ONTAP file system. You can easily utilize persistent storage from the FSx for ONTAP file system when you use NetApp’s Ocean and Astra Trident.

This page describes the necessary steps to mount FSx for ONTAP volumes to Kubernetes Pods.

<img src="/ocean/_media/tutorials-mount-fsx-01.png" />

## Create an FSx ONTAP File System and StorageVirtualMachine (SVM)

The steps below describe how to create an FSx ONTAP file system using the AWS interface.

> **Tip**: You can also create your FSx for ONTAP file system with [NetApp Cloud Manager](https://cloud.netapp.com/blog/aws-fsxo-blg-how-to-set-up-amazon-fsx-for-netapp-ontap-with-cloud-manager).

1. Go to the [AWS FSx dashboard](https://us-east-2.console.aws.amazon.com/fsx/home?) and select Create file system.
2. Select Amazon FSx for Netapp ONTAP as the File system type.

<img src="/ocean/_media/tutorials-mount-fsx-02.png" width="227" height="193" />

3. Select the Standard creation method.

<img src="/ocean/_media/tutorials-mount-fsx-03.png" width="562" height="198" />

4. In the File system details page, specify a name for the file system and define its capacity and performance.

<img src="/ocean/_media/tutorials-mount-fsx-04.png" width="562" height="338" />

5. In the Network & Security section, choose the VPC on which your Kubernetes cluster connected to Ocean is running.
6. Specify the subnets on which you would like the file system to be created.
7. In the VPC route tables section, select the route tables that the subnets specified above are associated with.

<img src="/ocean/_media/tutorials-mount-fsx-05.png" width="468" height="350" />

8. In the Security & encryption section, specify a password in the file system administrative password (the password is set for a user names “fsxadmin” on the file system).

<img src="/ocean/_media/tutorials-mount-fsx-06.png" width="468" height="301" />

9. As part of the Filesystem creation process, a Storage Virtual Machine (SVM) will also be created. SVMs allow you to segregate your Filesystem to multiple logical Filesystems. Specify the SVM name.

<img src="/ocean/_media/tutorials-mount-fsx-07.png" width="468" height="199" />

10. These are the configurations needed for our setup, you are welcome to specify or modify additional configurations.
11. Click next, you’ll see a summary of the File system details.

<img src="/ocean/_media/tutorials-mount-fsx-08.png" width="468" height="494" />

12. Click Create file system, the creation process will take approximately 20 minutes.

Once the file system reaches an available state, the FSx for ONTAP file system is ready for use.

<img src="/ocean/_media/tutorials-mount-fsx-09.png" width="468" height="148" />

## Use Volumes from the File System with Astra Trident

Astra Trident is a fully supported open source project maintained by NetApp. It has been designed from the ground up to help you meet your containerized applications’ persistence demands using industry-standard interfaces, such as the Container Storage Interface (CSI).

Astra Trident deploys in Kubernetes clusters as pods and provides dynamic storage orchestration services for your Kubernetes workloads. It enables your containerized applications to quickly and easily consume persistent storage from NetApp’s broad portfolio

<img src="/ocean/_media/tutorials-mount-fsx-10.png" />

## Install Astra Trident

Deploy Astra Trident using the procedures in [Deploying Trident Operator](https://netapp-trident.readthedocs.io/en/stable-v21.04/kubernetes/deploying/operator-deploy.html#deploy-trident-operator-manually).

## Configure the FSx Ontap Filesystem as a backend for Astra Trident

After installing Astra Trident, you will need to create a [backend configuration](https://netapp-trident.readthedocs.io/en/stable-v21.07/kubernetes/operations/tasks/managing-backends/backend-operations.html#handling-backend-operations) for it.

1. Run the following to create the backend-ontap-nas.yaml file.

```yaml
cat << EOF > backend-ontap-nas.yaml
apiVersion: trident.netapp.io/v1
kind: TridentBackendConfig
metadata:
  name: backend-tbc-fsx-ontap-nas
spec:
  version: 1
  backendName: fsx-ontap
  storageDriverName: ontap-nas
  managementLIF: management.fs-0599b15273c122dd8.fsx.us-east-2.amazonaws.com
  dataLIF: svm-0b5d04107805d4cf5.fs-0599b15273c122dd8.fsx.us-east-2.amazonaws.com
  svm: svm01
  credentials:
    name: backend-tbc-fsx-ontap-nas-secret
---
apiVersion: v1
kind: Secret
metadata:
  name: backend-tbc-fsx-ontap-nas-secret
type: Opaque
stringData:
  username: fsxadmin
  password: password
EOF
```

2. Modify the values as follows:
   - backendName: According to your preference.
   - managementLIF: Go to your File system view on the Amazon FSx dashboard, under the Network and Security tab find the Endpoints section and fetch the Management endpoint.

<img src="/ocean/_media/tutorials-mount-fsx-11.png" />

- dataLIF: Go to the StorageVirutalMachine and search for the Endpoints section.

<img src="/ocean/_media/tutorials-mount-fsx-12.png" />

- SVM: the StorageVirtualMachine name.
- Password: The password you specified earlier during the creation of the file system.

3. Create the TridentBackendConfig resource using kubectl.

```
trident-installer k -n trident create -f backend-ontap-nas.yaml
tridentbackendconfig.trident.netapp.io/backend-tbc-fsx-ontap-nas created
secret/backend-tbc-fsx-ontap-nas-secret created
```

Trident is now connected to the file system through the backend configuration created.

## Create a StorageClass

1. Your next step is to create a Kubernetes StorageClass, use the following command to create a storage-class-csi.yaml file.

```yaml
cat << EOF > storage-class-csi.yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: basic-csi
provisioner: csi.trident.netapp.io
parameters:
  backendType: "ontap-nas"
  fsType: "__FILESYSTEM_TYPE__"
allowVolumeExpansion: True
EOF
```

2. Apply the StorageClass.

```
kubectl apply -f storage-class-csi.yaml
```

3. You should now be able to see the configured StorageClass with the following command

```
kubectl get storageclasses
NAME            PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
basic-csi       csi.trident.netapp.io   Delete          Immediate              false                  16h
```

## Create Volumes

You are now ready to use storage from the file system.

1. Create a PVC.

```yaml
cat << EOF > pvc-basic-csi.yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: basic
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
  storageClassName: basic-csi
EOF
```

2. Apply the PVC.

```
kubectl apply -f pvc-basic-csi.yaml
```

3. Run the following command to see the PVC storage.

```
kubectl get pvc
NAME        STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
basic   Bound    pvc-9d83906d-d3f0-4ac0-bf91-72a69720c1dc   1Gi        RWO            basic-csi      15h
```

## Mount a Volume

Now that a volume is ready, deploy a Pod that will use it.

1. Run the following command to create a task-pv-pod.yaml file and deploy it on the cluster.

```yaml
cat << EOF > task-pv-pod.yaml
kind: Pod
apiVersion: v1
metadata:
  name: task-pv-pod
spec:
  volumes:
    - name: task-pv-storage
      persistentVolumeClaim:
       claimName: basic
  containers:
    - name: task-pv-container
      image: nginx
      ports:
        - containerPort: 80
          name: "http-server"
      volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: task-pv-storage
EOF
kubectl create -f task-pv-pod.yaml
```

2. View the pod to see that the volume was successfully attached.

```yaml
kubectl describe pod task-pv-pod
Name:         task-pv-pod
Namespace:    default
Priority:     0
Node:         ip-192-168-180-255.us-east-2.compute.internal/192.168.180.255
Start Time:   Tue, 20 Jul 2021 10:54:33 +0300
Labels:       <none>
Annotations:  kubernetes.io/psp: eks.privileged
Status:       Running
IP:           192.168.164.62
IPs:
  IP:  192.168.164.62
Containers:
  task-pv-container:
    Container ID:   docker://b232c80e6cf06a1667661d8c930cf9296cec47dcd22f4896eaa02b2da6bf4080
    Image:          nginx
    Image ID:       docker-pullable://nginx@sha256:353c20f74d9b6aee359f30e8e4f69c3d7eaea2f610681c4a95849a2fd7c497f9
    Port:           80/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Tue, 20 Jul 2021 10:54:38 +0300
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /usr/share/nginx/html from task-pv-storage (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-jg9wc (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  task-pv-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  basic
    ReadOnly:   false
  default-token-jg9wc:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-jg9wc
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason                  Age   From                     Message
  ----    ------                  ----  ----                     -------
  Normal  Scheduled               14s   default-scheduler        Successfully assigned default/task-pv-pod to ip-192-168-180-255.us-east-2.compute.internal
  Normal  SuccessfulAttachVolume  14s   attachdetach-controller  AttachVolume.Attach succeeded for volume "pvc-9d83906d-d3f0-4ac0-bf91-72a69720c1dc"
  Normal  Pulling                 9s    kubelet                  Pulling image "nginx"
  Normal  Pulled                  9s    kubelet                  Successfully pulled image "nginx" in 299.619184ms
  Normal  Created                 9s    kubelet                  Created container task-pv-container
  Normal  Started                 9s    kubelet                  Started container task-pv-container
```

3. You can run the following command on the pod to see that the volume is actually mounted and reachable.

```
kubectl exec -it task-pv-pod -- df -h /usr/share/nginx/html
Filesystem                                                     Size  Used Avail Use% Mounted on
1.1.178.130:/trident_pvc_9d83906d_d3f0_4ac0_bf91_72a69720c1dc  1.0G  256K  1.0G   1% /usr/share/nginx/html
```

## What’s Next?

Learn more about different ways you can manage Kubernetes clusters with [Ocean](ocean/).
