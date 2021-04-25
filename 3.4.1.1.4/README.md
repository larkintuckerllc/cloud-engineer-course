# Initializing data systems with products (Cloud SQL) (Part 4)

## Customer-Managed Encryption Keys

> Your data is encrypted using the 256-bit Advanced Encryption Standard (AES-256), or better, with symmetric keys: that is, the same key is used to encrypt the data when it is stored, and to decrypt it when it is used. These data keys are themselves encrypted using a key stored in a secure keystore, and changed regularly.

[Cloud SQL FAQ](https://cloud.google.com/sql/faq)

> The CMEK feature lets you use your own cryptographic keys for data at rest in Cloud SQL. After adding customer-managed encryption keys, whenever an API call is made, Cloud SQL uses your key to access data.

[Overview of customer-managed encryption keys (CMEK)](https://cloud.google.com/sql/docs/postgres/cmek)

## Backups

> Warning: All data on an instance, including backups, is permanently lost when that instance is deleted. To preserve your data, export it to Cloud Storage before you delete it.

[Creating and managing on-demand and automatic backups](https://cloud.google.com/sql/docs/postgres/backup-recovery/backing-up)

https://cloud.google.com/sql/docs/postgres/backup-recovery/backing-up

> Point-in-time recovery helps you recover an instance to a specific point in time. For example, if an error causes a loss of data, you can recover a database to its state before the error occurred.
>
> A point-in-time recovery always creates a new instance; you cannot perform a point-in-time recovery to an existing instance. The new instance inherits the settings of the source instance, similar to how clone creation works.
>
> Point-in-time recovery is enabled by default when you create a new Cloud SQL instance.

[Overview of restoring an instance](https://cloud.google.com/sql/docs/postgres/backup-recovery/restore)

> When you restore an instance from a backup, whether to the same instance or to a different instance, keep in mind the following items:

> The restore operation overwrites all data on the target instance.
>
> The target instance is unavailable for connections during the restore operation; existing connections are lost.
>
> If you are restoring to an instance with read replicas, you must delete all replicas and recreate them after the restore operation completes.
> 
> The restore operation restarts the instance.

[Overview of restoring an instance](https://cloud.google.com/sql/docs/postgres/backup-recovery/restore)

https://cloud.google.com/sql/docs/postgres/backup-recovery/restoring

## Read Replicas

> Cloud SQL supports the following types of replicas:
>
> Read replicas
>
> Cross-region read replicas

[Replication in Cloud SQL](https://cloud.google.com/sql/docs/postgres/replication)

> You use a read replica to offload work from a Cloud SQL instance. The read replica is an exact copy of the primary instance. Data and other changes on the primary instance are updated in almost real time on the read replica.
>
> Read replicas are read-only; you cannot write to them. The read replica processes queries, read requests, and analytics traffic, thus reducing the load on the primary instance. You can have up to 10 read replicas per primary instance.

[Replication in Cloud SQL](https://cloud.google.com/sql/docs/postgres/replication)

> As a best practice, put read replicas in a different zone than the primary instance when you use HA on your primary instance. This practice ensures that read replicas continue to operate when the zone that contains the primary instance has an outage. See the Overview of high availability for more information.

[Replication in Cloud SQL](https://cloud.google.com/sql/docs/postgres/replication)

> Cross-region replication lets you create a read replica in a different region from the primary instance. You create a cross-region read replica the same way as you create an in-region replica.
> 
> Cross-region replicas:
> 
> Improve read performance by making replicas available closer to your application's region.
Provide additional disaster recovery capability to guard against a regional failure.
Let you migrate data from one region to another with minimum downtime.

[Replication in Cloud SQL](https://cloud.google.com/sql/docs/postgres/replication)

> Additionally, a replica could be promoted if the original instance becomes corrupted.

[Replication in Cloud SQL](https://cloud.google.com/sql/docs/postgres/replication)

## Managing Database and Users

TODO

## IAM Database Authentication

TODO
