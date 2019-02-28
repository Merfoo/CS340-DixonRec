var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require("body-parser");

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res,next){
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

    mysql.pool.query("SELECT id, fname AS firstName, lname AS lastName FROM Trainer", (err, trainerRows, fields) => {
        mysql.pool.query(sqlStr, (err, memberRows, fields) => {
            console.log('MEMBERS query finished!');
            context.members = memberRows;
            context.trainers = trainerRows;
            res.render('members', context);
        });
    })
});

app.get("/trainers", (req, res, next) => {
    res.render('trainers');
});

app.post("/members", function(req,res){
    console.log("MEMBERS POST");
    console.log(req.body);

    var sqlInsert = "INSERT INTO Member (fname, lname, TrainerId) VALUES (?,?,?)";
    var inserts  = [req.body.fname, req.body.lname, req.body.trainerId];

    //This query should insert into Member table
    mysql.pool.query(sqlInsert, inserts, (err, results,fields) => {
        console.log("MEMBER INSERT COMPLETE");
        if(err){
            console.log("MEMBER INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/members');
        }
    });
});

app.use("/js", express.static("js"));

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
