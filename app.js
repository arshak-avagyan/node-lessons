let users = []
let msgs = []

const Events = require('events')
const Logger = new Events()

Logger.on('message', (msg) => {
    console.log('New message: ' + msg)
    msgs.push(msg)
})


Logger.on('login', (name) => {
    console.log('New user: ' + name)
    users.push(name)
})

Logger.on('getUsers', () => {
    console.log('Logged users ')
    for(let i of users) {
        console.log(i)
    }
})

Logger.on('getMessages', () => {
    console.log('Messages ')
    for(let i of msgs) {
        console.log(i)
    }
})

Logger.emit('message', 'Hello world')
Logger.emit('message', 'Good morning')
Logger.emit('login', 'Arshak')
Logger.emit('login', 'John')
Logger.emit('getUsers')
Logger.emit('getMessages')
