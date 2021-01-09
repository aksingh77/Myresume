const mongoose = require('mongoose');

const conn = "mongodb+srv://admin:admin@cluster0.l9g7e.mongodb.net/mongodb?retryWrites=true&w=majority"
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connect db')
}).catch((err) => {
    console.log(err.message)
});

