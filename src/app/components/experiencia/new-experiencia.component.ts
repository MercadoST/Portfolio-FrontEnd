import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private expService: ExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.expService.save(expe).subscribe(
      data =>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
