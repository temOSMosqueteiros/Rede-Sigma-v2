<?php

    include("conexao.php");

    $numeropedido=$_POST['numerocompra'];
    $data=$_POST['data'];
    $marca=$_POST['marca'];
    $modelo=$_POST['modelo'];
    $quantidade=$_POST['quantidade'];

    $sql="INSERT INTO pedido(n_pedido,data_pedido,marca,modelo,quant) 
    VALUES('$numeropedido','$data','$marca','$modelo','$quantidade')";

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