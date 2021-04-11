const {PubSub} = require('@google-cloud/pubsub');

const subscriptionName = 'hello-sub';
const timeout = 60;

const pubSubClient = new PubSub();
function listenForMessages() {
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

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}

listenForMessages();
