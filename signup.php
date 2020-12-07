	<?php 
	include_once "header.php";
	$err;
?>

	<form class="box" action="./includes/signup.inc.php" method="post">
		<h1>Welcome <br>Please fill the fields:</h1>
		<input type="text" name="Username" placeholder="Username">
		<input type="text" name="Name" placeholder="Name">
		<input type="text" name="LName" placeholder="Last Name">
		<input type="text" name="Email" placeholder="Email">
		<input type="password" name="Password" placeholder="Password">
		<input type="password" name="REPassword" placeholder="Re-Type Password">
		<input type="Submit" name="sub" value="Sign Up">
		<h1><?php 
			# first check if there is an error
			if (isset($_GET["error"])) {
				# Check every case in a do while loop in order to be able to exit at any point 
				# in order to save resources
				do 
				{
					if ($_GET["error"]=="emptyInput") {
						echo "All fields must be filled";
						break;
					}
					if ($_GET["error"]=="invalidUsername") {
							echo "Username does not match requirements";
							break;
					}
					if ($_GET["error"]=="invalidEmail") {
							echo "Invalid Email";
							break;
					}
					if ($_GET["error"]=="nomatchingPasswords") {
							echo "Passwords do not match";
							break;
					}
					if ($_GET["error"]=="usernameEmailExists") {
							echo "The username or email you have provided already exists";
							break;
					}
					if ($_GET["error"]=="passconstraints") {
							echo "Password must be atleast 8 characters long, have at least one capital letter, one lowercase letter, one number and one special character";
							break;
					}
					if ($_GET["error"]=="none") {
							echo "Succesful Registration!";
							break;
					}

				} while (true);

			} # end of outer if	
			?>
		</h1>

	</form>

