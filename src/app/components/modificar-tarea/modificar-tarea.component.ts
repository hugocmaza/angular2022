import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareaModel } from 'src/app/models/tarea.model';
import Swal from 'sweetalert2';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-modificar-tarea',
  templateUrl: './modificar-tarea.component.html',
  styleUrls: ['./modificar-tarea.component.css']
})
export class ModificarTareaComponent implements OnInit {

  @Input()
  tarea: Tarea = new Tarea(0,new Date(), "wqeqew");
  tareas: Tarea[] = [];
  id!: number;
  //new TareaModel(1,new Date(), "EStudiar Angular");

  constructor(private tareaService: TareaService, private route: ActivatedRoute,
		private router: Router
) {

  }
  ngOnInit(): void {
    this.getTarea();
  }

  //submitForm(form:NgForm){
    submitForm(){
    if (this.tarea.titulo.length>2){
      this.updateTarea();

      console.log(this.tareas);
      Swal.fire("Confirmacion", "Se registro la tarea", "success");
      this.tarea = new Tarea(0,new Date(), "wqeqew")

    }else{
      Swal.fire("Error", "Datos Incorrectos", "error");
    }
  }

  getTarea(){
    this.route.params.subscribe((params:any)=>{
      this.id = params.id;
      this.tareaService.getTareabyId(this.id).subscribe((tarea:Tarea)=>{
        this.tarea =tarea;
      })
    })

	}

  updateTarea(){
    console.log("-------"+this.id+"-----"+this.tarea.titulo);
		this.tareaService.updateTarea(this.id,this.tarea).subscribe(()=>{
      this.router.navigate(["lista-tareas-server"]);
    })
	}

}
