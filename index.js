const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect(
    "mongodb://localhost:27017/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get("/", (req, res) => {
    Product.create({
        title: "title",
        description: "description",
        url:"www.google.com"
    })
    return res.send('Ola mundo');
});

app.listen(3001);