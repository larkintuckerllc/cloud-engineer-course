# Deploying an application, updating scaling configuration, versions, and traffic splitting (Cloud Run)

> Develop and deploy highly scalable containerized applications on a fully managed serverless platform.

[Cloud Run](https://cloud.google.com/run)

> $0.00002400 per vCPU-second
>
> $0.00000250 per GiB-Second
>
> $0.40 per million requests

[Pricing](https://cloud.google.com/run#section-14)

**note**: $0.0864 per vCPU-hour.

> Congratulations! You have just deployed an application packaged in a container image to Cloud Run. Cloud Run automatically and horizontally scales out your container image to handle the received requests, then scales in when demand decreases. You only pay for the CPU, memory, and networking consumed during request handling.

[Build and deploy a Node.js service](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/nodejs)

https://cloud.google.com/run/docs/resource-model

> Cloud Run accepts container images built with any tool capable of building container images, as long as they respect the container contract. In particular, your code must listen for HTTP requests on the port defined by the PORT environment variable. This PORT environment variable is automatically injected by Cloud Run into your container.

[Building Containers](https://cloud.google.com/run/docs/building/containers)

```
gcloud builds submit --tag gcr.io/training-main-310016/hello-world:0.1.0
```

> Google provides a set of CNCF-compatible Buildpacks that build source code into container images designed to run on Google Cloud container platforms, including Cloud Run.

[Building Containers](https://cloud.google.com/run/docs/building/containers)

```
gcloud run deploy --image gcr.io/training-main-310016/hello-world:0.1.0 --platform managed
```

```
gcloud builds submit --tag gcr.io/training-main-310016/hello-world:0.2.0
```

```
gcloud run deploy --image gcr.io/training-main-310016/hello-world:0.2.0 --platform managed
```

## Logging

> Cloud Run has two types of logs, and these are automatically sent to Cloud Logging:
>
> Request logs: logs of requests sent to Cloud Run services. These logs are created automatically.
>
> Container logs: logs emitted from the container instances, typically from your own code, written to supported locations as described in Writing container logs.

[Logging and viewing logs](https://cloud.google.com/run/docs/logging)

## Knative

> The Knative project provides a set of Kubernetes components that introduce event-driven and serverless capabilities for Kubernetes clusters.

[Welcome to Knative](https://knative.dev/docs/)

> There are two core Knative components that can be installed and used together or independently to provide different functions:
>
> Knative Serving: Easily manage stateless services on Kubernetes by reducing the developer effort required for autoscaling, networking, and rollouts.
>
> Knative Eventing: Easily route events between on-cluster and off-cluster components by exposing event routing as configuration rather than embedded in code.

[Welcome to Knative](https://knative.dev/docs/)

```
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello-world
  namespace: '559797863464'
  selfLink: /apis/serving.knative.dev/v1/namespaces/559797863464/services/hello-world
  uid: 73d4be90-e2d0-455d-b949-97e43c1f3c47
  resourceVersion: AAW/pDb5yIA
  generation: 1
  creationTimestamp: '2021-04-10T20:32:51.521460Z'
  labels:
    cloud.googleapis.com/location: us-central1
  annotations:
    run.googleapis.com/client-name: gcloud
    serving.knative.dev/creator: training.larkintuckerllc@gmail.com
    serving.knative.dev/lastModifier: training.larkintuckerllc@gmail.com
    client.knative.dev/user-image: gcr.io/training-main-310016/hello-world:0.1.0
    run.googleapis.com/client-version: 333.0.0
    run.googleapis.com/launch-stage: BETA
    run.googleapis.com/ingress: all
    run.googleapis.com/ingress-status: all
spec:
  template:
    metadata:
      name: hello-world-00001-viv
      annotations:
        run.googleapis.com/client-name: gcloud
        client.knative.dev/user-image: gcr.io/training-main-310016/hello-world:0.1.0
        run.googleapis.com/client-version: 333.0.0
        autoscaling.knative.dev/maxScale: '100'
        run.googleapis.com/sandbox: gvisor
    spec:
      containerConcurrency: 80
      timeoutSeconds: 300
      containers:
      - image: gcr.io/training-main-310016/hello-world:0.1.0
        ports:
        - name: http1
          containerPort: 8080
        resources:
          limits:
            memory: 256Mi
            cpu: 1000m
  traffic:
  - percent: 100
    latestRevision: true
status:
  observedGeneration: 1
  conditions:
  - type: Ready
    status: 'True'
    lastTransitionTime: '2021-04-10T20:35:01.434496Z'
  - type: ConfigurationsReady
    status: 'True'
    lastTransitionTime: '2021-04-10T20:35:01.252569Z'
  - type: RoutesReady
    status: 'True'
    lastTransitionTime: '2021-04-10T20:35:01.434496Z'
  latestReadyRevisionName: hello-world-00001-viv
  latestCreatedRevisionName: hello-world-00001-viv
  traffic:
  - revisionName: hello-world-00001-viv
    percent: 100
    latestRevision: true
  url: https://hello-world-qwj2vst5dq-uc.a.run.app
  address:
    url: https://hello-world-qwj2vst5dq-uc.a.run.app
```

## Scaling Configuration

```
gcloud run services describe hello-world
```

> In Cloud Run, each revision is automatically scaled to the number of container instances needed to handle all incoming requests.
>
> When more container instances are processing requests, more CPU and memory will be used, resulting in higher costs. When new container instances need to be started, requests might take more time to be processed, decreasing the performances of your service.
>
> To give you more control, Cloud Run provides a concurrency setting that specifies the maximum number of requests that can be processed simultaneously by a given container instance.

[Concurrency](https://cloud.google.com/run/docs/about-concurrency)

> Specifying maximum instances in Cloud Run allows you to limit the scaling of your service in response to incoming requests. Use this setting as a way to control your costs or to limit the number of connections to a backing service, such as to a database.

[Setting a maximum number of container instances](https://cloud.google.com/run/docs/configuring/max-instances)

> By default, Cloud Run scales in to the number of instances based on the number of incoming requests. However, if your service requires reduced latency and you want to limit the number of cold starts, you can change this default behavior by specifying a minimum number of container instances to be kept warm and ready to serve requests. 

[Using minimum instances](https://cloud.google.com/run/docs/configuring/min-instances)

## Traffic Splitting

> To split traffic between two or more revisions:

[Rollbacks, gradual rollouts, and traffic migration](https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration)
