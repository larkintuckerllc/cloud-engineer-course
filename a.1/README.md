# Images

**note:** No video for this section as other than the concepts, it is pretty straightforward.

> Use operating system images to create boot disks for your instances. You can use one of the following image types:

> Public images are provided and maintained by Google, open source communities, and third-party vendors. By default, all Google Cloud projects have access to these images and can use them to create instances.

> Custom images are available only to your Cloud project. You can create a custom image from boot disks and other images. Then, use the custom image to create an instance.

> Mainstream support

> Image providers typically publish updates every month. In these updates, new features might be introduced. New features are typically not backported to images after this stage.

> Extended/long-term support

> Image providers stop providing monthly updates and mark the images as deprecated. You can still use deprecated images, but you are responsible for acquiring updates, which are subject to availability from the OS distribution, vendor, or open source community.

> To create a VM from a deprecated image, you must use the gcloud tool or the Compute Engine API. When specifying the image, you must use the --image flag because image families don't point to deprecated images. For more information about creating VMs, see Create a VM instance from a public image.

> We generally don't backport new features to these deprecated versions in the extended lifecycle stage or past the extended lifecycle.

> End of life/maintenance/support

> Google stops supporting the image.

> Image families help you manage images in your project by grouping related images together, so that you can roll forward and roll back between specific image versions. An image family always points to the latest version of an image that is not deprecated. Most public images are grouped into an image family. For example, the debian-9 image family in the debian-cloud project always points to the most recent Debian 9 image.

[Images](https://cloud.google.com/compute/docs/images)

> A custom image is a boot disk image that you own and control access to. Use custom images for the following tasks:

> Import a boot disk image to Compute Engine from your on-premises environment, or import virtual disks from VMs that are running on your local workstation or on another cloud platform.

> Note: If you are planning to migrate several VMs to Compute Engine, consider using the VM migration service.

> Create an image from the boot disks of your existing Compute Engine instances. Then use that image to create new boot disks for your instances. This process lets you to create new instances that are preconfigured with the apps that you need without having to configure a public image from scratch.

> Copy one image to another image by using either the gcloud tool or the API. Use the same process that you use to create an image, but specify another image as the image source. You can also create an image from a custom image in a different project.

https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images

> If the image is not available in a region where you are creating a VM, Compute Engine caches the image in that region the first time you create a VM.

[Creating, deleting, and deprecating custom images](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images)

https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images

## Automation

> Create identical machine images for multiple platforms from a single source configuration.

[Packer](https://www.packer.io/)
