const mongoose = require('mongoose')
const Post = mongoose.Schema({
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
},
{
    versionKey: false
})
module.exports = mongoose.model('Post', Post)