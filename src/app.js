const express = require('express');
const cors = require('cors');
const sequelize = require('./database/db');

const bodyParser = require('body-parser');
const incomeRoute = require('./incomes/routes/incomeRoute'); 
const pettyCashRoute = require('./incomes/routes/pettyCashRoute');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// app.get('/creat_tablas', function(req, res){
//   Income.create({ 
//     idPettyCash: 1,
//     date: new Date(),
//     incomeType: "Eectivo",
//     numberDoc: "1234",
//     client: "Alejandro",
//     concept: "Pgo de algo",
//     amount: 100,
//     userId: 1,
//     createdAt: new Date(),
//     updateAt: new Date(),
//     status: 1
//   }).then(income => {
//     res.json(income);
//   });
// })

app.use('/income', incomeRoute);
app.use('/egresos', incomeRoute);
app.use('/caja', pettyCashRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  //Conectar a la base de datos
  //Force true = DROP TABLES
  sequelize.sync({force: false}).then(() =>{
    console.log("Conexión correcta");
  }).catch(error => {
    console.log("Se ha producido un error: ", error);
  })
})