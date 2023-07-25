const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Contectado do MongoDB"))
  .catch((error) => console.log(error));