<?php  
	session_start();
	if (isset($_POST["passsub"]))
	{
		$oldpwd = $_POST["OldPassword"];
		$pwd = $_POST["Password"];
		$Repwd = $_POST["REPassword"];
		$Uname= $_SESSION["user"];
		require_once 'dbh.inc.php';
		require_once 'functions.inc.php';

		
		if (PassMatch($pwd,$Repwd)!==false) 
		{
			header("location: ../passChange.php?error=nomatchingPasswords");
			exit();
		}
		if (checkPass($conn,$oldpwd,$Uname)==false) {
			header("location: ../passChange.php?error=CurrentIncorrectPass");
			exit();
		}
		updatePassword($conn,$pwd,$Uname);
	}
	else
	{
		header("location: ../index.php");
		exit();
	}