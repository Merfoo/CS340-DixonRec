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
    let context = {};
    console.log('CLASSES HIT!');

    let sqlStr = 'SELECT Class.id AS id, Class.name AS className, Class.price AS classPrice, Class.description AS classDescription, Instructor.fname AS iFirstName, Instructor.lname AS iLastName FROM Class LEFT JOIN Instructor ON Class.InstructorId = Instructor.id';

    mysql.pool.query("SELECT id, fname AS firstName, lname AS lastName FROM Instructor", (err, instructorRows, fields) => {
        mysql.pool.query(sqlStr, (err, classRows, fields) => {
            mysql.pool.query("SELECT id, Member.fname AS mFirstName, Member.lname AS mLastName FROM Member", (err, memberRows, fields) => {
                console.log('CLASSESS query finished!');
                context.classes = classRows;
                context.instructors = instructorRows;
                context.members = memberRows;
                res.render('classes', context);
            });
        });
    });
});

app.get("/clubs", (req, res, next) => {
    let context = {};
    console.log('CLUBS HIT!');

    let sqlStr = 'SELECT id, Club.name AS clubName, Club.description AS clubDescription FROM Club';

    mysql.pool.query(sqlStr, (err, clubRows, fields) => {
        mysql.pool.query("SELECT id, Member.fname AS mFirstName, Member.lname AS mLastName FROM Member", (err, memberRows, fields) => {
            console.log('CLUBS query finished!');
            context.members = memberRows;
            context.clubs = clubRows;
            res.render('clubs', context);
        });
    });  
});

app.get("/instructors", (req, res, next) => {
    let context = {};
    console.log('INSTRUCTORS HIT!');

    let sqlStr = 'SELECT Instructor.fname AS iFirstName, Instructor.lname AS iLastName, Instructor.sex AS iSex, Instructor.description AS iDescription FROM Instructor';

    mysql.pool.query(sqlStr, (err, instructorRows, fields) => {
            console.log('INSTRUCTORS query finished!');
            context.instructors = instructorRows;
            res.render('instructors', context);
    })  
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
    let context = {};
    console.log('TRAINERS HIT!');

    let sqlStr = 'SELECT id, Trainer.fname AS tFirstName, Trainer.lname AS tLastName, Trainer.sex AS tSex, Trainer.description AS tDescription, Trainer.hourlyRate AS tHourlyRate FROM Trainer';

    mysql.pool.query(sqlStr, (err, trainerRows, fields) => {
        mysql.pool.query("SELECT id, Member.fname AS mFirstName, Member.lname AS mLastName FROM Member", (err, memberRows, fields) => {
            console.log('TRAINERS query finished!');
            context.members = memberRows;
            context.trainers = trainerRows;
            res.render('trainers', context);
        });
    });
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

app.post("/instructors", function(req,res){
    console.log("INSTRUCTORS POST");
    console.log(req.body);

    var sqlInsert = "INSERT INTO Instructor (fname, lname, sex, description) VALUES (?,?,?,?)";
    var inserts  = [req.body.fname, req.body.lname, req.body.sex, req.body.description];

    //This query should insert into Instructor table
    mysql.pool.query(sqlInsert, inserts, (err, results,fields) => {
        console.log("Instructor INSERT COMPLETE");
        if(err){
            console.log("INSTRUCTOR INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/instructors');
        }
    });
});

app.post("/clubs", function(req,res){
    console.log("CLUBS POST");
    console.log(req.body);

    var sqlInsert = "INSERT INTO Club (name, description) VALUES (?,?)";
    var inserts  = [req.body.clubName, req.body.clubDescription];

    //This query should insert into Member table
    mysql.pool.query(sqlInsert, inserts, (err, results,fields) => {
        console.log("CLUB INSERT COMPLETE");
        if(err){
            console.log("CLUB INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/clubs');
        }
    });
});

app.post("/classes", function(req,res){
    console.log("CLASSES POST");
    console.log(req.body);

    var sqlInsert = "INSERT INTO Class (name, price, description, InstructorId) VALUES (?,?,?,?)";
    var inserts  = [req.body.className, req.body.classPrice, req.body.classDescription, req.body.instructorId];

    //This query should insert into Member table
    mysql.pool.query(sqlInsert, inserts, (err, results,fields) => {
        console.log("CLASS INSERT COMPLETE");
        if(err){
            console.log("CLASS INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/classes');
        }
    });
});

app.post("/trainers", function(req,res){
    console.log("TRAINERS POST");
    console.log(req.body);

    var sqlInsert = "INSERT INTO Trainer (fname, lname, sex, description, hourlyRate) VALUES (?,?,?,?,?)";
    var inserts  = [req.body.fname, req.body.lname, req.body.sex, req.body.description, req.body.hourlyRate];

    //This query should insert into Instructor table
    mysql.pool.query(sqlInsert, inserts, (err, results,fields) => {
        console.log("TRAINER INSERT COMPLETE");
        if(err){
            console.log("TRAINER INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/trainers');
        }
    });
});

app.post("/member_trainers", function(req,res){
    console.log("MEMBER TRAINERS POST");
    console.log(req.body);

    var sqlInsert = "UPDATE Member SET TrainerId = " + req.body.trainerId + " WHERE id = " + req.body.memberId;

    //This query should insert into Instructor table
    mysql.pool.query(sqlInsert, (err, results,fields) => {
        console.log("MEMBER TRAINER INSERT COMPLETE");
        if(err){
            console.log("MEMBER TRAINER INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/trainers');
        }
    });
});

app.post("/member_clubs", function(req,res){
    console.log("MEMBER CLUBS POST");
    console.log(req.body);

    var sqlInsert = "INSERT INTO ClubMember (clubId, memberId) VALUES (?,?)";
    var inserts  = [req.body.clubId, req.body.memberid];

    //This query should insert into Instructor table
    mysql.pool.query(sqlInsert, inserts, (err, results,fields) => {
        console.log("MEMBER CLUB INSERT COMPLETE");
        if(err){
            console.log("MEMBER CLUB INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/trainers');
        }
    });
});

app.post("/member_classes", function(req,res){
    console.log("MEMBER CLASSES POST");
    console.log(req.body);

    var sqlInsert = "INSERT INTO ClassMember (classId, memberId) VALUES (?,?)";
    var inserts  = [req.body.classId, req.body.memberid];

    //This query should insert into Instructor table
    mysql.pool.query(sqlInsert, inserts, (err, results,fields) => {
        console.log("MEMBER CLASS INSERT COMPLETE");
        if(err){
            console.log("MEMBER CLASS INSERT ERROR");
            console.log(err);
            res.write(JSON.stringify(err));
            res.end;
        }

        else{
            console.log('Inserted Succesfully!')
            res.redirect('/trainers');
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
