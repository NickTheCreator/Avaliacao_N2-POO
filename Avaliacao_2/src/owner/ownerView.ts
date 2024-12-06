import { Owner } from "./Owner";
import { listOwner, registerOwner } from "./ownerService";

//Input
const iptName = document.getElementById("iptName") as HTMLInputElement;
const iptPhone = document.getElementById("iptPhone") as HTMLInputElement;

//Botoes
const btnRegister = document.getElementById("btnRegister");
const btnList = document.getElementById("btnList");

//Tabela
const tblOwner = document.getElementById("tblOwner") as HTMLTableElement;

//Criação funções
function register() {
  try {
    const owner = new Owner(iptName.value);
    owner.setPhone(iptPhone.value);
    registerOwner(owner);

    alert("Dono cadastrado com sucesso");
  } catch (err) {
    alert(err);
  }
}

async function list() {
  tblOwner.innerHTML = "";
  for (let owner of await listOwner()) {
    tblOwner.innerHTML += `
  <tr>
      <td>${owner.name}</td>
      <td>${owner.phone}</td>
  </tr>`;
  }
}
//Evento
btnRegister?.addEventListener("click", register);
btnList?.addEventListener("click", list);
