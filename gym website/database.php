<?php

$host = "sql106.infinityfree.com";
$dbname = "if0_34375885_User";
$username = "if0_34358358";
$password = "WVjnF522tRbFAUy";

$conn = new mysqli($host,$username,$password,$dbname);
                     
if ($conn->connect_errno) {
    die("Connection error: " . $conn->connect_error);
}

return $conn;
