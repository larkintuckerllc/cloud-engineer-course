# Cloud Engineer Course

## Objective

https://cloud.google.com/certification/cloud-engineer

## Prerequisites

TODO

##  1. Setting up a cloud solution environment

### 1.1 Setting up cloud projects and accounts. Activities include:

- [Creating projects](1.1.1)
- [Assigning users to predefined IAM roles within a project](1.1.2)
- Managing users in Cloud Identity (manually and automated) **(advanced topic for later)**
- [Enabling APIs within projects](1.1.4)
- [Provisioning one or more Stackdriver workspaces](1.1.5)

### 1.2 Managing billing configuration. Activities include:

- [Creating one or more billing accounts](1.2.1)
- Linking projects to a billing account **(same as 1.2.1)**
- [Establishing billing budgets and alerts](1.2.3)
- Setting up billing exports to estimate daily/monthly charges **(same as 1.2.3)**

### [1.3 Installing and configuring the command line interface (CLI), specifically the Cloud SDK (e.g., setting the default project).](1.3)

## 2. Planning and configuring a cloud solution **(advanced topic for later)**

## 3. Deploying and implementing a cloud solution

### 3.1 Deploying and implementing Compute Engine resources. Tasks include:

- [Launching a compute instance using Cloud Console and Cloud SDK (gcloud) (e.g., assign disks, availability policy, SSH keys)](3.1.1)
- [Creating an autoscaled managed instance group using an instance template](3.1.2)
- [Generating/uploading a custom SSH key for instances](3.1.3)
- Configuring a VM for Stackdriver monitoring and logging
  - [Part 1](3.1.4.1)
  - [Part 2](3.1.4.2)
- Assessing compute quotas and requesting increases **(covered in 1.3)**
- Installing the Stackdriver Agent for monitoring and logging **(same as 3.1.4)**

### 3.2 Deploying and implementing Google Kubernetes Engine resources. Tasks include:

- [Deploying a Google Kubernetes Engine cluster](3.2.1)
- [Deploying a container application to Google Kubernetes Engine using pods](3.2.2)
- [Configuring Google Kubernetes Engine application monitoring and logging](3.2.3)

### 3.3 Deploying and implementing App Engine, Cloud Run, and Cloud Functions resources. Tasks include, where applicable:

- Deploying an application, updating scaling configuration, versions, and traffic splitting
  - [App Engine - Standard Environment - Basics](3.3.1.1)
  - [App Engine - Standard Environment - More](3.3.1.2)
  - [App Engine - Flexible Environment](3.3.1.3)
  - [Cloud Run](3.3.1.4)
  - [Cloud Functions](3.3.1.5)
- Deploying an application that receives Google Cloud events (e.g., Cloud Pub/Sub events, Cloud Storage object change notification events)
  - [Cloud Pub/Sub](3.3.2.1)
  - [App Engine - Flexible Environment](3.3.2.2)
  - [Cloud Run](3.3.2.3)

### 3.4 Deploying and implementing data solutions. Tasks include:

- Initializing data systems with products (e.g., Cloud SQL, Cloud Datastore, BigQuery, Cloud Spanner, Cloud Pub/Sub, Cloud Bigtable, Cloud Dataproc, Cloud Dataflow, Cloud Storage)
- Loading data (e.g., command line upload, API transfer, import/export, load data from Cloud Storage, streaming data to Cloud Pub/Sub)

### 3.5 Deploying and implementing networking resources. Tasks include:

- Creating a VPC with subnets (e.g., custom-mode VPC, shared VPC)
- Launching a Compute Engine instance with custom network configuration (e.g., internal-only IP address, Google private access, static external and private IP address, network tags)
- Creating ingress and egress firewall rules for a VPC (e.g., IP subnets, tags, service accounts)
- Creating a VPN between a Google VPC and an external network using Cloud VPN
- Creating a load balancer to distribute application network traffic to an application (e.g., Global HTTP(S) load balancer, Global SSL Proxy load balancer, Global TCP Proxy load balancer, regional network load balancer, regional internal load balancer)

### 3.6 Deploying a solution using Cloud Marketplace. Tasks include:

- Browsing Cloud Marketplace catalog and viewing solution details
- Deploying a Cloud Marketplace solution

### 3.7 Deploying application infrastructure using Cloud Deployment Manager. Tasks include:

- Developing Deployment Manager templates
- Launching a Deployment Manager template

### Addendum

- TODO: Images
- TODO: Deployment Model
