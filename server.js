var express=require("express");
var mysql=require("mysql");
var app=express();


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '*****'
});

connection.connect();


app.set('views',__dirname + '/view');
app.use(express.static(__dirname + '/js'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/',function(req,res){
        res.render('index.html');
});

app.get('/get_from_db',function(req,res){
  console.log('SELECT * from content query');
  /*
        connection.query("SELECT * from content",function(err,rows){
          res.json(rows[0]);
        });
  */
});

app.get('/ping',function(req,res){
        res.json({"alive":"yes"});
});

app.get('/update',function(req,res){
  
  console.log(' update database')
});

app.listen(3000,function(){

    console.log("I am live at PORT 3000.");

});
