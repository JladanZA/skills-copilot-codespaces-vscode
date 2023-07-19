// Create web server
// Start server with node comments.js
// Access with browser http://localhost:8080
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var comments = [];
var server = http.createServer(function (request, response) {
    var url_parts = url.parse(request.url);
    switch (url_parts.pathname) {
    case '/':
        fs.readFile('./comment.html', function (error, data) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
        break;
    case '/comment':
        if (request.method == 'POST') {
            var body = '';
            request.on('data', function (data) {
                body += data;
            });
            request.on('end', function () {
                var comment = qs.parse(body);
                comments.push(comment['comment']);
                console.log(comments);
                showComment(response);
            });
        } else {
            showComment(response);
        }
        break;
    default:
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        response.end('Not Found');
        break;
    }
});
server.listen(8080);
console.log('Server running at http://localhost:8080/');
function showComment(response) {
    var comment = '';
    for (var i = 0; i < comments.length; i++) {
        comment += '<li>' + comments[i] + '</li>';
    }
    var data = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><title>コメント表示</title></head><body><h1>コメント一覧</h1><ul>' + comment + '</ul></body></html>';
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end(data);
}