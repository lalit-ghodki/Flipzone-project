import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // From localhost:4200 ---> localhost:8080 ===> grab employeeDetails
  private baseURL="http://localhost:8080/api/flip/user/";

  constructor(private httpClient: HttpClient) { }

  
  //Create/add user
  createLoginUser(login:Login):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, login);
  }

}