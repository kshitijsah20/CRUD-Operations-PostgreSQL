const pool = require('/Users/rites/Desktop/node course/RESTAPI/db.js');
const queries = require('/Users/rites/Desktop/node course/RESTAPI/src/student/queries.js')

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error,results) => {
        if (error) throw error;
        res.status(200).send(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const { id, name, email, age, dob } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }

        pool.query(queries.addStudent, [id, name, email, age, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send("Student Created Successfully");
          }
        );
    });
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student does not exist in the database");
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student Removed Successfully.");
        });
    });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    console.log(name)

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound =  !results.rows.length;
        if (noStudentFound) {
            res.send("Student does not exist in the database");
        }

        pool.query(queries.updateStudent, [id, name], (error, results) => {
            if(error){console.log(error)} 
            res.status(200).send("Student Updated Successfully");
        });
    })
}


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
};

