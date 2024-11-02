import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http :HttpClient) { }

public loginPostUser(email:string,password:string):Observable<any>{
  return this.http.post(`${environment.apiUrl}/auth/login`,{email,password})
}

public registerPostUser(email:string,password:string):Observable<any>{
return this.http.post(`${environment.apiUrl}/auth/register`,{email,password})
}



}
