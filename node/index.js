const express = require('express')
const mysql = require('mysql');
const app = express();
const port = 3000;

const configDatabase = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {
    const connection = mysql.createConnection(configDatabase);
    connection.query(`INSERT INTO people(name) values('Cleber')`);
    connection.query('select name from people', function(err, result){
        if(err) throw err;
        let output  = '<h1>Full Cycle Rocks!</h1>';
        output = output.concat('<p>');
        output = output.concat('<ul>');
        result.forEach(tmp => {
            output = output.concat(`<li>${tmp.name}</li>`);
        });
        output = output.concat('</ul>');
        output = output.concat('</p>');
        
        res.send(output);
    });
    connection.end();
});

app.listen(port, ()=>{
    console.log(`listen on port: ${port}`)
})