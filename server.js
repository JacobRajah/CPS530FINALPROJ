const exprees = require('express');

const app = exprees();

app.get('/api/customers', (req, res) => {
    // req => requesting data parameters here
    // res => response data can be placed here
    const customers = [
        {id: 1, firstName: 'Jacob', lastName: 'Rajah'},
        {id: 2, firstName: 'Adam', lastName: 'Varghese'},
        {id: 3, firstName: 'Paige', lastName: 'Lewis'}
    ];
    res.send(customers);
});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));