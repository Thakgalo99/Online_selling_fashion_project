
const express = require('express');
const router = express.Router();

const products_model = require('../models/products_model');

// function for getting a product by id
router.get('/:id', function (req, res, next) {
    products_model.findById(req.params.id, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

//function for getting all the products
router.get('/', function (req, res, next) {
    products_model.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

//function for adding a new product to the table
router.post('/', function (req, res, next) {
    products_model.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

//function for deleting a product from table
router.delete('/:id', function (req, res) {
    products_model.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("not found.");
            products_model.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    });
});

//funtion for updating the product
router.put('/:id', function (req, res) {
    products_model.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("not found.");
            products_model.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    });
});

module.exports = router;