const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// 1. GET all restaurants
router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. GET all restaurants by cuisine
router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const cuisine = req.params.cuisine;
        const restaurants = await Restaurant.find({ cuisine: cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. GET all restaurants in ascending or descending order
router.get('/restaurants', async (req, res) => {
    try {
        const sortBy = req.query.sortBy === "DESC" ? -1 : 1;
        const restaurants = await Restaurant.find({}, ' _id restaurant_id name cuisines city')
            .sort({ restaurant_id: sortBy });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 4. GET all with Delicatessen cuisines, not in Brooklyn
router.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: 'Delicatessen',
            city: { $ne: 'Brooklyn' }
        }, "-_id cuisines name city").sort({ name: 1 });

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;