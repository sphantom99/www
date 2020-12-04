<?php
	
	if( isset($_POST['data']) ) 
	{
	   $name = $_POST['data'];
	   echo "Welcome ". $name;
	   
	}
	else 
	{
		$error = 'file not found';
		echo $error;
	}
	


?>