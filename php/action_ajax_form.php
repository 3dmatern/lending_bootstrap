<?php

    if (isset($_POST["email"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        
        // Формируем массив для JSON ответа
        $result = array(
            'email' => $_POST["email"]
        ); 

        // Переводим массив в JSON
        echo json_encode($result); 
    }

?>
