const http = require('http');

const server = http.createServer((req, res)=> {
  res.write('hello world!!');
  res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});