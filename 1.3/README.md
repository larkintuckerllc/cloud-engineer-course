# Installing and configuring the command line interface (CLI), specifically the Cloud SDK (e.g., setting the default project)

> Tools and libraries for interacting with Google Cloud products and services.
> 
> The gcloud CLI manages authentication, local configuration, developer workflow, interactions with Google Cloud APIs. With the gcloud command-line tool, it’s easy to perform many common cloud tasks, like creating a Compute Engine VM instance, managing a Google Kubernetes Engine cluster, and deploying an App Engine application, either from the command line or in scripts and other automations.
>
> Cloud SDK comes with installable language-specific Cloud Client Libraries and Google API Client Libraries. These libraries use each supported language’s natural conventions and styles, handling authentication, reducing the amount of necessary boilerplate code, and optimizing the developer workflow.
>
> A collection of command-line tools comes packaged with Cloud SDK, including gsutil, bq, and kubectl. The gsutil tool allows you to manage Cloud Storage buckets and objects using the command line. Run queries and manipulate datasets, tables, and entities in BigQuery through the command line with bq. With kubectl, you can deploy and manage Kubernetes container clusters using the command line.

[Cloud SDK](https://cloud.google.com/sdk)

https://cloud.google.com/sdk/docs/quickstart

## Configurations

```
glcoud init
```

```
gcloud config list
```

```
gcloud config configurations list
```

```
gcloud config configurations create
```

```
gcloud config configurations activate
```

## Quotas

> Google Cloud enforces quotas on resource usage for project owners, setting a limit on how much of a particular Google Cloud resource your project can use. Quotas fall under two categories:
> 
> Rate quotas, such as the number of API requests per day. This quota resets after a time interval that is specific to the service, such as a minute or a day.
>
> Allocation quotas, such as the number of virtual machine (VM) instances or load balancers used by your project at a given time. This quota does not reset over time, but this quota must be explicitly released when you no longer want to use the resource—for example, by deleting a GKE cluster.

[Working with quotas](https://cloud.google.com/docs/quota)

## Sample glcoud Usage

```
gcloud projects get-iam-policy training-main
```

## Other CLI

```
gsutil ls
```

## Google Cloud Client Libraries

```
pip install -r requirements.txt
```

```
python -m helloaccounts
```

```
gcloud auth application-default login
```

```
python -m helloaccounts
```
