import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consulta } from '../interface/profesor';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  postCacei(Licenciatura:string,Periodo:string){
    const url = `${environment.apiUrl}/post/consulta`;
        const body = { Licenciatura, Periodo};
        return this.http.post<any>(url, body);
  }
}
