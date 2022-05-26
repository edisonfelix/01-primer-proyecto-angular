import { Component } from "@angular/core";


@Component({
    selector:"app-heroe",
    templateUrl: "./heroe.component.html"
})
export class HeroeComponent{

    nombre:string = "aquaman";
    edad:number = 500;

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre():string{

        return `${this.nombre} - ${this.edad}`;

    }

    cambiarNombre(){
        this.nombre = "Superman";
    }

    cambiarEdad(){
        this.edad = 1000
    }

}