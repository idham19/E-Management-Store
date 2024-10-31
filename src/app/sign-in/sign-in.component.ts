import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInService } from './sign-in.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

 isLoggedIn=false

 loginForm = new FormGroup({
 email: new FormControl('', [Validators.required, Validators.email]),
 password: new FormControl('', Validators.required)
});

 constructor(
   private router:Router,
   private signInSvc:SignInService,
   private authSvc:AuthService ,

  ){}
   
   ngOnInit(){
    this.authSvc.isLogginIn$.subscribe((state)=>{
     this.isLoggedIn=state
    })
   }

  signIn() {
    if (this.loginForm.valid){
       let email:any =this.loginForm.value.email;
       let password:any=this.loginForm.value.password
      this.signInSvc.loginPostUser(email, password).subscribe({
        next: () => {
          console.log("Signed in successfully");
          this.authSvc.setAuthState(true);
          this.router.navigate(["/home"]);
        },
        error: error => {
          alert("Incorrect Password/Email");
          console.error("Incorrect Password/Email", error);
        }
      });
    }
   }

}
