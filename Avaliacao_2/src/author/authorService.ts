import { Author } from "./Author";
import { IAuthor } from "./IAuthor";

//URL
const url = "https://rl336d-3000.csb.app";

export async function registerAuthor(author: Author) {
  const response = await fetch(url + "/authors", {
    method: "POST",
    body: JSON.stringify(author),
    headers: {
      "Cntent-Type": "application/json",
    },
  });
  console.log(JSON.stringify);
}

export async function listAuthor() {
  const response = await fetch(url + "/authors");
  const authors: IAuthor[] = await response.json();

  return authors;
}
