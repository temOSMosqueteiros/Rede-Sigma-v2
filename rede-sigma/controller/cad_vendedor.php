<?php

    include("conexao.php");

    $nome=$_POST['nomevendedor'];

    $sql="INSERT INTO vendedor(nome) VALUES('$nome')";

    if(mysqli_query($conexao,$sql))
    {
        echo "Usuario cadastrado com sucesso";
    }
    else
    {
        echo "Erro". mysqli_connect_erro($conexao);
    }

    mysqli_close($conexao);
?>