import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/service/educacion-service.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(private eduService: EducacionServiceService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduService.detail(id).subscribe(
      data =>{
        this.edu = data;
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }
   
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduService.update(id, this.edu).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }
}
