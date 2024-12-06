import { IOwner } from "./IOwner";
import { Owner } from "./Owner";

//URL
const url = "https://rl336d-3000.csb.app";

export async function registerOwner(owner: Owner) {
  const response = await fetch(url + "/owners", {
    method: "POST",
    body: JSON.stringify(owner),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function listOwner() {
  const response = await fetch(url + "/owners");
  const owners: IOwner[] = await response.json();

  return owners;
}
