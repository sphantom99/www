DROP PROCEDURE IF EXISTS users_count;
DELIMITER &
CREATE PROCEDURE users_count()
BEGIN
	SELECT COUNT(Users.username) AS usersCount FROM Users
	LEFT JOIN Admins ON Users.username = Admins.username
	WHERE Users.username IS NOT NULL AND Admins.username IS NULL;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS methods_count;
DELIMITER &
CREATE PROCEDURE methods_count()
BEGIN
	SELECT COUNT(method) AS methodsCount FROM Request GROUP BY method;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS statuses_count;
DELIMITER &
CREATE PROCEDURE statuses_count()
BEGIN
	SELECT COUNT(status) AS statusesCount FROM Response GROUP BY status;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS domains_count;
DELIMITER &
CREATE PROCEDURE domains_count()
BEGIN
	SELECT COUNT(DISTINCT(url_domain)) AS domainsCount FROM Request;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS hosts_count;
DELIMITER &
CREATE PROCEDURE hosts_count()
BEGIN
	SELECT COUNT(DISTINCT(host)) AS hostsCount FROM Headers;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS isAdmin;
DELIMITER &
CREATE PROCEDURE isAdmin(username VARCHAR(255))
BEGIN
	SELECT COUNT(Users.username) AS isAdmin FROM Users 
	INNER JOIN Admins ON Users.username = Admins.username
	WHERE Users.username = username;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS userExists;
DELIMITER &
CREATE PROCEDURE userExists(username VARCHAR(255), email VARCHAR(255))
BEGIN
	SELECT * FROM Users WHERE Users.username = username OR Users.email = email;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS lastUpload;
DELIMITER &
CREATE PROCEDURE getLastUpload(username VARCHAR(255))
BEGIN
	SELECT uploadDate AS lastUpload FROM HAR_File
	INNER JOIN Users ON Users.username = HAR_File.username
	WHERE HAR_File.username = username;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS HARCount;
DELIMITER &
CREATE PROCEDURE getNumOfUploads(username VARCHAR(255))
BEGIN
	SELECT COUNT(*) AS HARCount FROM HAR_File
	INNER JOIN Users ON Users.username = HAR_File.username
	WHERE HAR_File.username = username;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS updatePassword;
DELIMITER &
CREATE PROCEDURE updatePassword(newPassword VARCHAR(255),username VARCHAR(255))
BEGIN
	UPDATE Users SET passwordHash = newPassword WHERE Users.username=username;
END&
DELIMITER ;

DROP PROCEDURE IF EXISTS getPassword;
DELIMITER &
CREATE PROCEDURE getPassword(username VARCHAR(255))
BEGIN
	SELECT passwordHash FROM Users WHERE Users.username=username;
END&
DELIMITER ;
