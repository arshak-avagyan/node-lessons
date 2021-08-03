const express = require('express')
const PORT = 8080
const HOST = 'aavagyan'
const app = express()

app.get('/', (req, res) => {
    res.send("A.Avagyan: EPAM Docker homework")
})

app.listen(PORT, HOST);

console.log(`Running on port ${PORT}`)