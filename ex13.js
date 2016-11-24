var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
        if(req.method !== 'GET') return res.end('GET ONLY')
        var urlObj = url.parse(req.url, true);
        var time = new Date(urlObj.query.iso);
        var result;
        if(urlObj.pathname == '/api/parsetime'){
            result = JSON.stringify(parseTime(time));
        } else {
            result = JSON.stringify(unixTime(time));
        }
        if(result){
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(result)
        } else {
            res.writeHead(404)
            res.end()
        }

        
        });

function parseTime(time){
    return {
              "hour": time.getHours(),
              "minute": time.getMinutes(),
              "second": time.getSeconds()
           }
}

function unixTime(time){
    return { "unixtime": time.getTime() }
}

server.listen(Number(process.argv[2]))
