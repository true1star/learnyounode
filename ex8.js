var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res){
        res.pipe(bl(function (err, data){
                    data = data.toString();
                    console.log(data.length);
                    console.log(data);
                    }))
        res.on("error", console.error);
        }).on("error", console.error);
