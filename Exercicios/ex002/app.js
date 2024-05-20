function clicar() {
  let nascimento = document.getElementById("nascimento").value;
  let genero = document.querySelector("input[name=sexo]:checked").value;
  let msg = document.getElementById("msg");

  let data = new Date();
  let ano = data.getFullYear();

  let idade = ano - nascimento;

  if (idade <= 18 && genero == "Masculino") {
    msg.innerHTML = `Detectamos ${genero} e você tem ${idade} anos `;
    imagem.src = "./assets/adolescente-m.png";
  } else if (idade <= 18 && genero == "Feminino") {
    msg.innerHTML = `Detectamos ${genero} e você tem ${idade} anos`;
    imagem.src = "./assets/adolescente-f.png";
  } else if (idade <= 50 && genero == "Masculino") {
    msg.innerHTML = `Detectamos ${genero} e você tem ${idade} anos `;
    imagem.src = "./assets/adulto-m.png";
  } else if (idade <= 50 && genero == "Feminino") {
    msg.innerHTML = `Detectamos ${genero} e você tem ${idade} anos`;
    imagem.src = "./assets/adulto-f.png";
  } else if (idade > 50 && genero == "Masculino") {
    msg.innerHTML = `Detectamos ${genero} e você tem ${idade} anos `;
    imagem.src = "./assets/idoso-m.png";
  } else if (idade > 50 && genero == "Feminino") {
    msg.innerHTML = `Detectamos ${genero} e você tem ${idade} anos`;
    imagem.src = "./assets/idoso-f.png";
  }
}
