/**
 * Deprecated and obsolete routing rules.
 *
 * All routes below exist for backward compatibility purposes only.
 */
export const aliases = (() => {
  const map = {
    "/account-user-management-user-management-scim-okta-scim/":
      "/administration/identity-providers/okta-saml-authentication",

    "/account-user-management/": "/administration/",

    "/account-user-management/customizing-email-notifications/":
      "/administration/users/configure-email-notifications",

    "/account-user-management/elastigroup-notifications-for-slack/":
      "/administration/users/configure-slack-notifications",

    "/account-user-management/gcp-policy/":
      "/administration/api/spot-policy-in-gcp",

    "/account-user-management/organization-management/":
      "/administration/organizations/",

    "/account-user-management/organization-management/auditing-events/":
      "/administration/organizations/audit-events",

    "/account-user-management/organization-management/configuring-payment-details/":
      "/administration/organizations/configure-payment-details",

    "/account-user-management/organization-management/organizations-and-accounts-2/":
      "/administration/organizations/",

    "/account-user-management/organization-management/switching-between-organizations/":
      "/administration/organizations/switch-organization",

    "/account-user-management/user-management/": "/administration/users/",

    "/account-user-management/user-management/access-policies-2":
      "/administration/access-policies/",

    "/account-user-management/user-management/access-policies-2/":
      "/administration/access-policies/",

    "/account-user-management/user-management/access-policies-actions/":
      "/administration/access-policies/access-policy-actions",

    "/account-user-management/user-management/access-policies/":
      "/administration/access-policies/",

    "/account-user-management/user-management/adding-users-2/":
      "/administration/users/add-users",

    "/account-user-management/user-management/identity-providers/":
      "/administration/identity-providers/",

    "/account-user-management/user-management/identity-providers/adfs-saml-authentication/":
      "/administration/identity-providers/adfs-saml-authentication",

    "/account-user-management/user-management/identity-providers/azure-active-directory-integration/":
      "/administration/identity-providers/azure-active-directory-integration",

    "/account-user-management/user-management/identity-providers/bitium-saml-authentication/":
      "/administration/identity-providers/bitium-saml-authentication",

    "/account-user-management/user-management/identity-providers/custom-saml-idp-configuration/":
      "/administration/identity-providers/custom-saml-idp-configuration",

    "/account-user-management/user-management/identity-providers/okta-saml-authentication/":
      "/administration/identity-providers/okta-saml-authentication",

    "/account-user-management/user-management/identity-providers/onelogin-saml-authentication/":
      "/administration/identity-providers/onelogin-saml-authentication",

    "/account-user-management/user-management/managing-access-policies/":
      "/administration/access-policies/manage-access-policies",

    "/account-user-management/user-management/programmatic-users-2/":
      "/administration/users/programmatic-users",

    "/account-user-management/user-management/resetting-your-password/":
      "/administration/users/set-password",

    "/account-user-management/user-management/sso-access-control/":
      "/administration/sso-access-control/",

    "/account-user-management/user-management/sso-access-control/account-level-sso/":
      "/administration/sso-access-control/account-level-sso",

    "/account-user-management/user-management/sso-access-control/defining-single-sign-on-sso/":
      "/administration/sso-access-control/",

    "/account-user-management/user-management/sso-access-control/organization-level-sso":
      "/administration/sso-access-control/organization-level-sso",

    "/account-user-management/user-management/sso-access-control/organization-level-sso/":
      "/administration/sso-access-control/organization-level-sso",

    "/account-user-management/user-management/user-roles-2/":
      "/administration/users/",

    "/authentication": "/administration/api/create-api-token",

    "/cloud-analyzer/connect-your-aws-account-2":
      "/cloud-analyzer/getting-started/connect-your-aws-master-payer-account-existing-customer",

    "/cloud-analyzer/connect-your-aws-account-2/":
      "/cloud-analyzer/getting-started/connect-your-aws-master-payer-account-existing-customer",

    "/cloud-analyzer/connect-your-aws-account/":
      "/cloud-analyzer/getting-started/connect-master-payer-account-first-registration",

    "/cloud-analyzer/cost-analysis/":
      "/cloud-analyzer/tutorials/analyze-your-costs",

    "/cloud-analyzer/msp-registration-2-2/": "/cloud-analyzer/getting-started/",

    "/cloud-analyzer/msp-registration-2/": "/cloud-analyzer/getting-started/",

    "/cloud-analyzer/msp-registration/": "/cloud-analyzer/getting-started/",

    "/cloud-analyzer/optimization/":
      "/cloud-analyzer/tutorials/use-optimization-dashboard/",

    "/cloud-analyzer/optimization/containers/":
      "/cloud-analyzer/tutorials/use-optimization-dashboard/containers",

    "/cloud-analyzer/optimization/elastic-applications/":
      "/cloud-analyzer/tutorials/use-optimization-dashboard/elastic-applications",

    "/cloud-analyzer/optimization/reservations/":
      "/cloud-analyzer/tutorials/use-optimization-dashboard/reservations",

    "/cloud-analyzer/policy-2/":
      "/cloud-analyzer/tutorials/cloud-analyzer-policy/create-cloud-analyzer-policy-with-cloudformation",

    "/cloud-analyzer/policy/":
      "/cloud-analyzer/tutorials/cloud-analyzer-policy/",

    "/cloud-analyzer/trends-and-notifications/":
      "/cloud-analyzer/tutorials/view-trends-notifications/",

    "/cloud-analyzer/trends-and-notifications/all-events/":
      "/cloud-analyzer/tutorials/view-trends-notifications/view-all-archive",

    "/cloud-analyzer/trends-and-notifications/event-definition/":
      "/cloud-analyzer/tutorials/view-trends-notifications/manage-event-definitions",

    "/cloud-analyzer/trends-and-notifications/event-details/":
      "/cloud-analyzer/tutorials/view-trends-notifications/view-event-details",

    "/connect-your-cloud-provider-account/": "/connect-your-cloud-provider/",

    "/container-management/": "/ocean/",

    "/container-management/amazon-ecs": "/elastigroup/features/amazon-ecs/",

    "/container-management/amazon-ecs/": "/elastigroup/features/amazon-ecs/",

    "/container-management/amazon-ecs/autoscaling/":
      "/elastigroup/features/amazon-ecs/automatic-autoscaler-for-ecs",

    "/container-management/amazon-ecs/elastigroup-for-ecs-concepts/":
      "/elastigroup/features/amazon-ecs/",

    "/container-management/amazon-ecs/elastigroup-for-ecs-concepts/autoscaler-headroom/":
      "/elastigroup/features/amazon-ecs/autoscaler-headroom",

    "/container-management/amazon-ecs/elastigroup-for-ecs-concepts/autoscaler-tetris-scaling/":
      "/elastigroup/features/amazon-ecs/autoscaler-tetris-scaling",

    "/container-management/amazon-ecs/elastigroup-for-ecs-concepts/autoscaling/":
      "/elastigroup/features/amazon-ecs/automatic-autoscaler-for-ecs",

    "/container-management/amazon-ecs/elastigroup-for-ecs/":
      "/elastigroup/features/amazon-ecs/elastigroup-for-ecs",

    "/container-management/amazon-ecs/getting-started":
      "/elastigroup/tutorials/amazon-ecs/get-started-with-ecs-on-elastigroup",

    "/container-management/amazon-ecs/getting-started/":
      "/elastigroup/tutorials/amazon-ecs/get-started-with-ecs-on-elastigroup",

    "/container-management/amazon-ecs/tutorials/":
      "/elastigroup/tutorials/amazon-ecs/",

    "/container-management/amazon-ecs/tutorials/automatic-autoscaler-for-ecs/":
      "/elastigroup/tutorials/amazon-ecs/enable-autoscaling-for-ecs",

    "/container-management/amazon-ecs/tutorials/configure-attributes-for-task-placement-constraints/":
      "/elastigroup/tutorials/amazon-ecs/configure-attributes-for-task-placement-constraints",

    "/container-management/amazon-ecs/tutorials/create-cluster-roll/":
      "/elastigroup/tutorials/amazon-ecs/create-cluster-roll",

    "/container-management/amazon-ecs/tutorials/custom-autoscaler-for-ecs/":
      "/elastigroup/features/amazon-ecs/custom-autoscaler-for-ecs",

    "/container-management/amazon-ecs/tutorials/elastigroup-for-ecs-health-checks-and-autohealing/":
      "/elastigroup/tutorials/amazon-ecs/configure-health-checks-and-autohealing",

    "/container-management/amazon-ecs/tutorials/import-fargate-services-ecs-elastigroup":
      "/elastigroup/tutorials/amazon-ecs/import-fargate-services-to-ecs-elastigroup",

    "/container-management/amazon-ecs/tutorials/import-fargate-services-ecs-elastigroup/":
      "/elastigroup/tutorials/amazon-ecs/import-fargate-services-to-ecs-elastigroup",

    "/container-management/docker-swarm":
      "/elastigroup/tools-integrations/docker-swarm/",

    "/container-management/docker-swarm/":
      "/elastigroup/tools-integrations/docker-swarm/",

    "/container-management/docker-swarm/docker-swarm-auto-scaler/":
      "/elastigroup/tools-integrations/docker-swarm/docker-swarm-autoscaler",

    "/container-management/docker-swarm/docker-swarm-integration/":
      "/elastigroup/tools-integrations/docker-swarm/",

    "/container-management/kubernetes": "/ocean/getting-started/",

    "/container-management/kubernetes-2/eks":
      "/ocean/getting-started/eks/join-an-existing-cluster",

    "/container-management/kubernetes/": "/ocean/overview-kubernetes",

    "/container-management/kubernetes/aks-engine/":
      "/elastigroup/tutorials/azure/azure-aks-engine",

    "/container-management/kubernetes/autoscaler/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/kubernetes-cluster-autoscaling",

    "/container-management/kubernetes/eks/":
      "/elastigroup/tutorials/amazon-eks/",

    "/container-management/kubernetes/eks/configure-kubectl-for-eks-and-install-spotinst-controller/":
      "/elastigroup/tutorials/amazon-eks/configure-kubectl-for-eks-install-controller",

    "/container-management/kubernetes/eks/create-elastigroup-based-eks-cluster/":
      "/elastigroup/tutorials/amazon-eks/create-elastigroup-eks-cluster",

    "/container-management/kubernetes/gke": "/ocean/getting-started/gke",

    "/container-management/kubernetes/gke/": "/ocean/getting-started/gke",

    "/container-management/kubernetes/introduction/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/",

    "/container-management/kubernetes/kops/":
      "ocean/tools-and-integrations/kops/",

    "/container-management/kubernetes/kops/1_12/instance-groups/":
      "/ocean/tools-and-integrations/kops/metadata-labels",

    "/container-management/kubernetes/kops/1_14":
      "/ocean/tools-and-integrations/kops/",

    "/container-management/kubernetes/kops/clusters/":
      "/ocean/tools-and-integrations/kops/migrate-cluster",

    "/container-management/kubernetes/kops/instance-groups/":
      "/ocean/tools-and-integrations/kops/metadata-labels",

    "/container-management/kubernetes/kubernetes-concepts/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/",

    "/container-management/kubernetes/kubernetes-concepts/autoscaler/":
      "/ocean/features/scaling-kubernetes",

    "/container-management/kubernetes/kubernetes-concepts/persistent-volumes-support/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/persistent-volume-support",

    "/container-management/kubernetes/kubernetes-concepts/pod-driven-autoscaling/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/kubernetes-cluster-autoscaling",

    "/container-management/kubernetes/kubernetes-concepts/spotinst-labels/":
      "/ocean/features/labels-and-taints",

    "/container-management/kubernetes/kubernetes-tutorials/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/",

    "/container-management/kubernetes/kubernetes-tutorials/configure-auto-healing-for-kubernetes/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/configure-autohealing-for-kubernetes",

    "/container-management/kubernetes/kubernetes-tutorials/create-a-kubernetes-bearer-token/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/create-a-kubernetes-bearer-token",

    "/container-management/kubernetes/kubernetes-tutorials/custom-labels-selector/":
      "/elastigroup/tools-integrations/kubernetes-with-elastigroup/custom-label-selectors",

    "/container-management/kubernetes/kubernetes-tutorials/drift/":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/container-management/kubernetes/kubernetes-tutorials/installing-kubernetes-controller/":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/controller-permissions/":
      "/ocean/tutorials/spot-kubernetes-controller/controller-permissions",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/install-with-terraform/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-terraform",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/installing-kubernetes-controller-helm-v2/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-helm",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/installing-kubernetes-controller-helm-v3/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-helm",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/installing-kubernetes-controller-kubectl/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-kubectl",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/updating-kubernetes-controller":
      "/ocean/tutorials/spot-kubernetes-controller/update-controller",

    "/container-management/kubernetes/kubernetes-tutorials/spotinst-kubernetes-controller/updating-kubernetes-controller/":
      "/ocean/tutorials/spot-kubernetes-controller/update-controller",

    "/container-management/nomad/": "/elastigroup/tools-integrations/nomad/",

    "/container-management/nomad/nomad-autoscaler-setup/":
      "/elastigroup/tools-integrations/nomad/configure-nomad-autoscaler",

    "/container-management/nomad/nomad-autoscaling-concepts/":
      "/elastigroup/tools-integrations/nomad/",

    "/container-management/nomad/nomad-integration-with-elastigroup":
      "/elastigroup/tools-integrations/nomad/",

    "/container-management/nomad/nomad-integration-with-elastigroup/":
      "/elastigroup/tools-integrations/nomad/set-up-nomad-on-elastigroup",

    "/container-management/openshift-2":
      "/ocean/tools-and-integrations/openshift/",

    "/container-management/openshift-2/":
      "/ocean/tools-and-integrations/openshift/create-cluster-v311",

    "/container-management/openshift-2/openshift-v3-11/":
      "/ocean/tools-and-integrations/openshift/create-cluster-v311",

    "/container-management/openshift-2/openshift-v4-x/":
      "/ocean/tools-and-integrations/openshift/create-cluster-v4x",

    "/container-management/rancher": "/elastigroup/tools-integrations/rancher/",

    "/container-management/rancher/":
      "/elastigroup/tools-integrations/rancher/",

    "/container-management/rancher/rancher-v1/":
      "/elastigroup/tools-integrations/rancher/rancher-versions-before-20",

    "/container-management/rancher/rancher-v2/":
      "/elastigroup/tools-integrations/rancher/rancher-versions-20-and-later",

    "/create-an-ocean-cloud-cluster-2/": "/ocean/getting-started/ecs",

    "/create-an-ocean-cloud-cluster/": "/ocean/getting-started/gke",

    "/create-eks/": "/ocean/getting-started/eks/create-a-new-cluster",

    "/eco/": "/eco/",

    "/eco/connect-your-aws-account":
      "/eco/getting-started/connect-your-aws-account",

    "/eco/connect-your-aws-account/":
      "/eco/getting-started/connect-your-aws-account",

    "/eco/eco-faq/": "/eco/troubleshooting/eco-faq",

    "/eco/eco-link-account": "/eco/getting-started/",

    "/eco/eco-overview-2/": "/eco/",

    "/eco/eco-policy-2/":
      "/eco/tutorials/eco-policy/create-eco-policy-with-cloudformation",

    "/eco/eco-policy/": "/eco/tutorials/eco-policy/",

    "/eco/msp-registration-2/": "/eco/getting-started/",

    "/eco/msp-registration/": "/eco/getting-started/",

    "/eco/overview-dashboard-2/": "/eco/tutorials/view-your-savings",

    "/eco/reservation-analysis/": "/eco/tutorials/review-ri-spending-analysis",

    "/eco/strategy-selection/": "/eco/tutorials/choose-a-strategy",

    "/elastigroup-for-aws/": "/elastigroup/",

    "/elastigroup-for-aws/concepts/": "/elastigroup/features/",

    "/elastigroup-for-aws/concepts/compute-concepts/":
      "/elastigroup/features/compute/",

    "/elastigroup-for-aws/concepts/compute-concepts/ami-auto-backup/":
      "/elastigroup/features/compute/ami-auto-backup",

    "/elastigroup-for-aws/concepts/compute-concepts/auto-healing/":
      "/elastigroup/features/compute/autohealing",

    "/elastigroup-for-aws/concepts/compute-concepts/block-device-mapping/":
      "/elastigroup/features/compute/block-device-mapping",

    "/elastigroup-for-aws/concepts/compute-concepts/placement-groups/":
      "/elastigroup/features/compute/placement-groups",

    "/elastigroup-for-aws/concepts/compute-concepts/preferred-instance-types/":
      "/elastigroup/features/compute/preferred-instance-types",

    "/elastigroup-for-aws/concepts/compute-concepts/shutdown-scripts":
      "/elastigroup/features/compute/shutdown-scripts",

    "/elastigroup-for-aws/concepts/compute-concepts/shutdown-scripts/":
      "/elastigroup/features/compute/shutdown-scripts",

    "/elastigroup-for-aws/concepts/compute-concepts/termination-policy":
      "/elastigroup/features/compute/termination-policy",

    "/elastigroup-for-aws/concepts/compute-concepts/termination-policy/":
      "/elastigroup/features/compute/termination-policy",

    "/elastigroup-for-aws/concepts/compute-concepts/using-signals-in-elastigroups/":
      "/elastigroup/features/compute/using-signals-in-elastigroups",

    "/elastigroup-for-aws/concepts/general-concepts/": "/elastigroup/features/",

    "/elastigroup-for-aws/concepts/general-concepts/cluster-orientation/":
      "/elastigroup/features/core-features/cluster-orientation",

    "/elastigroup-for-aws/concepts/general-concepts/elastigroup-capacity-instances-or-weighted/":
      "/elastigroup/features/core-features/elastigroup-capacity-instances-or-weighted",

    "/elastigroup-for-aws/concepts/general-concepts/elastigroup-console-configuration-alerts/":
      "/elastigroup/features/core-features/elastigroup-console-configuration-alerts",

    "/elastigroup-for-aws/concepts/general-concepts/equal-az-distribution/":
      "/elastigroup/features/core-features/equal-az-instance-distribution-orientation",

    "/elastigroup-for-aws/concepts/general-concepts/instance-actions/":
      "/elastigroup/features/core-features/instance-actions",

    "/elastigroup-for-aws/concepts/general-concepts/maintenance-windows/":
      "/elastigroup/features/core-features/maintenance-windows",

    "/elastigroup-for-aws/concepts/general-concepts/market-scoring-managing-interruptions/":
      "/elastigroup/features/core-features/market-scoring-managing-interruptions",

    "/elastigroup-for-aws/concepts/general-concepts/scheduling/":
      "/elastigroup/features/core-features/scheduling",

    "/elastigroup-for-aws/concepts/general-concepts/spot-reserved-on-demand/":
      "/elastigroup/features/core-features/spot-reserved-on-demand-instances",

    "/elastigroup-for-aws/concepts/scaling-concepts/":
      "/elastigroup/features/scaling/",

    "/elastigroup-for-aws/concepts/scaling-concepts/advanced-expressions":
      "/elastigroup/features/scaling/advanced-expressions",

    "/elastigroup-for-aws/concepts/scaling-concepts/advanced-expressions/":
      "/elastigroup/features/scaling/advanced-expressions",

    "/elastigroup-for-aws/concepts/scaling-concepts/predictive-autoscaling/":
      "/elastigroup/features/scaling/predictive-autoscaling",

    "/elastigroup-for-aws/concepts/scaling-concepts/simple-scaling-policies/":
      "/elastigroup/features/scaling/simple-scaling-policies",

    "/elastigroup-for-aws/concepts/scaling-concepts/target-scaling":
      "/elastigroup/features/scaling/target-scaling",

    "/elastigroup-for-aws/concepts/scaling-concepts/target-scaling/":
      "/elastigroup/features/scaling/target-scaling",

    "/elastigroup-for-aws/concepts/stateful-concepts":
      "/elastigroup/features/stateful-instance/",

    "/elastigroup-for-aws/concepts/stateful-concepts/":
      "/elastigroup/features/stateful-instance/",

    "/elastigroup-for-aws/concepts/stateful-concepts/data-volumes/":
      "/elastigroup/features/stateful-instance/persist-data-volumes",

    "/elastigroup-for-aws/concepts/stateful-concepts/import-a-stateful-instance/":
      "/elastigroup/features/stateful-instance/import-a-stateful-instance",

    "/elastigroup-for-aws/concepts/stateful-concepts/introduction/":
      "/elastigroup/features/stateful-instance/stateful-instances",

    "/elastigroup-for-aws/concepts/stateful-concepts/maintain-root/":
      "/elastigroup/features/stateful-instance/persist-root-volume",

    "/elastigroup-for-aws/concepts/stateful-concepts/network-persistency/":
      "/elastigroup/features/stateful-instance/persist-network",

    "/elastigroup-for-aws/concepts/stateful-concepts/scheduling-stateful-capacity/":
      "/elastigroup/features/stateful-instance/schedule-stateful-capacity",

    "/elastigroup-for-aws/concepts/stateful-concepts/stateful-actions/":
      "/elastigroup/features/stateful-instance/stateful-instance-actions",

    "/elastigroup-for-aws/services-integrations/":
      "/elastigroup/tools-integrations/",

    "/elastigroup-for-aws/services-integrations/aws-batch":
      "/elastigroup/tools-integrations/aws-batch",

    "/elastigroup-for-aws/services-integrations/aws-batch/":
      "/elastigroup/tools-integrations/aws-batch",

    "/elastigroup-for-aws/services-integrations/awss-load-balancers-elb-and-alb":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/elastigroup-for-aws/services-integrations/awss-load-balancers-elb-and-alb/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/elastigroup-for-aws/services-integrations/codedeploy":
      "/elastigroup/tools-integrations/codedeploy/",

    "/elastigroup-for-aws/services-integrations/codedeploy/":
      "/elastigroup/tools-integrations/codedeploy/",

    "/elastigroup-for-aws/services-integrations/codedeploy/codedeploy-blue-green-deployment/":
      "/elastigroup/tools-integrations/codedeploy/blue-green-deployment",

    "/elastigroup-for-aws/services-integrations/codedeploy/codedeploy-setup/":
      "/elastigroup/tools-integrations/codedeploy/",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk":
      "/elastigroup/tools-integrations/elastic-beanstalk/",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/":
      "/elastigroup/tools-integrations/elastic-beanstalk/",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/beanstalk-tutorials/":
      "/elastigroup/tools-integrations/elastic-beanstalk/",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/beanstalk-tutorials/import-a-beanstalk-environment/":
      "/elastigroup/tools-integrations/elastic-beanstalk/import-a-beanstalk-environment",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/beanstalk-tutorials/roll-configuration-updates/":
      "/elastigroup/tools-integrations/elastic-beanstalk/roll-configuration-updates",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/in-asg":
      "/elastigroup/tools-integrations/elastic-beanstalk/in-asg",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/in-asg/":
      "/elastigroup/tools-integrations/elastic-beanstalk/in-asg",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/independent/":
      "/elastigroup/tools-integrations/elastic-beanstalk/independent-elastigroup-integration",

    "/elastigroup-for-aws/services-integrations/elastic-beanstalk/introduction/":
      "/elastigroup/tools-integrations/elastic-beanstalk/",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce":
      "/elastigroup/tools-integrations/elastic-mapreduce/",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce/":
      "/elastigroup/tools-integrations/elastic-mapreduce/",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce/create-an-emr-cluster/":
      "/elastigroup/tools-integrations/elastic-mapreduce/create-a-new-emr-cluster",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce/elastigroup-auto-recover-for-emr/":
      "/elastigroup/tools-integrations/elastic-mapreduce/elastigroup-auto-recover-for-emr",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce/import-an-emr-cluster":
      "/elastigroup/tools-integrations/elastic-mapreduce/",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce/import-an-emr-cluster/advanced/":
      "/elastigroup/tools-integrations/elastic-mapreduce/advanced-import-use-bootstrap-and-configuration-files",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes-wrap/":
      "/elastigroup/tools-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes",

    "/elastigroup-for-aws/services-integrations/elastic-mapreduce/scaling-policies-for-emr/":
      "/elastigroup/tools-integrations/elastic-mapreduce/scaling-policies-for-emr",

    "/elastigroup-for-aws/services-integrations/kafka":
      "/elastigroup/tools-integrations/kafka",

    "/elastigroup-for-aws/services-integrations/kafka/":
      "/elastigroup/tools-integrations/kafka",

    "/elastigroup-for-aws/services-integrations/mesosphere":
      "/elastigroup/tools-integrations/mesosphere",

    "/elastigroup-for-aws/services-integrations/mesosphere/":
      "/elastigroup/tools-integrations/mesosphere",

    "/elastigroup-for-aws/services-integrations/opsworks":
      "/elastigroup/tools-integrations/opsworks/",

    "/elastigroup-for-aws/services-integrations/opsworks/":
      "/elastigroup/tools-integrations/opsworks/",

    "/elastigroup-for-aws/services-integrations/opsworks/opsworks-auto-healing/":
      "/elastigroup/tools-integrations/opsworks/opsworks-autohealing",

    "/elastigroup-for-aws/services-integrations/opsworks/opsworks-setup/":
      "/elastigroup/tools-integrations/opsworks/",

    "/elastigroup-for-aws/services-integrations/rightscale":
      "/elastigroup/tools-integrations/rightscale",

    "/elastigroup-for-aws/services-integrations/rightscale/":
      "/elastigroup/tools-integrations/rightscale",

    "/elastigroup-for-aws/services-integrations/route53":
      "/elastigroup/tools-integrations/route53",

    "/elastigroup-for-aws/services-integrations/route53/":
      "/elastigroup/tools-integrations/route53",

    "/elastigroup-for-aws/services-integrations/spinnaker/":
      "/tools-and-provisioning/spinnaker/",

    "/elastigroup-for-aws/services-integrations/spinnaker/install-and-configure/":
      "/tools-and-provisioning/spinnaker/install-configure",

    "/elastigroup-for-aws/services-integrations/spinnaker/set-up-environment-as-local-git/":
      "/tools-and-provisioning/spinnaker/set-up-environment-as-local-git",

    "/elastigroup-for-aws/services-integrations/spotinst-custom-health-check-service-hcs-2":
      "/elastigroup/tools-integrations/custom-health-check-service",

    "/elastigroup-for-aws/services-integrations/spotinst-custom-health-check-service-hcs-2/":
      "/elastigroup/tools-integrations/custom-health-check-service",

    "/elastigroup-for-aws/tutorials/": "/elastigroup/tutorials/",

    "/elastigroup-for-aws/tutorials/create-an-elastigroup-from-scratch/":
      "/elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch",

    "/elastigroup-for-aws/tutorials/elastigroup-actions-menu/":
      "/elastigroup/tutorials/elastigroup-actions-menu/",

    "/elastigroup-for-aws/tutorials/elastigroup-actions-menu/deploy-roll-elastigroup/":
      "/elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup",

    "/elastigroup-for-aws/tutorials/elastigroup-actions-menu/manage-group-capacity/":
      "/elastigroup/tutorials/elastigroup-actions-menu/manage-group-capacity",

    "/elastigroup-for-aws/tutorials/elastigroup-actions-menu/notifications/":
      "/elastigroup/tutorials/elastigroup-actions-menu/create-notifications",

    "/elastigroup-for-aws/tutorials/elastigroup-actions-menu/notifications/notifications/":
      "/elastigroup/tutorials/elastigroup-actions-menu/create-notifications",

    "/elastigroup-for-aws/tutorials/elastigroup-actions-menu/set-health-checks/":
      "/elastigroup/tutorials/elastigroup-actions-menu/set-health-checks",

    "/elastigroup-for-aws/tutorials/elastigroup-actions-menu/suspend-processes/":
      "/elastigroup/tutorials/elastigroup-actions-menu/suspend-processes",

    "/elastigroup-for-aws/tutorials/elastigroup-budgets/":
      "/elastigroup/tutorials/elastigroup-budgets/",

    "/elastigroup-for-aws/tutorials/elastigroup-budgets/budgets-configuration/":
      "/elastigroup/tutorials/elastigroup-budgets/configure-budgets",

    "/elastigroup-for-aws/tutorials/elastigroup-budgets/budgets-monitoring/":
      "/elastigroup/tutorials/elastigroup-budgets/monitor-budgets",

    "/elastigroup-for-aws/tutorials/elastigroup-budgets/introduction/":
      "/elastigroup/tutorials/elastigroup-budgets/budgets",

    "/elastigroup-for-aws/tutorials/filtering-api-responses-based-on-group-parameters/":
      "/elastigroup/tutorials/elastigroup-tasks/filter-api-responses",

    "/elastigroup-for-aws/tutorials/kms-encryption-and-spotinst/":
      "/elastigroup/tutorials/elastigroup-tasks/create-encryption-key",

    "/elastigroup-for-aws/tutorials/link-an-ec2-classic-instance-to-a-vpc/":
      "/elastigroup/tutorials/elastigroup-tasks/link-ec2-classic-instance-to-vpc",

    "/elastigroup-for-aws/tutorials/publish-elastigroup-metrics":
      "/elastigroup/tutorials/elastigroup-tasks/publish-metrics-to-cloudwatch",

    "/elastigroup-for-aws/tutorials/publish-elastigroup-metrics/":
      "/elastigroup/tutorials/elastigroup-tasks/publish-metrics-to-cloudwatch",

    "/elastigroup-for-aws/tutorials/registering-instances-to-domain/":
      "/elastigroup/tutorials/elastigroup-tasks/register-instances-to-domain",

    "/elastigroup-for-aws/tutorials/restrict-your-spotinst-iam-policy/":
      "/elastigroup/tutorials/elastigroup-tasks/restrict-your-spot-iam-policy",

    "/elastigroup-for-aws/tutorials/stateful-tutorials/":
      "/elastigroup/tutorials/elastigroup-tasks/",

    "/elastigroup-for-aws/tutorials/stateful-tutorials/create-a-stateful-elastigroup-from-scratch":
      "/elastigroup/tutorials/elastigroup-tasks/create-a-stateful-elastigroup-from-scratch",

    "/elastigroup-for-aws/tutorials/stateful-tutorials/create-a-stateful-elastigroup-from-scratch/":
      "/elastigroup/tutorials/elastigroup-tasks/create-a-stateful-elastigroup-from-scratch",

    "/elastigroup-for-aws/tutorials/updating-the-spotinst-policy/":
      "/elastigroup/tutorials/elastigroup-tasks/update-spot-policy",

    "/elastigroup-for-aws/tutorials/using-cross-account-kms-key-to-encrypt-ebs-volumes-with-spotinst/":
      "/elastigroup/tutorials/elastigroup-tasks/use-cross-account-kms-key-to-encrypt-ebs-volumes",

    "/elastigroup-for-aws/tutorials/wordpress-on-spot-step-by-step-guide/":
      "/elastigroup/tutorials/elastigroup-tasks/wordpress-on-spot-step-by-step-guide",

    "/elastigroup-for-azure/":
      "/elastigroup/getting-started/elastigroup-for-azure",

    "/elastigroup-for-azure/connect-elastigroup-to-application-gateway/":
      "/elastigroup/tutorials/azure/connect-elastigroup-to-application-gateway",

    "/elastigroup-for-azure/create-a-new-elastigroup-in-azure":
      "/elastigroup/getting-started/create-an-elastigroup-for-azure",

    "/elastigroup-for-azure/creating-an-elastigroup-in-azure/":
      "/elastigroup/getting-started/create-an-elastigroup-for-azure",

    "/elastigroup-for-azure/getting-started-with-elastigroup/":
      "/connect-your-cloud-provider/azure-account",

    "/elastigroup-for-azure/hpc":
      "/elastigroup/tools-integrations/grid-engine-azure/",

    "/elastigroup-for-azure/hpc/":
      "/elastigroup/tools-integrations/grid-engine-azure/",

    "/elastigroup-for-azure/hpc/getting-started/":
      "/elastigroup/tools-integrations/grid-engine-azure/create-a-grid-engine-elastigroup",

    "/elastigroup-for-azure/hpc/introduction/":
      "/elastigroup/tools-integrations/grid-engine-azure/",

    "/elastigroup-for-azure/hpc/tortuga-unicloud-grid-engine/":
      "/elastigroup/tools-integrations/grid-engine-azure/configure-tortuga-unicloud-grid-engine",

    "/elastigroup-for-azure/shutdown-script-in-elastigroup/":
      "/elastigroup/features/azure/shutdown-script-in-elastigroup-for-azure",

    "/elastigroup-for-azure/shutdown-script/":
      "/elastigroup/features/azure/shutdown-script-in-elastigroup-for-azure",

    "/elastigroup-for-google-cloud/":
      "/elastigroup/getting-started/elastigroup-for-gcp",

    "/elastigroup-for-google-cloud/concepts/": "/elastigroup/features/gcp/",

    "/elastigroup-for-google-cloud/concepts/compute-concepts/":
      "/elastigroup/features/gcp/",

    "/elastigroup-for-google-cloud/concepts/compute-concepts/scaling-policies-for-gcp-elastigroup/":
      "/elastigroup/features/gcp/scaling-policies-for-gcp-elastigroup",

    "/elastigroup-for-google-cloud/concepts/compute-concepts/shutdown-scripts":
      "/elastigroup/features/gcp/shutdown-scripts",

    "/elastigroup-for-google-cloud/concepts/compute-concepts/shutdown-scripts/":
      "/elastigroup/features/compute/shutdown-scripts",

    "/elastigroup-for-google-cloud/concepts/general-concepts/":
      "/elastigroup/features/gcp/",

    "/elastigroup-for-google-cloud/concepts/general-concepts/gcp-load-balancers-backend-services/":
      "/elastigroup/features/gcp/gcp-load-balancers-backend-services",

    "/elastigroup-for-google-cloud/concepts/general-concepts/preemptible-cud-od-instances/":
      "/elastigroup/features/gcp/pre-emptible-cud-on-demand-instances",

    "/elastigroup-for-google-cloud/create-an-elastigroup-from-scratch":
      "/elastigroup/getting-started/create-an-elastigroup-for-gcp",

    "/elastigroup-for-google-cloud/tutorials/": "/elastigroup/getting-started/",

    "/elastigroup-for-google-cloud/tutorials/connect-spotinst-to-a-gcp-account/":
      "/connect-your-cloud-provider/gcp-project",

    "/elastigroup-for-google-cloud/tutorials/create-an-elastigroup-from-scratch/":
      "/elastigroup/getting-started/create-an-elastigroup-for-gcp",

    "/elastigroup/amazon-web-services/":
      "/elastigroup/getting-started/elastigroup-for-aws",

    "/elastigroup/features/stateful-instance/stateful-instances":
      "/elastigroup/features/stateful-instance/",

    "/elastigroup/tutorials/": "/elastigroup/tutorials/",

    "/getting-started-connecting-your-aws-account/":
      "/connect-your-cloud-provider/aws-account",

    "/getting-started-create-an-elastigroup-cluster-from-an-existing-asg-auto-scaling-group":
      "/elastigroup/tutorials/elastigroup-tasks/join-an-existing-asg",

    "/getting-started-create-an-elastigroup-cluster-from-an-existing-asg-auto-scaling-group/":
      "/elastigroup/tutorials/elastigroup-tasks/join-an-existing-asg",

    "/getting-started-create-an-elastigroup-cluster-from-an-existing-elb":
      "elastigroup/tutorials/elastigroup-tasks/join-an-existing-elb",

    "/getting-started-create-an-elastigroup-cluster-from-an-existing-elb/":
      "/elastigroup/tutorials/elastigroup-tasks/join-an-existing-elb",

    "/getting-started-elastigroup": "/elastigroup/getting-started/",

    "/getting-started-elastigroup/": "/elastigroup/getting-started/",

    "/getting-started-introduction-to-spotinst/":
      "/connect-your-cloud-provider/",

    "/getting-started-spotinst-elastigroup-aws/":
      "/elastigroup/getting-started/elastigroup-for-aws",

    "/getting-started-spotinst-ocean-aws-gcp": "/ocean/getting-started/",

    "/getting-started-with-elastigroup": "/elastigroup/getting-started/",

    "/getting-started-with-spotinst/": "/connect-your-cloud-provider/",

    "/import-an-eks-based-ocean-cluster/":
      "/ocean/getting-started/eks/join-an-existing-cluster",

    "/integration-docs/elastic-beanstalk/introduction":
      "/elastigroup/tools-integrations/elastic-beanstalk/",

    "/integration-docs/elastigroup/concepts/general-concepts/notifications/customizing-email-notifications/":
      "/administration/users/configure-email-notifications",

    "/integration-docs/elastigroup/container-management/amazon-ecs/elastigroup-for-ecs/":
      "/elastigroup/features/amazon-ecs/elastigroup-for-ecs",

    "/integration-docs/elastigroup/provisioning-tools/cloudformation/examples/spectrum-action/":
      "/tools-and-provisioning/cloudformation/spectrum-examples/spectrum-actions",

    "/integration-docs/elastigroup/provisioning-tools/cloudformation/introduction/resources-types/":
      "/tools-and-provisioning/cloudformation/getting-started/resource-types",

    "/integration-docs/elastigroup/provisioning-tools/terraform/installation/":
      "/tools-and-provisioning/terraform/getting-started/",

    "/integration-docs/elastigroup/quickstarts/elastigroup-for-aws/":
      "/elastigroup/getting-started/elastigroup-for-aws",

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

    "/integration-docs/mlb/install-general/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/introducing-elastigroup/": "/elastigroup/",

    "/managed-instances/": "/managed-instance/",

    "/managed-instances/concepts/": "/managed-instance/features/",

    "/managed-instances/concepts/data-volume-persistence/":
      "/managed-instance/features/data-volume-persistence",

    "/managed-instances/concepts/how-it-works/":
      "/managed-instance/features/stateful-managed-instances",

    "/managed-instances/concepts/introduction":
      "managed-instance/getting-started/",

    "/managed-instances/concepts/introduction/": "/managed-instance/",

    "/managed-instances/concepts/managed-instance-actions/":
      "/managed-instance/features/managed-instance-actions",

    "/managed-instances/concepts/network-persistence/":
      "/managed-instance/features/network-persistence",

    "/managed-instances/concepts/replacement-process/":
      "/managed-instance/features/replacement-process",

    "/managed-instances/concepts/root-volume-persistence/":
      "/managed-instance/features/root-volume-persistence",

    "/managed-instances/concepts/third-party-integrations/":
      "/managed-instance/features/third-party-integrations",

    "/managed-instances/tutorials/": "/managed-instance/tutorials/",

    "/managed-instances/tutorials/managed-instance-creation-2-2-2/":
      "/managed-instance/getting-started/join-an-existing-managed-instance",

    "/managed-instances/tutorials/managed-instance-creation-2-2/":
      "/managed-instance/getting-started/create-a-new-managed-instance",

    "/managed-instances/tutorials/managed-instance-creation-2/":
      "/managed-instance/tutorials/upgrade-an-existing-elastigroup-to-managed-instance",

    "/managed-instances/tutorials/managed-instance-creation/":
      "/managed-instance/getting-started/",

    "/mlb/": "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/mlb/attach-elastigroup/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/mlb/install/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/mlb/install/aws/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/mlb/install/general/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/mlb/introduction/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/mlb/routing-rules/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/mlb/ssl-certificate/":
      "/elastigroup/tools-integrations/aws-load-balancers-elb-alb",

    "/ocean-aws/kubernetes/concepts/ocean-cloud/introduction":
      "/ocean/overview-kubernetes",

    "/ocean-tutorials-ocean-for-aws-run-workloads/":
      "/ocean/tutorials/run-workloads",

    "/ocean/": "/ocean/",

    "/ocean/concepts/": "/ocean/features/",

    "/ocean/concepts/cost-analysis/": "/ocean/features/cost-analysis",

    "/ocean/concepts/create-cluster-roll/": "/ocean/features/roll",

    "/ocean/concepts/elastic-ip/": "/ocean/features/elastic-ip",

    "/ocean/concepts/headroom/": "/ocean/features/headroom",

    "/ocean/concepts/health-checks-auto-healing/":
      "/ocean/features/health-checks-and-autohealing",

    "/ocean/concepts/launch-specifications/":
      "/ocean/features/launch-specifications",

    "/ocean/concepts/ocean-cloud/cost-analysis/":
      "/ocean/features/cost-analysis",

    "/ocean/concepts/ocean-cloud/create-cluster-roll-2/":
      "/ocean/features/roll",

    "/ocean/concepts/ocean-cloud/ecs-scaling-2/": "/ocean/features/scaling-ecs",

    "/ocean/concepts/ocean-cloud/ecs-scaling/": "/ocean/features/scaling-ecs",

    "/ocean/concepts/ocean-cloud/elastic-ip/": "/ocean/features/elastic-ip",

    "/ocean/concepts/ocean-cloud/headroom/": "/ocean/features/headroom",

    "/ocean/concepts/ocean-cloud/health-checks-auto-healing/":
      "/ocean/features/health-checks-and-autohealing",

    "/ocean/concepts/ocean-cloud/introduction/": "/ocean/overview-kubernetes",

    "/ocean/concepts/ocean-cloud/kubernetes-scaling/":
      "/ocean/features/scaling-kubernetes",

    "/ocean/concepts/ocean-cloud/launch-specifications-2-2/":
      "/ocean/features/launch-specifications",

    "/ocean/concepts/ocean-cloud/launch-specifications-2/":
      "/ocean/features/launch-specifications",

    "/ocean/concepts/ocean-cloud/launch-specifications/":
      "/ocean/features/launch-specifications",

    "/ocean/concepts/ocean-cloud/right-sizing-2/":
      "/ocean/features/right-sizing",

    "/ocean/concepts/ocean-cloud/right-sizing/": "/ocean/features/right-sizing",

    "/ocean/concepts/ocean-cloud/running-hours/":
      "/ocean/features/running-hours",

    "/ocean/concepts/ocean-cloud/spotinst-labels-taints/":
      "/ocean/features/labels-and-taints",

    "/ocean/concepts/right-sizing/": "/ocean/features/right-sizing",

    "/ocean/concepts/running-hours/": "/ocean/features/running-hours",

    "/ocean/concepts/scaling-ecs/": "/ocean/features/scaling-ecs",

    "/ocean/concepts/scaling-kubernetes/": "/ocean/features/scaling-kubernetes",

    "/ocean/concepts/spotinst-labels-taints/":
      "/ocean/features/labels-and-taints",

    "/ocean/get-started-with-kops/": "/ocean/getting-started/kops",

    "/ocean/getting-started-eks/": "/ocean/getting-started/eks/",

    "/ocean/kubernetes/concepts/ocean-cloud/introduction":
      "/ocean/overview-kubernetes",

    "/ocean/kubernetes/concepts/ocean-cloud/introduction/":
      "/ocean/overview-kubernetes",

    "/ocean/ocean-overview-ecs/": "/ocean/overview-ecs",

    "/ocean/ocean-overview-k8s/": "/ocean/overview-kubernetes",

    "/ocean/tools-and-integrations/": "/ocean/tools-and-integrations/",

    "/ocean/tools-and-integrations/eksctl/":
      "/ocean/tools-and-integrations/eksctl/",

    "/ocean/tools-and-integrations/eksctl/create-a-new-cluster-with-eksctl/":
      "/ocean/tools-and-integrations/eksctl/create-a-new-cluster-with-eksctl",

    "/ocean/tools-and-integrations/eksctl/join-an-existing-cluster/":
      "/ocean/tools-and-integrations/eksctl/join-an-existing-cluster",

    "/ocean/tools-and-integrations/kops/": "ocean/tools-and-integrations/kops/",

    "/ocean/tools-and-integrations/kops/clusters/":
      "/ocean/tools-and-integrations/kops/migrate-cluster",

    "/ocean/tools-and-integrations/kops/get-started-with-kops/":
      "/ocean/tools-and-integrations/kops/",

    "/ocean/tools-and-integrations/kops/install/":
      "/ocean/tools-and-integrations/kops/install-kops/",

    "/ocean/tools-and-integrations/kops/install/install-2/":
      "/ocean/tools-and-integrations/kops/install-kops/kops-113",

    "/ocean/tools-and-integrations/kops/install/install-3/":
      "/ocean/tools-and-integrations/kops/install-kops/kops-112",

    "/ocean/tools-and-integrations/kops/install/install/":
      "/ocean/tools-and-integrations/kops/install-kops/kops-114",

    "/ocean/tools-and-integrations/kops/instance-groups/":
      "/ocean/tools-and-integrations/kops/metadata-labels",

    "/ocean/tools-and-integrations/openshift/":
      "/ocean/tools-and-integrations/openshift/",

    "/ocean/tools-and-integrations/openshift/openshift-v3-11/":
      "/ocean/tools-and-integrations/openshift/create-cluster-v311",

    "/ocean/tools-and-integrations/openshift/openshift-v4-x/":
      "/ocean/tools-and-integrations/openshift/create-cluster-v4x",

    "/ocean/tutorials/": "/ocean/tutorials/",

    "/ocean/tutorials/cost-analysis/": "/ocean/tutorials/analyze-your-costs",

    "/ocean/tutorials/create-a-cost-analysis-filter/":
      "/ocean/tutorials/create-a-cost-filter",

    "/ocean/tutorials/custom-labels/": "/ocean/tutorials/create-custom-labels",

    "/ocean/tutorials/import-a-gke-cluster-using-shared-vpc/":
      "/ocean/tutorials/create-cluster-gke-shared-vpc",

    "/ocean/tutorials/migrate-elastigroups/":
      "/ocean/tutorials/migrate-existing-egs-ekskops",

    "/ocean/tutorials/migrating-existing-ecs-clusters-from-elastigroup/":
      "/ocean/tutorials/migrate-existing-egs-ecs",

    "/ocean/tutorials/ocean-dashboard/": "/ocean/tutorials/ocean-dashboard",

    "/ocean/tutorials/ocean-for-aws/create-a-cost-analysis-filter/":
      "/ocean/tutorials/create-a-cost-filter",

    "/ocean/tutorials/ocean-for-aws/create-eks":
      "/ocean/getting-started/eks/create-a-new-cluster",

    "/ocean/tutorials/ocean-for-aws/create-eks/":
      "/ocean/getting-started/eks/create-a-new-cluster",

    "/ocean/tutorials/ocean-for-aws/custom-labels/":
      "/ocean/tutorials/create-custom-labels",

    "/ocean/tutorials/ocean-for-aws/import-an-eks-based-ocean-cluster/":
      "/ocean/getting-started/eks/join-an-existing-cluster",

    "/ocean/tutorials/ocean-for-aws/migrate-elastigroups/":
      "/ocean/tutorials/migrate-existing-egs-ekskops",

    "/ocean/tutorials/ocean-for-aws/ocean-dashboard/":
      "/ocean/tutorials/ocean-dashboard",

    "/ocean/tutorials/ocean-for-aws/ocean-tutorials-ocean-for-aws-run-workloads/":
      "/ocean/tutorials/run-workloads",

    "/ocean/tutorials/ocean-for-aws/ocean-tutorials-ocean-for-aws-workload-migration/":
      "/ocean/tutorials/migrate-workload",

    "/ocean/tutorials/ocean-for-aws/right-sizing-usage/":
      "/ocean/tutorials/use-right-sizing",

    "/ocean/tutorials/ocean-for-aws/set-running-hours/":
      "/ocean/tutorials/set-running-hours",

    "/ocean/tutorials/ocean-for-aws/terraform/":
      "/ocean/getting-started/eks/terraform",

    "/ocean/tutorials/ocean-for-aws/upgrade-elastigroup-to-ocean-using-kops/":
      "/ocean/getting-started/kops",

    "/ocean/tutorials/ocean-for-ecs": "/ocean/overview-ecs",

    "/ocean/tutorials/ocean-for-ecs/": "/ocean/tutorials/",

    "/ocean/tutorials/ocean-for-ecs/create-an-ocean-cloud-cluster":
      "/ocean/getting-started/ecs",

    "/ocean/tutorials/ocean-for-ecs/create-an-ocean-cloud-cluster/":
      "/ocean/getting-started/ecs",

    "/ocean/tutorials/ocean-for-ecs/migrating-existing-ecs-clusters-from-elastigroup/":
      "/ocean/tutorials/migrate-existing-egs-ecs",

    "/ocean/tutorials/ocean-for-gke/create-an-ocean-cloud-cluster/":
      "/ocean/getting-started/gke",

    "/ocean/tutorials/ocean-for-gke/import-a-gke-cluster-using-shared-vpc/":
      "/ocean/tutorials/create-cluster-gke-shared-vpc",

    "/ocean/tutorials/ocean-tutorials-ocean-for-aws-run-workloads/":
      "/ocean/tutorials/run-workloads",

    "/ocean/tutorials/ocean-tutorials-ocean-for-aws-workload-migration/":
      "/ocean/tutorials/migrate-workload",

    "/ocean/tutorials/right-sizing-usage/": "/ocean/tutorials/use-right-sizing",

    "/ocean/tutorials/set-running-hours/": "/ocean/tutorials/set-running-hours",

    "/ocean/tutorials/spotinst-kubernetes-controller/":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/ocean/tutorials/spotinst-kubernetes-controller/changelog/":
      "/ocean/tutorials/spot-kubernetes-controller/controller-version-history",

    "/ocean/tutorials/spotinst-kubernetes-controller/controller-permissions/":
      "/ocean/tutorials/spot-kubernetes-controller/controller-permissions",

    "/ocean/tutorials/spotinst-kubernetes-controller/install-with-terraform/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-terraform",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller-helm/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-helm",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller-kubectl/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-kubectl",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/":
      "/ocean/tutorials/spot-kubernetes-controller/",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/install-with-terraform/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-terraform",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/installing-kubernetes-controller-helm/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-helm",

    "/ocean/tutorials/spotinst-kubernetes-controller/installing-kubernetes-controller/installing-kubernetes-controller-kubectl/":
      "/ocean/tutorials/spot-kubernetes-controller/install-with-kubectl",

    "/ocean/tutorials/spotinst-kubernetes-controller/updating-kubernetes-controller/":
      "/ocean/tutorials/spot-kubernetes-controller/update-controller",

    "/provisioning-ci-cd-sdk/": "/tools-and-provisioning/",

    "/provisioning-ci-cd-sdk/ci-cd/": "/tools-and-provisioning/ci-cd/",

    "/provisioning-ci-cd-sdk/ci-cd/chef": "/tools-and-provisioning/ci-cd/chef",

    "/provisioning-ci-cd-sdk/ci-cd/chef/": "/tools-and-provisioning/ci-cd/chef",

    "/provisioning-ci-cd-sdk/ci-cd/gitlab/":
      "/tools-and-provisioning/ci-cd/gitlab",

    "/provisioning-ci-cd-sdk/ci-cd/jenkins":
      "/tools-and-provisioning/ci-cd/jenkins",

    "/provisioning-ci-cd-sdk/ci-cd/jenkins/":
      "/tools-and-provisioning/ci-cd/jenkins",

    "/provisioning-ci-cd-sdk/provisioning-tools": "/tools-and-provisioning/",

    "/provisioning-ci-cd-sdk/provisioning-tools/": "/tools-and-provisioning/",

    "/provisioning-ci-cd-sdk/provisioning-tools/ansible/":
      "/tools-and-provisioning/ansible",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation":
      "/tools-and-provisioning/cloudformation/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/":
      "/tools-and-provisioning/cloudformation/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/cfn-helper":
      "/tools-and-provisioning/cloudformation/tools/cfn-helper-scripts",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/cfn-helper/":
      "/tools-and-provisioning/cloudformation/tools/cfn-helper-scripts",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/":
      "/tools-and-provisioning/cloudformation/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/beanstalk/":
      "/tools-and-provisioning/cloudformation/beanstalk-examples/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/beanstalk/existing-beanstalk-2/":
      "/tools-and-provisioning/cloudformation/beanstalk-examples/use-existing-environment",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/beanstalk/new-beanstalk/":
      "/tools-and-provisioning/cloudformation/beanstalk-examples/create-new-environment",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/create-mlb/":
      "/tools-and-provisioning/cloudformation/more-examples/multai-load-balancer",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/create-notification/":
      "/tools-and-provisioning/cloudformation/more-examples/notification",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/elastigroup/":
      "/tools-and-provisioning/cloudformation/elastigroup-examples/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/elastigroup/create-ecs-esg-yml/":
      "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-for-ecs-yml-based",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/elastigroup/create-generic/":
      "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-generic",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/elastigroup/create-stateful/":
      "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-stateful",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/elastigroup/create-yml/":
      "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-yml-based",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/emr/":
      "/tools-and-provisioning/cloudformation/emr-examples/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/emr/emr-clone/":
      "/elastigroup/tools-integrations/elastic-mapreduce/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/emr/wrap-emr/":
      "/tools-and-provisioning/cloudformation/emr-examples/wrap-cluster",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/hcs/":
      "/tools-and-provisioning/cloudformation/more-examples/create-hcs-on-existing-elastigroup",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/hcs/create/":
      "/tools-and-provisioning/cloudformation/more-examples/create-hcs-on-existing-elastigroup",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/import-asg/":
      "/tools-and-provisioning/cloudformation/elastigroup-examples/import-asg",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/ocean/":
      "/tools-and-provisioning/cloudformation/ocean-examples/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/ocean/ecs-ocean-cluster/":
      "/tools-and-provisioning/cloudformation/ocean-examples/ecs-ocean-cluster",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/ocean/ecs-ocean-launch-spec/":
      "/tools-and-provisioning/cloudformation/ocean-examples/ecs-ocean-launch-specification",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/ocean/kubernetes-ocean-launch-spec/":
      "/tools-and-provisioning/cloudformation/ocean-examples/kubernetes-ocean-launch-specification",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/ocean/ocean-cluster-2-2/":
      "/tools-and-provisioning/cloudformation/ocean-examples/kubernetes-ocean-cluster",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/spectrum-action/":
      "/tools-and-provisioning/cloudformation/spectrum-examples/spectrum-actions",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/spectrum-alert/":
      "/tools-and-provisioning/cloudformation/spectrum-examples/spectrum-alert",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/examples/spectrum/":
      "/tools-and-provisioning/cloudformation/spectrum-examples",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/introduction/":
      "/tools-and-provisioning/cloudformation/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/introduction/overview/":
      "/tools-and-provisioning/cloudformation/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/introduction/resources-types/":
      "/tools-and-provisioning/cloudformation/getting-started/resource-types",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/introduction/setup/":
      "/tools-and-provisioning/cloudformation/getting-started/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/template-structure/":
      "/tools-and-provisioning/cloudformation/template-structure/",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/template-structure/output/":
      "/tools-and-provisioning/cloudformation/template-structure/output",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/template-structure/parameters/":
      "/tools-and-provisioning/cloudformation/template-structure/parameters",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/template-structure/references/":
      "/tools-and-provisioning/cloudformation/template-structure/references",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/template-structure/resources/":
      "/tools-and-provisioning/cloudformation/template-structure/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudformation/troposphere/":
      "/tools-and-provisioning/cloudformation/tools/troposphere",

    "/provisioning-ci-cd-sdk/provisioning-tools/cloudfoundry-bosh/":
      "/tools-and-provisioning/cloudfoundry-bosh",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform":
      "/tools-and-provisioning/terraform",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/":
      "/tools-and-provisioning/terraform/",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/configuration/":
      "/tools-and-provisioning/terraform/getting-started/configuration",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/installation/":
      "/tools-and-provisioning/terraform/getting-started/",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/installation/installation-links/":
      "/tools-and-provisioning/terraform/getting-started/installation-links",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/installation/installation-manual/":
      "/tools-and-provisioning/terraform/getting-started/install-terraform",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/introduction/":
      "/tools-and-provisioning/terraform/",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/migrate-to-official-provider/":
      "/tools-and-provisioning/terraform/getting-started/migrate-to-spot-official-provider",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-1/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-1/elastic-beanstalk/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-1/elastigroup-emr/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-1/elastigroup/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-1/health-check-service/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-1/mlb/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-1/subscription/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/elastic-beanstalk/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/elastigroup-azure/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/elastigroup-gcp/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/elastigroup-gke/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/elastigroup/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/ocean-aws-launch-spec/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/ocean-aws/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-2/subscription-2/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/aws-managed-instance/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/elastic-beanstalk/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/elastigroup-azure/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/elastigroup-gcp/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/elastigroup-gke/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/elastigroup/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/ocean-aws-ecs-launch-spec/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/ocean-aws-ecs/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/ocean-aws-launch-spec/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/ocean-aws/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/ocean-gke-launch-spec-import/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/ocean-gke-launch-spec/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/ocean-gke/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/terraform-v-3/subscription/":
      "/tools-and-provisioning/terraform/tools/resources",

    "/provisioning-ci-cd-sdk/provisioning-tools/terraform/resources/upgrade-to-terraform-v3/":
      "/tools-and-provisioning/terraform/tools/upgrade-to-terraform-v012",

    "/provisioning-ci-cd-sdk/python-sdk/": "/tools-and-provisioning/python-sdk",

    "/spotinst-api/administration/organization-accounts/":
      "/administration/organizations/",

    "/spotinst-api/administration/whitelist-ips":
      "administration/api/whitelist-ips",

    "/spotinst-policy": "/administration/api/spot-policy-in-aws",

    "/spotinst-policy/": "/administration/api/spot-policy-in-aws",

    "/spotinst-video-tutorials/": "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/": "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/account-setup/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/elastigroup-budget/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/elastigroup-dashboard-overview/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/elastigroup-with-beanstalk/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/elastigroup-with-ecs/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/elastigroup-with-load-balancing/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/elastigroup/scaling-policies/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/managed-instance/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/managed-instance/managed-instance-overview/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/ocean/": "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/ocean/create-eks-cluster/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/ocean/dashboard-overview/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/ocean/importing-k8s-cluster-into-ocean/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/ocean/ocean-ecs/":
      "/connect-your-cloud-provider/",

    "/spotinst-video-tutorials/ocean/workload-migration/":
      "/connect-your-cloud-provider/",

    "/design-documents/msp/msp-enrollment": "/eco/tutorials/msp-enrollment",

    "/wave/wave-overview": "/wave/overview",

    "/tools-and-provisioning/cloudformation/elastigroup-examples/":
      "/tools-and-provisioning/cloudformation/",

    "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-for-ecs-yml-based":
      "/tools-and-provisioning/cloudformation/",

    "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-generic":
      "/tools-and-provisioning/cloudformation/",

    "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-stateful":
      "/tools-and-provisioning/cloudformation/",

    "/tools-and-provisioning/cloudformation/elastigroup-examples/create-elastigroup-yml-based":
      "/tools-and-provisioning/cloudformation/",

    "/tools-and-provisioning/cloudformation/elastigroup-examples/import-asg":
      "/tools-and-provisioning/cloudformation/",

    "/elastigroup/features/scaling/predictive-autoscaling":
      "/elastigroup/features/scaling/target-scaling",

    "/administration/users/configure-email-notifications":
      "/administration/notification-center/",

    "/administration/users/configure-slack-notifications":
      "/administration/notification-center/",

    "/ocean/concepts/ocean-cloud/scaling/":
      "/ocean/features/scaling-kubernetes",

    "/wave/": "/ocean-spark/",

    "/wave/overview": "/ocean-spark/",

    "/wave/getting-started/": "/ocean-spark/getting-started/",

    "/wave/features/": "/ocean-spark/product-tour/",

    "/wave/features/cluster-management":
      "/ocean-spark/product-tour/manage-clusters",

    "/wave/features/wave-cluster-overview":
      "/ocean-spark/product-tour/view-cluster-details",

    "/wave/features/cost-analysis": "/ocean-spark/product-tour/analyze-costs",

    "/elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch-a":
      "/elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch",

    "/elastigroup/features/core-features/elastigroup-capacity-instances-or-weighted-a":
      "/elastigroup/features/core-features/elastigroup-capacity-instances-or-weighted",

    "/elastigroup/features/core-features/market-scoring-managing-interruptions-a":
      "/elastigroup/features/core-features/market-scoring-managing-interruptions",

    "/elastigroup/features/compute/preferred-instance-types-a":
      "/elastigroup/features/compute/preferred-instance-types",

    "/ocean/features/launch-specifications": "/ocean/features/vngs/",

    "/ocean/features/z-OLD-launch-specifications": "/ocean/features/vngs/",

    "/ocean/features/z-OLD2-launch-specifications": "/ocean/features/vngs/",

    "/ocean/concepts/ocean-cloud/create-cluster-roll/": "/ocean/features/roll",

    "/elastigroup/tutorials/elastigroup-budgets/budgets":
      "/elastigroup/tutorials/elastigroup-budgets/",

    "/elastigroup/tutorials/amazon-ecs/enable-autoscaling-for-ecs":
      "/ocean/getting-started/ecs",

    "/elastigroup/features/amazon-ecs/": "/ocean/overview-ecs",

    "/elastigroup/features/amazon-ecs/elastigroup-for-ecs":
      "/ocean/overview-ecs",

    "/elastigroup/features/amazon-ecs/autoscaler-tetris-scaling":
      "/ocean/overview-ecs",

    "/elastigroup/features/amazon-ecs/automatic-autoscaler-for-ecs":
      "/ocean/overview-ecs",

    "/elastigroup/features/amazon-ecs/custom-autoscaler-for-ecs":
      "/ocean/overview-ecs",

    "/elastigroup/features/amazon-ecs/autoscaler-headroom":
      "/ocean/overview-ecs",

    "/elastigroup/tutorials/amazon-ecs/": "/ocean/getting-started/ecs",

    "/elastigroup/tutorials/amazon-ecs/get-started-with-ecs-on-elastigroup":
      "/ocean/getting-started/ecs",

    "/elastigroup/tutorials/amazon-ecs/configure-health-checks-and-autohealing":
      "/ocean/getting-started/ecs",

    "/elastigroup/tutorials/amazon-ecs/configure-attributes-for-task-placement-constraints":
      "/ocean/getting-started/ecs",

    "/elastigroup/tutorials/amazon-ecs/create-cluster-roll":
      "/ocean/getting-started/ecs",

    "/elastigroup/tutorials/amazon-eks/": "/ocean/getting-started/eks/",

    "/elastigroup/tutorials/amazon-eks/create-elastigroup-eks-cluster":
      "/ocean/getting-started/eks/",

    "/elastigroup/tutorials/amazon-eks/configure-kubectl-for-eks-install-controller":
      "/ocean/getting-started/eks/",

    "/connect-your-cloud-provider/aws-account":
      "/connect-your-cloud-provider/first-account/",

    "/connect-your-cloud-provider/azure-account":
      "/connect-your-cloud-provider/first-account/",

    "/connect-your-cloud-provider/gcp-project":
      "/connect-your-cloud-provider/first-account/",

    "/elastigroup/features/stateful-instance/": "/managed-instance/",

    "/elastigroup/features/stateful-instance/edit-a-stateful-instance":
      "/managed-instance/getting-started/create-a-new-managed-instance",

    "/elastigroup/features/stateful-instance/import-a-stateful-instance":
      "/managed-instance/getting-started/join-an-existing-managed-instance",

    "/elastigroup/features/stateful-instance/persist-data-volumes":
      "/managed-instance/features/data-volume-persistence",

    "/elastigroup/features/stateful-instance/persist-network":
      "/managed-instance/features/network-persistence",

    "/elastigroup/features/stateful-instance/persist-root-volume":
      "/managed-instance/features/root-volume-persistence",

    "/elastigroup/features/stateful-instance/schedule-stateful-capacity":
      "/managed-instance/features/",

    "/elastigroup/features/stateful-instance/stateful-instance-actions":
      "/managed-instance/features/managed-instance-actions",

    "/cloud-analyzer/tutorials/manage-subsets": "/eco/tutorials/manage-subsets",

    "/cloud-analyzer/tutorials/use-optimization-dashboard/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/use-optimization-dashboard/containers/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/use-optimization-dashboard/elastic-applications/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/use-optimization-dashboard/reservations/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/view-trends-notifications/":
      "/connect-your-cloud-provider/dashboard",

    "/cloud-analyzer/tutorials/view-trends-notifications/manage-event-definitions/":
      "/connect-your-cloud-provider/dashboard",

    "/cloud-analyzer/tutorials/view-trends-notifications/view-event-details/":
      "/connect-your-cloud-provider/dashboard",

    "/cloud-analyzer/tutorials/view-trends-notifications/view-all-archive/":
      "/connect-your-cloud-provider/dashboard",

    "/cloud-analyzer/getting-started/connect-your-aws-master-payer-account-existing-customer/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/getting-started/connect-master-payer-account-first-registration/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/getting-started/": "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/": "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/": "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/cloud-analyzer-policy/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/cloud-analyzer-policy/create-cloud-analyzer-policy-with-cloudformation/":
      "/connect-your-cloud-provider/optimize",

    "/cloud-analyzer/tutorials/save-analysis-reports/":
      "/connect-your-cloud-provider/cost-analysis/",

    "/cloud-analyzer/tutorials/analyze-your-costs/":
      "/connect-your-cloud-provider/cost-analysis/",

    "/elastigroup/azure/getting-started/import-an-existing-azure-resource":
      "/elastigroup/tutorials-azure/getting-started/import-an-existing-azure-resource",

    "/elastigroup-for-azure/shutdown-script-in-elastigroup":
      "/elastigroup/features-azure/shutdown-script-in-elastigroup-for-azure",

    "/administration/notification-center/create-a-notification-policy":
      "/administration/notification-center/event-policies/create",

    "/administration/notification-center/edit-a-notification-policy":
      "/administration/notification-center/event-policies/edit",

    "/hc/en-us/articles/115004280909-Spectrum-as-Grafana-Data-Source":
      "/elastigroup/tools-integrations/",

    "/elastigroup/features-azure/stateful-nodes/": "/managed-instance/azure/",

    "/elastigroup/features-azure/stateful-nodes/persist-os-data-disks":
      "/managed-instance/azure/features/persist-os-data-disks",

    "/elastigroup/features-azure/stateful-nodes/persist-network":
      "/managed-instance/azure/features/persist-network",

    "/elastigroup/features-azure/stateful-nodes/actions":
      "/managed-instance/azure/features/actions",

    "/elastigroup/features-azure/stateful-nodes/schedule":
      "/managed-instance/azure/features/schedule",

    "/elastigroup/tutorials-azure/use-stateful-nodes/":
      "/managed-instance/azure/tutorials/",

    "/elastigroup/tutorials-azure/use-stateful-nodes/import-a-stateful-vm":
      "/managed-instance/azure/getting-started/",

    "/elastigroup/tutorials-azure/use-stateful-nodes/manage":
      "/managed-instance/azure/tutorials/manage",

    "/elastigroup/tutorials-azure/use-stateful-nodes/view-details":
      "/managed-instance/azure/tutorials/view-details",

    "/ocean-cd/getting-started/end-to-end": "/ocean-cd/getting-started/",

    "/tools-and-provisioning/ci-cd/chef": "connect-your-cloud-provider/",

    "/tools-and-provisioning/cloudfoundry-bosh": "connect-your-cloud-provider/",

    "/elastigroup/tools-integrations/rightscale":
      "connect-your-cloud-provider/",

    "/elastigroup/tools-integrations/mesosphere":
      "connect-your-cloud-provider/",

    "/eco/getting-started/connect-azure-ea-to-eco":
      "eco/getting-started/connect-azure-account",

    "/ocean/getting-started/aks": "ocean/getting-started/aks/",

    "/ocean/tutorials/run-workloads": "ocean/",

    "/spot-security/features/vulnerability/configure":
      "spot-security/features/vulnerability/configure/",

    "/ocean-cd/getting-started/install-operator-using-API-or-helm":
      "ocean-cd/getting-started/install-operator-manager",

    "/connect-your-cloud-provider/first-account/aws-manually":
      "connect-your-cloud-provider/first-account/aws",

    "/elastigroup/tutorials/elastigroup-actions-menu/view-spot-markets":
      "elastigroup/tutorials/elastigroup-actions-menu/",

    "/ocean/tutorials/connect-an-aks-private-cluster":
      "ocean/getting-started/aks/",

    "/administration/access-policies/":
      "administration/policies/",

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

/**
 * Deprecated API reference routes.
 *
 * All routes starting with `/spotinst-api` should be redirected to OpenAPI
 * specification website.
 */
(() => {
  if (
    window.location.pathname.indexOf("/spotinst-api") === 0 &&
    window.location.pathname.indexOf("/administration/whitelist-ips") === -1
  ) {
    window.location.replace("https://docs.spot.io/api");
  }
})();
