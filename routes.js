const { Router } = require('express');
const controller =  require('/Users/rites/Desktop/node course/RESTAPI/src/student/controller.js');

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);
router.delete("/:id", controller.removeStudent);
router.put("/:id", controller.updateStudent);

module.exports = router;    