<?php





if (isset($_POST['submit'])) 
{
	$file = $_FILES['file'];

	$fileName = $_FILES['file']['name'];
	$fileTmpName = $_FILES['file']['tmp_name']; 
	$fileSize = $_FILES['file']['size']; 
	$fileError = $_FILES['file']['error']; 
	$fileType = $_FILES['file']['type'];  

	$fileExt = explode('.',$fileName);
	$fileActualExt = strtolower(end($fileExt));

	$allowed = array('har');

	if(in_array($fileActualExt, $allowed))
	{
		if($fileError === 0)
		{
			if($fileSize<1000000000000)
			{
				$fileNameNew = uniqid('', true).".".$fileActualExt;
				$fileDestination = '../uploads/'.$fileNameNew;
				move_uploaded_file($fileTmpName, $fileDestination);
				$content = file_get_contents($fileDestination);
				//echo $content;
				//header("Location: ../User.php?uploadsuccess");
			}else {echo "Your file is too big"; exit();}
		}else{echo "There was an error uploading your file"; exit();}
	}else {echo "I don't want this kind of file"; exit();}
}
?>

<script type="text/javascript">
var x = <?php echo json_encode($content); ?>;
var obj = JSON.parse(x);
 //alert(typeof x);
  //if(IsJsonString(x)){alert("this is JSON");}
//document.write(obj.log.entries[0].timings.wait);
  //alert(typeof obj);
window.location="../User.php";
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}



</script>
