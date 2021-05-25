import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  // Información que se envía del padre al hijo...
  @Input() nombre: string;
  @Input() pais: string;

  constructor( private modalController: ModalController) { }
 
  ngOnInit() {
  }

  async mostrarModal() {

    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Yadira',
        pais: 'Guatemala'
      }
    });
    
    await modal.present();

    //const { data } = await modal.onDidDismiss(); Esto lo envía hasta que se cierre
    const { data } = await modal.onWillDismiss(); // Esto lo envía antes de ser cerrado 

    console.log('onWillDismiss');

    console.log(data); 

  }

}
