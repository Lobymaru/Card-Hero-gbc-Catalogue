const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors')
const app=express();
const mysql= require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'LimitedUser',
    database: 'card_hero-cards'
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get("/api/get", (req, res) => {
    const sqlSelect = 'SELECT name FROM cards;';
    db.query(sqlSelect, (err, resul) => {
        res.send(resul)
    })
})

app.listen(3001, () =>  {
    console.log('running on port 3001')
})