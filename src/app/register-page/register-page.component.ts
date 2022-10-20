import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './register';
import { RegisterService } from './register-service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  register = new Register();

  constructor(private registerService:RegisterService, private router:Router) { }


  ngOnInit(): void {
  }

  saveRegister(){
    this.registerService.createLoginUser(this.register).subscribe(data =>{
      // console.log(data);
      // this.saveLogin();
    },error => console.log(error));
  }

  registersubmit(){
    console.log(this.register);
    this.saveRegister();
  }

}
