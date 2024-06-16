const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure the correct path to the Product model

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

// Add a new product
router.post('/', async (req, res) => {
    const { name, price, description, imageUrl } = req.body;

    try {
        const newProduct = new Product({
            name,
            price,
            description,
            imageUrl
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
});

module.exports = router;
