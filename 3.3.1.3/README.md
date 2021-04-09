# Deploying an application, updating scaling configuration, versions, and traffic splitting (App Engine - Flexible Environment)

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

TODO
