const express = require('express');
const app = express();

const server = app.listen(8001);
app.use(express.static('public'));


console.log("Socket is Running");