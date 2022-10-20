import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';


@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  // From localhost:4200 ---> localhost:8080 ===> grab employeeDetails
  private baseURL="http://localhost:8080/api/flip/user/";

  constructor(private httpClient: HttpClient) { }

  
  //Create/add user
  createLoginUser(register:Register):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, register);
  }

}
