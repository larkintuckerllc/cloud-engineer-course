# Initializing data systems with products (Cloud SQL) (Part 1)

> Cloud SQL provides a cloud-based alternative to local MySQL, PostgreSQL, and SQL Server databases. You should use Cloud SQL if you want to spend less time managing your database and more time using it.

[What is Cloud SQL?](https://cloud.google.com/sql/docs/introduction)

> In general, the PostgreSQL functionality provided by a Cloud SQL instance is the same as the functionality provided by a locally-hosted PostgreSQL instance. However, there are a few differences between a standard PostgreSQL instance and a Cloud SQL for PostgreSQL instance.
>
> Unsupported features
> 
> Any features that require SUPERUSER privileges
>
> Custom background workers
>
> The psql client in Cloud Shell does not support operations that require a reconnection, such as connecting to a different database using the \c command.

[Cloud SQL features](https://cloud.google.com/sql/docs/features)

> Cloud SQL for MySQL pricing is composed of the following charges:
>
> CPU and memory pricing
> Storage and networking pricing
> Instance pricing
> 
> Read replicas and failover replicas are charged at the same rate as stand-alone instances.
>
> vCPUs $0.0413 per vCPU

[Cloud SQL for MySQL pricing](https://cloud.google.com/sql/docs/mysql/pricing)

https://cloud.google.com/sql/docs/key-terms

## Connection Options

> How to connect - which network path you use to reach your instance:
>
> An internal, VPC-only (Private) IP address.
>
> An external, internet-accessible (Public) IP address.
>
>
> How to authorize - which connections are authorized and allowed to connect to your Cloud SQL instance:
>
> Cloud SQL Auth proxy and Cloud SQL language connectors - these provide access based on IAM.
>
> Self-managed SSL/TLS certificates - these only allow connections based on specific public keys.
>
> Authorized networks - a list of IP addresses allowed to connect.
> 
>
> How to authenticate - the method to login to your database.
>
> Native database authentication - login with a username/password set in the database engine.

[Connecting Overview](https://cloud.google.com/sql/docs/mysql/connect-overview)

## External IP with Authorized Network

> You can configure your Cloud SQL instance to have a public IPv4 address, and to accept connections from specific IP addresses or a range of addresses by adding authorized addresses to your instance.
>
> You can't specify a private network (for example, 10.x.x.x) as an authorized network.
> 
> Public IP addresses for PostgreSQL instances:
>
> IPv6: Instances do not support IPv6.
>
> IPv4: Instances have a static IPv4 address automatically assigned. There is a small charge for the IP address any time your instance is off (deactivated).

[Configuring public IP connectivity](https://cloud.google.com/sql/docs/postgres/configure-ip)

> If you don't use the proxy, and you are connecting your client from your own public IP address, you need to add your client's public address as an authorized network.

[Authorizing with authorized networks](https://cloud.google.com/sql/docs/postgres/authorize-networks)
