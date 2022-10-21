import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.module';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona: persona = new persona("", "", "");
  
  constructor(public personaService: PersonaService) {  }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
