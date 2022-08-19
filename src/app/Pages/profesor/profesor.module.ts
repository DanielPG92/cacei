import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorpagesComponent } from './profesorpages.component';
import { NavbarProfesorComponent } from './components/navbar-profesor/navbar-profesor.component';
import { CedulaUnoComponent } from './components/cedula-uno/cedula-uno.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfesorpagesComponent,
    NavbarProfesorComponent,
    CedulaUnoComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
