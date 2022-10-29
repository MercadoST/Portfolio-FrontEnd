export class Proyecto {
    id? : number;
    nombre : string;
    link : string;
    descripcion : string;
    img : string;

    constructor(nombre : string, link : string, descripcion : string, img : string){
        this.nombre = nombre;
        this.link = link;
        this.descripcion = descripcion;
        this.img = img;
    }
}
