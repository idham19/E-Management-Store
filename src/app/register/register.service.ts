import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public registerPostUser(email:string,password:string):Observable<any>{
    return this.http.post("/api/auth/register",{email,password},{ responseType: 'text' })
    }
}
