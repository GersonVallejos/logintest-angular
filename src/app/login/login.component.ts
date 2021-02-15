import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string | undefined;
  password: string | undefined;

  constructor(private userService: UserService,public router: Router) { }

  login(){
    const user = {
      email: this.email,
      password: this.password
    };
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/home');
    },error => {
        console.log(error);
    });
  }

}
