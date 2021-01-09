const mongoose = require('mongoose');

//creat Schema
const crudSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    number: String,
    selectoption: String,
    gender: String,
})

//create collection name

const Data = new mongoose.model("Data", crudSchema);
module.exports = Data;