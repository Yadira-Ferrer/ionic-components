import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';




@NgModule({
  declarations: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  exports: [
    // Porque los utilizaré fuera de este módulo
    HeaderComponent, 
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
