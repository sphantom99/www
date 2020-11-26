DROP DATABASE IF EXISTS Web
CREATE DATABASE Web

CREATE TABLE Users
(
  userId INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  usernameHash VARCHAR(512) NOT NULL,
  passwordHash VARCHAR(512) NOT NULL,
  email VARCHAR(256) NOT NULL,
  firstName VARCHAR(256) NOT NULL,
  lastName VARCHAR(256) NOT NULL,
);

CREATE TABLE Admins
(
	usernameHash VARCHAR(512) NOT NULL,
	FOREIGN KEY (usernameHash) REFERENCES Users(usernameHash)	
);



CREATE TABLE HAR_File
(
  fileName VARCHAR(256) NOT NULL,
  directory VARCHAR(512) NOT NULL,
  usernameHash VARCHAR(512),
  PRIMARY KEY (fileName),
  FOREIGN KEY (usernameHash) REFERENCES Users(usernameHash)
);

CREATE TABLE Entry
(
	startedDateTime VARCHAR(128) NOT NULL,
	serverIPAddress VARCHAR(128) not null,
	timingsWait INT NOT NULL,
	fileName VARCHAR(256) NOT NULL,
	PRIMARY KEY (startedDateTime),
	FOREIGN KEY (fileName) REFERENCES HAR_file(fileName)
);


CREATE TABLE Response
(
  status INT NOT NULL,
  statusText INT NOT NULL,
  startedDateTime VARCHAR(128) NOT NULL,
  PRIMARY KEY (startedDateTime),
  FOREIGN KEY (startedDateTime) REFERENCES Εntry(startedDateTime)
);

CREATE TABLE Request
(
  method VARCHAR(128) NOT NULL,
  url_domain VARCHAR(64) NOT NULL,
  startedDateTime VARCHAR(128) NOT NULL,
  PRIMARY KEY (startedDateTime),
  FOREIGN KEY (startedDateTime) REFERENCES Εntry(startedDateTime)
);

CREATE TABLE Headers
(
	content_type VARCHAR(128) NOT NULL,
	cache_control VARCHAR(128) NOT NULL,
	pragma VARCHAR(128) NOT NULL,
	expires INT NOT NULL,
	size INT NOT NULL,
	age INT NOT NULL,
	last_modified VARCHAR(128) NOT NULL,
	host VARCHAR(128) NOT NULL,
	startedDateTime VARCHAR(128) NOT NULL,
  	PRIMARY KEY (startedDateTime),
  	FOREIGN KEY (startedDateTime) REFERENCES Entry(startedDateTime)
);
