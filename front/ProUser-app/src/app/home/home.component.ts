import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private router: Router, private http: HttpClient) { }

  public isUserAuthenticated(){
    const token = localStorage.getItem("jwt");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  public logOut(){
    localStorage.removeItem("jwt");
    this.router.navigate(["login"]);
  }

  public openWhatsapp(){
    this.http.get("https://localhost:5001/ProUser/whatsapp").subscribe()

  }


}
