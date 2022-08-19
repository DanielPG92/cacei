import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-navbar-profesor',
  templateUrl: './navbar-profesor.component.html',
  styleUrls: ['./navbar-profesor.component.css']
})
export class NavbarProfesorComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }
  get usuario(){
    return this.authService.usuarioDatos;
  }
    cedula1(): void{
    this.router.navigate(['profesor/cedulauno/',this.usuario.idProfesor])
    }

  
  ngOnInit(): void {
  }

}
