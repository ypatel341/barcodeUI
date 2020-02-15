var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log('Serving single page app via index.html')
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static(path.resolve('dist')));

app.listen(8080);
console.log('Listening on port 8080')