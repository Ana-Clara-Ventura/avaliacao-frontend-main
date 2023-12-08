const url_server = "http://localhost:3000";

// Função para mostrar perguntas
function mostrarPerguntas(perguntasId) {

  document.getElementById(perguntasId).style.display = 'block';

  document.getElementById('btnCadastrarVeiculo').addEventListener('click', cadastrarVeiculo);
}

function cadastrarVeiculo() {
  console.log('Enviando dados ao servidor...');

  const dados = {
    tipo: document.getElementById('tipo').value,
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    placa: document.getElementById('placa').value,
    combustivel: document.getElementById('combustivel').value,
    anodefabricacao: document.getElementById('anodefabricacao').value,
    cor: document.getElementById('cor').value,
    quilometragem: document.getElementById('quilometragem').value,
    numeropassageiro: document.getElementById('numeropassageiro').value,
    capacidadeportamala: document.getElementById('capacidadeportamala').value,
    transmissao: document.getElementById('transmissao').value,
    eixo: document.getElementById('eixo').value,
    capacidadecarga: document.getElementById('capacidadecarga').value,
    tipocarroceria: document.getElementById('tipocarroceria').value,


  }

  console.log(dados)


  // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
  fetch(`${url_server}/cadastro`, {
    // define o uso do método POST
    method: 'POST',
    // informações sobre o cabeçalho da requisição
    headers: {
      'Content-Type': 'application/json'
    },
    // transforma os dados da requisição em um JSON chamado body
    body: JSON.stringify(dados)
  })
    // Depois de feita a requisição, o front-end irá receber um retorno do servidor
    .then(response => response.json())
    // Se toda a requisição deu certo, será informado no log
    .then(dados => {
      console.log('Resposta do servidor:', dados);
      // Faça algo com a resposta do servidor, se necessário
    })
    // Caso tenha algum tipo de erro na requisição, é lançada a excessão
    .catch(error => {
      console.error('Erro ao enviar dados para o servidor:', error);
      // Trate os erros, se necessário
    });
}



function veiculosCadastros() {
  // Limpa a tabela antes de popular com novos dados
  const tabela = document.querySelector('table');
  tabela.innerHTML = '';

  fetch(`${url_server}/veiculo`)
    .then(response => response.json())
    .then(data => {
      // Inserindo os dados dos veículos na tabela
      data.forEach(veiculo => {
        // Criando os elementos HTML
        const elementTr = document.createElement('tr');
        const tdTipo = document.createElement('td');
        const tdMarca = document.createElement('td');
        const tdModelo = document.createElement('td');
        const tdPlaca = document.createElement('td');
        const tdCombustivel = document.createElement('td');
        const tdAnoDeFabricacao = document.createElement('td');
        const tdCor = document.createElement('td');
        const tdKilometragem = document.createElement('td');

        // Inserindo os dados dos veículos nos elementos	
        tdTipo.textContent = veiculo.tipo;
        tdMarca.textContent = veiculo.marca;
        tdModelo.textContent = veiculo.modelo;
        tdPlaca.textContent = veiculo.placa;
        tdCombustivel.textContent = veiculo.combustivel;
        tdAnoDeFabricacao.textContent = veiculo.anodefabricacao;
        tdCor.textContent = veiculo.cor;
        tdKilometragem.textContent = veiculo.kilometragem;

        // Inserindo os elementos nas linhas da tabela (tr => TableRow)
        elementTr.appendChild(tdTipo);
        elementTr.appendChild(tdMarca);
        elementTr.appendChild(tdModelo);
        elementTr.appendChild(tdPlaca);
        elementTr.appendChild(tdCombustivel);
        elementTr.appendChild(tdAnoDeFabricacao);
        elementTr.appendChild(tdCor);
        elementTr.appendChild(tdKilometragem);

        // Adicionando a linha com as informações na tabela
        tabela.appendChild(elementTr);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar dados do servidor:', error);
      // Trate os erros, se necessário
    });
}


const contadorLinhas = tabela.rows.length;
// apaga todas as linhas da tabela
for (var i = contadorLinhas - 1; i > 0; i--) {
  tabela.deleteRow(i);
}