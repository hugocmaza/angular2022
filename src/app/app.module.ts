import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';
import { ListaTareasServerComponent } from './components/lista-tareas-server/lista-tareas-server.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTareasComponent,
    ModificarTareaComponent,
    ListaTareasServerComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
