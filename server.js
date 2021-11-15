const exprees = require('express');

const app = exprees();

const image_reel = [
    {id: 0, url: 'https://cdn.escapism.to/featured_image/5fbd1964287f4.jpeg'},
    {id: 1, url: 'https://www.jetsetter.com/uploads/sites/7/2018/04/SnqAHi_W.jpeg'},
    {id: 2, url: 'https://travellemming.com/wp-content/uploads/things-to-do-banff-alberta-e1625858708125.jpg'},
    {id: 3, url: 'https://ordinarytraveler.com/wp-content/uploads/2018/11/banff-national-park-travel-guide.jpg'},
    {id: 4, url: 'https://www.banff-springs-hotel.com/wp-content/uploads/2021/03/iStock-968089282.jpg'},
];

var curr_img_id = 0;

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

app.get('/api/img', (req, res) => {
    res.send(image_reel[curr_img_id % 5]);
    curr_img_id += 1;
});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));