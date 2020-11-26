DROP DATABASE IF EXISTS Web

CREATE TABLE Users
(
  usernameΗash VARCHAR(512) NOT NULL,
  passwordΗash VARCHAR(512) NOT NULL,
  email VARCHAR(256) NOT NULL,
  firstΝame VARCHAR(256) NOT NULL,
  lastΝame VARCHAR(256) NOT NULL,
  PRIMARY KEY (usernameΗash),
  UNIQUE (passwordΗash)
);

CREATE TABLE HAR_File
(
  fileName VARCHAR(256) NOT NULL,
  directory VARCHAR(512) NOT NULL,
  usernameΗash VARCHAR(512),
  PRIMARY KEY (fileName),
  FOREIGN KEY (usernameΗash) REFERENCES Users(usernameΗash)
);

CREATE TABLE Εntry
(
  startedDateTime VARCHAR(128) NOT NULL,
  serverIPAddress 128 NOT NULL,
  timingsWait INT NOT NULL,
  fileName VARCHAR(256) NOT NULL,
  PRIMARY KEY (startedDateTime),
  FOREIGN KEY (fileName) REFERENCES HAR_File(fileName)
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

CREATE TABLE Ηeaders
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
  FOREIGN KEY (startedDateTime) REFERENCES Request(startedDateTime)
);

