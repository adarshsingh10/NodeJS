const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('Request received. Setting up file stream.');

    // Start asynchronous operation
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

    fileStream.on('open', () => {
        console.log('File stream opened. Piping data to response.');
        fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
        console.log('Error reading file:', err);
        res.end(err);
    });

    // Log after setting up the stream to show event loop continues
    console.log('File stream set up. Waiting for file events.');
}).listen(5000, () => {
    console.log('Server listening on port 5000');
});

// Additional asynchronous operation to demonstrate event loop behavior
setTimeout(() => {
    console.log('This message shows that the event loop is still active.');
}, 1000);


// Some part of code is added to test the asynchronous behaviour of the code