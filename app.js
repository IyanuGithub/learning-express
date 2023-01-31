require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const employeeRouter = require('./routes/employeeRouter')

//configuring view engine
app.set('view engine', 'ejs')
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routes
app.use(employeeRouter)
//database connection

app.get('/create', (req, res) =>{
    res.status(200).render('create')
})

mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}..`)
    })
})
.catch((err) => {
    console.log(err)
})

//Nosql - sql - Schema