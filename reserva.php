<?php 
    $destino = "jesus20zamb@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $people = $_POST["people"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nCantidad: " . $people . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino,"Reservacion", $contenido);
    $contenido2 = "Ha hecho con exito su reservacion " . $nombre .
    mail($correo,"Reservacion",$contenido2);

?>
