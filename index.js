const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Patient = require('./models/patientModel');




mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('Connected to MongoDB')}
).catch((error)=>console.log(error.message));

app.post("/patient", async(req,res) => {
    const check = await Patient.find(
        {FirstName:req.body.firstName,Surname:req.body.surName},
        {FirstName:true}
    );
  
        if (check.length==0) {
            const patient = await Patient.create(req.body);
            res.status(200).json(patient);
           }    
           else {
            res.status(404).json({message:"Patient's records is already present"}); 
            console.log(check);
           }

})






app.listen(3000, ()=> {
    console.log('Node server is running')
});