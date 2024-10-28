<?php
        require "conexion.php";
        ~$query = $pdo ->prepare("SELECT nombre FROM provincias");
        $query -> execute();
        $resultado = $query -> fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resultado);
       
?>