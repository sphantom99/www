	<?php 
	include_once "header.php";
	$err;
?>

	<form class="box" action="./includes/passwordchange.inc.php" method="post">
		<h1>Welcome <br>Please fill the fields:</h1>
		<input type="password" name="OldPassword" placeholder="Current Password">
		<input type="password" name="Password" placeholder="New Password">
		<input type="password" name="REPassword" placeholder="Re-Type New Password">
		<input type="Submit" name="passsub" value="Change">
		<h1><?php 
				if (isset($_GET["error"])) {

					if ($_GET["error"]=="nomatchingPasswords") {
					echo "New Passwords do not match";
					}
					
					if ($_GET["error"]=="none") {
					echo "Updated Password!";
					}
				}
			?>
		</h1>

	</form>

