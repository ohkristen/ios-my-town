var http    = require('http')
var express = require('express')
var path    = require('path')

var app     = express()
app.set('port', process.env.port || 3000)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.send('<html><body><h1>HelloWorld</h1></body></html>')
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server is listening on port ' + app.get('port'))
})
