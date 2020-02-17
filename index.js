const express = require('express');
const cors = require('cors');
const app = express();

const { mongoClient } = require('./mongo');

var bodyParser = require('body-parser');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api', require('./router'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});