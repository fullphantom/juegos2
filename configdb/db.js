const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('estamos conectados desde mongoDB'))
    .catch((err) => console.error(err));
}

module.exports = conectarDB;