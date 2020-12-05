<?php
	include_once "header.php";
	
if (isset($_SESSION["user"])) {
	echo "
<main>
	<div class=\"box\">
		<form method=\"post\"  enctype=\"multipart/form-data\">
			<h1>Upload your HAR file.</h1>
			<input type =\"file\" name =\"file\" accept = \".har\" id=\"upfile\">
			<input type = \"submit\" name =\"submit\" value=\"Upload please!\" onclick=\"fileR()\">";

				if( isset($_POST['submit'])) 
				{
					
					echo" <br> <input type = \"submit\" onclick=\"window.location.href='uploadJson.php'\"    value=\"Submit to server\" ";
					echo" <br> <input type = \"submit\" onclick=\"window.location.href='downloadJson.php'\"  value=\"Download proccessed file\" ";
				   
				}





			echo "

		</form>
	</div>

	<div class=\"section\">
		<form action = \"includes/Visual.php\" method=\"post\">
			<h1>Visualize your data.</h1>
			<input type = \"Submit\" name = \"Sub\" value=\"Visualize\">
		</form>

		
	</div>
	<script type=\"text/javascript\" src=\"uploadfile2.js\"></script>
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>
</main>
";
}
else{
	header("location: ./index.php");
}
