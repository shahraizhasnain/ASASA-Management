<?php
//database connection script.
@mysql_connect("localhost","root",""); //servername -> username -> password
mysql_select_db("school");

if(isset($_POST['submit']))
{
$fname=$_POST['f_name'];

// use to select multiple file with one input.
for($i=0; $i<count($_FILES["fileToUpload"]["name"]); $i++)
{

$target_dir = "uploads/".$img;
$img=$_FILES["fileToUpload"]["name"][$i]; //get file from form
$filetype=$_FILES["fileToUpload"]["type"][$i]; //get image type example "image.png"
$imgext=".".pathinfo($img,PATHINFO_EXTENSION); //get image path (ext)
$filename=str_replace($imgext,'',$img); //replace file extention with null (Remove file ext)
$finalname=$filename.rand().".".$imgext;  //add random number in file name

move_uploaded_file($_FILES["fileToUpload"]["tmp_name"],$target_dir.$finalname);

if(mysql_query("INSERT INTO image(fname,image,imgpath,imgexe)
	VALUES('$fname','$img','$target_dir','$filetype')"))
	{
		echo "Record inserted";
	}
	else
	{
		echo "try again";
	}

}
}

?> 


 <!DOCTYPE html>
<html>
<body>

<form action="rename.php" method="post" enctype="multipart/form-data">
    <input type="text" name="f_name" class="form-control" id="firstName" placeholder="First Name" required>

    </br>
    Select image to upload:
    <input type="file" name="fileToUpload" multiple> </br>
    <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>