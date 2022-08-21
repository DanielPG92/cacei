import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExcelService } from '../../service/excel.service';
import { GetService } from '../../service/get.service';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
data: any [] =[];
bandera=false;
columns : any[] =[];
footerDate: any[] =[];
totalSalesAmount = 0;
profesores: any[] = [];

constructor(public excelService:ExcelService, private getService: GetService, private postService:PostService, private fb:FormBuilder) {
  this.formulario();
 }
 form:any;
 formulario(){
  this.form=this.fb.group({
    Perido:['',Validators.required],
    Licenciatura:['',Validators.required]
  })
 }

  ngOnInit(): void {
    // this.getService.getProfesores().subscribe(res =>{
    //   this.data=res;
    // })
  
    this.columns=['Numero_Profesor','NombreCompleto','Edad','Tiempo_de_dicacion','Estatus_de_contratacion', 'Institucion','En_el_PE','Licenciatura','Nolicenciatura','Especialidad', 'NoEspecialidad', 'Maestria', 'NoMaestria', 'Doctorado','NoDoctorado','Mayor_grado_Academico','Capacitacion_en_docencial','Actualizacion_disiplinar','Participacion_en_colegios', 'Experiencia_profecional_no_academica', 'Experiencia_profecional_en_diseño_ingenieril', 'TSU','Cursos_Licenciatura','Curso_Posgrado','Curso_Eduacion_continua','Evaluacion_de_los_cursos_impartidos_TSU','TSU_ULTIMO','Cursos_Licenciatura_Ultimo','Curso_Posgrado_Ultimo','Curso_Eduacion_continua_Ultimo','Evaluacion_de_los_cursos_impartidos_TSU_Ultimo'];
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
    const Licenciatura = String(this.form.controls.Licenciatura.value);
    const Perido= String(this.form.controls.Perido.value);
this.excelService.exportAsExcelFile(`${Licenciatura} Periodo ${Perido}`, '', this.columns, this.data,'',`${Licenciatura}-${Perido}`,'Sheet1');
  }

  verPorcarrera(){
    if(this.form.controls.Perido.value){
      const Licenciatura = String(this.form.controls.Licenciatura.value);
      const Perido= String(this.form.controls.Perido.value);
     
      this.postService.postCacei(Licenciatura,Perido).subscribe(res =>{
         this.bandera=true;
        console.log(res);
        this.data=res;

      })
    }


  }

  verPorPeriodo(){
    if(this.form.controls.Licenciatura.value){
      const Licenciatura = String(this.form.controls.Licenciatura.value);
      const Perido= String(this.form.controls.Perido.value);
     
      this.postService.postCacei(Licenciatura,Perido).subscribe(res =>{
     
        console.log(res);
        this.data=res;

      })
    }


  }

}
