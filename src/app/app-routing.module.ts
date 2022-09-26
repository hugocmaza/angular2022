import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { AppComponent } from './app.component';
import { ListaTareasServerComponent } from './components/lista-tareas-server/lista-tareas-server.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { ListaTareasServerReactiveComponent } from './components/reactive/lista-tareas-server-reactive/lista-tareas-server-reactive.component';
import { ModificarTareaReactiveComponent } from './components/reactive/modificar-tarea-reactive/modificar-tarea-reactive.component';
import { AgregarTareaReactiveComponent } from './components/reactive/agregar-tarea-reactive/agregar-tarea-reactive.component';

const routes: Routes = [
  {path:"agregar-tarea", component: AgregarTareaComponent},
  {path:"modificar-tarea/:id", component: ModificarTareaComponent},
  {path:"lista-tareas", component: ListaTareasComponent},
  {path:"lista-tareas-server", component: ListaTareasServerComponent},
  {path:"lista-tareas-server-reactive", component: ListaTareasServerReactiveComponent},
  {path:"modificar-tarea-reactive/:id", component: ModificarTareaReactiveComponent},
  {path:"agregar-tarea-reactive", component: AgregarTareaReactiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
