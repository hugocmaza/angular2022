import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { ModificarTareaComponent } from './components/modificar-tarea/modificar-tarea.component';
import { ListaTareasServerComponent } from './components/lista-tareas-server/lista-tareas-server.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { ListaTareasServerReactiveComponent } from './components/reactive/lista-tareas-server-reactive/lista-tareas-server-reactive.component';
import { AgregarTareaReactiveComponent } from './components/reactive/agregar-tarea-reactive/agregar-tarea-reactive.component';
import { ModificarTareaReactiveComponent } from './components/reactive/modificar-tarea-reactive/modificar-tarea-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTareasComponent,
    ModificarTareaComponent,
    ListaTareasServerComponent,
    AgregarTareaComponent,
    ListaTareasServerReactiveComponent,
    AgregarTareaReactiveComponent,
    ModificarTareaReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
