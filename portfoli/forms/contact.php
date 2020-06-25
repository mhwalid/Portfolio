<?php

/**
 * Requires the "PHP Email Form" library
 * The "PHP Email Form" library is available only in the pro version of the template
 * The library should be uploaded to: vendor/php-email-form/php-email-form.php
 * For more info and help: https://bootstrapmade.com/php-email-form/
 */

// Replace contact@example.com with your real receiving email address


if (isset($_POST['btn-send'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  if (empty($name) || empty($email) || empty($message)) {
    header('location:index.html');
    echo "fiya jo3";
  } else {
    $to = "mhwalid7@gmail.com";

    if (mail($to, $Msg, $Email)) {
      header("location:index.html");
      echo "fiya jo3";
    }
  }
} else {
  header("location:index.html");
  echo "fiya jo3";
}
