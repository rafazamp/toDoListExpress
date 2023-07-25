const express = require('express');
const checkListRouter = require('./src/routes/checklist');
require('./config/database')

const app = express();
app.use(express.json());

app.use("/checklists",checkListRouter); 



PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log("Servidor rodando na Porta " + PORT);
});