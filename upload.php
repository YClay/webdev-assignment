<?php

$target_dir = "images/upload/";
$target_file = $target_dir.basename($_FILES['file']['name']);

if(move_uploaded_file($_FILES['file']['tmp_name'], $target_file)) {
    $status = 1;
}

?>