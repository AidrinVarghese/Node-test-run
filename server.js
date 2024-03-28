// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   res.write("<h1>Hello, Node.js HTTP Server!</h1>")
//   res.end()
// })

// const port = 3000

// server.listen(port, () => {
//   console.log(`Node.js HTTP Server is running on port ${port}`)
// })

// the above is for http server that is not using express


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

app.use('/users', usersRoute);
app.use('/products', productsRoute);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});