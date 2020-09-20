'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let store = ['Abubakar', 'Ahmad', 'Aisha', 'Ayush', 'Abdullahi', 'Abdulaziz', 'Abdulhakeem', 'Abdulalim'];

app.get('/user', (req, res) => {
    const {search} = req.query;
    const result = doSearch(search);
    res.status(200).json({ status: 'success', payload: result, message: 'Fetched successfully' });
});

app.use(express.static(__dirname + '/www'));

app.listen(9000, () => {
    console.log('Server listening on port 9000');
});

function doSearch(searchTerm) {
   let temp = [];
   store.forEach(obj => {
       if(obj.startsWith(searchTerm)) {
           temp.push(obj);
       }
   })
   return temp;
}

module.exports.app = app;