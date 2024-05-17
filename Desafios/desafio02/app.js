function clicar() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("anos").value;

  document.getElementById(
    "texto__h1"
  ).innerHTML = `Acabei de conhecer ${nome} que tem ${idade} anos!`;
}
