# Creating ingress and egress firewall rules for a VPC (e.g., IP subnets, tags, service accounts)

No video.

## Components

> Each firewall rule consists of the following configuration components:

> The direction of connection: ingress rules apply to incoming connections from specified sources to Google Cloud targets, and egress rules apply to connections going to specified destinations from targets.

> A numerical priority, which determines whether the rule is applied. Only the highest priority (lowest priority number) rule whose other components match traffic is applied; conflicting rules with lower priorities are ignored.

> An action on match, either allow or deny, which determines whether the rule permits or blocks connections.

> The enforcement status of the firewall rule: You can enable and disable firewall rules without deleting them.

> A target, which defines the instances (including GKE clusters and App Engine flexible environment instances) to which the rule applies.

> A source filter for ingress rules or a destination filter for egress rules.

> The protocol (such as TCP, UDP, or ICMP) and destination port.

> A boolean logs option which logs connections that match the rule into Cloud Logging.

[VPC firewall rules overview](https://cloud.google.com/vpc/docs/firewalls)

## Target

> You specify a target by using one of the following options:

> All instances in the network. The firewall rule applies to all instances in the network.

> Instances by target tags. The firewall rule applies only to instances with a matching network tag.

> Instances by target service accounts. The firewall rule applies only to instances that use a specific service account. For the maximum number of target service accounts that you can apply per firewall rule, see VPC resource quotas.

[VPC firewall rules overview](https://cloud.google.com/vpc/docs/firewalls)

## Source

> The source parameter is only applicable to ingress rules. It must be one of the following:

> Source IPv4 range or source IPv6 ranges: You can specify ranges of IP addresses as sources for packets. The ranges can be either IPv4 or IPv6 addresses, but not a combination of both. The ranges can include addresses inside your VPC network and addresses outside it.

> Source tags: You can define the source for packets as the primary internal IP address of the network interface of VM instances in the same VPC network, identifying those source instances by a matching network tag. Source tags only apply to traffic sent from the network interface of another applicable instance in your VPC network. A source tag cannot control packets whose sources are external IP addresses, even if the external IP addresses belong to instances. For the maximum number of source tags that you can apply per firewall rule, see VPC resource quotas.

> Source service accounts: You can define the source for packets as the primary internal IP address of the network interface of instances in the same VPC network, identifying those source instances by the service accounts they use. Source service accounts only apply to traffic sent from the network interface of another applicable instance in your VPC network. A source service account cannot control packets whose sources are external IP addresses, even if the external IP addresses belong to instances. For the maximum number of source service accounts that you can apply per firewall rule, see VPC resource quotas.

> A combination of source IP ranges and source tags can be used.

> A combination of source IP ranges and source service accounts can be used.

> If all source IP ranges, source tags, and source service accounts are omitted, Google Cloud defines the source as any IPv4 address (0.0.0.0/0). IPv6 sources are not included.

[VPC firewall rules overview](https://cloud.google.com/vpc/docs/firewalls)

## Destination

> The destination parameter is only applicable to egress rules. The destination parameter only accepts IP address ranges. The ranges can include addresses inside your VPC network and addresses outside it.

> If you do not specify a destination range, Google Cloud defines the destination to be all IPv4 addresses (0.0.0.0/0). IPv6 destinations are not included.

[VPC firewall rules overview](https://cloud.google.com/vpc/docs/firewalls)
