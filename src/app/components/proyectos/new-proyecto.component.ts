import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre: string;
  link: string;
  descripcion: string;
  img: string = '../../../assets/Proyectos/imagen-example.png';

  constructor(private proyectoS: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {

    const proyecto = new Proyecto(this.nombre, this.link, this.descripcion, this.img);

    this.proyectoS.save(proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar proyecto");
        this.router.navigate(['']);
      }
    )
  }
}
