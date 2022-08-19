import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cedula1Component } from './components/cedula1/cedula1.component';
import { NavbarProfesorComponent } from './components/navbar-profesor/navbar-profesor.component';
import { ProfesorpagesComponent } from './profesorpages.component';

const routes: Routes = [{path:'',component:ProfesorpagesComponent, 
children:[
{path:'cedulauno', component:Cedula1Component}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
