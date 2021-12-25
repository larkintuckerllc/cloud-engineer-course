# Planning and configuring a cloud solution

This section is simply theorectical; no video.

## 2.1 Planning and estimating Google Cloud product use using the Pricing Calculator

## 2.2 Planning and configuring compute resources. Considerations include:

### Preemptible VM Instances

> Preemptible VM instances are available at much lower price—a 60-91% discount—compared to the price of standard VMs. However, Compute Engine might stop (preempt) these instances if it needs to reclaim those resources for other tasks. Preemptible instances are excess Compute Engine capacity, so their availability varies with usage.

> If your apps are fault-tolerant and can withstand possible instance preemptions, then preemptible instances can reduce your Compute Engine costs significantly. For example, batch processing jobs can run on preemptible instances. If some of those instances stop during processing, the job slows but does not completely stop. Preemptible instances complete your batch processing tasks without placing additional workload on your existing instances and without requiring you to pay full price for additional normal instances.

> Compute Engine always stops preemptible instances after they run for 24 hours. Certain actions reset this 24-hour counter.

> Compute Engine performs the following steps to preempt an instance:

> Compute Engine sends a preemption notice to the instance in the form of an ACPI G2 Soft Off signal. You can use a shutdown script to handle the preemption notice and complete cleanup actions before the instance stops.

> If the instance does not stop after 30 seconds, Compute Engine sends an ACPI G3 Mechanical Off signal to the operating system.
Compute Engine transitions the instance to a TERMINATED state.

> Spot VMs (Preview) are the latest version of preemptible VM instances. Preemptible VMs continue to be supported for new and existing VMs, and preemptible VMs now use the same pricing model as Spot VMs. However, Spot VMs provide new features that are not supported for preemptible VMs. For example, preemptible VMs can only run for up to 24 hours at a time, but Spot VMs do not have a maximum runtime.

[Preemptible VM instances](https://cloud.google.com/compute/docs/instances/preemptible)

### Sustained Use Discounts

> Sustained use discounts are automatic discounts for running specific Compute Engine resources a significant portion of the billing month. Sustained use discounts apply to the following resources:

> For general-purpose N2 and N2D predefined and custom machine types, and for compute-optimized machine types, you can receive a discount of up to 20%.

> For general-purpose N1 predefined and custom machine types, sole-tenant nodes (vCPUs, memory, and premium cost), and GPUs, you can get a discount of up to 30%.

[Sustained use discounts](https://cloud.google.com/compute/docs/sustained-use-discounts)

### Committed Use Discounts

> Committed use discounts are ideal for workloads with predictable resource needs. When you purchase a committed use contract, you purchase Compute Engine resources—such as vCPUs, memory, GPUs, local SSDs, and sole-tenant nodes—at a discounted price in return for committing to paying for those resources for 1 year or 3 years. The discount is up to 57% for most resources like machine types or GPUs. The discount is up to 70% for memory-optimized machine types. For committed use prices for different machine types, see VM instances pricing.

[Committed use discounts](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts)

https://john-tucker.medium.com/planning-google-cloud-platform-gcp-compute-resources-a478bde04d7c

## 2.3 Planning and configuring data storage options. Considerations include:

### Database Options

Product choice (e.g., Cloud SQL, BigQuery, Firestore, Cloud Spanner, Cloud Bigtable)

Cloud Spanner   | SQL   | OLTP | Closed SRC
Cloud SQL       | SQL   | OLTP | Open SRC
BigQuery        | SQL   | OLAP | Closed SRC
Cloud BigTable  | NOSQL | OLAP | Closed SRC
Cloud Datastore | NOSQL | OLTP | Closed SRC

### GCE Storage Options

> Compute Engine offers several types of storage options for your instances. Each of the following storage options has unique price and performance characteristics:

> Zonal persistent disk: Efficient, reliable block storage.

> Regional persistent disk: Regional block storage replicated in two zones.

> Local SSD: High performance, transient, local block storage.

> Cloud Storage buckets: Affordable object storage.

> Filestore: High performance file storage for Google Cloud users.

[Storage options](https://cloud.google.com/compute/docs/disks)

Local SSD            | Block  | Instance    | SSD
Regional Standard PD | Block  | Regional(1) | HDD
Regional Balanced PD | Block  | Regional(1) | SSD
Regional SSD PD      | Block  | Regional(1) | SSD
Zonal Standard PD    | Block  | Zonal       | HDD
Zonal Balanced PD    | Block  | Zonal       | SSD
Zonal SSD PD         | Block  | Zonal       | SSD
Zonal Extreme PD     | Block  | Zonal       | SSD
Cloud Storage Bucket | Object | Global      | N/A
Filestore            | File   | Zonal (2)   | N/A

(1) Regional redundancy, Zonal access

(2) Zonal redundancy, Global access

> A Filestore instance consists of a single NFS file share with configurable export settings and default Unix permissions. For more information about these settings and how they affect access, see Access Control.

[Architecture](https://cloud.google.com/filestore/docs/architecture)

### Cloud Storage

Standard | 0 Days
Nearline | 30 Days
Coldline | 90 Days
Archive  | 365 Days

## 2.4 Planning and configuring network resources. Tasks include:

### Differentiating load balancing options

TODO

### Identifying resource locations in a network for availability

TODO

### Configuring Cloud DNS

TODO