/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable quotes */
/* eslint-disable import/order */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
require('dotenv').config();

const express = require('express');

const routes = require('./server/routes/index');

const app = express()
const port = process.env.PORT || 5432;

// eslint-disable-next-line import/newline-after-import
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
// eslint-disable-next-line eol-last
})