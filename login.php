<?php
	include_once "header.php";
?>
	<form class="box" action="./includes/login.inc.php" method="post">
		<h1>Welcome</h1>
		<input type="text" name="Username" placeholder="Username/Email">
		<input type="password" name="Password" placeholder="Password">
		<input type="Submit" name="log" value="Login">
		<h1><?php 
				if (isset($_GET["error"])) 
				{
					
					if ($_GET["error"]=="wronglogin") 
					{
						echo "Username or Password Incorrect";
					}
					if ($_GET["error"]=="emptyInput") 
					{
						echo "Fields Are Empty";
					}
				}
			?>
		</h1>

	</form>

<br>
<br>
</body>
<footer style="position: fixed; bottom: 0;">This site was made by me</footer>
</html>
