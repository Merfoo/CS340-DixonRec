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
INSERT INTO Member (fname, lname) VALUES ('Thomas', 'Mai');
INSERT INTO Member (fname, lname) VALUES ('Logan', 'Hockley');
INSERT INTO Member (fname, lname) VALUES ('Nick', 'Gorgini');
INSERT INTO Member (fname, lname) VALUES ('Kyle', 'Andrews');
INSERT INTO Member (fname, lname) VALUES ('Karah', 'Weber');
INSERT INTO Member (fname, lname) VALUES ('Cyra', 'Steenkolk');
INSERT INTO Member (fname, lname) VALUES ('Daniel', 'Trinh');
INSERT INTO Member (fname, lname) VALUES ('John', 'Van');
INSERT INTO Member (fname, lname) VALUES ('Bailey', 'Singleton');

--
-- Populate sample data to table `Trainer`
--
INSERT INTO Trainer (fname, lname, sex) VALUES ('Symon', 'Ramos', 'Male');
INSERT INTO Trainer (fname, lname, sex) VALUES ('Aidan', 'Carson', 'Female');


--
-- Populate sample data to table `Instructor`
--
INSERT INTO Instructor (fname, lname, sex) VALUES ('Selena', 'Phan', 'Female');
INSERT INTO Instructor (fname, lname, sex) VALUES ('Jimmy', 'Van', 'Male');

--
-- Populate sample data to table `Class`
--
INSERT INTO Class (name, price) VALUES ('Hot Yoga', '15');
INSERT INTO Class (name, price) VALUES ('Jazzercise', '10');

--
-- Populate sample data to table `Class`
--
INSERT INTO Club (name) VALUES ('Ping Pong');
INSERT INTO Club (name) VALUES ('Badminton');
