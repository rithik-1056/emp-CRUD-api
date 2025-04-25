const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
    name: { type:String, required: true },
    department: { type:String, required: true },
    salary: { type:Number },
    doj: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', empSchema);