
const { resolveSoa } = require("dns");
const Student = require("../model/student");


// get all student data 


const get_students_all_data = async (req , res )=> {
        try{
          const student = await Student.find();

          res.json(student)
          }catch (error){
            res.josn({message:error});
          }
};

// getting single student data
const get_single_student_data = async (req, res)=> {

    try{
        const getID=req.params.student_id;
        //const student = await Student.findOne(parseInt(req.params.student_id));
        const student = await Student.findById({_id:getID});
        console.log(student)
        res.json(student);
        // res.josn(student);

    }catch(error){
        // res.josn({
        //     massage:error 
        // })
        console.log(error);
    }

}

// add new student 

const student_create = async (req , res )=> {

    const student = new Student({
        name:req.body.name,
        age:req.body.age,
        marks:req.body.marks
    });

    try{

        const save_student = await student.save();
        res.send(save_student);
    }catch (error){
        res.send("error while adding student");
    }

}




// updating student data

const updating_student_data = async(req , res) => { 


    try {

        const student ={

            name:req.body.name,
            age:req.body.age,
            marks:req.body.marks 

        };

        const update_student = await Student.findByIdAndUpdate(
            {
            _id :req.params.student_id
            },student  // here updating the student 
             
            );
        res.json(update_student);    
    }catch(error){
        res.josn ({
            message:error
        });
    }
        


}


// deleting student

const student_delete = async (req,res)=>{

    try{
        const delete_student = await Student.findByIdAndDelete(req.params.student_id);
        res.json(delete_student);
    }catch(error){

        res.send("error while deleting data")
    }
}


module.exports = {
    get_students_all_data,
    get_single_student_data,
    student_create,
    updating_student_data,
    student_delete
}
