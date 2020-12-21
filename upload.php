<?php

$target_dir = "images/";
$target_file = $target_dir.$_POST["nr"].".jpg";

move_uploaded_file($_FILES['file']['tmp_name'], $target_file) 

?>