import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})

export class StatusComponent{

    constructor(public userService: UserService,public router: Router){ }

    logIn(){
        this.router.navigateByUrl('/login');
    }

    register(){
        this.router.navigateByUrl('/register');
    }

    logOut(){
        this.userService.logout();
        this.router.navigateByUrl('/');
    }
}