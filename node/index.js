const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const configDatabase = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(configDatabase);
const sql = `INSERT INTO people(name) values('Cleber')`;
connection.query(sql);

app.get('/', (req, res) => {
    const query = 'select name from people';
    connection.query(query, function(err, result){
        console.log(result);
        res.send('<h1>Full Cycle Rocks!</h1>');
    });
    
});

app.listen(port, ()=>{
    console.log(`listen on port: ${port}`)
})