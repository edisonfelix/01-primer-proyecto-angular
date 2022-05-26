import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador';
  contador:number = 0;
  base: number = 5;

  // sumar(){
  //   this.contador ++;
  // }

  // restar(){
  //   if (this.contador > 0)
  //   {
  //     this.contador --;
  //   }else{
  //     alert("El contador no puede ser negativo")
  //   }
  // }

  acumular(valor:number){
    this.contador += valor;
  }

}

