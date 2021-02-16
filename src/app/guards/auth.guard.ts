import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        console.log(this.userService.isLogged());
        console.log(this.userService.getToken());
        if (!this.userService.isLogged()) {
            console.log('No estás logueado');
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
