const express = require "express";

const app = express();

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Examplrone app listening at http://localhost:${port}`)
})
