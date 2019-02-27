var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

app.get('/',function(req,res,next){
  // var context = {};
  // var createString = "CREATE TABLE diagnostic(" +
  // "id INT PRIMARY KEY AUTO_INCREMENT," +
  // "text VARCHAR(255) NOT NULL)";
  // mysql.pool.query('DROP TABLE IF EXISTS diagnostic', function(err){
  //   if(err){
  //     next(err);
  //     return;
  //   }
  //   mysql.pool.query(createString, function(err){
  //     if(err){
  //       next(err);
	// 	return;
  //     }
	//   mysql.pool.query('INSERT INTO diagnostic (`text`) VALUES ("MySQL is Working!")',function(err){
	//     mysql.pool.query('SELECT * FROM diagnostic', function(err, rows, fields){
	// 	  context.results = JSON.stringify(rows);
	// 	  res.render('home',context);
	// 	});
	//   });
  //   });
  // });
  res.render('home');
});

app.get("/classes", (req, res, next) => {
  res.render('classes');
});

app.get("/clubs", (req, res, next) => {
  res.render('clubs');
});

app.get("/instructors", (req, res, next) => {
  res.render('instructors');
});

app.get("/members", (req, res, next) => {

  let context = {};
  console.log('MEMBERS HIT!');

  let sqlStr = 'SELECT Member.fname AS mFirstName, Member.lname AS mLastName, Trainer.fname AS tFirstName, Trainer.lname AS tLastName FROM Member LEFT JOIN Trainer ON Member.TrainerId = Trainer.id';
  mysql.pool.query(sqlStr, (err, rows, fields) => {
    console.log('MEMBERS query finished!');
    console.log(err);
    console.log(rows);
    console.log(fields);

    context.rows = rows;
    console.log(context);
    res.render('members', context);
  });
});

app.get("/trainers", (req, res, next) => {
  res.render('trainers');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
