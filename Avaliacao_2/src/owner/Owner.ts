export class Owner {
  //obligatorio
  private name?: string;

  //Nao obligatorio
  phone?: string;

  constructor(name: string) {
    if (!name) {
      throw new Error("Esse campo nao pode estar vazio");
    }
    this.name = name;
  }

  //Validação só para o campo não passar de 6 digitos
  getPhone() {
    return this.phone;
  }

  setPhone(phone: string) {
    if (phone.length > 6) {
      throw new Error("O numero de telefone é muito comprido");
    }
    this.phone = phone;
  }
  getName() {
    return this.name;
  }

  setName(name: string) {
    if (!name) {
      throw new Error("Esse campo nao pode estar vazio");
    }
    this.name = name;
  }
}
