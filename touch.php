<?php
    $destino = "jesus20zamb@gmail.com";
    $Nombre = $_POST["Nombre"];
    $Correo = $_POST["Correo"];
    $Telefono = $_POST["Telefono"];
    $Mensaje = $_POST["Mensaje"];
    $Contenido = "Nombre: " . $Nombre . "\nCorreo: " . $Correo . "\nTelefono: " . $Telefono . "\nMensaje: " . $Mensaje;
    mail($destino,"Support", $Contenido);
?>