const express = require('express');
const cors= require('cors')
const app=express();
const mysql= require('mysql');

const db = mysql.createPool({
    host: 'beley3bhpsjckoefkohr-mysql.services.clever-cloud.com',
    user: 'ueljjyhjwkjhc1u2',
    password: 'fGhY5boS2FGc8PvrdInq',
    database: 'beley3bhpsjckoefkohr'
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get("/api/get-all", (req, res) => {
    const sqlSelect = 'SELECT * FROM cards;';
    db.query(sqlSelect, (err, resul) => {
        res.send(resul)
    })
})

app.get("/api/get-stats", (req, res) => {
    const cardId = req.query.cardId
    const cardType = req.query.cardType
    const sqlSelect = "SELECT * FROM `"+cardType+"_stats` WHERE id= "+cardId+";";
    db.query(sqlSelect, (err, resul) => {
        res.send(resul)
    })

})

app.listen((process.env.PORT || 3001), () =>  {
    console.log('running on port 3001')
})
