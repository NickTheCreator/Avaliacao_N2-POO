import { Author } from "../author/Author";
import { Owner } from "../owner/Owner";

export class Magazine {
  //Obligatorios
  private title?: string;
  private owner?: Owner;

  //Não obligatorios
  author?: Author;
  numberPage?: number;

  constructor(title: string, owner: Owner) {
    if (title.length < 3) {
      throw new Error("O nome do titulo não pode ser menor do que 3");
    }
    if (!owner) {
      throw new Error("O campo dono não pode estar vazio");
    }

    this.title = title;
    this.owner = owner;
  }
}
