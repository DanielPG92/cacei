import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-profesorpages',
  templateUrl: './profesorpages.component.html',
  
})
export class ProfesorpagesComponent implements OnInit {

  constructor(private authService:AuthService) { }
  get usuario(){
    return this.authService.usuarioDatos;
  }
  ngOnInit(): void {
  }

}
