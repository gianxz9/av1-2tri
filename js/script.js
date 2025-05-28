function carregarModulo(modulo) {
    let conteudo = document.getElementById("conteudo");

    fetch(`js/${modulo}.js`)
        .then(response => response.text())
        .then(script => {
            conteudo.innerHTML = `<script>${script}</script>`;
        })
        .catch(() => {
            conteudo.innerHTML = `<h2>Erro</h2><p>Módulo não encontrado.</p>`;
        });
}
