var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = "." +  process.argv[3];

fs.readdir(dir, function(err, list){
        if(err){
            return console.error(err);
        }

        list.forEach(function(item){
            if(path.extname(item)==extension){
                console.log(item)
            }
        })
});
