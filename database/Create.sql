DROP DATABASE IF EXISTS Web;
CREATE DATABASE Web;
use Web;

CREATE TABLE Users
(
  userId INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  usernameHash VARCHAR(255) NOT NULL,
  passwordHash VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL
);

CREATE TABLE Admins
(
  userId INT(11) NOT NULL,
  FOREIGN KEY (userId) REFERENCES Users(userId) 
);

CREATE TABLE HAR_File
(
  fileName VARCHAR(255) NOT NULL,
  directory VARCHAR(255) NOT NULL,
  userId INT(11),
  PRIMARY KEY (fileName),
  FOREIGN KEY (userId) REFERENCES Users(userId)
);

CREATE TABLE Entry
(
  startedDateTime VARCHAR(255) NOT NULL,
  serverIPAddress VARCHAR(255) NOT NULL,
  timingsWait INT NOT NULL,
  fileName VARCHAR(255) NOT NULL,
  PRIMARY KEY (startedDateTime),
  FOREIGN KEY (fileName) REFERENCES HAR_file(fileName)
);


CREATE TABLE Response
(
  status INT(3) NOT NULL,
  statusText VARCHAR(255) NOT NULL,
  startedDateTime VARCHAR(32) NOT NULL,
  PRIMARY KEY (startedDateTime),
  FOREIGN KEY (startedDateTime) REFERENCES Entry(startedDateTime)
);

CREATE TABLE Request
(
  method ENUM('GET','HEAD','POST','PUT','DELETE','CONNECT','OPTIONS','TRACE') NOT NULL,
  urlDomain VARCHAR(63) NOT NULL,
  startedDateTime VARCHAR(255) NOT NULL,
  PRIMARY KEY (startedDateTime),
  FOREIGN KEY (startedDateTime) REFERENCES Εntry(startedDateTime)
);

CREATE TABLE Headers
(
  content_type VARCHAR(255) NOT NULL,
  cache_control VARCHAR(255) NOT NULL,
  pragma VARCHAR(255) NOT NULL,
  expires INT NOT NULL,
  size INT NOT NULL,
  age INT NOT NULL,
  last_modified VARCHAR(128) NOT NULL,
  host VARCHAR(128) NOT NULL,
  startedDateTime VARCHAR(128) NOT NULL,
  PRIMARY KEY (startedDateTime),
  FOREIGN KEY (startedDateTime) REFERENCES Entry(startedDateTime)
);
