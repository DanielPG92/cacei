import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CedulaUnoComponent } from './components/cedula-uno/cedula-uno.component';


import { ProfesorpagesComponent } from './profesorpages.component';

const routes: Routes = [{path:'',component:ProfesorpagesComponent, 
children:[
{path:'cedulauno/:idProfesor', component:CedulaUnoComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
