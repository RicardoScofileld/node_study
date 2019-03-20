var http = require('http');
var work = require('./lib/timetrack.js');
var mysql = require('mysql');


var db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'qinghuan',
    database: 'timetrack',
    charset: 'utf8'
})


var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/':
                    work.show(db, res);
                    break;
                case '/archived':
                    work.showArchived(db, res);
            }
            break;
        case 'POST':
            switch (req.url) {
                case '/':
                    work.add(db, req, res);
                    break;
                case '/archive':
                    work.archive(db, req, res);
                    break;
                case '/delete':
                    work.delete(db, req, res);
                    break;
            }
            break;
    }
})

db.query(
    "CREATE TABLE IF NOT EXISTS work ("
    + "id INT(10) NOT NULL AUTO_INCREMENT, "
    + "hours DECIMAL(5, 2) DEFAULT 0, "
    + "date DATE, "
    + "archived INT(1) DEFAULT 0, "
    + "description LONGTEXT, "
    + "PRIMARY KEY (id))",
    function(err) {
        if (err) throw err;
        console.log("Server started...");
        server.listen(3000, '127.0.0.1');
    }
)