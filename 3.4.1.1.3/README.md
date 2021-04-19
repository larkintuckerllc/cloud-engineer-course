# Initializing data systems with products (Cloud SQL) (Part 3)

> The Cloud SQL Auth proxy works by having a local client running in the local environment. Your application communicates with the Cloud SQL Auth proxy with the standard database protocol used by your database. The Cloud SQL Auth proxy uses a secure tunnel to communicate with its companion process running on the server.

[About the Cloud SQL Auth proxy](https://cloud.google.com/sql/docs/postgres/sql-proxy)

> You must provide the Cloud SQL Auth proxy with Google Cloud authentication credentials.

[About the Cloud SQL Auth proxy](https://cloud.google.com/sql/docs/postgres/sql-proxy)

## Google Compute Engine

### Public IP

* GCE Public Static IP, Authorized Networks, and SSL/TLS
* Cloud SQL Auth Proxy

### Private IP

* Direct Private IP connection

## Google Kubernetes Engine (GKE)

> To access a Cloud SQL instance from an application running in Google Kubernetes Engine, you can use either the Cloud SQL Auth proxy (with public or private IP), or connect directly using a private IP address.

[Connecting from Google Kubernetes Engine](https://cloud.google.com/sql/docs/postgres/connect-kubernetes-engine)

> When you connect using the Cloud SQL Auth proxy, the Cloud SQL Auth proxy is added to your pod using the sidecar container pattern. The Cloud SQL Auth proxy container is in the same pod as your application, which enables the application to connect to the Cloud SQL Auth proxy using localhost, increasing security and performance.

[Connecting from Google Kubernetes Engine](https://cloud.google.com/sql/docs/postgres/connect-kubernetes-engine)

## App Engine Standard

### Public IP

> Once correctly configured, you can connect your service to your Cloud SQL instance's Unix domain socket accessed on the environment's filesystem at the following path: /cloudsql/INSTANCE_CONNECTION_NAME.

[Connecting from App Engine standard environment to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-app-engine-standard#public-ip-default)

### Private IP

> A Serverless VPC Access connector handles communication to your VPC network. To connect directly with private IP, you need to:

[Connecting from App Engine standard environment to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-app-engine-standard#public-ip-default)

## App Engine Flexible

### Public IP

> Update your project's app.yaml file with the option that works best. You can use a comma-separated list of instances to specify multiple options at once.

[Connecting from App Engine flexible environment to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-app-engine-flexible)

### Private IP

> In order to connect to your Cloud SQL instance over private IP, your App Engine flexible environment deployment must be in the same VPC network as your Cloud SQL instance.

[Connecting from App Engine flexible environment to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-app-engine-flexible)


**note:** We did not cover the feature where-by App Engine flexible environment services can be configured with network settings that allow one to run instances in a particular VPC subnetwork.

## Cloud Run

### Public IP

The Cloud Run Cloud SQL Connections feature enables a Cloud Run service to access Cloud SQL using Cloud SQL Auth Proxy.

> Once correctly configured, you can connect your service to your Cloud SQL instance's Unix domain socket accessed on the environment's filesystem at the following path: /cloudsql/INSTANCE_CONNECTION_NAME.

[Connecting from Cloud Run (fully managed) to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-run)

### Private IP

> A Serverless VPC Access connector handles communication to your VPC network. To connect directly with private IP, you need to:

[Connecting from Cloud Run (fully managed) to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-run)

## Cloud Functions

### Public IP

> Once correctly configured, you can connect your service to your Cloud SQL instance's Unix domain socket accessed on the environment's filesystem at the following path: /cloudsql/INSTANCE_CONNECTION_NAME.

[Connecting from Cloud Functions to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-functions)

### Private IP

> A Serverless VPC Access connector handles communication to your VPC network. To connect directly with private IP, you need to:

[Connecting from Cloud Functions to Cloud SQL](https://cloud.google.com/sql/docs/postgres/connect-functions)
