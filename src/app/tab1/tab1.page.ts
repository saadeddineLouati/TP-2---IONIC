import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ServiceConatctService } from "../services/service-conatct.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  private newContact: Object;
  constructor(private ContactService: ServiceConatctService) {
    this.newContact = {
      nom: "",
      prenom: "",
      age: "",
      email: "",
      poste: "",
      salaire: ""
    };
  }

  public ajouterContact(form: NgForm): void {
    console.log(this.newContact);
    this.ContactService.ajouterContact(this.newContact);
    this.newContact = {
      nom: "",
      prenom: "",
      age: "",
      email: "",
      poste: "",
      salaire: ""
    };
  }
}
