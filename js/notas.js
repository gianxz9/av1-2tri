function adicionarNota() {
    const container = document.getElementById("inputs");
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Digite a nota";
    input.className = "nota";
    input.min = 0;
    input.max = 10;
    container.appendChild(input);
  }
  
  function calcularMedia() {
    const inputs = document.querySelectorAll(".nota");
    let soma = 0;
    let count = 0;
  
    inputs.forEach(input => {
      const valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        soma += valor;
        count++;
      }
    });
  
    const resultadoDiv = document.getElementById("resultado");
  
    if (count === 0) {
      resultadoDiv.textContent = "Digite pelo menos uma nota válida.";
    } else {
      const media = soma / count;
      resultadoDiv.textContent = `Média: ${media.toFixed(2)}`;
    }
  }
  