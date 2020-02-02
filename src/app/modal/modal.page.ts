import { Component, OnInit, Input } from "@angular/core";
import { NavParams } from "@ionic/angular";
import { IContact } from "../IContact";
import { NgForm } from "@angular/forms";
import { ServiceConatctService } from "../services/service-conatct.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  @Input() Contact: IContact;
  private editContact: IContact;

  constructor(
    navParams: NavParams,
    private ContactService: ServiceConatctService,
    public modalController: ModalController
  ) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get("Contact"));
    this.editContact = navParams.get("Contact");
    console.log(" this.editContact", this.editContact.id);
  }

  ngOnInit() {}

  public modifierContact(form: NgForm): void {
    console.log(this.editContact);
    this.ContactService.modifierContact(this.editContact);
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss();
  }
}
