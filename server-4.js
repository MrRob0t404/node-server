// const htmlFile= require('./index.html')
const http = require('http')
const port = 3000
const fs = require('fs')
var html2;
var html;

fs.readFile('page2.html', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
    // console.log(html)
    html2 = data
})

fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
    // console.log(html)
    html = data
})


const server = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if (req.url === '/page2') {
        res.write(html2)
        res.end()
    } else if (req.url === '/') {
        res.write(html)
        res.end()
    } else if (req.url === '/index.html') {
        res.write(html)
        res.end()
    } else {
        res.write('page not found')
        res.end()
    }
})

server.listen(port, () => {
    console.log(`the server is running on http://localhost:${port}`)
})