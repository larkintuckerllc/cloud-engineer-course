# Deploying an application, updating scaling configuration, versions, and traffic splitting (App Engine - Standard Environment - More)

## Viewing Logs

> Viewing application logs is one of the simplest ways to monitor the performance of your web services.

[Viewing Your Service's Logs](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/viewing-service-logs)

## Scaling Configuration

> Instances are the basic building blocks of App Engine, providing all the resources needed to successfully host your application. At any given time, your application can be running on one or many instances with requests being spread across all of them. Each instance includes a security layer to ensure that instances cannot inadvertently affect each other.

[How Instances are Managed](https://cloud.google.com/appengine/docs/standard/nodejs/how-instances-are-managed)

> Automatic scaling creates instances based on request rate, response latencies, and other application metrics. You can specify thresholds for each of these metrics, as well as a minimum number instances to keep running at all times.
>
> Basic scaling creates instances when your application receives requests. Each instance will be shut down when the application becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
>
> Manual scaling specifies the number of instances that continuously run regardless of the load level. This allows tasks such as complex initializations and applications that rely on the state of the memory over time.

[How Instances are Managed](https://cloud.google.com/appengine/docs/standard/nodejs/how-instances-are-managed)

> The instance class determines the amount of memory and CPU available to each instance, the amount of free quota, and the cost per hour after your app exceeds the free quota.
>
> The memory and CPU limits vary by runtime generation. For all runtime generations, the memory limit includes the memory your app uses along with the memory that the runtime itself needs to run your app. The Java runtimes use more memory to run your app than other runtimes.
>
> To override the default instance class, use the instance_class setting in your app's app.yaml file.

[The App Engine Standard Environment](https://cloud.google.com/appengine/docs/standards)

```
runtime: nodejs14
env: standard
instance_class: F1
handlers:
  - url: .*
    script: auto
automatic_scaling:
  min_idle_instances: automatic
  max_idle_instances: automatic
  min_pending_latency: automatic
  max_pending_latency: automatic
network: {}
```

## Manual Scaling

> Applications that use an instance class of B1 or higher must specify either this element or manual_scaling.

[app.yaml Configuration File](https://cloud.google.com/appengine/docs/standard/nodejs/config/appref)

```
gcloud app deploy
```

## Warmup Requests

> Loading your app's code to a new instance can result in loading requests. Loading requests can result in increased request latency for your users, but you can avoid this latency using warmup requests. Warmup requests load your app's code into a new instance before any live requests reach that instance.
>
> If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance. However, these detection attempts do not work in every case. As a result, you might encounter loading requests, even if warmup requests are enabled in your app. For example, if your app is serving no traffic, the first request to the app will always be a loading request, not a warmup request.

[Configuring Warmup Requests to Improve Performance](https://cloud.google.com/appengine/docs/standard/nodejs/configuring-warmup-requests)

```
gcloud app deploy
```

## Automatic Scaling

https://cloud.google.com/appengine/docs/standard/nodejs/config/appref#scaling_elements

## Traffic Splitting

> You can use traffic splitting to specify a percentage distribution of traffic across two or more of the versions within a service. Splitting traffic allows you to conduct A/B testing between your versions and provides control over the pace when rolling out features.
>
> Traffic splitting is applied to URLs that do not explicitly target a version. For example, the following URLs split traffic because they target all the available versions within the specified service:

[Splitting Traffic](https://cloud.google.com/appengine/docs/standard/nodejs/splitting-traffic)

> Before you turn on traffic splitting, you might want to account for potential caching problems. Caching issues can exist for any App Engine application, especially when deploying a new version. Traffic splitting often makes subtle caching problems more apparent.

[Splitting Traffic](https://cloud.google.com/appengine/docs/standard/nodejs/splitting-traffic)

TODO

> When you have specified two or more versions for splitting, you must choose whether to split traffic by using either an IP address or HTTP cookie. It's easier to set up an IP address split, but a cookie split is more precise. For more information, see IP address splitting and Cookie splitting.

[Splitting Traffic](https://cloud.google.com/appengine/docs/standard/nodejs/splitting-traffic)