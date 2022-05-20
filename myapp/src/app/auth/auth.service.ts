import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth.data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  authChange= new Subject<boolean>()
  private user: User | undefined;

  constructor(private router: Router){}


  registUser(authData:AuthData){
    this.user ={
      email: authData.email,
      userId: Math.round(Math.random()*10000).toString()
    };
    this.authSuccessfully();

  }
  login(authData:AuthData){
    this.user ={
      email: authData.email,
      userId: Math.round(Math.random()*10000).toString()
    };
    this.authSuccessfully();

}
    logout(){
         this.user!=null;
         this.authChange.next(false);
         this.router.navigate(['login']);
         //this.authSuccessfully()
}
  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);

  }
    getUser(){
      return{...this.user};
    }
    isAuth(){
      return this.user!=null;
    }
}
