<?php
	include_once "header.php";
?>
<main>
	<div class="box">
		<form action="includes/upload_file.inc.php" method="post"  enctype="multipart/form-data">
			<h1>Upload your HAR file.</h1>
			<input type ="file" name ="file">
			<input type = "submit" name ="submit" value="Upload please!"> 
		</form>

	</div>

	<div class="section">
		<form action = "includes/Visual.php" method="post">
			<h1>Visualize your data.</h1>
			<input type = "Submit" name = "Sub" value="Visualize">
		</form>
	</div>
</main>
