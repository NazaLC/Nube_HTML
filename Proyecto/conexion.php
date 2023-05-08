<?php
 function conectar(){
    $user="root";
    $pass="root5345";
    $server="127.0.0.1";
    $db="bdejemplo1";
    $con=mysqli_connect($server,$user,$pass) or die 
    ("Error al conectar la base de datos".mysqli_connect_error());
    mysqli_select_db($con,$db);
    return $con;
 }
?>