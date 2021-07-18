const path = require('path')
const fs = require('fs')
const readline = require('readline')
const csvtojson = require("csvtojson");


/////////////////////////////// Task 1 ///////////////////////////////

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// function read() {
//     rl.question('Please type the address to read the file \n', (userInput) => {
//         if(fs.existsSync(userInput)) {
//             fs.readFile(userInput, (err, data) => {
//                 if(err) {
//                     console.log('error: ' + err)
//                     read()
//                 } else {
//                     console.log(data.toString())
//                     rl.close()
//                 }
//             })
//         } else {
//             console.log('Wrong directory')
//             read()
//         }
//     })
// }

// rl.on('close', () => {
//     console.log('Successful!!!')
// })

// read()

/////////////////////////////// Task 2 ///////////////////////////////

// const dir = path.join('test', 'addresses.csv') 
// csvtojson().fromFile(dir).then(data => {
//     console.log(data)
// })



/////////////////////////////// Task 3 ///////////////////////////////


///////////////Unzip///////////////////

// const decompress = require('decompress');

// (async () => {
//     try {
//         const files = await decompress("test/node_modules.zip", "test/unzipped")
//         console.log('done')
//     } catch (error) {
//         console.log(error)
//     }
// })()


// const startPoint = 'test/unzipped/node_modules';
// let deep = 0;

// function generateStructure(dir, deep) {
//     fs.readdirSync(dir).forEach((file) => {
//         let fullPath = path.join(dir, file);
//         if (fs.lstatSync(fullPath).isDirectory()) {
//             console.log(" ".repeat(deep) + '|__' + file)
//             generateStructure(fullPath, deep+2);
//         } else {
//             console.log(" ".repeat(deep) + '|__' + file)
//             //Do some code
//         }
//     });
// }

// generateStructure(startPoint, deep)