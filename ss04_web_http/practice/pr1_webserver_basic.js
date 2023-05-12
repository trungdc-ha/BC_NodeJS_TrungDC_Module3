const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1>Hello CodeGym</h1>')
    res.end();
})

server.listen(8080, 'localhost')
