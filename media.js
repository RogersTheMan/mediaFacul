const nota = document.querySelector("#escreverNota");
nota.focus();
const btnAdd = document.querySelector("#btnAdd");
const btnRemove = document.querySelector("#btnRemove");
const btnCalcular = document.querySelector("#calcular");
const btnRecarregar = document.querySelector("#recarregar");
const btnMediaAtv = document.querySelector("#mediaAtv");
const p1 = document.querySelector("#escreverP1");
const p2 = document.querySelector("#escreverP2");
const btnP = document.querySelector("#btnP");
const respProv = document.querySelector("#respP");
const respAtv = document.querySelector("#respAtv");
let arr = document.querySelector("select#array");
const resp = document.querySelector("#resp");

let mediaP;
const notas = [];

btnAdd.addEventListener("click", function () {
  if (nota.value.length === 0 || nota.value < 0 || nota.value > 10) {
    alert("Digite um número! / Número inválido!");
  } else {
    const notaNum = Number(nota.value);
    notas.push(notaNum);
  }
  nota.value = "";
  nota.focus();
  arr.innerHTML = "";
  for (let c in notas) {
    let item = document.createElement("option");
    item.setAttribute("class", "textCenter");
    item.innerHTML = `O número ${notas[c]} foi <b>Adicionado</b>!`;
    arr.appendChild(item);
    resp.innerHTML = "";
  }
});

btnMediaAtv.addEventListener("click", function () {
  if (notas.length === 0) {
    alert("Digite suas atividades antes de calcular a média!");
  } else {
    let soma = 0;
    let media = 0;

    for (let c in notas) {
      soma += notas[c];
      media = soma / notas.length;
    }

    let mediaAtv = media * 0.2;
    respAtv.innerHTML = `<h3>A média da suas provas foi de: ${mediaAtv.toFixed(
      2
    )}</h3>`;
  }
});

btnRemove.addEventListener("click", function () {
  if (notas.length === 0) {
    alert("Não existe um número a ser removido!");
  } else {
    const ultimo = notas[notas.length - 1];
    let item = document.createElement("option");
    item.setAttribute("class", "textCenter");
    item.innerHTML = `O número ${ultimo} foi Removido!`;
    arr.appendChild(item);
    resp.innerHTML = "";
    notas.pop();
  }
});

btnP.addEventListener("click", function () {
  if (
    p1.value.length === 0 ||
    p2.value.length === 0 ||
    p1.value > 10 ||
    p1.value < 0 ||
    p2.value > 10 ||
    p2.value < 0
  ) {
    alert("Escreva o quanto você tirou antes de calcular a média!");
  } else {
    const p1Num = Number(p1.value);
    const p2Num = Number(p2.value);

    mediaP = ((p1Num + p2Num) / 2) * 0.8;

    respProv.innerHTML = `<h3>A média da suas provas foi de: ${mediaP.toFixed(
      2
    )}</h3>`;

    p1.value = "";
    p2.value = "";
  }
});

btnCalcular.addEventListener("click", function () {
  if (notas.length === 0) {
    alert("Nenhum número foi digitado!");
  } else {
    let soma = 0;
    let media = 0;

    for (let c in notas) {
      soma += notas[c];
      media = soma / notas.length;
    }

    let mediaAtv = media * 0.2;
    let mediaFinal = mediaAtv + mediaP;

    resp.innerHTML = `<h3>Sua média calculada é ${mediaFinal.toFixed(2)}</h3>`;
    notas.length = 0;
  }
});
