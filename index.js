const express = require("express")
const cors = require("cors")
const blog = require("./routing/blogRouting")
const app = express()

app.use(cors({
    origin: "*"
}))

app.use("/",blog)

app.listen(8000,()=>{
    console.log("server is live")
})