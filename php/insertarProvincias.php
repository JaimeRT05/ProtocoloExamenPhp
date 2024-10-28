<?php

include_once('conexion.php');

$linea = file_get_contents("php://input");
$datos = explode(",", $linea);

$sql = "INSERT INTO provincias (codigo, codigoPostal, nombre, codigoTlf, iso) VALUES('$datos[0]', '$datos[1]', '$datos[2]', $datos[3], $datos[4]);";

if ($conexion->query($sql) == TRUE) {
    echo "OK";
} else {
    echo "Error";
}

$conexion->close();

?>