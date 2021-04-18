# Initializing data systems with products (Cloud SQL) (Part 2)

## Authorizing with SSL/TLS certificates

> Cloud SQL supports connecting to an instance using the Transport Layer Security (SSL/TLS) protocol. Data in transit inside a physical boundary controlled by or on behalf of Google is generally authenticated but might not be encrypted by default. If you connect to an instance using its public IP address, use SSL/TLS certificates, so the data is secure during transmission. SSL/TLS is the standard protocol for encryption of data sent over the internet. If your data isn't encrypted, anyone can examine your packets and read confidential information.
> 
> The safest method of encryption is called asymmetrical cryptography; this requires two cryptographic keys, one public and one private. Essentially, you use the public key to encrypt the data, and use the private key to decrypt it. Both the server and the client machines have the same set of client keys.
>
> In Cloud SQL, the public key is named client-cert.pem and the private key is named client-key.pem. The server also generates its own certificate, called server-ca.pem.
>
> Your application requires all three keys to connect successfully. Store these keys securely; anyone with access to these keys could potentially connect or intercept your data. You can't retrieve the private key from the server later, so if you lose it, you need to create new client certificates to replace the ones previously in use. Likewise, when the server generates a new server-ca.pem file, you need to download it and store it on the PostgreSQL client's host machine, replacing the existing file.

[Authorizing with SSL/TLS certificates](https://cloud.google.com/sql/docs/postgres/authorize-ssl)

> Cloud SQL creates a server certificate (server-ca.pem) automatically when you create your instance.
>
> To use SSL/TLS you need to create a client certificate and download the certificates to your PostgreSQL client host machine.

[Configuring SSL/TLS certificates](https://cloud.google.com/sql/docs/postgres/configure-ssl-instance)

> Cloud SQL creates a server certificate automatically when you create your instance. As long as the server certificate is valid, you do not need to actively manage your server certificate. However, the certificate has an expiration date of 10 years; after that date, it is no longer valid, and clients are not able to establish a secure connection to your instance using that certificate. You are notified when the server certificate is nearing expiration.

[Configuring SSL/TLS certificates](https://cloud.google.com/sql/docs/postgres/configure-ssl-instance)

> You can create up to 10 client certificates for each instance. If you lose the private key for a certificate, you must create a new one; the private key cannot be recovered. By default, the client certificate has an expiration date of 10 years. You are not notified when client certificates are nearing expiration.

[Configuring SSL/TLS certificates](https://cloud.google.com/sql/docs/postgres/configure-ssl-instance)

**note:** Need to add add Authorized networks.

```
psql "sslmode=verify-ca sslrootcert=server-ca.pem sslcert=client-cert.pem sslkey=client-key.pem hostaddr=34.72.216.9 port=5432 user=postgres dbname=postgres"
```

## Private IP

> When you create a new VPC network in your project, you need to configure private services access to allocate an IP address range and create a private service connection. This allows resources in the VPC network to connect to Cloud SQL instances. The console provides a wizard to help you set up this configuration.

[Configuring private IP](https://cloud.google.com/sql/docs/postgres/configure-private-ip)

> RFC 1918 specifies IP addresses that are assigned to be used internally (that is, within an organization) and will not route on the Internet. 

[Configuring private IP](https://cloud.google.com/sql/docs/postgres/configure-private-ip)

> Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges. This way, all private clients can access the database without going through the proxy.

[Configuring private IP](https://cloud.google.com/sql/docs/postgres/configure-private-ip)
