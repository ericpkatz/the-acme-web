const express = require('express');

const server = express();

server.use(express.static('static'));
server.use((req, res, next)=> {
  console.log(req.url);
  next();
});

server.get('/', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>Acme Web</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <h1>The Acme Web</h1>
        <nav>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/products'>Products</a>
        </nav>
      </body>
    </html>
  `);
});

server.get('/about', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>Acme About</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <h1>The Acme Web About</h1>
        <nav>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/products'>Products</a>
        </nav>
      </body>
    </html>
  `);
});

server.get('/products', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>Acme Products</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <h1>The Acme Web Products</h1>
        <nav>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/products'>Products</a>
        </nav>
      </body>
    </html>
  `);
});


const port = process.env.PORT || 3000;

server.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});