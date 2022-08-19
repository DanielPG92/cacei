import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './Guards/validar-token.guard';

const routes: Routes = [
  {
    path:'',loadChildren:() => import('./Pages/home/home.module').then(m => m.HomeModule) 
},
{
  path:'profesor',loadChildren:() => import('./Pages/profesor/profesor.module').then(m => m.ProfesorModule), canActivate:[ValidarTokenGuard], canLoad:[ValidarTokenGuard] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
