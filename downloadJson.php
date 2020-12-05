<?php
	include_once "header.php";
	include "readJson.php";

	$cont = $_SESSION['send'];

	
	file_put_contents( uniqid('crypt', true)."."."har",$cont);
?>


<main>

	<div class="box">
		<form>
			<h1>Your data has been downloaded.</h1>
		</form>

		
	</div>

</main>