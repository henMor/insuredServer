const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(cors());

var userRoute = require('./Routes/usersRoutes.js');
app.use(bodyparser.json());
app.use('/api/users', userRoute);

const db_path = process.env.MONGO_URI || 'mongodb://localhost/insureapp';


mongoose.connect(db_path, { useNewUrlParser: true });
const port = 5000;
app.listen(port, function () {
    console.log('CORS-enabled web server listening on port ' + port)
})
  

