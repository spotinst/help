<meta name="robots" content="noindex">

Cloud provider AWS

Bottlerocket is an open-source, Linux-based operating system used for hosting containers.

Bottlerocket OS was specifically designed to address gaps left by the ECS and EKS-optimized AMIs, which are based on operating systems that run traditional software applications.

Using Bottlerocket, you can benefit from enhanced security, more consistency in environments, and efficiency in operations.

Ocean (AWS) supports the Bottlerocket OS. You can launch instances with Bottlerocket OS, manage Bottlerocket OS nodes, and run the Spot Controller on top of a Bottlerocket OS machine.

details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">To configure Bottlerocket OS in Ocean EKS clusters</summary>
 
   <div style="padding-left:16px">

1. You need The latest Bottlerocket AMI ID for your EKS cluster version and region. You can retrieve the AMI ID with the AWS CLI or the AWS Management Console. 

    * Run this command via AWS CLI (Replace 1.26 with your EKS cluster version and region code with your EKS region):

      `aws ssm get-parameter –name /aws/service/bottlerocket/aws-k8s-1.26/x86_64/latest/image_id –region region-code –query “Parameter.Value” –output text`

2. User Data script: Bottlerocket OS uses a TOML-formatted configuration file as User Data. This includes the configuration of the EKS cluster.  

   * Run this command to generate the configuration file with the relevant cluster config, including the API endpoint and base64-encoded certificate authority. Replace the region code with your EKS region and cluster name with your EKS cluster name. The user-data.toml file will contain the User Data script.
    
     `eksctl get cluster –region region-code –name cluster-name -o json \ | jq –raw-output ‘.[] | “[settings.kubernetes]\napi-server = \”” + .Endpoint + “\”\ncluster-certificate =\”” + .CertificateAuthority.Data + “\”\ncluster-name = \”cluster-name\””‘ > user-data.toml`

3. On your required virtual node groups:

    1. Insert Bottlerocket AMI ID.
    2. Copy the user-data.toml file content and paste it to the userData field in the Spot API.
  
   <br> 

    <img width="856" src="https://github.com/user-attachments/assets/1a485578-e36c-4fdf-8d92-c75119c499e3" />


   </div>
</details>



To troubleshoot nodes not joining after upgrade
 
If you configured Bottlerocket AMI correctly but nodes are still not joining the cluster, you might need to update the aws-auth ConfigMap:








