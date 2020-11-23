/**
 * Deprecated and obsolete routing rules.
 *
 * All routes below exist for backward compatibility purposes only.
 */
export const aliases = (() => {
  const map = {
    "/account-user-management/user-management/access-policies-2":
      "/administration/access-policies/",

    "/account-user-management/user-management/sso-access-control/organization-level-sso":
      "/administration/sso-access-control/organization-level-sso",

    "/authentication": "/administration/api/create-api-token",

    "/cloud-analyzer/connect-your-aws-account-2":
      "/cloud-analyzer/getting-started/connect-your-aws-master-payer-account-existing-customer",

    "/container-management/amazon-ecs": "/elastigroup/features/amazon-ecs/",

    "/container-management/amazon-ecs/tutorials/import-fargate-services-ecs-elastigroup":
      "/elastigroup/tutorials/amazon-ecs/import-fargate-services-to-ecs-elastigroup",

    "/container-management/docker-swarm":
      "/elastigroup/tools-integrations/docker-swarm/",

    "/container-management/kubernetes": "/ocean/getting-started/",

    "/container-management/kubernetes-2/eks":
      "/ocean/getting-started/eks/join-an-existing-cluster",

    "/container-management/kubernetes/gke": "/ocean/getting-started/gke",

    "/container-management/kubernetes/kops/1_14":
      "/ocean/tools-and-integrations/kops/",

    "/container-management/kubernetes/kubernetes-concepts/spotinst-labels/":
      "/ocean/features/labels-and-taints",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/updating-kubernetes-controller":
      "/ocean/tutorials/spot-kubernetes-controller/update-controller",

    "/container-management/nomad/nomad-integration-with-elastigroup":
      "/elastigroup/tools-integrations/nomad/",

    "/container-management/openshift-2":
      "/ocean/tools-and-integrations/openshift/",

    "/container-management/rancher": "/elastigroup/tools-integrations/rancher/",

    "/eco/connect-your-aws-account":
      "/eco/getting-started/connect-your-aws-account",

    "/eco/eco-link-account": "/eco/getting-started/",

    "/elastigroup-for-aws/concepts/compute-concepts/shutdown-scripts":
      "/elastigroup/features/compute/shutdown-scripts",

    "/elastigroup-for-aws/concepts/compute-concepts/termination-policy":
      "/elastigroup/features/compute/termination-policy",

    "/elastigroup-for-aws/concepts/scaling-concepts/advanced-expressions":
      "/elastigroup/features/scaling/advanced-expressions",

    "/elastigroup-for-aws/concepts/scaling-concepts/target-scaling":
      "/elastigroup/features/scaling/target-scaling",

    "/elastigroup-for-aws/concepts/stateful-concepts":
      "/elastigroup/features/stateful-instance/",

    "/elastigroup-for-aws/services-integrations/aws-batch":
      "/elastigroup/tools-integrations/aws-batch",

    "/elastigroup-for-aws/services-integrations/awss-load-balancers-elb-and-alb":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/elastigroup-for-aws/services-integrations/codedeploy":
      "/elastigroup/tools-integrations/codedeploy/",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk":
      "/elastigroup/tools-integrations/elastic-beanstalk/",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/in-asg":
      "/elastigroup/tools-integrations/elastic-beanstalk/in-asg",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce":
      "/elastigroup/tools-integrations/elastic-mapreduce/",

    "/elastigroup-for-aws/services-integrations/kafka":
      "/elastigroup/tools-integrations/kafka",

    "/elastigroup-for-aws/services-integrations/mesosphere":
      "/elastigroup/tools-integrations/mesosphere",

    "/elastigroup-for-aws/services-integrations/opsworks":
      "/elastigroup/tools-integrations/opsworks/",

    "/elastigroup-for-aws/services-integrations/rightscale":
      "/elastigroup/tools-integrations/rightscale",

    "/elastigroup-for-aws/services-integrations/route53":
      "/elastigroup/tools-integrations/route53",

    "/elastigroup-for-aws/tutorials/stateful-tutorials/create-a-stateful-elastigroup-from-scratch":
      "/elastigroup/tutorials/elastigroup-tasks/create-a-stateful-elastigroup-from-scratch",

    "/elastigroup-for-azure/create-a-new-elastigroup-in-azure":
      "/elastigroup/getting-started/create-an-elastigroup-for-azure",

    "/elastigroup-for-azure/hpc":
      "/elastigroup/tools-integrations/grid-engine-azure/",

    "/elastigroup-for-azure/shutdown-script-in-elastigroup":
      "/elastigroup/features/azure/shutdown-script-in-elastigroup-for-azure",

    "/elastigroup-for-google-cloud/concepts/compute-concepts/shutdown-scripts":
      "/elastigroup/features/gcp/shutdown-scripts",

    "/elastigroup-for-google-cloud/create-an-elastigroup-from-scratch":
      "/elastigroup/getting-started/create-an-elastigroup-for-gcp",

    "/getting-started-create-an-elastigroup-cluster-from-an-existing-asg-auto-scaling-group":
      "/elastigroup/tutorials/elastigroup-tasks/join-an-existing-asg",

    "/getting-started-create-an-elastigroup-cluster-from-an-existing-elb":
      "elastigroup/tutorials/elastigroup-tasks/join-an-existing-elb",

    "/getting-started-with-elastigroup": "/elastigroup/getting-started/",

    "/integration-docs/elastic-beanstalk/introduction":
      "/elastigroup/tools-integrations/elastic-beanstalk/",

    "/integration-docs/gitlab": "/tools-and-provisioning/ci-cd/gitlab",

    "/integration-docs/kubernetes": "/ocean/getting-started/",

    "/integration-docs/kubernetes-2": "/ocean/getting-started/",

    "/integration-docs/kubernetes/autoscaler":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/kubernetes-cluster-autoscaling",

    "/integration-docs/kubernetes/eks": "/ocean/getting-started/eks/",

    "/integration-docs/kubernetes/gke": "/ocean/getting-started/gke",

    "/integration-docs/kubernetes/installing-kubernetes-controller":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/integration-docs/kubernetes/introduction": "/ocean/getting-started/",

    "/integration-docs/kubernetes/kops/add-prerequisites":
      "/ocean/tutorials/spot-kubernetes-controller/controller-permissions",

    "/integration-docs/kubernetes/updating-kubernetes-controller":
      "/ocean/tutorials/spot-kubernetes-controller/update-controller",

    "/managed-instances/concepts/introduction":
      "managed-instance/getting-started/",

    "/ocean-aws/kubernetes/concepts/ocean-cloud/introduction":
      "/ocean/overview-kubernetes",

    "/ocean/kubernetes/concepts/ocean-cloud/introduction":
      "/ocean/overview-kubernetes",

    "/ocean/tutorials/ocean-for-aws/create-eks":
      "/ocean/getting-started/eks/create-a-new-cluster",

    "/ocean/tutorials/ocean-for-ecs": "/ocean/overview-ecs",

    "/ocean/tutorials/ocean-for-ecs/create-an-ocean-cloud-cluster":
      "/ocean/getting-started/ecs",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/provisioning-ci-cd-sdk/ci-cd/chef": "/tools-and-provisioning/ci-cd/chef",

    "/provisioning-ci-cd-sdk/ci-cd/jenkins":
      "/tools-and-provisioning/ci-cd/jenkins",

    "/provisioning-ci-cd-sdk/provisioning-tools": "/tools-and-provisioning/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation":
      "/tools-and-provisioning/cloudformation/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/cfn-helper":
      "/tools-and-provisioning/cloudformation/tools/cfn-helper-scripts",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform":
      "/tools-and-provisioning/terraform",

    "/spotinst-policy": "/administration/api/spot-policy-in-aws",

    "/elastigroup-for-aws/tutorials/publish-elastigroup-metrics":
      "/elastigroup/tutorials/elastigroup-tasks/publish-metrics-to-cloudwatch",
  };

  for (let [key, value] of Object.entries(map)) {
    if (key.endsWith("/")) {
      map[key.slice(0, -1)] = value; // remove trailing slash
    } else {
      map[(key += "/")] = value; // add trailing slash
    }
  }

  return map;
})();
