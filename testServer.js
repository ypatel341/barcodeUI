var express = require('express');
var app = express();
var data1 = require('./data/testJson1.js')
var data2 = require('./data/testJson2.js')

app.get('/test1', function(req, res) {
    res.send(data1);
});

app.get('/test2', function(req, res) {
    res.send(data2.obj1);
});

app.get('/test3', function(req, res) {
    res.send(data2.obj2);
});


app.listen(3000);
console.log('Test server listening on port 3000')

