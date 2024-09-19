export class RegisterUserDTO {
  nome: string;
  annoNascita: number;
  genere: string;

  constructor() {
    this.nome = "";
    this.annoNascita = 2000;
    this.genere = "nb";
  }
}
