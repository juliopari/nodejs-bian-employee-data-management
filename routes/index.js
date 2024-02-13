const express = require('express');
const employeeDataManagementRouter = require('./employee-data-management.routes');

function routerAPIEmployeeDataManagement(app){

  const router = express.Router();
  app.use('/employee-data-management/v1.0', router);
  router.use('/personal-information', employeeDataManagementRouter);

}

module.exports = routerAPIEmployeeDataManagement;
