
// const teclasAceitas = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "enter",
//   "backspace",
// ];
let linha = 0;
let i = 0;
let respostas = [];
let tentativaAtual = [];
let div = document.querySelectorAll(".letra--jogo");
let palavraChave = ['A', 'M', 'O', 'R', 'A'];

function teclar(letra) {
  letra = letra.key.toUpperCase();
  let consegueInserir =
    i != 30 &&
    letra != "ENTER" &&
    letra != "BACKSPACE" &&
    tentativaAtual.length < 5

  let consegueApagar = (letra == "BACKSPACE" && i > 0) && i / 5 != linha;

  if (consegueInserir) {
    inserirTecla(letra);
  }

  else if (consegueApagar) {
    apagarTecla();
  }

  else if (tentativaAtual.length == 5 && letra == "ENTER") {
    respostas.push(tentativaAtual.join(""));
    compararResposta()
    tentativaAtual = [];
    linha++
  }

}

function apagarTecla() {
  i--;
  tentativaAtual.pop();
  div[i].innerHTML = "";
}

function inserirTecla(tecla) {
  div[i].innerHTML = tecla;
  tentativaAtual.push(tecla);
  i++;
}

function compararResposta() {

  let checarPalavra = palavraChave
  let palavraTentada = String(respostas.slice(-1))


  for (let i = 0; i <= 4; i++) {
    console.log(palavraTentada)
    console.log(checarPalavra)
    if (checarPalavra[i] == palavraTentada[i]) {
      div[i].classList.add("certo");
      checarPalavra[i] = '*'
    }
  }
  debugger;
  for (let pos = 0; pos <= 4; pos++) {
    let index = checarPalavra.indexOf(palavraTentada[pos])
    if ((index != -1 && checarPalavra[pos] != palavraTentada[pos])) {
      div[pos].classList.add("tem-mas-posicao-errada");
      checarPalavra[pos] = '*'
    }
    else if (checarPalavra[pos] != palavraTentada[pos] && checarPalavra[pos] != '*') {
      div[pos].classList.add("errado");
    }




    // indexDeColorir = checarPalavra.indexOf(palavraTentada[pos])
    // indexDeComparar = palavraChave.lastIndexOf(palavraTentada[pos])

    // if (checarPalavra.indexOf(palavraTentada[pos]) != -1) {
    //   div[pos].classList.add("tem-mas-posicao-errada");
    //   checarPalavra[indexDeComparar] = '*'
    //   palavraTentada = palavraTentada.replace(palavraTentada[pos], '*')
    // }
    // else {

    //   div[pos].classList.add("errado");
    // }
  }


  //TESTA LETRA CERTA
  // if (checarPalavra.indexOf(palavraTentada[pos]) != -1) {
  //   div[pos].classList.add("tem-mas-posicao-errada");
  //   checarPalavra[indexDeComparar] = '*'
  //   palavraTentada = palavraTentada.replace(palavraTentada[pos], '*')
  // }
  // else {
  //   div[pos].classList.add("errado");
  // }
}



