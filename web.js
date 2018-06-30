var port = Number(process.env.PORT || 8000);
//var enforce = require('express-sslify');
var express = require('express');

var app = express();

//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(__dirname + '/dist'));
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});