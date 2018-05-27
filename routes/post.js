const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String
    },
    email:{
        type: String
    },
    message: {
        type: String
    },
    
},
{
    timestamps: true
})

module.exports = mongoose.model('Post', Schema)