import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Aquaman','Superman','Batman','Flash'];
  heroeBorrado:string = '';

  borrarHeroe(){
    // this.heroes.splice(0,1);
    this.heroeBorrado = this.heroes.shift() || '';
   
  }

}
