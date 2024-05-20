function clicar() {
  let numero = document.getElementById("numero").value;
  let numeroint = parseInt(numero);

  document.getElementById(
    "antecessor"
  ).innerHTML = `Antes de ${numero} temos o número ${numeroint - 1}`;

  document.getElementById(
    "sucessor"
  ).innerHTML = `Depois de ${numero} temos o número ${numeroint + 1}`;
}
