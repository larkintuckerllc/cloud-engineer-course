# Creating an autoscaled managed instance group using an instance template

## Instance Template

> Instance templates define the machine type, boot disk image or container image, labels, and other instance properties. You can then use an instance template to create a MIG or to create individual VMs. Instance templates are a convenient way to save a VM instance's configuration so you can use it later to create VMs or groups of VMs.

[Instance templates](https://cloud.google.com/compute/docs/instance-templates)

```
#! /bin/bash
apt update
apt -y install apache2
cat <<EOF > /var/www/html/index.html
<html><body><h1>Hello World</h1>
<p>This page was created from a startup script.</p>
</body></html>
EOF
```

# Managed Instance Group

> Managed instance groups (MIGs) let you operate apps on multiple identical VMs. You can make your workloads scalable and highly available by taking advantage of automated MIG services, including: autoscaling, autohealing, regional (multiple zone) deployment, and automatic updating.

[Instance Groups](https://cloud.google.com/compute/docs/instance-groups)

> A zonal MIG, which deploys instances to a single zone.
>
> A regional MIG, which deploys instances to multiple zones across the same region.
>
> Both types offer all of the advantages of MIGs. Regional MIGs add higher availability by spreading application load across multiple zones, which protects your workload against zonal failure, and regional MIGs offer more capacity, with a maximum of 2,000 instances per regional group.

[Instance Groups](https://cloud.google.com/compute/docs/instance-groups)

> MIGs support autoscaling that dynamically adds or removes VM instances from the group in response to increases or decreases in load. You can configure an autoscaling policy to specify how you want to scale the group. In your autoscaling policy, you can set one or more signals to scale the group based on CPU utilization, load balancing capacity, Cloud Monitoring metrics, schedules, or, for zonal MIGs, by using a queue-based workload like Pub/Sub.

[Instance Groups](https://cloud.google.com/compute/docs/instance-groups)

> The cool down period is also known as the application initialization period. Compute Engine uses the cool down period for scaling decisions in two ways:
>
> To omit unusual usage data after a VM is created and while its application is initializing.
If predictive autoscaling is enabled, to inform the autoscaler how much time in advance to scale out ahead of anticipated load, so that applications are initialized when the load arrives.

[Autoscaling groups of instances](https://cloud.google.com/compute/docs/autoscaler)

> Managed instance groups maintain high availability of your applications by proactively keeping your instances available, which means in RUNNING state. A MIG automatically recreates an instance that is not RUNNING. However, relying only on VM state may not be sufficient. You may want to recreate instances when an application freezes, crashes, or runs out of memory.
>
> Application-based autohealing improves application availability by relying on a health checking signal that detects application-specific issues such as freezing, crashing, or overloading. If a health check determines that an application has failed on a VM, the group automatically recreates that VM instance.

[Autoscaling groups of instances](https://cloud.google.com/compute/docs/autoscaler)

# More Instance Group

> You can build highly available deployments of stateful workloads on VMs using stateful managed instance groups (stateful MIGs). Stateful workloads include applications with stateful data or configuration, such as databases, legacy monolith applications, and long-running batch computations with checkpointing.

[Autoscaling groups of instances](https://cloud.google.com/compute/docs/autoscaler)

> Unmanaged instance groups can contain heterogeneous instances that you can arbitrarily add and remove from the group. Unmanaged instance groups do not offer autoscaling, autohealing, rolling update support, multi-zone support, or the use of instance templates and are not a good fit for deploying highly available and scalable workloads. Use unmanaged instance groups if you need to apply load balancing to groups of heterogeneous instances, or if you need to manage the instances yourself.

[Autoscaling groups of instances](https://cloud.google.com/compute/docs/autoscaler)
