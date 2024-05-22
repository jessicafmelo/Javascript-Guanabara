function clicar() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");

  // Obtém o elemento onde será exibida a contagem
  let contagem = document.getElementById("contagem");
  contagem.innerHTML = ""; // Limpa o conteúdo anterior

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    contagem.innerHTML = "Existe campos em branco, digite novamente";
  } else {
    inicio = parseInt(inicio.value);
    fim = parseInt(fim.value);
    passo = parseInt(passo.value);
    if (passo <= 0) {
      alert("Passo inválido! Considerando PASSO 1");
      passo = 1;
    }
    // Verifica se o passo é válido
    if (inicio < fim) {
      // Contagem crescente
      for (let i = inicio; i <= fim; i += passo) {
        contagem.innerHTML += `${i} \u{1F449} `;
      }
    } else {
      // Contagem decrescente
      for (let i = inicio; i >= fim; i -= passo) {
        contagem.innerHTML += `${i} \u{1F449} `;
      }
    }
    contagem.innerHTML += ` \u{1F6A8}`;
  }
}
