import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddFormComponent } from './add-form/add-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:"full"},
{path:"signIn",component:SignInComponent},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent},
{path:"cart",component:CartComponent},
{path:"add-form",component:AddFormComponent},
{path:"add-form/:id",component:AddFormComponent},
{path:"catalog",component:CatalogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
