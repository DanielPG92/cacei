import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from '../../interface/profesor';
import { GetService } from '../../service/get.service';

@Component({
  selector: 'app-cedula-uno',
  templateUrl: './cedula-uno.component.html',
  styleUrls: ['./cedula-uno.component.css']
})
export class CedulaUnoComponent implements OnInit {
idProfesor ="";
// Profesor :Profesor[] = [];
profesor: Profesor = new Profesor();
  constructor(private getService:GetService, private activateRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
this.activateRoute.params.subscribe(result =>{
this.idProfesor = result['idProfesor'];
this.getService.getProfesor(this.idProfesor).subscribe(result =>{
 
  this.profesor=result;
  console.log(this.profesor);
})
})
  }

}
