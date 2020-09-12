require('./connections/connection.mongo')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', payload: { apiVersion: 1.0, writtenBy: 'LexClass Members', supervisedBy: 'Khalil Mohammed Shams <shamskhalil@gmail.com>', date: 'August 2020' }, message: 'Welcome to Lexclass REST API' });
});

//User Rooute
const userRoute = require('./routes/route.user')();
app.use('/api/v1/user', userRoute);

app.listen(9000, () => {
    console.log('User Microservice listening on port 9000')
});

module.exports.app = app;