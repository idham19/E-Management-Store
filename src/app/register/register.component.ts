import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!:string;
  password!:string;
  isLoggedIn=false;
  isLoading=false;
 
  loginForm = new FormGroup({
   email: new FormControl('', [Validators.required, Validators.email]),
   password: new FormControl('', Validators.required)
 });
 
  constructor(
    private registerSvc:RegisterService,
    private route :Router
 
   ){}
    
    
 
 register(){
  if(this.loginForm.valid){
    let email:any= this.loginForm.value.email
    let password:any= this.loginForm.value.password
    this.isLoading=true;
    this.registerSvc.registerPostUser(email,password).subscribe({
      next:()=>{
        this.isLoading=false
        console.log("Registred successfully");
        this.loginForm.reset();
        alert("Registred successfully")
      },
      error:(err)=>{
        this.isLoading=false
        if(err.status===409){
          alert("User already exist")
        }
        else{
          alert("Failed to register")
        }
      } 
    })
  }

 }

 goBackToSignPage(){
  this.route.navigate(["/signIn"])
 }
}