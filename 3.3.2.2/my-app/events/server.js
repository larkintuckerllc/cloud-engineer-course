import { PubSub } from '@google-cloud/pubsub';

const subscriptionName = 'my-sub';

const pubSubClient = new PubSub();
const listenForMessages = () => {
  const subscription = pubSubClient.subscription(subscriptionName);
  let messageCount = 0;

  const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;
    message.ack();
  };

  subscription.on('message', messageHandler);
}

listenForMessages();

