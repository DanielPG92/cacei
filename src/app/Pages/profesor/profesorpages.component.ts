import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-profesorpages',
  templateUrl: './profesorpages.component.html',
  styleUrls: ['./profesorpages.component.css']
})
export class ProfesorpagesComponent implements OnInit {

  constructor(private authService:AuthService) { }
  get usuario(){
    return this.authService.usuarioDatos;
  }
  ngOnInit(): void {
  }

}
