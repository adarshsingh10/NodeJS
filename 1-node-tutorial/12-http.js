const http = require('http');

const server = http.createServer((req, res) => {    // req -> Incoming request from client to the server
    // res.write('Welcome to our home page')
    // res.end()
    if (req.url === "/") {
        res.end("Welcome to our home page")
        return
    }
    if (req.url === "/about") {
        res.end("Welcome to our short history")
        return
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000, () => {
    console.log('Server is running on port 5000');
})