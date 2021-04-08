const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, max-age=0');
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World Five!')
})

app.get('/_ah/warmup', (req, res) => {
  res.send('Hello Warmup!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

