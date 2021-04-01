require("dotenv").config();

const express = require("express");
const routes = require("./server/routes/index");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(port, () => {
  if (server) {
    const address = server.address();
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});