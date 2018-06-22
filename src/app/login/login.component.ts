import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private router : Router) { }
  username ='';
  password='';

  ngOnInit() {
  }

  signIn(){
      this.authservice.authorize(this.username,this.password).subscribe(
        success =>{
          console.log(success);
          success && this.router.navigate(['app/dashboard'])
        } 
      );
  }

}
 