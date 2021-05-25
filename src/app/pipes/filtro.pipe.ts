import { Pipe, PipeTransform } from '@angular/core';
import { IonItemGroup } from '@ionic/angular';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[],
             texto: string = '',
             columna: string = 'title'
  ): any[] {

    // Debemos filtrar el texto que se escriba en la caja de 'search'
    // esto se realiza con puro código de JS

    if ( texto === '' ) {
      return arreglo;
    } 

    if ( !arreglo ) {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter( 
      item => item[columna].toLowerCase().includes( texto )
    );
  }

}
