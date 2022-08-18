import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from './interface/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario!: Usuario;

get usuarioDatos(){
  return {...this._usuario};
}


  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    const url = `${environment.apiUrl}/post/login`;
    const body = { email, password}
    return this.http.post<AuthResponse>(url, body)
      .pipe(
      tap( resp => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
        }
      }),
      map( resp => resp.ok),
      catchError(err => of(err.error.msg))
    );
 
   }
   validarToken(): Observable<boolean>{
    const url = `${environment.apiUrl}/get/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, {headers})
      .pipe(
        map(resp =>{
          localStorage.setItem('token', resp.token!)
          this._usuario = {
            name : resp.name!,
            email: resp.email!
          }
          return resp.ok;
        }),
        catchError(err => of(false))
      )

  }
  logout(){
    localStorage.clear();
  }
}
