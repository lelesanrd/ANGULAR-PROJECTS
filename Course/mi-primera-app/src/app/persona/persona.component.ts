import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
  
  nombre: string       = 'Leandro'
  apellido: string     = 'Leonadro'
  //En caso de ser privado, puedes usar un metodo para obtener en el html
  //private edad: number = 23
  edad: number = 25

  /*getEdad():number{
    return this.edad;
  }*/
}
