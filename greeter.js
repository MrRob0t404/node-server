const http = require('http')
const url = require('url')
const port = 3000;
const fs = require('fs')
var page2;
var index;
var page3;


fs.readFile('page2.html', 'utf-8', (err, data) => {

})



const server = http.createServer((req, res) => {
    // console.log(req.url)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write(page2)
    res.end()
}
})

server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})