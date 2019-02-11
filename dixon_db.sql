--
-- Table structure for table `Trainer`
--
CREATE TABLE `Trainer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `sex` varchar(6) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `hourlyRate` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);


--
-- Table structure for table `Member`
--
CREATE TABLE `Member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `TrainerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`TrainerId`) REFERENCES Trainer(id)
);

--
-- Table structure for table `Instructor`
--
CREATE TABLE `Instructor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `sex` varchar(100) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `Class`
--
CREATE TABLE `Class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `InstructorId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`InstructorId`) REFERENCES Instructor(`id`)
);

--
-- Table structure for table `Club`
--
CREATE TABLE `Club` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `ClubMember`
--
CREATE TABLE `ClubMember` (
  `MemberId` int(11) DEFAULT NULL,
  `ClubId` int(11) DEFAULT NULL,
  FOREIGN KEY (`MemberId`) REFERENCES Member(`id`),
  FOREIGN Key (`ClubId`) REFERENCES Club(`id`)
);

--
-- Table structure for table `ClassMember`
--
CREATE TABLE `ClassMember` (
  `MemberId` int(11) DEFAULT NULL,
  `ClassId` int(11) DEFAULT NULL,
  FOREIGN KEY (`MemberId`) REFERENCES Member(`id`),
  FOREIGN Key (`ClassId`) REFERENCES Class(`id`)
);

------------------------------------------------------------------------------------------------

--
-- Populate sample data to table `memeber`
--
INSERT INTO Member (fname, lname) VALUES ('Thomas', 'Mai');
INSERT INTO Member (fname, lname) VALUES ('Logan', 'Hockley');
INSERT INTO Member (fname, lname) VALUES ('Nick', 'Gorgini');
INSERT INTO Member (fname, lname) VALUES ('Kyle', 'Andrews');
INSERT INTO Member (fname, lname) VALUES ('Karah', 'Weber');
INSERT INTO Member (fname, lname) VALUES ('Cyra', 'Steenkolk');
INSERT INTO Member (fname, lname) VALUES ('Aidan', 'Carson');
INSERT INTO Member (fname, lname) VALUES ('Symon', 'Ramos');
INSERT INTO Member (fname, lname) VALUES ('Daniel', 'Trinh');
INSERT INTO Member (fname, lname) VALUES ('John', 'Van');
INSERT INTO Member (fname, lname) VALUES ('Bailey', 'Singleton');
INSERT INTO Member (fname, lname) VALUES ('Selena', 'Phan');
INSERT INTO Member (fname, lname) VALUES ('Jimmy', 'Van');