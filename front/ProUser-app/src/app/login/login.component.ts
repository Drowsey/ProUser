import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public invalidLogin: any;

  constructor(private router: Router, private http: HttpClient) { }


  public login(form: NgForm){
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }

      this.http.post("https://localhost:5001/auth/login", credentials)
        .subscribe( response => {
          const token= (<any>response).token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(['home']);
        }, error =>{
          this.invalidLogin = true;
        }
      )
  }

  public OpenRegister(): void{
    this.router.navigate(['register']);
  }



}
