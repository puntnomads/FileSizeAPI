var express = require('express');
var app = express();
var multer = require('multer');
var bodyParser = require('body-parser');
var	path = require('path');

app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/get-file-size', multer({ dest: './uploads/'}).single('upl'), function(req,res){
    if(req.file != undefined){
        var object = { size: req.file.size };
        res.send(object);
    } else {
        res.send("Please upload a file before submitting. Thank you.");
    }
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});
