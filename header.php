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
				<div class="logo"></div>
				<ul>
					<?php
						if (isset($_SESSION["user"])) 
						{
							echo "<li><a href=\"user.php\" title=\"\">Home</a></li>";
							echo "<li><a href=\"#\" title=\"\">Profile</a>
									<ul>
										<li><a href=\"#\">Profile Information</a></li>
										<li><a href=\"#\">Settings</a></li>
									</ul>
								  </li> ";

							echo"<li><a href=\"includes/logout.inc.php\"  title=\"\">Logout</a></li>";
						}
						elseif (isset($_SESSION["admin"]))
							{
								echo "<li><a href=\"admin.php\" title=\"\">Home</a></li>";
								echo"<li><a href=\"includes/logout.inc.php\"  title=\"\">Logout</a></li>";
							}
						else 
						{
							echo "<li><a href=\"index.php\" title=\"\">Home</a></li>";
							echo "<li><a href='Login.php'>Login</a></li>";
							echo "<li><a href='signup.php'>Sign Up</a></li>";

						}
					?>
					<li><a href="about.php" title="">About</a></li>

					
				</ul>
			</nav>	
	</header>		
</body>
