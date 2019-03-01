const express = require('express');
const bodyParser = require("body-parser");
const router = require('./app/routers');

const app = express();

app.use(bodyParser.json());

app.use('/', router);

const port = 9001;

app.listen(port, () => console.log(`listening on port ${port}`));