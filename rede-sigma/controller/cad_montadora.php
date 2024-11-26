<?php

    include("conexao.php");

    $cnpj=$_POST['cnpj'];
    $razaosocial=$_POST['razaosocial'];
    $marca=$_POST['marca'];
    $telefone=$_POST['telefone'];
    $celular=$_POST['celular'];

    $sql="INSERT INTO montadora(cnpj,r_social,marca,telefone,celular) 
    VALUES('$cnpj','$razaosocial','$marca','$telefone','$celular')";

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