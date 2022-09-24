let input = document.querySelector("#input-text");

function nome() {
  input.setAttribute("placeholder", "Nome - Ex: Blue");
}

function rgb() {
  input.setAttribute("placeholder", "RGB - Ex: 050,205,050");
}

function hex() {
  input.setAttribute("placeholder", "Hex - Ex: #13134e");
}


function getHex() {
  let value = document.querySelector("#input-text").value;
  let body = document.querySelector("body");
  let firstString = value.substring(0, 1);


  if (firstString === "#") {
    body.style.backgroundColor = `${value}`;
  } else if (firstString === "") {
    let modalH6 = document.querySelector(".modal-h6");
    modalH6.textContent = "Preencha o campo.";
    openModal();
  } else {
    let modalH6 = document.querySelector(".modal-h6");
    modalH6.textContent = "Escolha a opção correta.";
    openModal();
  }
}

function getRGB() {
  let value = document.querySelector("#input-text").value;
  let body = document.querySelector("body");
  let firstString = value.substring(0, 1);

  if (firstString === "0" || firstString === "1" || firstString === "2") {
    body.style.backgroundColor = `rgb(${value})`;
  } else if (firstString === "") {
    let modalH6 = document.querySelector(".modal-h6");
    modalH6.textContent = "Preencha o campo.";
    openModal();
  } else {
    let modalH6 = document.querySelector(".modal-h6");
    modalH6.textContent = "Escolha a opção correta.";
    openModal();
  }
}

function getNome() {
  let value = document.querySelector("#input-text").value;
  let body = document.querySelector("body");
  let firstString = value.substring(0, 1);

  if (firstString != "#" && firstString != "0" && firstString != "1" && firstString != "2" && firstString != "") {
    body.style.backgroundColor = `${value}`;
  } else if (value === "") {
    let modalH6 = document.querySelector(".modal-h6");
    modalH6.textContent = "Preencha o campo."
    openModal();
  } else {
    let modalH6 = document.querySelector(".modal-h6");
    modalH6.textContent = "Escolha a opção correta."
    openModal();
  }
}

function changeColor() {
  let inputPlaceholder = document.querySelector("#input-text").getAttribute("placeholder");

  if (inputPlaceholder === "") {
    let modalH6 = document.querySelector(".modal-h6");
    modalH6.textContent = "Por favor, pressione alguma opção."
    openModal();
  }

  if (inputPlaceholder === "Hex - Ex: #13134e") {
    getHex();
  }

  if (inputPlaceholder === "RGB - Ex: 050,205,050") {
    getRGB();
  }

  if (inputPlaceholder === "Nome - Ex: Blue") { 
    getNome();
  }
}

let modal = document.querySelector(".modal-container");
let modalChildren = document.querySelector(".modal-children");

function ocultModal() {
  modal.classList.remove("modal-container-screen");
}

function openModal() {
  modal.classList.add("modal-container-screen");
}

modal.addEventListener("click", (evento) => {
  if (modalChildren.contains(evento.target)) return;
  else {
    ocultModal();
  }
})