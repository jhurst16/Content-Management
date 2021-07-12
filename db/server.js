const mysql = require('mysql2');

const server = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'CMS',
    password: 'jeremyis24'
},
console.log('Connected to database')
);

server.connect(function (err) {
    if(err) throw err
});

module.exports = server;