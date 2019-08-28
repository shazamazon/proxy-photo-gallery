const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 1004;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Proxy is listening on ${port}`));