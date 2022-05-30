import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
//import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  get personajes(){
    return this.dbzService.listaPersonajes;
  }

  //@Input() personajes: Personaje[] = [];

  constructor(private dbzService: DbzService){  }

  
}
