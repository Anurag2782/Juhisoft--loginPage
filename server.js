const bodyParser = require("body-parser");
const express = require("express");
const mysql = require('mysql');
const ejs = require("ejs");
const app = express();
// const connect=()=>{
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'newDB'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
// }

var user;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get('/', function (req, res) {
    res.render('login');
});

app.post("/", function (req, res) {
    var id = req.body.id;
    var password = req.body.id;

    var sql = 'SELECT id,password FROM USERS';
    var exist = false;
    user = id;
    db.query(sql, function (err, rows, fields) {
        let result = Object.values(JSON.parse(JSON.stringify(rows)));
        result.forEach((v) => {
            if (v.id === id && v.password === password) {
                exist = true;
            }
        });
        if (exist) {
            if (id === 'admin') {
                var customer1Quantiy = 0;
                var customer2Quantiy = 0;
                var customer1Weight = 0;
                var customer2Weight = 0;
                var customer1Boxcount = 0;
                var customer2Boxcount = 0;
                var query = 'select customer_id,quantity,weight,box_count from customers;';
                db.query(query, function (err, rows, fields) {
                    if (err) throw err;
                    let result = Object.values(JSON.parse(JSON.stringify(rows)));
                    result.forEach((v) => {
                        // console.log(v.customer_id);
                        if (v.customer_id === 'customer1') {
                            customer1Boxcount += v.box_count;
                            // console.log(customer1Boxcount +"    ----   " + v.box_count);
                            customer1Quantiy += v.quantity;
                            customer1Weight += v.weight;
                        }
                        if (v.customer_id === 'customer2') {
                            customer2Boxcount += v.box_count;
                            customer2Quantiy += v.quantity;
                            customer2Weight += v.weight;
                        }
                    })
                    // console.log(customer1Boxcount);
                    var values1 = [customer1Quantiy, customer1Weight, customer1Boxcount];
                    var values2 = [customer2Quantiy, customer2Weight, customer2Boxcount];
                    // console.log(values1);
                    res.render('admin', { customer1: values1, customer2: values2 });
                })
                console.log(customer1Boxcount);

            } else {

                res.render('detail');
            }
        }
        else {
            res.send('<h1>Incorrect password or username</h1>');
        }

    })
});
app.get("/detail", function (req, res) {
    res.render('detail');
})
app.post("/completed", function (req, res) {
    res.render('login');
});

app.post("/detail", function (req, res) {
    var [order_date, company, owner, item, quantity, weight, req_shipment, tracking_id, shipment_size, box_count, specification, checklist_quantity] = req.body;
    var values = [String(user), String(order_date), String(company), String(owner), (item), quantity, weight, String(req_shipment), tracking_id, shipment_size, box_count, String(specification), String(checklist_quantity)];
    var sql = 'INSERT INTO customers  VALUES (' + values + ');';
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log('inserted succesfully');

    })
    // console.log(req.body); 
    res.render("completed");
})

app.listen(3000, function () {

    console.log('Server has started at Port 3000');
})