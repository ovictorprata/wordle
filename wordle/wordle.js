let linha1 = document.querySelectorAll(".botao");
console.log(linha1);
let i = 0;
let lista = [];
let palavraTeste = ["a", "m", "o", "r", "a"];
respostas = [];

function teclar(letra) {
  //QUANDO NÃO TIVER LETRAS -> NÃO PODE APAGAR
  if (i == 0 && letra.keyCode == 8) {
    return;

    //QUANDO TIVER LETRA -> PODE APAGAR
  } else if (letra.keyCode == 8) {
    i--;
    lista.pop();
    linha1[i].innerHTML = "";
    console.log(lista);

    //QUANDO COMPLETAR 5 LETRAS
  }
  //PODE DIGITAR LETRAS
  else if (i != 30 && (i % 5 != 0 || i == 0)) {
    linha1[i].innerHTML = letra.key;
    console.log(lista.push(letra.key));
    i++;
    console.log("1-----", i);
  } else if (lista.length == 5 && i != 0) {
    //5 LETRAS ELE PODE APAGAR
    if (letra.keyCode == 8) {
      i--;
      lista.pop();
      linha1[i].innerHTML = "";

      //5 LETRAS ELE PODE MANDAR RESPOSTA
    } else if (letra.keyCode == 13) {
      respostas.push(lista.slice(0, 5).toString());

      //TESTA A RESPOSTA
      if (lista.slice(0, 5).toString() == palavraTeste.toString()) {
        alert("você é bom!!");
      } else {
        alert("burrão!");
      }

      for (let pos = 0; pos <= 4; pos++) {
        let indice_letra = palavraTeste.indexOf(lista[pos]);
        console.log(indice_letra);
        if (indice_letra >= 0) {
          if (pos == indice_letra) {
            linha1[pos].classList.add("certo");
          } else {
            linha1[pos].classList.add("tem-posicao-errada");
          }
        }
      }
      // i++;
      lista = [];
      console.log("2-----", i);
    }
  }
  console.log(lista);
}
