document.addEventListener('DOMContentLoaded', function() {
    const formVenda = document.querySelector('.vendas-form');
    const numeroVendaInput = document.getElementById('numero-venda');
    const dataInput = document.getElementById('data');
    const clienteInput = document.getElementById('cliente');
    const vendedorInput = document.getElementById('vendedor');
    const veiculoInput = document.getElementById('veiculo');
    const valorEntradaInput = document.getElementById('valor-entrada');
    const valorFinanciadoInput = document.getElementById('valor-financiado');
    const parcelasInput = document.getElementById('parcelas');
    const valorParcelasInput = document.getElementById('valor-parcelas');
    const valorTotalInput = document.getElementById('valor-total');

    // Função para gerar número único de venda
    function gerarNumeroVenda() {
        const timestamp = Date.now().toString();
        const random = Math.floor(Math.random() * 1000).toString();
        return `V-${timestamp}-${random}`;
    }

    // Preenche automaticamente o campo número da venda com um valor único
    numeroVendaInput.value = gerarNumeroVenda();

        // Adicionar cliente e vendedor
        const cliente = ['Larissa', 'Manuella', 'Agnalo', 'Francisco', 'Marcela']; /*Marca*/
        const vendedor = ['Luiz', 'Fernanda', 'Luiza', 'Ingrid', 'Marcela']; /*Modelo*/
        const veiculo = ['9BRBLWHEXG0107721', '7BRBLWHEXG0107822', '3BRBLWHEXG2222781', '4BRBLWHEXG5567729', '5BRBLFRTXG0831721']; /*CHASSI VEICULO*/
    
        // Preencher a lista de clientes
        cliente.forEach(cliente => {
            let option = document.createElement('option');
            option.value = cliente;
            option.textContent = cliente;
            clienteInput.appendChild(option);
        });

        // Preencher a lista de vendedor
        vendedor.forEach(vendedor => {
            let option = document.createElement('option');
            option.value = vendedor;
            option.textContent = vendedor;
            vendedorInput.appendChild(option);
        });

        // Preencher a lista de veiculo
        veiculo.forEach(veiculo => {
            let option = document.createElement('option');
            option.value = veiculo;
            option.textContent = veiculo;
            veiculoInput.appendChild(option);
        });
        
        
        /* Atualizar vendedor com base no cliente selecionada
        clienteInput.addEventListener('change', function() {
        const selectecliente = this.value;
        vendedorInput.innerHTML = '<option value="">Selecione um modelo</option>'; 
        if (vendedor[selectecliente]) {
            vendedor[selectecliente].forEach(vendedor => {
                let option = document.createElement('option');
                option.value = vendedor;
                option.textContent = vendedor;
                vendedorInput.appendChild(option);
            });
        }
    });*/


    // Função para calcular e atualizar os valores
    function calcularValores() {
        const valorEntrada = parseFloat(valorEntradaInput.value.replace(',', '.')) || 0;
        const valorVeiculo = 100000; // Exemplo: você deve substituir isso pelo valor real do veículo selecionado
        const parcelas = parseInt(parcelasInput.value) || 1;

        const valorFinanciado = valorVeiculo - valorEntrada;
        const valorTotal = valorVeiculo; // Supondo que o valor total seja o valor do veículo
        const valorParcelas = valorFinanciado / parcelas;

        valorFinanciadoInput.value = valorFinanciado.toFixed(2);
        valorTotalInput.value = valorTotal.toFixed(2);
        valorParcelasInput.value = valorParcelas.toFixed(2);

        // Formatar os valores como moeda
        valorFinanciadoInput.value = formatarMoeda(valorFinanciadoInput.value);
        valorTotalInput.value = formatarMoeda(valorTotalInput.value);
        valorParcelasInput.value = formatarMoeda(valorParcelasInput.value);
    }

    // Função para formatar um número como moeda (R$)
    function formatarMoeda(valor) {
        return valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(/(\.\d{2})\d+$/, '$1').replace(/^/, 'R$ ');
    }

    // Adiciona eventos para calcular os valores quando necessário
    valorEntradaInput.addEventListener('input', calcularValores);
    parcelasInput.addEventListener('input', calcularValores);

    // Função para buscar os nomes baseados nos IDs
    function buscarNomePorId(collectionName, id) {
        return db.collection(collectionName).doc(id).get().then(doc => {
            if (doc.exists) {
                return doc.data().nome || doc.data().nomeVendedor || doc.data().modelo; // Retorna o nome ou modelo
            } else {
                throw new Error(`Documento ${id} não encontrado na coleção ${collectionName}`);
            }
        });
    }
});
