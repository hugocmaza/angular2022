import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/service/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-tarea-reactive',
  templateUrl: './modificar-tarea-reactive.component.html',
  styleUrls: ['./modificar-tarea-reactive.component.css']
})
export class ModificarTareaReactiveComponent implements OnInit {

  @Input()
  tarea: Tarea = new Tarea(0,new Date(), "wqeqew");
  tareas: Tarea[] = [];
  id!: number;
  form!: FormGroup;
  constructor(private tareaService:TareaService,
    private activatedRoute : ActivatedRoute,
    private router:Router, formBuilder : FormBuilder) {
      /*this.form = new FormGroup({
        id: new FormControl(0),
      titulo : new FormControl(""),
      fecha : new FormControl(new Date())
    })*/
    this.form = formBuilder.group<Tarea>({
      id:0,
      titulo : "",
      fecha:new Date()
    });
    this.form.get("titulo")?.addValidators(Validators.required);
    this.form.get("fecha")?.addValidators([Validators.required]);
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      let id = params.id;
      this.tareaService.getTareabyId(id).subscribe((tarea:Tarea)=>{
        console.log("--------------"+tarea.fecha.toLocaleDateString);
        this.form.patchValue(tarea);
      })
    });
    console.log("-----"+this.form.value);
  }

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

  updateTarea(){
    console.log("-------"+this.id+"-----"+this.tarea.titulo);
		this.tareaService.updateTarea(this.id,this.form.value).subscribe(()=>{
      this.router.navigate(["lista-tareas-server-reactive"]);
    })
	}



}
