--
-- Table structure for table `trainers`
--
CREATE TABLE `Trainer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `sex` varchar(6) NOT NULL,
  `description` varchar(500) NOT NULL,
  `hourlyRate` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);


--
-- Table structure for table `members`
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
-- Table structure for table `instructors`
--
CREATE TABLE `Instructor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `sex` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `classes`
--
CREATE TABLE `Class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(500) NOT NULL,
  `InstructorId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`InstructorId`) REFERENCES Instructor(`id`)
);

--
-- Table structure for table `clubs`
--
CREATE TABLE `Club` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
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