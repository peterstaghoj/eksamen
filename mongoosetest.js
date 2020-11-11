const mongoose = require('mongoose')


const testSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId
    name: String,
    password: String
});

module.exports = mongoose.model('Test', testSchema);