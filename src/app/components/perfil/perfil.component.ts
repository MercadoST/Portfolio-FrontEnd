import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.module';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona: persona = null;
  
  constructor(public personaService: PersonaService, private token: TokenService) {  }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.token.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data =>{
        this.persona = data;
      })
  }

}
