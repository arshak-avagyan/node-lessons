const http = require('http');
const {fork} = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const forkedProcess = fork('factorial.js');
    forkedProcess.on('message', (message) => {
       console.log(res.end(message));
    })
  } else {
    res.end('The program is stopped')
  }
});

const port = 3000;
server.listen(port, ()=> {
  console.log(`Server listen to port: ${port}`)
});
