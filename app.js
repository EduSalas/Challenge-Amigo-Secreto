// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById("amigo");
let listaAmigos=[];
let listaAmigos = document.getElementById("listaAmigos");
let ulResultadoSorteo = document.getElementById("resultado");

function agregarAmigo(){
    if (inputAmigo.value === "") {
       alert("Debes ingresar un nombre");
       return;
    }
    listaAmigos.push(inputAmigo.value);
    listaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
    let random = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[random];
    ulResultadoSorteo.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
};



