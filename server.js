var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/bower_components", express.static(__dirname + "/bower_components"));
app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});