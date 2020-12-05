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
CREATE PROCEDURE userExists(username VARCHAR(255))
BEGIN
	SELECT * FROM Users WHERE username = username;
END&
DELIMITER ;
