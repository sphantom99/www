<?php  

	if (isset($_POST["sub"]))
	{
		$Uname = $_POST["Username"];
		$Name = $_POST["Name"];
		$LName = $_POST["LName"];
		$Email = $_POST["Email"];
		$pwd = $_POST["Password"];
		$Repwd = $_POST["REPassword"];
		require_once 'dbh.inc.php';
		require_once 'functions.inc.php';

		if (emptyInputSignUp($Uname,$Name,$LName,$Email,$pwd,$Repwd) !== false) 
		{
			header("location: ../signup.php?error=emptyInput");
			exit();
		}

		if (invalidUname($Uname)!==false) 
		{
			header("location: ../signup.php?error=invalidUsername");
			exit();
		}
		if (invalidEmail($Email)!==false) 
		{
			header("location: ../signup.php?error=invalidEmail");
			exit();
		}
		if (PassMatch($pwd,$Repwd)!==false) 
		{
			header("location: ../signup.php?error=nomatchingPasswords");
			exit();
		}
		if (UserExists($conn,$Uname,$Email)!==false) 
		{
			header("location: ../signup.php?error=usernameEmailExists");
			exit();
		}
		/*if (passCon($pwd)!==false) 
		{
			header("location: ../signup.php?error=passconstraints");
			exit();
		}
		*/
		createUser($conn,$Uname,$Name,$LName,$Email,$pwd,$Repwd);
	}
	else
	{
		header("location: ../signup.php");
		exit();
	}