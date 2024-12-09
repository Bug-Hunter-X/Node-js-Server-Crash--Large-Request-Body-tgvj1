const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      // Process the body using streams to avoid memory issues
      const data = JSON.parse(body);
      fs.writeFile('output.txt', JSON.stringify(data), err => {
          if (err) throw err;     
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Data received and saved to file');
      });
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
}).listen(3000); 
console.log('Server running on port 3000');