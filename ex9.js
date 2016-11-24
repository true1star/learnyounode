var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);
var counter = urls.length;
var content = [];
urls.forEach(function (url,index){
    http.get(url, function(res){
        res.pipe(bl(function (err, data){
                    if(err) return console.error(err);
                    content[index] = data.toString();
                    if(--counter == 0){
                        content.forEach(function(item){
                                console.log(item);
                                })
                        }
                    }))
        })
})
