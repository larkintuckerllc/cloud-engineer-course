# Deploying an application that receives Google Cloud events (e.g., Cloud Pub/Sub events, Cloud Storage object change notification events) (Cloud Run)

> In push delivery, Pub/Sub initiates requests to your subscriber application to deliver messages.
> 
> The Pub/Sub server sends each message as an HTTPS request to the subscriber application at a pre-configured endpoint.
>
> The endpoint acknowledges the message by returning an HTTP success status code. A non-success response indicates that the message should be resent.

[Subscriber overview](https://cloud.google.com/pubsub/docs/subscriber)

> When Pub/Sub delivers a message to a push endpoint, Pub/Sub sends the message in the body of a POST request. The body of the request is a JSON object and the message data is in the message.data field. The message data is base64-encoded.

[Using push subscriptions](https://cloud.google.com/pubsub/docs/push)

```
gcloud builds submit --tag gcr.io/training-main-310016/events:0.1.0
```

```
gcloud run deploy --image gcr.io/training-main-310016/events:0.1.0 --platform managed
```
