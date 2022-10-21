import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft',
  templateUrl: './hard-soft.component.html',
  styleUrls: ['./hard-soft.component.css']
})
export class HardSoftComponent implements OnInit {
  skill: Skill[]= [];

  constructor(private skillS: SkillService, private token: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills()
    if(this.token.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data =>{
          this.cargarSkills();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
