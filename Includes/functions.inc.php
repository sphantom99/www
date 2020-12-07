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

	function passMatch($pwd,$Repwd)
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

	function userExists($conn,$Uname,$pwd)
	{
		$sql = "call userExists(?,?);";
		$stmt = mysqli_stmt_init($conn);
		if (!mysqli_stmt_prepare($stmt,$sql))
		{
			header("location: ../signup.php?error=sqlfail");
			exit();
		}
		mysqli_stmt_bind_param($stmt, "ss", $Uname,$pwd);
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

	function isAdmin($conn,$Uname)
	{
		//query that returns 0 if not admin, 1 if admin
		$sql = "call isAdmin(?);";
		$stmt = mysqli_stmt_init($conn);
		if (!mysqli_stmt_prepare($stmt,$sql))
		{
			header("location: ../signup.php?error=sqlfailonAdminCheckline94");
			exit();
		}
		mysqli_stmt_bind_param($stmt, "s", $Uname);
		mysqli_stmt_execute($stmt);

		$res =  mysqli_stmt_get_result($stmt);

		$row = mysqli_fetch_assoc($res);

		# typecasting result to an integer
		return (int)$row["isAdmin"];

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
		$sql = "INSERT INTO Users (firstName,lastName,username,email,passwordHash) VALUES (?,?,?,?,?);";
		
		$stmt = mysqli_stmt_init($conn);
		
		if (!mysqli_stmt_prepare($stmt,$sql)) {
			header("location: ../signup.php?error=createusersqlfail");
			exit();
		}
		$hashedPassword = password_hash($pwd, PASSWORD_DEFAULT);

		mysqli_stmt_bind_param($stmt, "sssss", $Name,$LName,$Uname,$Email,$hashedPassword);

		mysqli_stmt_execute($stmt);

		mysqli_stmt_close($stmt);

		loginUser($conn,$Uname,$pwd);

		# making a folder with the username of the new user, to put his files in
		$dirname = "../users/".$Uname;
    	mkdir($dirname); 
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
		$uidexists = userExists($conn,$Uname,$pwd);
		if ($uidexists===false) {
			header("location: ../login.php?error=wronglogin1");
			exit();
		}

		$pwdhashed = $uidexists["passwordHash"];
		$checkpass = password_verify($pwd, $pwdhashed);

		if ($checkpass===false) {
			header("location: ../login.php?error=wronglogin2");
			exit();
		}


		elseif ($checkpass===true) {

			if (isAdmin($conn,$Uname) === 1)
			{
				session_start();
				#this gives the $_SESSION["admin"] var the name of the logged in admin
				$_SESSION["admin"] = $uidexists["username"];
				header("location: ../admin.php");
				#exit();
			}
			else {
				session_start();
				#this gives the $_SESSION["user"] var the name of the logged in user
				$_SESSION["user"] = $Uname;
				header("location: ../user.php?".$_SESSION["user"]);
				#exit();
			}

		}
	}
