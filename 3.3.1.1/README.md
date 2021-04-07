# Deploying an application, updating scaling configuration, versions, and traffic splitting (App Engine - Standard Environment - Basics)

> Build highly scalable applications on a fully managed serverless platform.
>
> Build your application in Node.js, Java, Ruby, C#, Go, Python, or PHP—or bring your own language runtime.
>
> Custom runtimes allow you to bring any library and framework to App Engine by supplying a Docker container.
>
> A fully managed environment lets you focus on code while App Engine manages infrastructure concerns.

[App Engine](https://cloud.google.com/appengine)

> You can run your applications in App Engine using the flexible environment or standard environment. You can also choose to simultaneously use both environments for your application and allow your services to take advantage of each environment's individual benefits.

[Choosing an App Engine environment](https://cloud.google.com/appengine/docs/the-appengine-environments)

> Build, test, and deploy on our serverless CI/CD platform.

[Cloud Build](https://cloud.google.com/build)

## Pricing

> Standard: $0.05 per hour for B1 (600 MHz)
> Flexible: $0.0526 per core hour

[App Engine Pricing](https://cloud.google.com/appengine/pricing)

> GCE E2 Machine Type: $0.021811 / vCPU hour

[VM instances pricing](https://cloud.google.com/compute/vm-instance-pricing)

## Standard Environment

> The App Engine standard environment is based on container instances running on Google's infrastructure. Containers are preconfigured with one of several available runtimes.
>
> The App Engine standard environment makes it easy to build and deploy an application that runs reliably even under heavy load and with large amounts of data.
>
> Applications run in a secure, sandboxed environment, allowing the App Engine standard environment to distribute requests across multiple servers, and scaling servers to meet traffic demands. Your application runs within its own secure, reliable environment that is independent of the hardware, operating system, or physical location of the server.

[The App Engine Standard Environment](https://cloud.google.com/appengine/docs/standard)

> An App Engine app is made up of a single application resource that consists of one or more services. Each service can be configured to use different runtimes and to operate with different performance settings. Within each service, you deploy versions of that service. Each version then runs within one or more instances, depending on how much traffic you configured it to handle.

[An Overview of App Engine](https://cloud.google.com/appengine/docs/standard/nodejs/an-overview-of-app-engine)

https://cloud.google.com/appengine/docs/standard/nodejs/an-overview-of-app-engine

> Every App Engine application includes a default service. You must deploy the initial version of your app to the default service before you can create and deploy additional services to your app.

[Structuring Web Services in App Engine](https://cloud.google.com/appengine/docs/standard/nodejs/configuration-files)

> You can use dependencies by listing them in your package.json file. See Specifying Dependencies for more information.
>
> App Engine starts your application by running npm start.
>
Your server must listen to the port specified by the process.env.PORT environment variable.
>
> You need an app.yaml file to deploy your service to App Engine.

https://expressjs.com/en/starter/hello-world.html
