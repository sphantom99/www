<?php  

	if (isset($_POST["log"])) {
		$username = $_POST["Username"];
		$pwd = $_POST["Password"];

		require_once 'dbh.inc.php';
		require_once 'functions.inc.php';

		if (emptyInputLogin($username,$pwd)!== false) 
		{
			header("location: ../Login.php?error=emptyInput");
			exit();
		}
		loginUser($conn,$username,$pwd);
	}
	else
	{

		header("location: ../login.php");
		exit();
	}