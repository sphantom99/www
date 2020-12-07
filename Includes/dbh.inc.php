<?php

	$serverName = "localhost";
	$DBUsername = "root";
	$DBPassword = "";
	$DBName = "Web";


	$conn = mysqli_connect($serverName,$DBUsername,$DBPassword,$DBName);

	if (!$conn) {
		die("Connection Failed". mysqli_connect_error());
		header("location: ../Login.php");
		exit();
	}
