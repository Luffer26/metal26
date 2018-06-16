const express = require('express')
const bodyParser = require("body-parser")
const pug = require("pug")

const Post = require("./routes/post")
const Server = require("./server.js")
const app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));
app.set("view engine", "ejs");

app.post('/', function (req, res) {
    const {name, phoneNumber, email, message} = req.body
    Post.create({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        message: message
    })
    return console.log("Отправлено")
})

app.get("/admin", function(req, res){
    Post.find({}).then(posts => {
        res.render('admin.ejs', {posts: posts})
    })
})
app.post('/admin', function(req, res){
    const id = req.body._id
    Post.find({_id:  id}).remove().exec();
})

module.exports = app