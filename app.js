const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/student_db'
// const url = 'mongodb://localhost:27017/testDb'

const app = express()
app.use(express.json())
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


const  student_routes = require("./routes/student_routes")

app.use("/student_api/student",student_routes);

const port=9000
app.listen(port,function(){
    console.log(`listening port ${port}`);
});