# Configuring Google Kubernetes Engine application monitoring and logging

[![Video](video.png)](https://youtu.be/c-eunf9dlZk)

> Google Kubernetes Engine (GKE) includes native integration with Cloud Monitoring and Cloud Logging. When you create a GKE cluster, Cloud Operations for GKE is enabled by default and provides a monitoring dashboard specifically tailored for Kubernetes.
>
> With Cloud Operations for GKE, you can control whether or not Cloud Logging collects application logs. You also have the option to disable the Cloud Monitoring and Cloud Logging integration altogether. For more information on the installation instructions, see Installing Cloud Operations for GKE support.

[Overview of Google Cloud's operations suite for GKE](https://cloud.google.com/stackdriver/docs/solutions/gke)


## Cloud Logging and Cloud Monitoring

```
kubectl apply -f logging-pod.yaml
```

```
kubectl logs logging
```

```
resource.type="k8s_container"
resource.labels.cluster_name="cluster-1"
resource.labels.namespace_name="default"
resource.labels.pod_name="logging"
```

