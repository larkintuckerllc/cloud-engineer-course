# Cloud Pub/Sub

> Pub/Sub is an asynchronous messaging service that decouples services that produce events from services that process events.

[What Is Pub/Sub?](https://cloud.google.com/pubsub/docs/overview)

https://www.youtube.com/watch?v=cvu53CnZmGI&list=PLIivdWyY5sqKwVLe4BLJ-vlh9r9zCdOse

https://cloud.google.com/pubsub/docs/quickstart-client-libraries

> Message: the data that moves through the service.
>
> Topic: a named entity that represents a feed of messages.
>
> Subscription: a named entity that represents an interest in receiving messages on a particular topic.
>
> Publisher (also called a producer): creates messages and sends (publishes) them to the messaging service on a specified topic.
>
> Subscriber (also called a consumer): receives messages on a specified subscription.

[Pub/Sub: A Google-Scale Messaging Service](https://cloud.google.com/pubsub/architecture)

> In pull delivery, your subscriber application initiates requests to the Pub/Sub server to retrieve messages.
> 
> The subscribing application explicitly calls the pull method, which requests messages for delivery.
>
> The Pub/Sub server responds with the message (or an error if the queue is empty) , and an ack ID.
>
> The subscriber explicitly calls the acknowledge method, using the returned ack ID to acknowledge receipt.

[Subscriber overview](https://cloud.google.com/pubsub/docs/subscriber)

```
gcloud auth application-default login
```
