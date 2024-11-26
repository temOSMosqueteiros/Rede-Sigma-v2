<?php

    include("conexao.php");

    $numerocompra=$_POST['numerocompra'];
    $data=$_POST['data'];
    $clientecompra=$_POST['clientecompra'];
    $veiculocompra=$_POST['veiculocompra'];
    $valor=$_POST['valor'];

    $sql="INSERT INTO compras(n_compra,data_compra,nome_cliente,nome_veiculo,valor_veiculo) 
    VALUES('$numerocompra','$data','$clientecompra','$veiculocompra','$valor')";

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