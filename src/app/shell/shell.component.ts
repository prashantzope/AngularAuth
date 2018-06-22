import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.unauthorize();
    this.router.navigate(['login']);
  }

}
