-- Data Manipulation Queries for Dixon Recreation Database

-- Queries to Member Table

SELECT * FROM Member;

-- add a new member
INSERT INTO Member (fname, lname) VALUES (:fname, :lname);

-- Queries to Trainer Table

SELECT * FROM Trainer;

-- add a new trainer
INSERT INTO Trainer(fname, lname, sex, hourlyRate) VALUES (:fname, :lname, :sex, :hourlyRate);

-- Queries to Instructor Table

SELECT * FROM Instructor;

-- add a new instructor
INSERT INTO Instructor(fname, lname, sex) VALUES (:fname, :lname, :sex);

-- Queries to Class Table

SELECT * FROM Class;

-- add a new Class
INSERT INTO Class(name, price) VALUES (:name, :price, :sex);

-- Queries to Club Table

SELECT * FROM Club;

-- add a new Club
INSERT INTO Club(name) VALUES (:name);

-- Queries to ClubMember Table

SELECT * FROM ClubMember;

-- add a new member to a club
INSERT INTO ClubMember(MemberId, ClubId) VALUES (:MemberId, :ClubId);

-- Queries to ClassMember Table

SELECT * FROM ClassMember;

-- add a new member to a class
INSERT INTO ClassMember(MemberId, ClassId) VALUES (:MemberId, :ClassId);

--
-- Populate sample data to table `memeber`
--
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Thomas', 'Mai', 1);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Logan', 'Hockley', 1);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Nick', 'Gorgini', null);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Kyle', 'Andrews', null);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Karah', 'Weber', 2);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Cyra', 'Steenkolk', 2);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Daniel', 'Trinh', 2);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('John', 'Van', 1);
INSERT INTO Member (fname, lname, TrainerId) VALUES ('Bailey', 'Singleton', 2);

--
-- Populate sample data to table `Trainer`
--
INSERT INTO Trainer (fname, lname, sex, description, hourlyRate) VALUES ('Symon', 'Ramos', 'Male'. 'Powerlifter Enthusiast', 25);
INSERT INTO Trainer (fname, lname, sex, description, hourlyRate) VALUES ('Aidan', 'Carson', 'Female', 'Cardio/Conditioning Coach', 25);


--
-- Populate sample data to table `Instructor`
--
INSERT INTO Instructor (fname, lname, sex, description) VALUES ('Selena', 'Phan', 'Female', 'Yoga Master');
INSERT INTO Instructor (fname, lname, sex, description) VALUES ('Jimmy', 'Van', 'Male', 'Instructor by day, dancer by night');

--
-- Populate sample data to table `Class`
--
INSERT INTO Class (name, price, description, InstructorId) VALUES ('Hot Yoga', 15, 'Come stretch and sweat it out!', 1);
INSERT INTO Class (name, price, description, InstructorId) VALUES ('Jazzercise', 10, 'Dance up a sweat!', 2);

--
-- Populate sample data to table `Club`
--
INSERT INTO Club (name, description) VALUES ('Ping Pong', 'Play ping pong with the best of the best.');
INSERT INTO Club (name, description) VALUES ('Volleyball', 'Join to bump, set, and spike!');
