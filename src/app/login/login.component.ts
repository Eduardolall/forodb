import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ""
  pass = ""
  ShowError = false
  ShowLoadig = false

  constructor(private router: Router, private api: ApiRestService) { }
  login(){
    this.ShowLoadig=true
    this.api.login(this.email,this.pass).subscribe({
      next: respuesta => {
        this.router.navigate(['/home'])
      },
      error: respuesta => {
        this.ShowLoadig=false
        this.ShowError=true
      },
  
    } )
   
  }
}
