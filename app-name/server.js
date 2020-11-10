const express =  require('express');
const path =  require('path');
//const http = require('https');
const http = require('http');
const fs = require('fs')
const app = express();
const port = process.env.port || 4200

app.use(express.static(__dirname + '/dist'));
app.get('/*',(req,res,next) => res.sendFile(path.join(__dirname)));
//const Server = http.createServer({key: fs.readFileSync('./key.pem'),
//cert: fs.readFileSync('./certificate.pem')},app);
const Server = http.createServer(app);
Server.listen(port,()=> console.log('Server Running'));