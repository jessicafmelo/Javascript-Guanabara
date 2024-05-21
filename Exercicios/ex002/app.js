function clicar() {
  let nascimento = document.getElementById("nascimento").value;
  let msg = document.getElementById("msg");

  let data = new Date();
  let ano = data.getFullYear();

  if (nascimento.length == 0 || nascimento > ano) {
    alert("[ERRO] Verifique o ano e digite novamente");
  } else {
    let fsex = document.getElementsByName("sexo");
    let idade = ano - nascimento;
    let genero = "";

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        imagem.src = "assets/crianca-m.png";
      } else if (idade < 21) {
        imagem.src = "assets/adolescente-m.png";
      } else if (idade < 50) {
        imagem.src = "assets/adulto-m.png";
      } else {
        imagem.src = "assets/idoso-m.png";
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        imagem.src = "assets/crianca-f.png";
      } else if (idade < 21) {
        imagem.src = "assets/adolescente-f.png";
      } else if (idade < 50) {
        imagem.src = "assets/adulto-f.png";
      } else {
        imagem.src = "assets/idoso-f.png";
      }
    }

    msg.innerHTML = `Detectamos ${genero} e você tem ${idade} anos `;
  }
}
