const express = require('express')
const bodyParser = require("body-parser")
const pug = require("pug")

const Post = require("./post")
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('build'));
app.set("view engine", "ejs");

app.get('/', function (req, res) {
     res.sendfile('/');
})
app.post('/', function (req, res) {
    const {name, phoneNumber, email, message} = req.body
    Post.create({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        message: message
    }).then(post => console.log(post._id))
})
app.get('/contacts', function (req, res) {
    res.render('contacts');
})

app.post('/contacts', function (req, res) {
    console.log(req.body)
    res.sendfile("/contacts");    
})
app.get("/admin", function(req, res){
    Post.find({}).then(posts => {
        res.render('admin.ejs', {posts: posts})
    })
    
})

module.exports = app