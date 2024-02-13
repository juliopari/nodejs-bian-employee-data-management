const express = require('express');
const EmployeeDataManagementService = require('../services/employee-data-management.services');
const router = express.Router();

const employeeDataManagementService = new EmployeeDataManagementService();

router.post('/retrieve', (req, res) => {

  const body = req.body;
  const result = employeeDataManagementService.sumar(body.numero1, body.numero2);

  res.json(
    {
      resultado: result
    }
  );

});

module.exports = router;
