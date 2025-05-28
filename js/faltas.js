// Função que pega os valores do formulário
function pegarFaltas() {
    return {
      //nome: document.getElementById("nome").value,
      faltas: [
        parseInt(document.getElementById("faltas1").value),
        parseInt(document.getElementById("faltas2").value),
        parseInt(document.getElementById("faltas3").value),
        parseInt(document.getElementById("faltas4").value),
      ]
    };
  }
  
  // Função que calcula a média das faltas
  function calcularMedia(faltas) {
    let soma = 0;
    for (let i = 0; i < faltas.length; i++) {
      soma += faltas[i];
    }
    return soma / faltas.length;
  }
  
  // Função que exibe o resultado na tela
  function mostrarResultado(nome, media) {
    const resultado = document.getElementById("resultado");
    //resultado.textContent = `A média de faltas de ${nome} é ${media.toFixed(2)}.`;
    resultado.textContent = `A média de faltas é ${media.toFixed(2)}.`;
  }
  
  // Função principal que conecta tudo
  function processarFormulario(event) {
    event.preventDefault(); // evita o recarregamento da página
  
    const dados = pegarFaltas();
    const media = calcularMedia(dados.faltas);
    mostrarResultado(dados.nome, media);
  }
  
  // Adiciona o ouvinte de evento ao formulário
  document.getElementById("faltasForm").addEventListener("submit", processarFormulario);
  