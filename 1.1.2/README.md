# Assigning Users to Predefined IAM Roles Within a Project

## Identity, Permission, Role, and Policy

> IAM lets you grant granular access to specific Google Cloud resources and helps prevent access to other resources. IAM lets you adopt the security principle of least privilege, which states that nobody should have more permissions than they actually need.

-[Cloud IAM Documentation Overview](https://cloud.google.com/iam/docs/overview)

> Permissions determine what operations are allowed on a resource. In the IAM world, permissions are represented in the form of service.resource.verb, for example, pubsub.subscriptions.consume.

-[Cloud IAM Documentation Overview](https://cloud.google.com/iam/docs/overview)

> A role is a collection of permissions. You cannot grant a permission to the user directly. Instead, you grant them a role. When you grant a role to a user, you grant them all the permissions that the role contains.

-[Cloud IAM Documentation Overview](https://cloud.google.com/iam/docs/overview)

> The IAM policy binds one or more members to a role. When you want to define who (member) has what type of access (role) on a resource, you create a policy and attach it to the resource.

-[Cloud IAM Documentation Overview](https://cloud.google.com/iam/docs/overview)

> Some services support granting IAM permissions at a granularity finer than the project level. For example, you can grant the Storage Admin role (roles/storage.admin) to a user for a particular Cloud Storage bucket, or you can grant the Compute Instance Admin role (roles/compute.instanceAdmin) to a user for a specific Compute Engine instance.
>
> In other cases, you can grant IAM permissions at the project level. The permissions are then inherited by all resources within that project. For example, to grant access to all Cloud Storage buckets in a project, grant access to the project instead of each individual bucket. Or to grant access to all Compute Engine instances in a project, grant access to the project rather than each individual instance.

-[Cloud IAM Documentation Overview](https://cloud.google.com/iam/docs/overview)

## Roles

> There are three types of roles in IAM:
> 
> Basic roles, which include the Owner, Editor, and Viewer roles that existed prior to the introduction of IAM.
>
> Predefined roles, which provide granular access for a specific service and are managed by Google Cloud.
>
> Custom roles, which provide granular access according to a user-specified list of permissions.

-[Understanding Roles](https://cloud.google.com/iam/docs/understanding-roles)

## Owner Role

> You can only add owners to a project using the Cloud Console. An invitation will be sent to the member via email and the member must accept the invitation to be made an owner of the project.

-[Understanding Roles](https://cloud.google.com/iam/docs/understanding-roles)