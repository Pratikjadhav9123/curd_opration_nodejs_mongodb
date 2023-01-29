const router = require("express").Router();


const student_controllers = require('../controllers/student_controllers');

router.post("/",student_controllers.student_create);
router.get("/",student_controllers.get_students_all_data);
router.get("/:student_id",student_controllers.get_single_student_data );
router.post("/:student_id",student_controllers.updating_student_data);
router.delete("/:student_id",student_controllers.student_delete);


module.exports = router;