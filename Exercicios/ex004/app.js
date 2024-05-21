function clicar() {
  let num = document.getElementById("num").value;

  if (num === "") {
    alert("Por favor preencha o campo");
    return;
  }

  num = parseInt(num);

  let tabuada = document.getElementById("tabuada");
  tabuada.innerHTML = "";
  tabuada.style.border = "3px solid rgb(133, 175, 229"; // Adiciona a borda ao elemento
  tabuada.style.borderRadius = "8px";

  for (let c = 1; c <= 10; c++) {
    let resultado = num * c;
    tabuada.innerHTML += `${num} x ${c} = ${resultado} <br>`;
  }
}
