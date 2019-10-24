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
function check_alive(){
   const myImage = document.querySelector('.my-image');
fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
	.then(res => res.blob())
	.then(res => {
		const objectURL = URL.createObjectURL(res);
		myImage.src = objectURL;
});
}

self.addEventListener('sync', function (event) {
    if(event.tag == 'myFirstSyns') {
        event.waitUntil(check_alive());
    }
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }
      console.log('No response found in cache. About to fetch from network...');

      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
});

app.listen(3000,function(){

    console.log("I am live at PORT 3000.");

});
