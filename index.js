const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    "mongodb://localhost:27017/test",
    { useNewUrlParser: true}
);


app.get("/", (req,res) => {
    res.send('Ola mundo')
})

app.listen(3001);