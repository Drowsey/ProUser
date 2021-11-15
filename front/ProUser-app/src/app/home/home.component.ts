import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private router: Router) { }

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

}