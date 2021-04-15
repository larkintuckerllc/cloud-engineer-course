import { PubSub } from '@google-cloud/pubsub';

const topicName = 'my-topic';
const data = JSON.stringify({ foo: 'bar' });

const pubSubClient = new PubSub();

async function publishMessage() {
  const dataBuffer = Buffer.from(data);
  try {
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}

publishMessage();
