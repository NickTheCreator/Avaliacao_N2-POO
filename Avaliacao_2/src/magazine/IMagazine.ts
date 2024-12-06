import { Author } from "../author/Author";
import { Owner } from "../owner/Owner";

export interface IMagazine {
  title: string;
  numberPage: number;
  owner: Owner;
  author: Author;
}
