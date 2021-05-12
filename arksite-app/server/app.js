var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write("\
    <html>\
        <head>\
        </head>\
        <body>\
            Hello World!\
        </body>\
    </html>\
    ");
    response.end();
}

http.createServer(onRequest).listen(8080);
