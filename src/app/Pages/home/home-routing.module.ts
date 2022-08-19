import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './homepages.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [{path:'',component:HomepagesComponent,
children:[{
  path:'',component:LoginComponent
}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
