import { Author } from "./Author";
import { registerAuthor, listAuthor } from "./authorService";

//Input
const iptName = document.getElementById("iptName") as HTMLInputElement;

//Botoes
const btnRegister = document.getElementById("btnRegister");
const btnList = document.getElementById("btnList");

//Tabela
const tblAuthor = document.getElementById("tblAuthor") as HTMLTableElement;

//Criação funções
function register() {
  try {
    const author = new Author(iptName.value);
    registerAuthor(author);
    alert("Autor cadastrado com sucesso");
  } catch (error) {
    alert(error);
  }
}
list();
async function list() {
  tblAuthor.innerHTML = "";
  for (let author of await listAuthor()) {
    tblAuthor.innerHTML += `
      <tr>
          <td>${author.name}</td>
      </tr>
      `;
  }
}

//Criação event listener
btnRegister?.addEventListener("click", register);
btnList?.addEventListener("click", list);
