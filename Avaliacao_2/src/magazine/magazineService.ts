import { IMagazine } from "./IMagazine";
import { Magazine } from "./Magazine";

//URL
const url = "https://rl336d-3000.csb.app";

export async function registerMagazine(magazine: Magazine) {
  const response = await fetch(url + "/magazines", {
    method: "POST",
    body: JSON.stringify(magazine),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function listMagazine() {
  const response = await fetch(url + "/magazines");
  const magazines: IMagazine[] = await response.json();

  return magazines;
}
