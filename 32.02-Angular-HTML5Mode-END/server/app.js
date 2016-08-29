var express = require('express');

var app = express();

app.use('/js', express.static('../client/js'));

app.all('/*', function(req, res) {
    res.sendFile('index.html', {root: __dirname + '/../client'});
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});