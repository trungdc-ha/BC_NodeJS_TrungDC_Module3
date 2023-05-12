const http = require('http')

http.createServer(function (req, res) {
    let txt = '';
    if (req.url === '/login') {
        txt = 'Login success'
    } else {
        txt = 'Login fail'
    }
    res.write(`<h1>${txt}</h1>`)
    res.end()
}).listen(8080, 'localhost')
