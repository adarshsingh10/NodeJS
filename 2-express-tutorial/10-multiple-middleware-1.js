const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res
app.use([authorize, logger])
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/api/products', (req, res) => {
    res.send('Products Page')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items Page')
})

app.listen(5000, () => {
    console.log('App is listening to port 5000')
})
