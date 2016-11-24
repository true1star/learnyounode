var net = require('net');
var server = net.createServer(function(socket){
                socket.end(now()+"\n");
                });
server.listen(process.argv[2]);

function zeroFilled(num){
   return ("0"+num).slice(-2);
}

function now(){
                var date = new Date();
                var str = "";
                str += date.getFullYear()+"-";
                str += zeroFilled(date.getMonth()+1)+"-";
                str += zeroFilled(date.getDate())+" ";
                str += zeroFilled(date.getHours())+":";
                str += zeroFilled(date.getMinutes());
                return str;
}
