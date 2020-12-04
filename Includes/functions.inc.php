<?php

	function emptyInputSignUp($Uname,$Name,$LName,$Email,$pwd,$Repwd)
	{
		$result;
		if (empty($Uname) || empty($Name) ||empty($LName) 
			||empty($Email) ||empty($pwd) ||empty($Repwd) ) 
		{
			$result = true;	
		}
		else
		{
			$result = false;
		}
		return $result;
	}

	function invalidUname($Uname)
	{
		$result;
		if (!preg_match("/^[a-zA-Z0-9]*$/", $Uname)) 
		{
			$result = true;	
		}
		else
		{
			$result = false;
		}
		return $result;
	}


	function invalidEmail($Email)
	{
		$result;
		if (!filter_var($Email,FILTER_VALIDATE_EMAIL)) 
		{
			$result = true;	
		}
		else
		{
			$result = false;
		}
		return $result;
	}

	function PassMatch($pwd,$Repwd)
	{
		$result;
		if ($pwd !== $Repwd) 
		{
			$result = true;	
		}
		else
		{
			$result = false;
		}
		return $result;
	}

	function UserExists($conn,$Uname,$Email)
	{
		$sql = "SELECT * FROM Users WHERE usernameHash = ? OR email = ? ;";
		$stmt = mysqli_stmt_init($conn);
		if (!mysqli_stmt_prepare($stmt,$sql))
		{
			header("location: ../signup.php?error=sqlfail");
			exit();
		}
		mysqli_stmt_bind_param($stmt, "ss", $Uname, $Email);
		mysqli_stmt_execute($stmt);

		$res = mysqli_stmt_get_result($stmt);

		if ($row = mysqli_fetch_assoc($res)) 
		{
			return $row;
		}
		else
		{
			 $result = false;
			 return $result;
		}

		mysqli_stmt_close($stmt);
	}

	function passCon($pwd)
	{
		$result;
		if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/", $pwd)) 
		{
			$result = true;	
		}
		else
		{
			$result = false;
		}
	}

	function createUser($conn,$Name,$LName,$Uname,$Email,$pwd)
	{
		$sql = "INSERT INTO Users (firstName,lastName,usernameHash,email,passwordHash) VALUES (?,?,?,?,?);";
		
		$stmt = mysqli_stmt_init($conn);
		
		if (!mysqli_stmt_prepare($stmt,$sql)) {
			header("location: ../signup.php?error=sqlfail");
			exit();
		}
		$hashedPassword = password_hash($pwd, PASSWORD_DEFAULT);

		mysqli_stmt_bind_param($stmt, "sssss", $Name,$LName,$Uname,$Email,$hashedPassword);

		mysqli_stmt_execute($stmt);

		mysqli_stmt_close($stmt);

		header("location: ../signup.php?error=none");
		exit();
	}

	function emptyInputLogin($Uname,$pwd)
	{
		$result;
		if (empty($Uname) || empty($pwd)) 
		{
			$result = true;	
		}
		else
		{
			$result = false;
		}
		return $result;
	}

	function loginUser($conn,$Uname,$pwd)
	{
		$uidexists = UserExists($conn,$Uname,$Uname);
		if ($uidexists===false) {
			header("location: ../Login.php?error=wronglogin");
			exit();
		}

		$pwdhashed = $uidexists["passwordHash"];
		$checkpass = password_verify($pwd, $pwdhashed);

		if ($checkpass===false) {
			header("location: ../Login.php?error=wronglogin");
			exit();
		}
		elseif ($checkpass===true) {
			session_start();
			$_SESSION["user"] = $uidexists["usernameHash"];
			header("location: ../User.php");
			#exit();
		}
	}
