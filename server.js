const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js');


http.createServer((req, res)=> {
    let url = req.url;

    if (url === '/') {
        res.end('<h1>Servidor rodando normalmente</h1>')
    }if (url === '/stats') {
        res.end(JSON.stringify(stats, null, 2))
    }
}).listen(port, () => console.log("Servidor rodando em ", `${host}:${port}, ${stats}`));