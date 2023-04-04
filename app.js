const express= require('express')
const mongoose = require('mongoose')
const app= express();
const url='mongodb://0.0.0.0:27017/NewDBex'
mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection;
con.on("open",()=>{
    console.log("connected to 27017 port...")
});
app.use(express.json())
const bookRouter=require('./routes/books')
app.use('/books',bookRouter)

app.listen(9000,()=>{
    console.log('server started')
})