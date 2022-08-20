import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../../service/excel.service';
import { GetService } from '../../service/get.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
data: any [] =[];
columns : any[] =[];
footerDate: any[] =[];
totalSalesAmount = 0;
profesores: any[] = [];

  constructor(public excelService:ExcelService, private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getProfesores().subscribe(res =>{
      this.data=res;
    })
  
    this.columns=['NombreCompleto','Licenciatura','Especialidad','Maestria','Doctorado'];
    // this.data =[
    //   {
    //     NombreCompleto: "Usiel",
    //     Licenciatura: "Ing En Sistemas Computacionales",
    //     Especialidad: "Administracion de redes",
    //     Maestria: "Null",
    //     Doctorado: "Null"
    //   }
    // ]
  
  }

  exportExcel(){

this.excelService.exportAsExcelFile('Prueba Uno', '', this.columns, this.data,'','pruebauno','Sheet1');
  }

}
