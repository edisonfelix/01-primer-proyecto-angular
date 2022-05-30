import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  personajes: Personaje[] = [{
    nombre:'Goku',
    poder:10000
  },
  {
    nombre:'Piccolo',
    poder: 8000
  },
  {
    nombre: 'Vegeta',
    poder: 9000
  },
  {
    nombre:'Goten',
    poder: 9000
  }
  ]

  nuevo:Personaje = {
    nombre: 'Roshi',
    poder: 1000
  }


  // nuevo:Personaje={
  //   nombre:'Krillin',
  //   poder: 5000
  // }

  constructor() { }

  ngOnInit(): void {
  }

  // agregar(){
   
  //   if(this.nuevo.nombre.trim().length === 0){
  //     return;
  //   }

  //   this.personajes.push(this.nuevo)
  //   this.nuevo = {
  //     nombre:'',
  //     poder:0
  //   };
   
  // }

  // cambiarNombre(event: any){
  //   console.log(event);
    
  // }

}
