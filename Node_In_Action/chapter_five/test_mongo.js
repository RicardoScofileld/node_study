var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});


var client = new mongodb.Db('scrapy_data', server);
client.open(function(err) {
    if (err) throw err;
    client.collection('test_insert', function(err, collection) {
        if (err) throw err;
        console.log('We are now able to perform queries');
    })
})