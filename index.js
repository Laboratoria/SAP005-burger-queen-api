/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
const routes = require('./server/routes');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || port);
