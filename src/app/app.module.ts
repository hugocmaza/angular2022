import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTareasComponent,
    ModificarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
