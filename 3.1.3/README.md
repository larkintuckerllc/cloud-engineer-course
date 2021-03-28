# Generating/uploading a custom SSH key for instances

> Every instance stores its metadata on a metadata server. You can query this metadata server programmatically, from within the instance and from the Compute Engine API. You can query for information about the instance, such as the instance's host name, instance ID, startup and shutdown scripts, custom metadata, and service account information. Your instance automatically has access to the metadata server API without any additional authorization.

[Storing and retrieving instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata)

> By creating and managing SSH keys, you can let users access a Linux instance through third-party tools.
> 
> An SSH key consists of the following files:
> 
> A public SSH key file that is applied to instance-level metadata or project-wide metadata.
>
> A private SSH key file that the user stores on their local devices.

[Managing SSH keys in metadata](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys)

# Existing Keys

> If you create and manage public SSH keys yourself through the Cloud Console, the gcloud command-line tool, or the API, you must keep track of the used keys and delete the public SSH keys for users who no longer have access. For example, if a team member leaves your project, remove their public SSH keys from metadata, so they can't continue to access your instances.

[Managing SSH keys in metadata](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys)

## Creating a new SSH key

> User access to a Linux instance through third-party tools is determined by which public SSH keys are available to the instance. You can control the public SSH keys that are available to a Linux instance by editing metadata, which is where your public SSH keys and related information are stored. There are three types of metadata for your public SSH keys:
>
> Project-wide public SSH keys: Use this metadata to give users general access—the ability to connect to most instances in your project.

https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys

## Block Project-Wide Keys

> Allow or block project-wide public SSH keys: Use this metadata value to block or allow project-wide public SSH keys on a specific instance. By default, an instance accepts all project-wide public SSH keys. Block project-wide public SSH keys if you want to restrict the instance to only users with instance-level public SSH keys.

[Managing SSH keys in metadata](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys)

## Instance-Level Keys

> Instance-level public SSH keys: Use this metadata to give users special access—the ability to connect to a specific instance in your project—even if it blocks project-wide public SSH keys.

[Managing SSH keys in metadata](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys)
