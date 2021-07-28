// const fs = require('fs');
// const zlib = require('zlib');
// const stream = fs.createReadStream('text.txt', {
//     // highWaterMark: 16,
//     // encoding: 'utf-8',
// })

// const http = require('http')

// http.createServer((req, res) => {
//     res.end('hello')
// }).listen(8080)
// // const server = new

// const output = fs.createWriteStream('text.gzip')

// stream.pipe(zlib.createGzip()).pipe(output)


// stream.pipe(output)

// stream.on('end', () => {
//     console.log('end event')
// })

// output.on('finish', () => {
//     console.log('finish event')
// })

// output.on('end', () => {
//     console.log('output end event')
// })

// stream.on('finish', () => {
//     console.log('stream finish event')
// })

// stream.on('close', () => {
//     console.log('close event')
// })


// stream.on('data', chunk => {
//     console.log(chunk.toString())
// })


// stream.on('error', (err) => {
//     console.log('err')
// })




// stream.pipe(output)

// fs.readFile('text.txt', (err, data) => {
//     if(err) throw err
//     else {
//         console.log(data.toString())
//     }
// })


import Express from 'express';

const app = Express();
const port = 3000;
const mid = (req, res, next) => {
    console.log(req.query)
    console.log(req.params)
    next()
}

let users = {
    1: 'John',
    2: 'Tyler',
    3: 'Jessica'
}



app.get('/users/:id', mid, (req, res) => {
    //res.send('<h1>Hello world</h1>');
    res.json(users)
});

app.listen(port, () => {
    console.log('Listen on localhost 3000')
})


// app.post()
// app.put()