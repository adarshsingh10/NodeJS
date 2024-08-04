const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync(__dirname + '/content/first.txt', 'utf8')
const second = readFileSync(__dirname + '/content/second.txt', 'utf8')

// console.log(first, second)

writeFileSync(
    __dirname + '/content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }                                                     // { flag: 'a' } appends the data again what was added before in the file
)

const third = readFileSync(__dirname + '/content/result-sync.txt', 'utf8')
// console.log('Data from result-sync file is: ', third)

console.log('done with this task')
console.log('starting the next one')
