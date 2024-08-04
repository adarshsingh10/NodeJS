const {readFile, writeFile} = require('fs');

readFile(__dirname + '/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('First error is: ', err)
        return
    }
    const first = result;
    readFile(__dirname + '/content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('Second error is: ', err)
            return
        }
        const second = result;
        writeFile(
            __dirname + '/content/result-async.txt',
            `Here is the result : ${first}, ${second}`
        , (err, result) => {
            if (err) {
                console.log('Third error is: ', err)
            }
            console.log(result)
        })
    })
})
