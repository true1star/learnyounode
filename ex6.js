var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err,list){
       if(err) return console.error(err);

       list.forEach(function(item){
               console.log(item);
               });             
        });

