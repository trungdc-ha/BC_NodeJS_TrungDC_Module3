const http = require('http')
const fs = require('fs')
const qs = require('qs')

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        fs.readFile('./views/calculator.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } else {
        let data = ''
        req.on('data', chunk => {
            data = qs.parse(''+ chunk)
        })
        req.on('end', () => {
            fs.readFile('./views/calculator.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err)
                }
                let str = `${data.a} ${data.cal} ${data.b}`
                console.log(str)
                let result = `<h1>${str} = ${eval(str)}<h1/>`

                datahtml = datahtml.replace('<hr/>', result)
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
