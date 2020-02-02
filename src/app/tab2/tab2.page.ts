import { Component } from "@angular/core";
import { ServiceConatctService } from "../services/service-conatct.service";
import { IContact } from "../IContact";

import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  public ConatactArray: IContact[];
  constructor(
    private ContactService: ServiceConatctService,
    public modalController: ModalController
  ) {
    this.ContactService.ConatactArray;
    console.log(this.ContactService.ConatactArray);
    this.listTalents();
  }

  public listTalents(): void {
    this.ConatactArray = this.ContactService.listContact();
  }

  public details(id): void {
    console.log(id);
  }
  public delete(contact): void {
    this.ContactService.deleteContact(contact);
  }

  async openModal(Contact) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        Contact: Contact
      }
    });
    return await modal.present();
  }
}
