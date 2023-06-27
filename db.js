const mysql = require('mysql');

const connect=()=>{
    const db = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'root',
        database:'newDB'
    });

    db.connect((err)=>{
        if (err) {
            throw err;
        }
        console.log('Connected to database');
    });
}

