<?php
	include_once "header.php";
?>

<main>
	<div class="box">
		<form action="includes/upload_file.inc.php" method="post"  enctype="multipart/form-data">
			<h1>View general information.</h1>
			<input type = "submit" name ="submit" value="View.."> 
		</form>
		<h1><br></h1>

		<form action = "includes/Visual.php" method="post">
			<h1>Analyze request timings.</h1>
			<input type = "Submit" name = "Sub" value="Analyze..">
		</form>
		<h1><br></h1>

		<form action = "includes/Visual.php" method="post">
			<h1>Analyze HTTP header.</h1>
			<input type = "Submit" name = "Sub" value="Analyze..">
		</form>
		<h1><br></h1>

		<form action = "includes/Visual.php" method="post">
			<h1>Visualize data.</h1>
			<input type = "Submit" name = "Sub" value="Visualize..">
		</form>
		
	</div>
</main>
