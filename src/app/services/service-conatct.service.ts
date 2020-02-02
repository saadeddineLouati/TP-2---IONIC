import { Injectable } from "@angular/core";
import { IContact } from "../IContact";

@Injectable({
  providedIn: "root"
})
export class ServiceConatctService {
  public ConatactArray: IContact[];

  constructor() {
    this.ConatactArray = [
      {
        id: 1,
        nom: "nom",
        prenom: "prenom",
        age: "age",
        email: "email@gmail.com",
        poste: "poste",
        salaire: "salaire"
      },
      {
        id: 2,
        nom: "nom2",
        prenom: "prenom",
        age: "age",
        email: "email@gmail.com",
        poste: "poste",
        salaire: "salaire"
      },
      {
        id: 3,
        nom: "nom3",
        prenom: "prenom",
        age: "age",
        email: "email@gmail.com",
        poste: "poste",
        salaire: "salaire"
      }
    ];
  }

  public ajouterContact(nouveauConatact) {
    this.ConatactArray.push(nouveauConatact);
  }

  public listContact() {
    console.log(this.ConatactArray);
    return this.ConatactArray;
  }
  public modifierContact(editConatact) {
    const index = this.ConatactArray.indexOf(editConatact);
    this.ConatactArray.splice(index, 1, editConatact);

    console.log(this.ConatactArray);
  }

  public deleteContact(deleteConatact) {
    const index = this.ConatactArray.indexOf(deleteConatact);
    this.ConatactArray.splice(index, 1);

    console.log(this.ConatactArray);
  }
}
