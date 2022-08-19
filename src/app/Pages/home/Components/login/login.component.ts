import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    NombreCompleto:['', [Validators.required]],
    Contrasena:['', [Validators.required , Validators.minLength(6)]],
  });
  constructor(private fb:FormBuilder, private router:Router, private authService:AuthService) { }
  login(){
    const { NombreCompleto , Contrasena } = this.miFormulario.value;
    this.authService.login(NombreCompleto ,Contrasena)
      .subscribe(ok => {
      //console.log(resp);
      if(ok === true){
        this.router.navigateByUrl('/profesor')
      }
      else{
     alert("Warning");
      }
    });
  }
  ngOnInit(): void {
  }

}
