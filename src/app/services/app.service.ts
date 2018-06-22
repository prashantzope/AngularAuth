import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { debug } from "util";



@Injectable()
export class AuthService{
    constructor(){}
    authorize(username:string,password:string) : Observable<boolean>{

    if(username.toLowerCase() == 'admin' && password.toLowerCase() == 'admin'){
        return new Observable<boolean>(obs =>{
            localStorage.setItem('token','121');
            obs.next(true);
            obs.complete();
                    })
    }
    return new Observable<boolean>(obs =>{
        //localStorage.setItem('token','121');
        obs.next(false);
        obs.complete();
                })
       
    }

    unauthorize(){
        localStorage.removeItem('token');
    }
    
    isAuthorize(){
        return !!localStorage.getItem('token');
    }
}