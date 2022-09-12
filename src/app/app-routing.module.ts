import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", component: AppComponent},
  {path:"**", component: AppComponent},
  {path:"modificar-tarea", component: ModificarTareaComponent},
  {path:"lista-tarea", component: ListaTareasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
