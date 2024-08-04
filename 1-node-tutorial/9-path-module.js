const path = require('path')

console.log('Path Separator: ', path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log('File Path after path.join: ', filePath)

const base = path.basename(filePath)
console.log('The basename in file path is: ', base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log('The absolute path from path.resolve is: ', absolute)
