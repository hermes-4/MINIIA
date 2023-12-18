const mongoose = require('mongoose')

const PatientModel = mongoose.Schema({
    Id:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    othernames:{
        type:String,
    },
    Gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    residentialAddress:{
        type:String,
        required:true
    },
    emergencyContactName:{
        type:String,
        required:true
    },
    relationshipwithEM:{
        type:String,
        required:true
    },
    appointments:{
        type:Array,
    },
    patientVitals:{
        type:Array
    }
})



const Patient = mongoose.model("Patient", PatientModel);

module.exports = Patient;