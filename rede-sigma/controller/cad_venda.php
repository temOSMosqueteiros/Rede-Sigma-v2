<?php

    include("conexao.php");

    $numerovenda=$_POST['numerovenda'];
    $data=$_POST['data'];
    $cliente=$_POST['cliente'];
    $vendedor=$_POST['vendedor'];
    $veiculo=$_POST['veiculo'];
    $valorveiculo=$_POST['valorveiculo'];
    $valorentrada=$_POST['valorentrada'];
    $valorfinanciado=$_POST['valorfinanciado'];
    $parcelas=$_POST['parcelas'];
    $valorparcelas=$_POST['valorparcelas'];
    $valortotal=$_POST['valortotal'];

    $sql="INSERT INTO venda(n_venda,data_venda,nome_cliente,nome_vendedor,nome_veículo,valor_veiculo,v_entrada,v_finan,parcelas,v_parcelas,v_total) 
    VALUES('$numerovenda','$data','$cliente','$vendedor','$veiculo','$valorveiculo','$valorentrada','$valorfinanciado','$parcelas','$valorparcelas','$valortotal')";

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