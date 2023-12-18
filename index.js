const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Patient = require('./models/patientModel');




mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('Connected to MongoDB')}
).catch((error)=>console.log(error.message));

app.listen(3000, ()=> {
    console.log('Node server is running')
});