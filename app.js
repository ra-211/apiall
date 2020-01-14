const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Midelewares
app.use(morgan('dev'));
app.use(bodyParser.json());


// Routes
app.use('/users', require('/routes/users'));


// start server
const port = process.env.PORT ||  3000;

app.listen(port);
console.log('server listening ${port}');

