import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login = new Login();

  constructor(private loginService:LoginService, private router:Router) { }


  ngOnInit(): void {
  }

  saveLogin(){
    this.loginService.createLoginUser(this.login).subscribe(data =>{
      // console.log(data);
      // this.saveLogin();
    },error => console.log(error));
  }

  loginsubmit(){
    console.log(this.login);
    this.saveLogin();
  }

}
