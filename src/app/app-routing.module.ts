import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { AppComponent } from './app.component';
import { ListaTareasServerComponent } from './components/lista-tareas-server/lista-tareas-server.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';

const routes: Routes = [
  {path:"agregar-tarea", component: AgregarTareaComponent},
  {path:"modificar-tarea/:id", component: ModificarTareaComponent},
  {path:"lista-tareas", component: ListaTareasComponent},
  {path:"lista-tareas-server", component: ListaTareasServerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
