# Creating a VPC with subnets (e.g., custom-mode VPC, shared VPC

> You can think of a VPC network the same way you'd think of a physical network, except that it is virtualized within Google Cloud. A VPC network is a global resource that consists of a list of regional virtual subnetworks (subnets) in data centers, all connected by a global wide area network. VPC networks are logically isolated from each other in Google Cloud.

[VPC Overview](https://cloud.google.com/vpc/docs/overview)

> Provides connectivity for your Compute Engine virtual machine (VM) instances, including Google Kubernetes Engine (GKE) clusters, App Engine flexible environment instances, and other Google Cloud products built on Compute Engine VMs.

> When an auto mode VPC network is created, one subnet from each region is automatically created within it. These automatically created subnets use a set of predefined IP ranges that fit within the 10.128.0.0/9 CIDR block. 

> When a custom mode VPC network is created, no subnets are automatically created. 

> Unless you choose to disable it, each new project starts with a default network. The default network is an auto mode VPC network with pre-populated IPv4 firewall rules. 

[VPC network overview](https://cloud.google.com/vpc/docs/vpc)

https://en.wikipedia.org/wiki/Private_network

## Firewall Rules

> Each VPC network implements a distributed virtual firewall that you can configure. Firewall rules allow you to control which packets are allowed to travel to which destinations. Every VPC network has two implied firewall rules that block all incoming connections and allow all outgoing connections.

> The default network has additional firewall rules, including the default-allow-internal rule, which permit communication among instances in the network.

[VPC Overview](https://cloud.google.com/vpc/docs/overview)

> When you create a firewall rule, you must select a VPC network. While the rule is enforced at the instance level, its configuration is associated with a VPC network.

> VPC firewall rules are stateful

> Implied IPv4 allow egress rule. An egress rule whose action is allow, destination is 0.0.0.0/0, and priority is the lowest possible (65535) lets any instance send traffic to any destination, except for traffic blocked by Google Cloud. A higher priority firewall rule may restrict outbound access. Internet access is allowed if no other firewall rules deny outbound traffic and if the instance has an external IP address or uses a Cloud NAT instance. For more information, see Internet access requirements.

> Implied IPv4 deny ingress rule. An ingress rule whose action is deny, source is 0.0.0.0/0, and priority is the lowest possible (65535) protects all instances by blocking incoming connections to them. A higher priority rule might allow incoming access. The default network includes some additional rules that override this one, allowing certain types of incoming connections.

> The default network is pre-populated with firewall rules that allow incoming connections to instances. These rules can be deleted or modified as necessary:

> default-allow-internal

> Allows ingress connections for all protocols and ports among instances in the network. This rule has the second-to-lowest priority of 65534, and it effectively permits incoming connections to VM instances from others in the same network. This rule allows traffic in 10.128.0.0/9 (from 10.128.0.1 to 10.255.255.254), a range that covers all subnets in the network.

> default-allow-ssh

> Allows ingress connections on TCP destination port 22 from any source to any instance in the network. This rule has a priority of 65534.

> default-allow-rdp

> Allows ingress connections on TCP destination port 3389 from any source to any instance in the network. This rule has a priority of 65534, and it enables connections to instances running the Microsoft Remote Desktop Protocol (RDP).

> default-allow-icmp

> Allows ingress ICMP traffic from any source to any instance in the network. This rule has a priority of 65534, and it enables tools such as ping.

[VPC firewall rules overview](https://cloud.google.com/vpc/docs/firewalls)

## Routes

> Routes tell VM instances and the VPC network how to send traffic from an instance to a destination, either inside the network or outside of Google Cloud. Each VPC network comes with some system-generated routes to route traffic among its subnets and send traffic from eligible instances to the internet.

[VPC Overview](https://cloud.google.com/vpc/docs/overview)

> Each VM instance has a controller that is kept informed of all applicable routes from the network's routing table. Each packet leaving a VM is delivered to the appropriate next hop of an applicable route based on a routing order. When you add or delete a route, the set of changes is propagated to the VM controllers by using an eventually consistent design.

[Routes overview](https://cloud.google.com/vpc/docs/routes)

```
System-generated default routes

0.0.0.0/0 for IPv4
::/0 for IPv6	default-internet-gateway

Subnet route
Created automatically for each subnet IP address range

Custom routes
Peering routes
```

## Shared VPC

> Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network, so that they can communicate with each other securely and efficiently using internal IPs from that network. When you use Shared VPC, you designate a project as a host project and attach one or more other service projects to it. The VPC networks in the host project are called Shared VPC networks. Eligible resources from service projects can use subnets in the Shared VPC network.

[Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc)
