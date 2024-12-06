import { Author } from "./Author";
import { listAuthor, registerAuthor } from "./authorService";

//Input
const iptName = document.getElementById("iptName") as HTMLInputElement;

//Botoes
const btnRegister = document.getElementById("btnRegister");
const btnList = document.getElementById("btnList");

//Tabela
const tblOwner = document.getElementById("tblOwner") as HTMLTableElement;

//Criação funções
function register() {
  try {
    const author = new Author(iptName.value);
    registerAuthor(author);

    alert("Autor cadastrado com sucesso");
  } catch (err) {
    alert(err);
  }
}

async function list() {
  tblOwner.innerHTML = "";
  for (let author of await listAuthor()) {
    tblOwner.innerHTML += `
  <tr>
      <td>${author.name}</td>
  </tr>`;
  }
}
//Evento
btnRegister?.addEventListener("click", register);
btnList?.addEventListener("click", list);
