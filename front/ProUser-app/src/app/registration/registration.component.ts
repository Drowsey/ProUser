import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  public users: any;
  constructor(private http:HttpClient, private router:Router) { }

  public registerUser(form: NgForm){
    const data = {
      'username': form.value.username,
      'password': form.value.password,
      'role': '',
      'primeiroNome': form.value.primeiroNome,
      'últimoNome': form.value.ultimoNome,
      'email': form.value.email,
      'telefone': form.value.telefone,
      'address':{
        'cep': form.value.cep,
        'logradouro': '',
        'numero': form.value.numero,
        'complemento': '',
        'bairro': '',
        'localidade': '',
        'uf': '',
      }
    }

      this.http.post("https://localhost:5001/ProUser/create", data).subscribe(
        response=>{
          this.router.navigate(['login']);
        }, err => {
          console.log(err)
        }

      );
  }

}
