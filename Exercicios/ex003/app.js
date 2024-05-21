function clicar() {
  let inicio = parseInt(document.getElementById("inicio").value);
  let fim = parseInt(document.getElementById("fim").value);
  let passo = parseInt(document.getElementById("passo").value);

  // Obtém o elemento onde será exibida a contagem
  let contagem = document.getElementById("contagem");
  contagem.innerHTML = ""; // Limpa o conteúdo anterior

  // Verifica se o passo é válido
  if (passo <= 0) {
    alert("Passo inválido! Considerando PASSO 1");
    passo = 1;
  } else if (inicio)
    if (inicio < fim) {
      // Verifica se o início é menor ou maior que o fim
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
