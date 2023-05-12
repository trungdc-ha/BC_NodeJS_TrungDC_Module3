const http = require('http')
const fs = require('fs')
const qs = require('qs')

let i = 1
const server = http.createServer((req, res) => {
    // server.on('connection', (stream) => {
    //     console.log('someone connected!', i++);
    // })
    if (req.method === 'GET') {
        fs.readFile('./views/register.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        let data = ''
        req.on('data', chunk => {
            console.log('Event-Data-b', data)
            data += chunk
            console.log('Event-Data-a', data)
        })
        req.on('end', () => {
            const userInfo = qs.parse(data)
            fs.readFile('./views/info.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err)
                }
                datahtml = datahtml.replace('{name}', userInfo.name)
                datahtml = datahtml.replace('{email}', userInfo.email)
                datahtml = datahtml.replace('{password}', userInfo.password)
                res.writeHead(200, {'Conten-Type': 'text/html'})
                res.write(datahtml)
                return res.end()
            })
        })
        res.on('error', () => {
            console.log('error')
        })
    }
})

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
})
