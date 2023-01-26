const http = require('http');

const server = http.createServer((req, res)=> {
  if(req.url === '/'){
    res.write(`
      <html>
        <head>
          <title>The Acme Web</title>
          <style>
            nav a.selected {
              border: solid 1px dodgerBlue;
            }
          </style>
        </head>
        <body>
          <h1>the Acme Web</h1>
          <nav>
            <a href='/' class='selected'>Home</a>
            <a href='/about'>About Us</a>
            <a href='/products'>Products</a>
          </nav>
        </body>
      </html>
    `);
    res.end();
  }
  else if(req.url === '/about'){
    res.write(`
      <html>
        <head>
          <title>About Us</title>
          <style>
            nav a.selected {
              border: solid 1px dodgerBlue;
            }
          </style>
        </head>
        <body>
          <h1>the Acme Web</h1>
          <nav>
            <a href='/'>Home</a>
            <a href='/about' class='selected'>About Us</a>
            <a href='/products'>Products</a>
          </nav>
          <div>The Acme Web is one of the greatest sites ever made</div>
        </body>
      </html>
    `);
    res.end();
  }
  else if(req.url === '/products'){
    res.write(`
      <html>
        <head>
          <title>Products</title>
          <style>
            nav a.selected {
              border: solid 1px dodgerBlue;
            }
          </style>
        </head>
        <body>
          <h1>the Acme Web</h1>
          <nav>
            <a href='/'>Home</a>
            <a href='/about'>About Us</a>
            <a class='selected' href='/products'>Products</a>
          </nav>
          <ul>
            <li>Foo</li>
            <li>Bar</li>
            <li>Bazz</li>
          </ul>
        </body>
      </html>
    `);
    res.end();
  }
  else {
    res.statusCode = 404;
    res.write(`
      <html>
        <head>
          <title>The Acme Web</title>
        </head>
        <body>
          <h1>the Acme Web</h1>
          <div>${req.url} was not found!!</div>
        </body>
      </html>
    `);
    res.end();
  }
});

const port = process.env.PORT || 3000;

server.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});