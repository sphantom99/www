<?php
	include_once "header.php";


if (isset($_SESSION["user"])) {

	echo "
		<form class=\"box\"  method=\"post\">
		<h1>Welcome</h1>
		<h1>Date since last upload:<h1>
		";
		//getLastUpload()
		echo "<br><br>
		<h1>Number Of Uploads:<h1>
		";
		//getNumOfUploads()
		echo "<br><br>

	</form>
</body>
</html>
";
}
else{
	header("location : ./index.php");
}

