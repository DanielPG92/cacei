import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorpagesComponent } from './profesorpages.component';
import { NavbarProfesorComponent } from './components/navbar-profesor/navbar-profesor.component';
import { Cedula1Component } from './components/cedula1/cedula1.component';


@NgModule({
  declarations: [
    ProfesorpagesComponent,
    NavbarProfesorComponent,
    Cedula1Component
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
