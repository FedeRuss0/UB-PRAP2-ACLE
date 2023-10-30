<?php
$servername = "localhost"; // 
$username = "root"; // Nombre de usuario de MySQL
$password = ""; // Contraseña de MySQL
$dbname = "acle"; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>

