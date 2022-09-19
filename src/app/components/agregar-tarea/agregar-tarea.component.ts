import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/service/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {

  @Input()
  tarea: Tarea = new Tarea(0,new Date(), "---");
  tareas: Tarea[] = [];
  //new TareaModel(1,new Date(), "EStudiar Angular");

  constructor(private tareaService: TareaService, private router:Router) {

  }
  ngOnInit(): void {
  }

  //submitForm(form:NgForm){
    submitForm(){
    if (this.tarea.titulo.length>2){

      console.log(this.tareas);
      this.tareaService.addTarea(this.tarea).subscribe(()=>{
        this.router.navigate(["lista-tareas-server"]);
      })
      Swal.fire("Confirmacion", "Se registro la tarea", "success");
      this.tarea = new Tarea(0,new Date(), "---")

    }else{
      Swal.fire("Error", "Datos Incorrectos", "error");
    }
  }

}
