const express = require('express');
const Order = require('../models/order');

const router = express.Router();

router.post('/orders', async (req, res) => {
    const order = new Order({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        items: req.body.items,
        totalAmount: req.body.totalAmount
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items.productId');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
