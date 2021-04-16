import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/endpoint', (req, res) => {
  const { message: { data } } = req.body;
  const bufferObj = Buffer.from(data, "base64");
  const decodedString = bufferObj.toString("utf8");
  console.log(decodedString);
  res.send('success');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
