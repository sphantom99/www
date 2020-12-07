<?php


if (isset($_POST['submit'])) 
{
	$file = $_FILES['file'];

	$fileName = $_FILES['file']['name'];
	$fileTmpName = $_FILES['file']['tmp_name']; 
	$fileSize = $_FILES['file']['size']; 
	$fileError = $_FILES['file']['error']; 
	$fileType = $_FILES['file']['type'];  

	$fileExt = explode('.',$fileName);
	$fileActualExt = strtolower(end($fileExt));

	$allowed = array('har');

	if(in_array($fileActualExt, $allowed))
	{
		if($fileError === 0)
		{
			if($fileSize<100000000000)
			{
				$uploadDate = date('dmy_his');
				$_SESSION["user"] = 'test';
				# session user = the username of the logged in user, from functions.inc.php.loginUser()
				$username = $_SESSION["user"];
				$fileNameNew = $username."_".$uploadDate.".".$fileActualExt;
				$fileDestination = '../users/'.$username.$fileNameNew;
				move_uploaded_file($fileTmpName, $fileDestination);
				header("Location: ../index.php?uploadsuccess?".$_SESSION["user"]);
			}else {echo "Your file is too big";}
		}else {echo "There was an error uploading your file";}
	}else {echo "I don't want this kind of file";}

}