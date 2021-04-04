# Deploying a Google Kubernetes Engine cluster

## Overview

> A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

[What is a Container?](https://www.docker.com/resources/what-container)

> You can configure a virtual machine (VM) instance or an instance template to deploy and launch a Docker container. Compute Engine supplies an up-to-date Container-Optimized OS (COS) image with Docker installed and launches your container when your VM starts.

[Deploying containers on VMs and MIGs](https://cloud.google.com/compute/docs/containers/deploying-containers)

> Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

[Kubernetes](https://kubernetes.io/)

> Kubernetes runs your workload by placing containers into Pods to run on Nodes. A node may be a virtual or physical machine, depending on the cluster. Each node is managed by the control plane and contains the services necessary to run Pods
>
> Typically you have several nodes in a cluster; in a learning or resource-limited environment, you might have only one node.
>
> The components on a node include the kubelet, a container runtime, and the kube-proxy.

DIAGRAM: https://kubernetes.io/docs/concepts/overview/components/

## Kubernetes and Google

> Secured and fully managed Kubernetes service with revolutionary autopilot mode of operation.

[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)

> Optimized cluster with pre-configured workload settings offering a nodeless experience. Let Google take care of the underlying infrastructure of your entire cluster, including nodes. Maximize operational efficiency and bolster security of your applications by restricting access only to Kubernetes API and safeguarding against node mutation. Pay only for your running pods, not system components, operating system overhead or unallocated capacity.

[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)

Anthos enables you to run Kubernetes clusters anywhere, in both cloud and on-premises environments. You get consistent managed Kubernetes experience with simple installs as well as upgrades validated by Google. Anthos can run on your existing virtualized infrastructure and bare metal servers without a hypervisor layer. Anthos simplifies your application stack, reduces the costs associated with licensing a hypervisor, and decreases time spent learning new skills.

[Anthos](https://cloud.google.com/anthos)

## Zonal v.s. Regional GKE Clusters

> This topic shows you how to create a standard zonal cluster with the default features enabled in Google Kubernetes Engine (GKE). Zonal clusters have a single control plane in a single zone. Depending on your availability requirements, you can choose to distribute your nodes for your zonal cluster in a single zone or in multiple zones.

[Creating a zonal cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster)

> This topic shows how to create a regional cluster to increase availability of the cluster's control plane and workloads during cluster upgrades, automated maintenance, or a zonal disruption. When you create a regional cluster instead of a single-zone or multi-zonal cluster, replicas of the control plane and nodes run in multiple zones of a given region. By default, a regional cluster's nodes are also replicated across the same zones as the control plane.

[Creating a regional cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster)

```
gcloud container clusters list
```

## kubectl CLI

> The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs.

[Install tools](https://kubernetes.io/docs/tasks/tools/)

> kubectl is supported within one minor version (older or newer) of kube-apiserver.

[Kubernetes version and version skew support policy](https://kubernetes.io/docs/setup/release/version-skew-policy/)

```
gcloud components install kubectl
```

```
kubectl version
```
