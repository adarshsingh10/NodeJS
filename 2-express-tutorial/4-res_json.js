const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    // res.json([{ 'name': 'john'}, { 'name': 'susan'}])
    res.json(products)
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('App is listening on port 5000')
})