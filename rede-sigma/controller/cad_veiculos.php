<?php

    include("conexao.php");

    $chassi=$_POST['chassi'];
    $placa=$_POST['placa'];
    $marca=$_POST['marca'];
    $modelo=$_POST['modelo'];
    $ano_fabricacao=$_POST['ano_fabricacao'];
    $ano_modelo=$_POST['ano_modelo'];
    $cor=$_POST['cor'];
    $valor=$_POST['valor'];

    $sql="INSERT INTO veiculo(chassi,placa,marca,modelo,ano_fabricacao,ano_modelo,cor,valor) 
    VALUES('$chassi','$placa','$marca','$modelo','$ano_fabricacao','$ano_modelo','$cor','$valor')";

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