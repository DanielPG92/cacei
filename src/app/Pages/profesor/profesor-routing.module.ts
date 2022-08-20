import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CedulaUnoComponent } from './components/cedula-uno/cedula-uno.component';


import { ProfesorpagesComponent } from './profesorpages.component';
import { ExcelComponent } from './components/excel/excel.component';

const routes: Routes = [{path:'',component:ProfesorpagesComponent, 
children:[
{path:'cedulauno/:idProfesor', component:CedulaUnoComponent},
{path:'excel', component:ExcelComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
