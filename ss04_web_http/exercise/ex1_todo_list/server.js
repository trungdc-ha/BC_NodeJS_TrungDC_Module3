const http = require('http')
const fs = require('fs')
const qs = require('qs')

let i = 1
let todos = []
const server = http.createServer((req, res) => {
    // server.on('connection', (stream) => {
    //     console.log('someone connected!', i++);
    // })
    if (req.method === 'GET') {
        fs.readFile('./views/todo.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {

        req.on('data', chunk => {
            console.log(qs.parse(chunk)) //ra mã ..... ==> muốn ra object phải chuyển chunk thành chuỗi
            console.log(qs.parse('' + chunk))
            todos.unshift(qs.parse('' + chunk).task)
        })
        req.on('end', () => {
            fs.readFile('./views/display.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err)
                }
                let tbody = ''
                todos.map((value, index) => {
                    tbody += '<tr>'
                    tbody += '<td>' + (index + 1) + '</td>'
                    tbody += '<td>' + value + '</td>'
                    tbody += '</tr>'
                })

                datahtml = datahtml.replace('{data}', tbody)
                res.writeHead(200, {'Content-Type': 'text/html'})
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
