const express = require('express');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes');
require('dotenv').config();
const SERVER_PORT = process.env.PORT || 3001;

const app = express();
connectDB();

app.use(express.json());
app.use('/', restaurantRoutes);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port http://localhost:${SERVER_PORT}`);
});