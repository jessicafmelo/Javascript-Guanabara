function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");

  let data = new Date();
  let hora = data.getHours();
  var minute = data.getMinutes();

  msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos`;

  //&& -> E
  if (hora >= 0 && hora < 12) {
    img.src = "assets/manha.png";
    document.body.style.background = "#8fa872";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "assets/tarde.png";
    document.body.style.background = "#afa9ae";
  } else {
    img.src = "assets/noite.png";
    document.body.style.background = "#0e1515";
  }
}
