# Deploying an application that receives Google Cloud events (e.g., Cloud Pub/Sub events, Cloud Storage object change notification events) (Cloud Run)

> In push delivery, Pub/Sub initiates requests to your subscriber application to deliver messages.
> 
> The Pub/Sub server sends each message as an HTTPS request to the subscriber application at a pre-configured endpoint.
>
> The endpoint acknowledges the message by returning an HTTP success status code. A non-success response indicates that the message should be resent.

[Subscriber overview](https://cloud.google.com/pubsub/docs/subscriber)

