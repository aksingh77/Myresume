const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("weblocm to my contact us");
})

app.listen(port, () => {
    console.log(`listning to the port number ${port}`);
})