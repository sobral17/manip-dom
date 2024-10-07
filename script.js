// comandos para executar no console

/*


alert("Mensagem de alerta");
console.log("Mensagem no console");

console.log(window.innerWidth);
console.log(window.innerHeight);

localStorage.setItem("meuItem", "valor armazenado do meu item");
let valor = localStorage.getItem("meuItem");
console.log(valor);
*/

const newDiv = document.createElement("div");
newDiv.id = "meuDiv";
document.body.appendChild(newDiv);

newDiv.innerText = "Minha div inserida";
newDiv.style.backgroundColor = "purple";

let textP = document.querySelector("p");
textP.style.color = "white";
textP.style.backgroundColor = "cyan";

const buttonChange = document.querySelector("button");
buttonChange.addEventListener("click", () => {
  textP.style.backgroundColor = "red";
  textP.innerText = "Texto alterado pelo JS";
});

document.body.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log("Enter foi pressionado");
  }
});

const myImage = document.querySelector("#myImage");
myImage.setAttribute("title", "Imagem dinâmica");
console.log(myImage.title);

// criando uma lista dinamicamente
let lista = document.createElement("ul");
document.body.appendChild(lista);
function adicionarNaLista(texto) {
  let item = document.createElement("li");
  item.innerText = texto;
  lista.appendChild(item);

  // botao para remover
  let botaoRemover = document.createElement("button");
  botaoRemover.innerText = "Remover";

  botaoRemover.addEventListener("click", () => {
    lista.removeChild(item);
  });

  item.appendChild(botaoRemover);
}

adicionarNaLista("item 1");
adicionarNaLista("item 2");
adicionarNaLista("item 3");