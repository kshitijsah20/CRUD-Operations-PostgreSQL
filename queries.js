const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM  students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent = "INSERT INTO students (id, name, email, age, dob) VALUES ($1, $2, $3, $4, $5)";
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $2 WHERE id = $1";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
};
