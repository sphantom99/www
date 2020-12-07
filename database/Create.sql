DROP DATABASE IF EXISTS Web;
CREATE DATABASE Web;
use Web;

CREATE TABLE Users
(
  username VARCHAR(255) NOT NULL,
  passwordHash VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  PRIMARY KEY (username)
);

CREATE TABLE Admins
(
  username VARCHAR(255) NOT NULL,
  FOREIGN KEY (username) REFERENCES Users(username) 
);

CREATE TABLE HAR_File
(
  fileName VARCHAR(255) NOT NULL,
  directory VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  uploadDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (fileName),
  FOREIGN KEY (username) REFERENCES Users(username)
);

CREATE TABLE Uploads
(
  username VARCHAR(255),
  fileName VARCHAR(255),
  FOREIGN KEY (username) REFERENCES Users(username)
  ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (fileName) REFERENCES HAR_File(fileName)
  ON DELETE CASCADE ON UPDATE CASCADE
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

CREATE TABLE Request
(
  method ENUM('GET','HEAD','POST','PUT','DELETE','CONNECT','OPTIONS','TRACE') NOT NULL,
  urlDomain VARCHAR(255) NOT NULL,
  startedDateTime VARCHAR(255) NOT NULL,
  FOREIGN KEY (startedDateTime) REFERENCES Entry(startedDateTime)
  ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Response
(
  status INT(3) NOT NULL,
  statusText VARCHAR(255) NOT NULL,
  startedDateTime VARCHAR(255) NOT NULL,
  FOREIGN KEY (startedDateTime) REFERENCES Entry(startedDateTime)
);

CREATE TABLE Headers
(
  content_type VARCHAR(255) NOT NULL,
  cache_control VARCHAR(255) NOT NULL,
  pragma VARCHAR(255) NOT NULL,
  expires INT NOT NULL,
  size INT NOT NULL,
  age INT NOT NULL,
  last_modified VARCHAR(255) NOT NULL,
  host VARCHAR(255) NOT NULL,
  startedDateTime VARCHAR(255) NOT NULL,
  FOREIGN KEY (startedDateTime) REFERENCES Entry(startedDateTime)
  ON DELETE CASCADE ON UPDATE CASCADE
);
