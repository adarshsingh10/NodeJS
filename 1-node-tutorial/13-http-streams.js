const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async(firstPath, secondPath) => {
    try {
    const first = await readFilePromise(firstPath, 'utf8');
    const second = await readFilePromise(secondPath, 'utf8');
    await writeFilePromise(
        './content/result-mind-grenade.txt', 
        `THIS IS AWESOME : ${first} ${second}`,
        { flag: 'a' }
    )
    console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start('./content/first.txt', './content/second.txt');

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// } 

// getText('./content/first.txt')
//     .then(result => console.log(result))
// .catch(err => console.log(err))