const express = require('express');  
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/calc', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    const operation = req.body.operation;

    let result;

    if ( operation === 'add') {
        result = num1 + num2;
    } else if ( operation === 'sub') {
        result = num1 - num2;
    }else if ( operation === 'mul') {
        result = num1 * num2;
    }

    console.log(result);

    res.send(`<h1>Result : ${result}</h1><a href="/">Go Back</a>`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});