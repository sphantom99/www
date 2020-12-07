<?php 
	session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="Placeholder">
	<! the echo time() code is to ensure no caching, in order to be able to see changes while changing the code. Should be commented out when page is ready.> 
	<link rel="stylesheet" href="style.css"<?php echo time(); ?>>
	<title>HARHub</title>
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
									<ul class=\"dropdown\">
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
