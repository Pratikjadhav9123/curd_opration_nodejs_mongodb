const mongoose = require("mongoose");

const student_schema = new mongoose.Schema({

    name:String,
    age : Number,
    marks: Number
     
          

});


module.exports = mongoose.model("Student",student_schema);

