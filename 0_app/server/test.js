// d = new Date();
// document.getElementById("demo").innerHTML = d;
try {
    const http = require("http");   // Require the HTTP module for basic server functionality
    const hostname = 'localhost';   // Set the hostname, can also be an address (e.g. 127.0.0.1)
    const port = 5002;              // Set the port

    //Create a server object and listen on the port, set for requests
    const server = http.createServer((req, res) => {
        res.statusCode = 200;                           // HTTP status code 200 OK
        res.setHeader('Content-Type', 'text/plain');    // HTTP header as plain text
        
        //  Set the text to be displayed
        message = "Below are the server details:\n";
        message += "Hostname: " + hostname + "\nPort: " + port;
        res.end(message);                       // Text to be displayed
    });

    server.listen(port, hostname, () => {
        console.log('http://'+ hostname + ':' + port + '    ok');
    });
} catch (error) {
    console.log("Error occured: " + error);
}