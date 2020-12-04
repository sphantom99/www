<?php
	include_once "header.php";
?>
<main>
	<div class="box">
		<form method="post"  enctype="multipart/form-data">
			<h1>Upload your HAR file.</h1>
			<input type ="file" name ="file" accept = ".har" id="upfile">
			<input type = "submit" name ="submit" value="Upload please!" onclick="fileR()">
		</form>
	</div>

	<div class="section">
		<form action = "includes/Visual.php" method="post">
			<h1>Visualize your data.</h1>
			<input type = "Submit" name = "Sub" value="Visualize">
		</form>

		
	</div>
	<script type="text/javascript" src="uploadfile2.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</main>