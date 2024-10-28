<?php

include_once('conexion.php');

$nombre = $_REQUEST['n'];
$sinopsis = $_REQUEST['sinop'];
$idSala = $_REQUEST['idSala'];

$sql = "INSERT INTO Salas (idPelicula, nombre, sinopsis, idSala) VALUES('$nombre', '$sinopsis', '$idSala');";

if ($conexion->query($sql) == TRUE) {
    echo "OK";
} else {
    echo "Error";
}

$conexion->close();

?>