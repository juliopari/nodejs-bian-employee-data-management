const express = require('express');
const routerAPIEmployeeDataManagement = require('./routes');

const app = express();
const port = 3000;
app.use(express.json());

routerAPIEmployeeDataManagement(app);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
