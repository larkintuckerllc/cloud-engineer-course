# Deploying an application, updating scaling configuration, versions, and traffic splitting (App Engine - Flexible Environment)

[![Video](video.png)](https://youtu.be/BAWYP-9kVIQ)

**Addendum 2022-02-13**

One important distinction between App Engine Standard and Flexible environment is that with Flexible environment, the workload can run in one's VPC network; thus accessing other resources in the VPC.

> The flexible environment is optimal for applications with the following characteristics:
> 
> Source code that is written in a version of any of the supported programming languages: Python, Java, Node.js, Go, Ruby, PHP, or .NET
>
> Runs in a Docker container that includes a custom runtime or source code written in other programming languages.
> 
> Uses or depends on frameworks that include native code.
>
> Accesses the resources or services of your Google Cloud project that reside in the Compute Engine network.

[Choose an App Engine environment](https://cloud.google.com/appengine/docs/the-appengine-environments)

**Notes**

> Application instances run within Docker containers on Compute Engine virtual machines (VM).
>
> Applications that receive consistent traffic, experience regular traffic fluctuations, or meet the parameters for scaling up and down gradually.

[Choosing an App Engine environment](https://cloud.google.com/appengine/docs/the-appengine-environments)

> The Node.js runtime is the software stack responsible for installing your application's code and its dependencies and running your application. The runtime is declared in app.yaml as runtime: nodejs

[The Node.js Runtime](https://cloud.google.com/appengine/docs/flexible/nodejs/runtime)

> The default Node.js engine aims to be the latest LTS release. You can specify a different Node.js version in your application's package.json file by using the engines field. To prevent unexpected breakages, you should specify a Node.js version.

[The Node.js Runtime](https://cloud.google.com/appengine/docs/flexible/nodejs/runtime)

```
gcloud app deploy
```

```
runtime: nodejs
api_version: '1.0'
env: flexible
threadsafe: true
automatic_scaling:
  cool_down_period: 120s
  min_num_instances: 2
  max_num_instances: 20
  cpu_utilization:
    target_utilization: 0.5
network: {}
liveness_check:
  initial_delay_sec: 300
  check_interval_sec: 30
  timeout_sec: 4
  failure_threshold: 4
  success_threshold: 2
readiness_check:
  check_interval_sec: 5
  timeout_sec: 4
  failure_threshold: 2
  success_threshold: 2
  app_start_timeout_sec: 300
```

https://cloud.google.com/appengine/docs/flexible/nodejs/reference/app-yaml

## Resource Settings

> These settings control the computing resources. App Engine assigns a machine type based on the amount of CPU and memory you've specified. The machine is guaranteed to have at least the level of resources you've specified, it might have more.

[app.yaml Configuration File](https://cloud.google.com/appengine/docs/flexible/nodejs/reference/app-yaml)

```
gcloud app deploy
```

## Custom Runtime

> Copy the nginx configuration file. This sets up the behavior of nginx, most importantly, it ensure nginx listens on port 8080. Google App Engine expects the runtime to respond to HTTP requests at port 8080.

[Quickstart for Custom Runtimes in the App Engine Flexible Environment](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/quickstart)

