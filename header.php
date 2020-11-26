<?php 
	session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="Placeholder">
	<link rel="stylesheet" href="style.css">
	<title>User Panel</title>
</head>
<body>
	<header>
			<nav>
				<p>HARHub</p>
				<ul>
					<li><a href="Login.php" title="">Home</a></li>
					<li><a href="about.php" title="">About</a></li>
					<?php
						if (isset($_SESSION["user"])) 
						{
							echo"<li><a href=\"#\" title=\"\">Profile</a>
									<ul>
										<li><a href=\"#\">Profile Information</a></li>
										<li><a href=\"#\">Settings</a></li>
									</ul>
								  </li> ";

							echo"<li><a href=\"User.php\"  title=\"\">Login</a></li>";
						}
						else
							{
								echo "<li><a href='Login.php'>Login</a></li>";
								echo "<li><a href='signup.php'>Sign Up</a></li>";
							}

					?>


					
				</ul>
			</nav>	
	</header>		
</body>
