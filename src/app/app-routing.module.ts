import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddFormComponent } from './add-form/add-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:"",redirectTo:'/signIn',pathMatch:"full"},
{path:"signIn",component:SignInComponent,},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent ,canActivate:[authGuard]},
{path:"cart",component:CartComponent,canActivate:[authGuard]},
{path:"catalog",component:CatalogComponent,canActivate:[authGuard]},
{path:"add-form",component:AddFormComponent,canActivate:[authGuard]},
{ path: 'add-form/:id', component: AddFormComponent,canActivate:[authGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
