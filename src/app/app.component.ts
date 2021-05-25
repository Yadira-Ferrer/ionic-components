import { Component } from '@angular/core';

import { Platform } from '@ionic/angular'

import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;

  constructor( private platform: Platform, 
               private dataService: DataService 
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then( () => {
      this.componentes = this.dataService.getMenuOptions();
    });
  }

}
