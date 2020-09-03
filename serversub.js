var http=require('http')
var fs=require('fs')

http.createServer(function (req,res){
    fs.readFile('serversub.html',function(err, data){
       res.write(data)
       res.end()
    })
}).listen(7000)
