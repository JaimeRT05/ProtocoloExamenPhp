<?php
    require "conexion.php";
    ~$query = $pdo ->prepare("SELECT idSala, nombre, poblacion FROM salas");
    $query -> execute();
    $resultado = $query -> fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultado);
?>