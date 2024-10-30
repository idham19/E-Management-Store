import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})

export class SiteHeaderComponent {
   isLoggedIn=true
   urlName:string="";
  constructor(
    private authSvc:AuthService,
    private router:Router,
    private route :ActivatedRoute, 
  ){
  }
    
  ngOnInit(){
    this.authSvc.isLogginIn$.subscribe((state)=>{
     this.isLoggedIn=state
    })
  }

  public logOut():void{
    this.authSvc.setAuthState(false)
    this.router.navigate(["/signIn"])
  }

}
