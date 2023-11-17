const http = require("http")
const host  = "127.0.0.1"
const port = 3000

const server  = http.createServer((req, res)=> {
  res.statusCode = 200 // Status OK
  res.setHeader("Content-Type", "text/plain");
  res.end("Olá, mundo, \n meu primeiro Script");
});

server.listen(port, host, ()=> {
    console.log(`Server is running at http://${host}:${port}`);
});