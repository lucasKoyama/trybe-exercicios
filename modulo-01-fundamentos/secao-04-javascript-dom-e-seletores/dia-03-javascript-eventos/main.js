const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R: Class tech que faz isso

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
const listItem = document.getElementsByTagName("li");
for (let item of listItem) {
  item.addEventListener("click", () => {
    //  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
    for (let li of listItem) {
      if (li.className === "tech") {
        li.classList.remove("tech");
      }
    }
    item.classList.add("tech");
  });
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const inputText = document.getElementById("input");
inputText.addEventListener("change", () => {
  const selected = document.getElementsByClassName("tech")[0];
  selected.textContent = inputText.value;
});

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const top3 = document.getElementById("my-spotrybefy");
top3.addEventListener("dblclick", () => {
  window.location = "https://lucaskoyama.github.io/";
});

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
top3.addEventListener('mouseover', () => {
  top3.style.color = `rgb(${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`
});

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
