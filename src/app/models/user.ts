export class RegisterUserDTO {
  nome: string;
  annoNascita: number;
  genere: string;
  immagine: string;
  email: string;
  password: string;

  constructor() {
    this.nome = "";
    this.annoNascita = 2000;
    this.genere = "nb";
    this.email = "";
    this.password = "";
    this.immagine = "nb";

  }
}
