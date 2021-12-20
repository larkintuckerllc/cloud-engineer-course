# Continuous delivery

![Continuous delivery](cd.png)

[Continuous delivery](https://cloud.google.com/solutions/continuous-delivery)

# Container Registry

> Container Registry is a single place for your team to manage Docker images, perform vulnerability analysis, and decide who can access what with fine-grained access control. Existing CI/CD integrations let you set up fully automated Docker pipelines to get fast feedback.

[Container Registry](https://cloud.google.com/container-registry)

https://codeburst.io/source-to-image-s2i-by-example-9635c80b6108

https://cloud.google.com/container-registry/docs/quickstart

```
$ gcloud auth configure-docker
$ docker build . -t gcr.io/magnetic-lore-329211/hello-world:0.1.0
$ docker push gcr.io/magnetic-lore-329211/hello-world:0.1.0
```

# Artifact Registry

> As the evolution of Container Registry, Artifact Registry is a single place for your organization to manage container images and language packages (such as Maven and npm). It is fully integrated with Google Cloud’s tooling and runtimes and comes with support for native artifact protocols. This makes it simple to integrate it with your CI/CD tooling to set up automated pipelines.

[Artifact Registry](https://cloud.google.com/artifact-registry)

https://cloud.google.com/artifact-registry/docs/docker/quickstart

```
$ gcloud auth configure-docker us-central1-docker.pkg.dev
$ docker tag  7891a74397a4 \
us-central1-docker.pkg.dev/magnetic-lore-329211/my-repo/hello-world:0.1.0
$ docker push us-central1-docker.pkg.dev/magnetic-lore-329211/my-repo/hello-world:0.1.0
```

# Cloud Build

> Cloud Build is a service that executes your builds on Google Cloud Platform's infrastructure.

> Cloud Build can import source code from a variety of repositories or cloud storage spaces, execute a build to your specifications, and produce artifacts such as Docker containers or Java archives.

> You can write a build config to provide instructions to Cloud Build on what tasks to perform. You can configure builds to fetch dependencies, run unit tests, static analyses, and integration tests, and create artifacts with build tools such as docker, gradle, maven, bazel, and gulp.

> Cloud Build executes your build as a series of build steps, where each build step is run in a Docker container. Executing build steps is analogous to executing commands in a script.

> You can either use the build steps provided by Cloud Build and the Cloud Build community, or write your own custom build steps:

> You can manually start builds in Cloud Build using the gcloud command-line tool or the Cloud Build API, or use Cloud Build's build triggers feature to create an automated continuous integration/continuous delivery (CI/CD) workflow that starts new builds in response to code changes.

> You can integrate build triggers with many code repositories, including Cloud Source Repositories, GitHub, and Bitbucket.

[Overview of Cloud Build](https://cloud.google.com/build/docs/overview)

# Manually Start Build

https://cloud.google.com/build/docs/running-builds/start-build-command-line-api

> compresses your application code, Dockerfile, and any other assets in the current directory as indicated by .;

> uploads the files to a Cloud Storage bucket;

> initiates a build using the uploaded files as input;

> tags the image using the provided name

> pushes the built image to Container Registry.

```
gcloud builds submit --tag gcr.io/magnetic-lore-329211/hello-world:0.1.0 .
```

```
gcloud builds submit --tag \
us-central1-docker.pkg.dev/magnetic-lore-329211/my-repo/hello-world:0.1.0 .
```

# Customize Build

> If you're executing Docker builds in Cloud Build using the gcloud tool or build triggers, you can use only a Dockerfile to build the image. You don't require a separate build config file. If you wish to make more adjustments to your Docker builds, you can provide a build config file in addition to the Dockerfile. For instructions on how to build a Docker image using a Dockerfile, see Quickstart for Docker.

> A build config file contains instructions for Cloud Build to perform tasks based on your specifications. For example, your build config file can contain instructions to build, package, and push Docker images.

> A build step specifies an action that you want Cloud Build to perform. For each build step, Cloud Build executes a docker container as an instance of docker run. Build steps are analogous to commands in a script and provide you with the flexibility of executing arbitrary instructions in your build. 

> You can include up to 100 build steps in your config file.

> A Volume is a Docker container volume that is mounted into build steps to persist files across build steps. When Cloud Build runs a build step, it automatically mounts a workspace volume into /workspace. You can specify additional volumes to be mounted into your build steps' containers using the volumes field for your steps.

> The images field in the build config file specifies one or more Linux Docker images to be pushed by Cloud Build to Container Registry. You may have a build that performs tasks without producing any Linux Docker images, but if you build images and don't push them to the registry, the images are discarded on build completion.

> Cloud builders are container images with common languages and tools installed in them. You can configure Cloud Build to run a specific command within the context of these builders.

> Publicly available images

> Supported builder images provided by Cloud Build

> Community-contributed builders

> Writing your own custom builder

[Build configuration file schema](https://cloud.google.com/build/docs/build-config-file-schema)

```
gcloud builds submit --config cloudbuild.yaml
```

# Cloud Source Repositories

> Cloud Source Repositories provides fully featured, private Git repositories hosted on Google Cloud.

> You can use Cloud Source Repositories for collaborative, version-controlled development of any app or service, including those that run on App Engine and Compute Engine. If you use Cloud Debugger, you can use Cloud Source Repositories and related tools in the Google Cloud Console to view debugging information alongside your code during app runtime.

[Features](https://cloud.google.com/source-repositories/docs/features)

# Starting Builds with Build Triggers

> You must first connect Cloud Build to your source repository before building the code in that repository. Your repositories in Cloud Source Repositories are connected to Cloud Build by default. You can directly create triggers for your repositories in Cloud Source Repositories without manually connecting to them.

[Creating and managing build triggers](https://cloud.google.com/build/docs/automating-builds/create-manage-triggers)

# Deploy

> Spinnaker is an open-source, multi-cloud continuous delivery platform that helps you release software changes with high velocity and confidence.

[Concepts](https://spinnaker.io/docs/concepts/)

> Spinnaker supports Google Cloud Build as a continuous integration system.
Setting up Google Cloud Build as a Continuous Integration (CI) system within Spinnaker allows you to:

> trigger pipelines when a GCB build completes

> add a GCB stage to your pipeline

[Google Cloud Build](https://spinnaker.io/docs/setup/other_config/ci/gcb/)

https://cloud.google.com/build/docs/quickstart-deploy
