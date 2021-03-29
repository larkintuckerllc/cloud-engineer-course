# Configuring a VM for Stackdriver monitoring and logging (Part 1)

## Monitoring Agent

> Using the Monitoring agent is optional but recommended. Monitoring can access some instance metrics without the Monitoring agent, including CPU utilization, some disk traffic metrics, network traffic, and uptime information. Monitoring uses the Monitoring agent to access additional system resources and application services in virtual machine (VM) instances. If you want these additional capabilities, you should install the Monitoring agent.

[Cloud Monitoring agent overview](https://cloud.google.com/monitoring/agent)

```
curl -sSO https://dl.google.com/cloudagents/add-monitoring-agent-repo.sh && \
bash add-monitoring-agent-repo.sh && \
apt-get update
apt-get install -y 'stackdriver-agent=6.*'
```

# Logging Agent

> In its default configuration, the Logging agent streams logs from common third-party applications and system software to Logging; review the list of default logs. You can configure the agent to stream additional logs; go to Configuring the Logging agent for details on agent configuration and operation.
> 
> It is a best practice to run the Logging agent on all your VM instances. The agent runs under both Linux and Windows. To install the Logging agent, go to Installing the agent.

[About the Logging agent](https://cloud.google.com/logging/docs/agent)

```
curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh && \
bash add-logging-agent-repo.sh && \
apt-get update
apt-get install -y 'google-fluentd=1.*'
apt-get install -y google-fluentd-catch-all-config
service google-fluentd restart
```

> A virtual machine (VM) instance has four virtual serial ports. The instance's operating system, BIOS, and other system-level entities often write output to the serial ports, which makes serial port output useful for troubleshooting crashes, failed boots, startup issues, or shutdown issues.

[Viewing serial port output](https://cloud.google.com/compute/docs/instances/viewing-serial-port-output)

> gce_instance
>
> VM Instance	A virtual machine instance hosted in Compute Engine.
>
> project_id: The identifier of the GCP project associated with this resource, such as "my-project".
>
> instance_id: The numeric VM instance identifier assigned by Compute Engine.
>
> zone: The Compute Engine zone in which the VM is running.

[Monitored resources and services](https://cloud.google.com/logging/docs/api/v2/resource-list)
