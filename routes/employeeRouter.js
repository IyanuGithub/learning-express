const express = require('express')
const router = express.Router()
const{ getEmployees, getSingleEmployee, createEmployee, deleteEmployee, updateEmployee} = require('../controller/employeeController')

router.route('/employees').get(getEmployees).post(createEmployee)
router.route('/employees/:id').get(getSingleEmployee).patch(updateEmployee).delete(deleteEmployee)


// router.get('/employees', getEmployees);
// router.get('/employees/:id', getSingleEmployee);
// router.post('/employees', createEmployee);
// router.delete('/employees/:id', deleteEmployee);
// router.patch('/employees/:id', updateEmployee);

module.exports = router