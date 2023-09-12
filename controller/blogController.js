const database = require("./database")

const api = (req,res)=>{
    res.send(database)
}

const bollywood = (req,res)=>{
    const data = database.filter((item) => item.cate === 'Bollywood')
    res.send(data)
}

const hollywood = (req,res)=>{
    const data = database.filter((item) => item.cate === 'Hollywood')
    res.send(data)
}

const technology = (req,res)=>{
    const data = database.filter((item) => item.cate === 'Technology')
    res.send(data)
}

const food = (req,res)=>{
    const data = database.filter((item) => item.cate === 'Food')
    res.send(data)
}

const fitness = (req,res)=>{
    const data = database.filter((item) => item.cate === 'Fitness')
    res.send(data)
}
module.exports = {api, bollywood, hollywood, technology, food, fitness}