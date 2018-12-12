var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = 3000;
let count = 0;


// Body parser formats the content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// What designates the public folder for static files

app.use(express.static(__dirname + '/public-counter'));


// Increment Post 

app.post('/api/increment', function(request, response){
    count++;
    response.send(`Count: ${count}`);
});

//Decrement post

app.post('/api/decrement', function(request, response){
    count--;
    response.send(`Count: ${count}`);
});


app.get('/api/value', function(request,response) {
    response.send(`Count: ${count}`);
});

// // Use the get function to set a route
// app.get('/', function(request, response) {
//     response.send('Hello Digital Crafts');
// });


app.listen(3000, function() {
    console.log('server is running catch it');
});