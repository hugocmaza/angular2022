import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/service/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas-server-reactive',
  templateUrl: './lista-tareas-server-reactive.component.html',
  styleUrls: ['./lista-tareas-server-reactive.component.css']
})
export class ListaTareasServerReactiveComponent implements OnInit {

  tareas : Tarea[] = [];

  constructor(private service : TareaService) { }

  ngOnInit(): void {
    this.service.getAllTareas().subscribe((resp: Tarea[])=>{
      this.tareas = resp;
    })
  }

  borrar(id:number){
    Swal.fire({
      title:"Confirmacion",
      text:"Esta seguro que dese eliminar?",
      icon:"warning",
      showCancelButton:true,
      showConfirmButton:true
    }).then((resp)=>{
      if (resp.isConfirmed){
        this.service.deleteTarea(id).subscribe(()=>{
          this.service.getAllTareas().subscribe((resp: Tarea[])=>{
            this.tareas = resp;
          })
        })
      }
    })
  }

}
