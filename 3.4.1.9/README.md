# Initializing data systems with products (Cloud Storage)

> Object storage for companies of all sizes. Store any amount of data. Retrieve it as often as you’d like.

[Cloud Storage](https://cloud.google.com/storage)

## Buckets

> Buckets are the basic containers that hold your data. Everything that you store in Cloud Storage must be contained in a bucket. You can use buckets to organize your data and control access to your data, but unlike directories and folders, you cannot nest buckets. While there is no limit to the number of buckets you can have in a project or location, there are limits to the rate you can create or delete buckets.

> When you create a bucket, you give it a globally-unique name and a geographic location where the bucket and its contents are stored. The name and location of the bucket cannot be changed after creation, though you can delete and re-create the bucket to achieve a similar result. 

[Key terms](https://cloud.google.com/storage/docs/key-terms)

> A storage class is a piece of metadata that is used by every object.

> The storage class set for an object affects the object's availability and pricing model.

> You can change the storage class of an existing object either by rewriting the object or by using Object Lifecycle Management.
When you create a bucket, you can specify a default storage class for the bucket. When you add objects to the bucket, they inherit this storage class unless explicitly set otherwise.

```
Storage Class	Name for APIs and gsutil	Minimum storage duration	Typical monthly availability1
Standard Storage	STANDARD	None	
>99.99% in multi-regions and dual-regions
99.99% in regions
Nearline Storage	NEARLINE	30 days	
99.95% in multi-regions and dual-regions
99.9% in regions
Coldline Storage	COLDLINE	90 days	
99.95% in multi-regions and dual-regions
99.9% in regions
Archive Storage	ARCHIVE	365 days	
99.95% in multi-regions and dual-regions
99.9% in regions
```

[Storage classes](https://cloud.google.com/storage/docs/storage-classes)

> To support the retrieval of objects that are deleted or replaced, Cloud Storage offers the Object Versioning feature. This page describes the feature and the options available when using it.

[Object versioning](https://cloud.google.com/storage/docs/object-versioning)

> This page discusses the Bucket Lock feature, which allows you to configure a data retention policy for a Cloud Storage bucket that governs how long objects in the bucket must be retained. The feature also allows you to lock the data retention policy, permanently preventing the policy from being reduced or removed.

[Retention policies and retention policy locks](https://cloud.google.com/storage/docs/bucket-lock)

> Cloud Storage always encrypts your data on the server side, before it is written to disk, at no additional charge. Besides this standard, Google-managed behavior, there are additional ways to encrypt your data when using Cloud Storage. Below is a summary of the encryption options available to you:

> Server-side encryption: encryption that occurs after Cloud Storage receives your data, but before the data is written to disk and stored.

> Customer-managed encryption keys: You can create and manage your encryption keys through Cloud Key Management Service. Customer-managed encryption keys can be stored as software keys, in an HSM cluster, or externally.

> Customer-supplied encryption keys: You can create and manage your own encryption keys. These keys act as an additional encryption layer on top of the standard Cloud Storage encryption.

> Client-side encryption: encryption that occurs before data is sent to Cloud Storage. Such data arrives at Cloud Storage already encrypted but also undergoes server-side encryption.

[Data encryption options](https://cloud.google.com/storage/docs/encryption)

## Objects

> Objects are the individual pieces of data that you store in Cloud Storage. There is no limit on the number of objects that you can create in a bucket.

> Objects have two components: object data and object metadata. Object data is typically a file that you want to store in Cloud Storage and is completely opaque to Cloud Storage. Object metadata is a collection of name-value pairs that describe various object qualities.

[Key terms](https://cloud.google.com/storage/docs/key-terms)

> The most commonly set metadata is Content-Type (also known as media type), which lets browsers render the object properly. All objects have a value specified in their Content-Type metadata, but this value does not have to match the underlying type of the object. For example, if the Content-Type is not specified by the uploader and cannot be determined, it is set to application/octet-stream or application/x-www-form-urlencoded, depending on how you uploaded the object. For a list of valid content types, see the IANA Media Types page.

[Object metadata](https://cloud.google.com/storage/docs/metadata)

> Cloud Storage uses a flat namespace to store objects, which means that Cloud Storage sees all objects in a given bucket as independent with no hierarchical relationship. For convenience, tools such as Google Cloud Console and gsutil work with objects that use the slash (/) character as if they were stored in a virtual hierarchy.

> Objects are immutable, which means that an uploaded object cannot change throughout its storage lifetime. An object's storage lifetime is the time between successful object creation, such as uploading, and successful object deletion. 

[Key terms](https://cloud.google.com/storage/docs/key-terms)

```
Cloud Storage provides strong global consistency for the following operations, including both data and metadata:

...

The following operations are eventually consistent:

Granting access to or revoking access from resources.
```

[Consistency](https://cloud.google.com/storage/docs/consistency)

## Access Control

> When you create a bucket, you should decide whether you want to apply permissions using uniform or fine-grained access.

> Uniform (recommended): Uniform bucket-level access allows you to use Identity and Access Management (IAM) alone to manage permissions. IAM applies permissions to all the objects contained inside the bucket or groups of objects with common name prefixes. IAM also allows you to use features that are not available when working with ACLs, such as IAM Conditions and Cloud Audit Logs.

> Fine-grained: The fine-grained option enables you to use IAM and Access Control Lists (ACLs) together to manage permissions. ACLs are a legacy access control system for Cloud Storage designed for interoperability with Amazon S3. You can specify access and apply permissions at both the bucket level and per individual object.

> Use public access prevention to restrict public access to your buckets and objects. When you enable public access prevention, users who gain access through allUsers and allAuthenticatedUsers are disallowed access to data.

> Use signed URLs to give time-limited read or write access to an object through a URL you generate. Anyone with whom you share the URL can access the object for the duration of time you specify, regardless of whether or not they have a Google account.

[Overview of access control](https://cloud.google.com/storage/docs/access-control)

## Static Website

> Because Cloud Storage doesn't support custom domains with HTTPS on its own, this tutorial uses Cloud Storage with HTTP(S) Load Balancing to serve content from a custom domain over HTTPS. For more ways to serve content from a custom domain over HTTPS, see the related troubleshooting topic. You can also use Cloud Storage to serve custom domain content over HTTP, which doesn't require a load balancer.

[Hosting a static website](https://cloud.google.com/storage/docs/hosting-static-website)

> You can control how or if your website assets are cached by configuring the Cache-Control metadata. Generally, only set cache control metadata for objects that are accessible to all anonymous users, which is a requirement for any object served from a Cloud Storage bucket as part of a static website.

> Cloud Storage applies a cache control setting of 3600 seconds to objects that are accessible to all anonymous users, unless you specify explicit cache control settings. See Viewing and Editing Metadata for instructions for setting object metadata, such as Cache-Control.

[Static website examples and tips](https://cloud.google.com/storage/docs/static-website)

## Pricing

* Data storage (standard): e.g., us-central1 $0.020 / GB / month
* Data storage (archive): e.g., us-central1 $0.00012 / GB / month

* Network usage (ingress): free
* Network usage (egress): e.g., to Worldwide Destinations $0.12 / GB (0 - 1 TB)

* Operations: e.g., standard storage $0.05 / 10,000 class A operations
* Operations: e.g., archive storage $0.50 / 10,000 class A operations

[Cloud Storage pricing](https://cloud.google.com/storage/pricing)
