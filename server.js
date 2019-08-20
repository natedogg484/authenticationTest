const express = require('express');
const logger = require('morgan');
const bodyParser =  require('body-parser');
const app = express();

let PORT = 8080

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.json({"tutorial" : "Build REST API with node.js"});
 });

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });