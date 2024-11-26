<?php

    include("conexao.php");

    $cpf=$_POST['cpf'];
    $nome=$_POST['nome'];
    $endereco=$_POST['endereco'];
    $telefone=$_POST['telefone'];
    $celular=$_POST['celular'];
    $renda=$_POST['renda'];

    $sql="INSERT INTO cliente(cpf,nome,endereco,telefone,celular,renda) 
    VALUES('$cpf','$nome','$endereco','$telefone','$celular','$renda')";

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