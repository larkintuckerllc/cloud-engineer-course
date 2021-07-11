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

> When you create a new Cloud SQL instance, you must configure the default user account before you can connect to the instance.
> 
> For Cloud SQL for PostgreSQL, the default user is postgres.

-[Creating and managing PostgreSQL users](https://cloud.google.com/sql/docs/postgres/create-manage-users)

> Users created using Cloud SQL have the privileges associated with the cloudsqlsuperuser role: CREATEROLE, CREATEDB, and LOGIN

-[Creating and managing PostgreSQL users](https://cloud.google.com/sql/docs/postgres/create-manage-users)

## IAM Database Authentication

> Cloud SQL is integrated with IAM to help you better monitor and manage access for users and service accounts to databases. This feature is called IAM database authentication.
>
> Authentication is a means of access control that verifies the identity of a user. For end users, authentication is achieved when the user enters credentials (a username and password). For applications, authentication is achieved when a user's credentials are assigned to a service account.

-[Overview of Cloud SQL IAM database authentication](https://cloud.google.com/sql/docs/postgres/authentication)

> Enter cloudsql.iam_authentication for the flag name. Make sure that On is selected for this flag.

-[Configuring instances for IAM database authentication](https://cloud.google.com/sql/docs/postgres/create-edit-iam-instances)

> You add the user to each instance that contains the databases that the user needs to access.

[Creating and managing users that use IAM database authentication](https://cloud.google.com/sql/docs/postgres/create-manage-iam-users)

> Granting login access to a user or service account

[Creating and managing users that use IAM database authentication](https://cloud.google.com/sql/docs/postgres/create-manage-iam-users)


### User Account

```
psql -h 10.7.240.3 -U postgres
```

```
CREATE DATABASE my_app;
```

```
\connect my_app
```

```
CREATE TABLE persons (
    first varchar(255),
    last varchar(255)
);
```

```
INSERT INTO persons (first, last)
VALUES ('John', 'Tucker');
```

```
SELECT * FROM persons;
```

> Before a user or service account can connect to a database or run queries against it, they need to be granted privileges for that database. Privileges that you can grant include SELECT, INSERT, UPDATE, DELETE, CREATE, CONNECT, and others. See the GRANT reference page for a complete list of privileges you can grant to users and service accounts.

[Creating and managing users that use IAM database authentication](https://cloud.google.com/sql/docs/postgres/create-manage-iam-users)

```
GRANT CONNECT ON DATABASE my_app TO "user2.larkintuckerllc@gmail.com"
GRANT USAGE ON SCHEMA public TO "user2.larkintuckerllc@gmail.com"
GRANT SELECT ON ALL TABLES IN SCHEMA public TO "user2.larkintuckerllc@gmail.com"
```

```
export PGPASSWORD=$(gcloud auth print-access-token)
psql --host=10.7.240.3  \
--username=user2.larkintuckerllc@gmail.com \
--dbname=my_app
```

### Service Account

```
GRANT CONNECT ON DATABASE my_app TO "261943991537-compute@developer"
GRANT USAGE ON SCHEMA public TO "261943991537-compute@developer"
GRANT SELECT ON ALL TABLES IN SCHEMA public TO "261943991537-compute@developer"
```

```
apt update
```

```
apt install postgresql-client
```
