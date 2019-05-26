// app.js

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

// Registering ServiceWorker
if ( 'serviceWorker' in navigator ) {
  navigator.serviceWorker.register( 'sw.js' ).then(function(registration) {

    // Registration was successful
    console.log( 'ServiceWorker registration successful. Scope: ' + registration.scope )
  }).catch(function(err) {

    // Registration failed with error
    console.log( 'ServiceWorker registration failed. Error: ' + err);
  });
}
