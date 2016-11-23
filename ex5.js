var fs = require('fs');
var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function(err, list){
        if(err){
            return console.log(err);
        }
        var newList = list.filter(function(item){
                return item.split('.')[1] == extension;
        });

        for(var i=0; i<newList.length; i++){
            console.log(newList[i]);
        }

        });
