<?php

header("Location: http://example.com/indexv2.html");

include_once('database.php');

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Email = test_input($_POST["Email"]);
    $Password = test_input($_POST["Password"]);

    $stmt = $conn->prepare("SELECT * FROM firsttable");
    $stmt->execute();
    $result = $stmt->get_result();

    $foundUser = false;
    while ($user = $result->fetch_assoc()) {
        if (($user['Email'] == $Email) && ($user['Password'] == $Password)) {
            $foundUser = true;
            break; // Exit the loop if a match is found
        }
    }

    if ($foundUser) {
        header("location: indexv2.html");
        exit(); // Terminate the script after redirecting
    } else {
        header("location: error.html");
        exit(); // Terminate the script after redirecting
    }
}
?>