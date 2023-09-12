const {api,bollywood, hollywood, technology, food, fitness} = require("../controller/blogController")
const blog=require("express").Router()

blog.get('/',api)
blog.get('/bollywood',bollywood)
blog.get('/hollywood',hollywood)
blog.get('/technology',technology)
blog.get('/food',food)
blog.get('/fitness',fitness)

module.exports = blog