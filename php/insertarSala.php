<?php

include_once('conexion.php');

$provincia = $_REQUEST['pr'];
$poblacion = $_REQUEST['pobl'];
$nombre = $_REQUEST['n'];

$sql = "INSERT INTO Salas (provincia, poblacion, nombre, idSala) VALUES('$provincia', '$poblacion', '$nombre');";

if ($conexion->query($sql) == TRUE) {
    echo "OK";
} else {
    echo "Error";
}

$conexion->close();

?>