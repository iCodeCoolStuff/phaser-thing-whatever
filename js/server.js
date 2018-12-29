const express = require('express');
const path = require('path')
const app = express();
const server = require('http').Server(app);
 
app.use(express.static(path.dirname(__dirname)));

app.get('/', function (req, res) {
  res.sendFile('/index.html');
});
 
server.listen(8080, function () {
  console.log(`Listening on ${server.address().port}`);
});
