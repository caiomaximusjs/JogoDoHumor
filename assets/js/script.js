const trocaImg = document.querySelector(`#imagem`);
const trocaTexto = document.querySelector(`#texto`);
const myBtn = document.querySelector(`#meuBtn`);

let textos = [
 "Decidido",
 "Super animado",
 "Com muita raiva",
 "Pronto para a batalha",
 "Destemido",
 "Debochado"
];

myBtn.addEventListener(`click`, () => {
  if (myBtn.value == `primeiro`) {
    trocaImg.src = `./assets/img/leonidas0.gif`;
    trocaTexto.innerText = textos[0];
    myBtn.value = `segundo`;
  } else if (myBtn.value == `segundo`) {
    trocaImg.src = `./assets/img/leonidas1.gif`;
    trocaTexto.innerText = textos[1];
    myBtn.value = `terceiro`;
  } else if (myBtn.value == `terceiro`) {
    trocaImg.src = `./assets/img/leonidas2.gif`;
    trocaTexto.innerText = textos[2];
    myBtn.value = `quarto`;
  } else if (myBtn.value == `quarto`) {
    trocaImg.src = `./assets/img/leonidas3.gif`;
    trocaTexto.innerText = textos[3];
    myBtn.value = `quinto`;
  } else if (myBtn.value == `quinto`) {
    trocaImg.src = `./assets/img/leonidas4.gif`;
    trocaTexto.innerText = textos[4];
    myBtn.value = `outro`;
  } else {
    trocaImg.src = `./assets/img/leonidas5.gif`;
    trocaTexto.innerText = textos[5];
    myBtn.value = `primeiro`;
  }
});
