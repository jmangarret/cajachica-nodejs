const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const incomeRoute = require('./incomes/routes/incomeRoute'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/income', incomeRoute);
app.use('/egresos', incomeRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})