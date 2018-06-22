import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/app.service';

@Injectable()
export class NonauthGuard implements CanActivate {
  constructor(private authService : AuthService,private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.isAuthorize()) {
        return true;
      }
    
      this.router.navigate(['app/dashboard']);
      return false;
  }
}
