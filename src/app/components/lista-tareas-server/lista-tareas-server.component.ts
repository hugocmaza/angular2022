import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { HttpClient } from '@angular/common/http';
import { TareaService } from '../../service/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas-server',
  templateUrl: './lista-tareas-server.component.html',
  styleUrls: ['./lista-tareas-server.component.css']
})
export class ListaTareasServerComponent implements OnInit {

  tareas: Tarea[] = [];

constructor(private tareaService: TareaService) {
  tareaService.getAllTareas().subscribe((resp: Tarea[])=>{
    this.tareas = resp;
  });
  console.log(this.tareas);
 }

ngOnInit(): void {
}
agregarTarea(){
  console.log("Agregar");

  }

eliminarTarea(id:number){
console.log(id);
Swal.fire({
  title:"Confirmacion",
  text:"Esta seguro que dese eliminar?",
  icon:"warning",
  showCancelButton:true,
  showConfirmButton:true
}).then((resp)=>{
  if (resp.isConfirmed){
    this.tareaService.deleteTarea(id).subscribe(()=>{
      this.tareaService.getAllTareas().subscribe((resp: Tarea[])=>{
        this.tareas = resp;
      })
    })
  }
})

}



}

