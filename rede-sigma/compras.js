document.addEventListener('DOMContentLoaded', function() {
    const formCompras = document.querySelector('.compras-form');
    const numeroCompraInput = document.getElementById('numero-compra');
    const dataInput = document.getElementById('data');
    const clienteInput = document.getElementById('clientecompra');
    const veiculoInput = document.getElementById('veiculocompra');
    const valorInput = document.getElementById('valor');
    const valorDisplay = document.getElementById('valor-display'); // Um campo para mostrar o valor

    // Função para gerar número único de compra
    function gerarNumeroCompra() {
        const timestamp = Date.now().toString();
        const random = Math.floor(Math.random() * 1000).toString();
        return `C-${timestamp}-${random}`;
    }

    numeroCompraInput.value = gerarNumeroCompra();

         // Adicionar cliente e veiculo
         const cliente = ['Larissa', 'Manuella', 'Agnalo', 'Francisco', 'Marcela']; /*Marca*/
         const veiculo = ['9BRBLWHEXG0107721', '7BRBLWHEXG0107822', '3BRBLWHEXG2222781', '4BRBLWHEXG5567729', '5BRBLFRTXG0831721']; /*CHASSI VEICULO*/
     
         // Preencher a lista de clientes
            cliente.forEach(cliente => {
             let option = document.createElement('option');
             option.value = cliente;
             option.textContent = cliente;
             clienteInput.appendChild(option);
         });
    
         // Preencher a lista de veiculo
            veiculo.forEach(veiculo => {
             let option = document.createElement('option');
             option.value = veiculo;
             option.textContent = veiculo;
             veiculoInput.appendChild(option);
         });
});