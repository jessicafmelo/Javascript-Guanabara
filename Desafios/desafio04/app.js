function clicar() {
  let produto = document.getElementById("produto").value;
  let valor = document.getElementById("valor").value;
  let pago = document.getElementById("pago").value;

  let resultado = parseInt(pago - valor);

  let valorf = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

  let pagof = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(pago);

  let resultadof = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(resultado);

  document.getElementById(
    "resposta"
  ).innerHTML = `Você comprou ${produto} que custou <strong>${valorf}</strong>. <br>Você pagou <strong>${pagof}</strong> e seu troco é <strong>${resultadof}</strong>. <br>
  <strong>Volte sempre!</strong>`;
}
