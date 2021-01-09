// step:

// 1- importing
const express = require('express');

const port = process.env.PORT || 30001; // process.env.port is use for hosting url
const cors = require('cors');


//2- model:- in Model create a Schema 
const Data = require("./src/model/scemaa")
//3- connect Moongo
require("./src/connection/connection");

//4- app config
const app = express();

//5- middleware
app.use(express.json())//show data in json formate
app.use(express.urlencoded({ extended: false }));// its froced to not showing empty data
app.use(cors())




//6- routing
app.post('/add', (req, res) => {
    const dbCard = req.body;
    console.log(dbCard)
    Data.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});
app.get("/viewdata", (req, res) => {
    Data.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// 7-listning port
app.listen(port, () => {
    console.log(`listning to the port number ${port}`);
})