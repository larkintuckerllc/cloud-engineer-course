# Initializing data systems with products (Cloud Dataproc)

There is not much here to do other than generally understand what Dataproc is and its pricing.

> Dataproc is a managed Spark and Hadoop service that lets you take advantage of open source data tools for batch processing, querying, streaming, and machine learning. Dataproc automation helps you create clusters quickly, manage them easily, and save money by turning clusters off when you don't need them. With less time and money spent on administration, you can focus on your jobs and your data.

[What is Dataproc?](https://cloud.google.com/dataproc/docs/concepts/overview)

## Pricing

> Dataproc pricing is based on the size of Dataproc clusters and the duration of time that they run. The size of a cluster is based on the aggregate number of virtual CPUs (vCPUs) across the entire cluster, including the master and worker nodes. The duration of a cluster is the length of time between cluster creation and cluster deletion.
>
> The Dataproc pricing formula is: $0.010 * # of vCPUs * hourly duration.
> 
> Although the pricing formula is expressed as an hourly rate, Dataproc is billed by the second, and all Dataproc clusters are billed in one-second clock-time increments, subject to a 1-minute minimum billing. Usage is stated in fractional hours (for example, 30 minutes is expressed as 0.5 hours) in order to apply hourly pricing to second-by-second use.
>
> Dataproc pricing is in addition to the Compute Engine per-instance price for each virtual machine (see Use of other Google Cloud resources).

[Dataproc pricing](https://cloud.google.com/dataproc/pricing)
