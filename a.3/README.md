# Planning and configuring a cloud solution

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

Product choice (e.g., Cloud SQL, BigQuery, Firestore, Cloud Spanner, Cloud Bigtable)
Choosing storage options (e.g., Zonal persistent disk, Regional balanced persistent disk, Standard, Nearline, Coldline, Archive)

## 2.4 Planning and configuring network resources. Tasks include:

Differentiating load balancing options
Identifying resource locations in a network for availability
Configuring Cloud DNS
