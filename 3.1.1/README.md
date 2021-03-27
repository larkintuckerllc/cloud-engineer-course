# Launching a compute instance using Cloud Console and Cloud SDK (gcloud) (e.g., assign disks, availability policy, SSH keys)

> Secure and customizable compute service that lets you create and run virtual machines on Google’s infrastructure.

[Compute Engine](https://cloud.google.com/compute#section-1)

> A virtual machine (VM) is a virtual environment that works like a computer within a computer. It runs on an isolated partition of its host computer with its own resources of CPU power, memory, an operating system (e.g. Windows, Linux, macOS), and other resources. This allows end-users to run applications on VMs and use them as they normally would on their workstation.

[What is a virtual machine?](https://www.citrix.com/glossary/what-is-a-virtual-machine.html)

## Create VM Instance with Cloud Console

> SSH or Secure Shell is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line, login, and remote command execution, but any network service can be secured with SSH.

[SSH (Secure Shell)](https://en.wikipedia.org/wiki/SSH_(Secure_Shell))

> Cloud Shell is an online development and operations environment accessible anywhere with your browser. You can manage your resources with its online terminal preloaded with utilities such as the gcloud command-line tool, kubectl, and more. You can also develop, build, debug, and deploy your cloud-based apps using the online Cloud Shell Editor.

[Cloud Shell](https://cloud.google.com/shell)

## Create VM Instance with gcloud CLI

> Use operating system images to create boot disks for your instances. You can use one of the following image types:
>
> Public images are provided and maintained by Google, open source communities, and third-party vendors. By default, all Google Cloud projects have access to these images and can use them to create instances.
>
> Custom images are available only to your Cloud project. You can create a custom image from boot disks and other images. Then, use the custom image to create an instance.
>
> You can use most public images at no additional cost, but there are some premium images that do add additional cost to your instances. Custom images that you import to Compute Engine add no cost to your instances, but do incur an image storage charge while you keep your custom image in your project.

[Images](https://cloud.google.com/compute/docs/images)

https://cloud.google.com/compute/docs/instances/create-start-instance

```
gcloud compute images list
```

```
gcloud compute instances create instance-1 \
    --image debian-10-buster-v20210316 \
    --image-project debian-cloud \
    --zone us-central1-c
```

```
gcloud compute instances delete instance-1 \
    --zone us-central1-c
```

## Startup Script

**note**: Allow HTTP traffic option

```
sudo -i
```

```
apt update
```

```
apt -y install apache2
```

> Compute Engine lets you create and run your own startup scripts on your virtual machine (VM) instances to perform automated tasks every time your instance boots up. Startup scripts can perform actions such as installing software, performing updates, turning on services, and any other tasks defined in the script.

[Running startup scripts](https://cloud.google.com/compute/docs/startupscript)

```
#! /bin/bash
apt update
apt -y install apache2
cat <<EOF > /var/www/html/index.html
<html><body><h1>Hello World</h1>
<p>This page was created from a startup script.</p>
</body></html>
EOF
```
