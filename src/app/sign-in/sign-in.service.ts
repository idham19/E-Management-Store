// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SignInService {

//   constructor(private http :HttpClient) { }

// public loginPostUser(email:string,password:string):Observable<any>{
//   return this.http.post("/api/auth/login",{email,password})
// }

// public registerPostUser(email:string,password:string):Observable<any>{
// return this.http.post("/api/auth/register",{email,password})
// }



// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http :HttpClient) { }

public loginPostUser(email:string,password:string):Observable<any>{
  return this.http.post("/api/auth/login",{email,password})
}

public registerPostUser(email:string,password:string):Observable<any>{
return this.http.post("/api/auth/register",{email,password})
}



}
