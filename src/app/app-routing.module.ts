import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CanActivateViaAuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {path:"login",component: LoginComponent,pathMatch:"full"},
  {path:"register",component: RegisterComponent, pathMatch:"full"},
  {path:"home",component: HomeComponent, canActivate: [CanActivateViaAuthGuard]},
  {path:"**",redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
