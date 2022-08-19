import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../interface/profesor';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http:HttpClient) { }

 

    getProfesor(idProfesor:string): Observable<Profesor>{
      return this.http.get<Profesor>(environment.apiUrl + '/get/profesor/' + idProfesor);
    }
}
