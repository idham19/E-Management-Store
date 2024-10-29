import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

constructor(private http:HttpClient){}

public loginPostUser(email:any,password:any):Observable<any>{
return this.http.post("/api/auth/login",{email,password})
}

public registerPostUser(email:string,password:string):Observable<any>{
  return this.http.post("/api/auth/register",{email,password})
  }
  
}
