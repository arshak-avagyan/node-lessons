// let users = []
// let msgs = []

// const Events = require('events')
// const EventEmitter = Events.EventEmitter;
// EventEmitter.defaultMaxListeners = 1

// const Logger = new EventEmitter()
// const def = new EventEmitter()

// def.on('message', () => {
//     console.log('Hi')
//     // msgs.push(msg)
// })


// Logger.on('message', () => {
//     console.log('Hi')
//     // msgs.push(msg)
// })

// Logger.on('message', () => {
//     console.log('Hello')
//     // msgs.push(msg)
// })

// def.emit('message')
// Logger.emit('message')

// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')


// Logger.on('message', () => {
//     console.log('Hi')
//     // msgs.push(msg)
// })

// Logger.on('login', (name) => {
//     console.log('New user: ' + name)
//     users.push(name)
// })

// Logger.on('getUsers', () => {
//     console.log('Logged users ')
//     for(let i of users) {
//         console.log(i)
//     }
// })

// Logger.on('getMessages', () => {
//     console.log('Messages ')
//     for(let i of msgs) {
//         console.log(i)
//     }
// })

// Logger.emit('message', 'Hello world')
// Logger.emit('message', 'Good morning')
// Logger.emit('login', 'Arshak')
// Logger.emit('login', 'John')
// Logger.emit('getUsers')
// Logger.emit('getMessages')

// console.log(process.env)
// let users = []
// let msgs = []

// const Events = require('events')
// const Logger = new Events()

// Logger.on('message', (msg) => {
//     console.log('New message: ' + msg)
//     msgs.push(msg)
// })


// Logger.on('login', (name) => {
//     console.log('New user: ' + name)
//     users.push(name)
// })

// Logger.on('getUsers', () => {
//     console.log('Logged users ')
//     for(let i of users) {
//         console.log(i)
//     }
// })

// Logger.on('getMessages', () => {
//     console.log('Messages ')
//     for(let i of msgs) {
//         console.log(i)
//     }
// })

// Logger.emit('message', 'Hello world')
// Logger.emit('message', 'Good morning')
// Logger.emit('login', 'Arshak')
// Logger.emit('login', 'John')
// Logger.emit('getUsers')
// Logger.emit('getMessages')

// const argv = require('minimist')(process.argv.slice(2))

// addUser(argv.addUser)
// message(argv.message)

// function addUser (name) {
//     if(name) users.push(name)
// }

// function message (message) {
//     if(message) msgs.push(message)
// }

// console.log(users)
// console.log(msgs)

// let users = []
// let msgs = []

// const Events = require('events')
// const Logger = new Events()

// Logger.on('message', (msg) => {
//     console.log('New message: ' + msg)
//     msgs.push(msg)
// })


// Logger.on('login', (name) => {
//     console.log('New user: ' + name)
//     users.push(name)
// })

// Logger.on('getUsers', () => {
//     console.log('Logged users ')
//     for(let i of users) {
//         console.log(i)
//     }
// })

// Logger.on('getMessages', () => {
//     console.log('Messages ')
//     for(let i of msgs) {
//         console.log(i)
//     }
// })

// Logger.emit('message', 'Hello world')
// Logger.emit('message', 'Good morning')
// Logger.emit('login', 'Arshak')
// Logger.emit('login', 'John')
// Logger.emit('getUsers')
// Logger.emit('getMessages')

// const argv = require('minimist')(process.argv.slice(2))

// addUser(argv.addUser)
// message(argv.message)

// function addUser (name) {
//     if(name) users.push(name)
// }

// function message (message) {
//     if(message) msgs.push(message)
// }

// console.log(users)
// console.log(msgs)

const fs = require('fs');
const path = require('path')

// fs.readFile('./data/text.txt', (err, data) => {
//     if(err) throw err
//     console.log('Data: ', data.toString())
// })

// try{
//     const data = fs.readFileSync('./data/text.txt')
//     console.log('Sync data: ', data.toString())
// } catch (e){
//     console.error(e)
// }

function check() {
    fs.writeFile('./data/myfile.txt', './data.myfile.txt', function (err) {
        if (err) throw err;
        console.log('Created!');
    });

    fs.readFile('./data/myfile.txt', (err, data) => {
        if(err) throw err
        console.log(data.toString())
    })
}


check();


// console.log(path.join('data', 'text.txt'))


