import { Author } from "../author/Author";
import { listAuthor } from "../author/authorService";
import { Owner } from "../owner/Owner";
import { listOwner } from "../owner/ownerService";
import { Magazine } from "./Magazine";
import { listMagazine, registerMagazine } from "./magazineService";

//input
const iptTitle = document.getElementById("iptTitle") as HTMLInputElement;
const iptPageNumber = document.getElementById(
  "iptPageNumber"
) as HTMLInputElement;

//Select
const selectOwner = document.getElementById("selectOwner") as HTMLSelectElement;
const selectAuthor = document.getElementById(
  "selectAuthor"
) as HTMLSelectElement;

//Botoẽs
const btnRegister = document.getElementById("btnRegister");
const btnList = document.getElementById("btnList");

//tabela
const tblMagazine = document.getElementById("tblMagazine") as HTMLTableElement;

//Funções

renderOwners();
renderAuthors();

async function renderOwners() {
  selectOwner.innerHTML = "";
  for (let owner of await listOwner()) {
    selectOwner.innerHTML += `
      <option value=${owner}>
        ${owner.name}
      </option>
    `;
  }
}

async function renderAuthors() {
  selectAuthor.innerHTML = "";
  for (let author of await listAuthor()) {
    selectAuthor.innerHTML += `
      <option value=${author}>
        ${author.name}
      </option>
    `;
  }
}

function register() {
  try {
    //Select do owner
    const ownerName = selectOwner.options[selectOwner.selectedIndex].text;
    const owner = new Owner(ownerName);

    //Select dos autores

    const authors: Author[] = [];
    const selectedOptions = selectAuthor.selectedOptions;

    // FOR para percorrer todas os Canais
    // selecionadas e armazenar na coleção
    for (let option of selectedOptions) {
      // Instacia da Classe Canal passando o nome
      // pelo parametro ja que nome é obrigatorio
      const author = new Author(option.text);

      authors.push(author);
    }

    const authorName = selectAuthor.options[selectAuthor.selectedIndex].text;
    const author = new Author(authorName);

    //Registrar
    const magazine = new Magazine(iptTitle.value, owner);
    magazine.author = author;
    registerMagazine(magazine);

    alert("Revista salva com sucesso");
  } catch (err) {
    alert(err);
  }
}

async function list() {
  tblMagazine.innerHTML = "";
  for (let magazine of await listMagazine()) {
    tblMagazine.innerHTML += `
<tr>
    <td>${magazine.title}</td>
    <td>${magazine.numberPage}</td>
    <td>${magazine.owner.getName}</td>
</tr>`;
  }
}

//Evento
btnRegister?.addEventListener("click", register);
btnList?.addEventListener("click", list);
