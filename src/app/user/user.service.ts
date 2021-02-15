import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

/*
-
-
-
email: eve.holt@reqres.in
password: cityslicka
-
-
*/

@Injectable({
    providedIn: "root"
})
export class UserService{
    constructor(private http: HttpClient,private cookies: CookieService){

    }

    login(user: any): Observable<any>{
        return this.http.post("https://reqres.in/api/login", user);
    }

    register(user: any): Observable<any> {
        return this.http.post("https://reqres.in/api/register", user);
    }

    logout(){
        this.cookies.delete("token");
    }
    isLogged(): boolean{
        return (this.getToken() != "") ? true : false;
    }

    setToken(token: string){
        this.cookies.set("token",token);
    }

    getToken(){
        return this.cookies.get("token");
        
    }
}
