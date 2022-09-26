import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/service/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-tarea-reactive',
  templateUrl: './agregar-tarea-reactive.component.html',
  styleUrls: ['./agregar-tarea-reactive.component.css']
})
export class AgregarTareaReactiveComponent implements OnInit {

  @Input()
  tarea: Tarea = new Tarea(0,new Date(), "---");
  tareas: Tarea[] = [];
  form : FormGroup;

     constructor(private tareaService:TareaService,
    private router:Router, formBuilder : FormBuilder) {
       /*this.form = new FormGroup({
        id: new FormControl(0),
      titulo : new FormControl(""),
      fechaEmision : new FormControl(new Date())
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
  }

  show(producto:Tarea){
    this.form.patchValue(producto);
  }

  formSubmit(){
    if (this.form.valid){
      this.tareaService.addTarea(this.form.value).subscribe(()=>{
        this.router.navigate(["lista-tareas-server-reactive"]);
      });
      Swal.fire("Confirmacion", "Se registro la tarea", "success");

    }else{
      Swal.fire("Error","Corrija los errores antes", "error");
    }
  }

}
