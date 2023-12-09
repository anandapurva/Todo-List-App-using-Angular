import {  CanActivate, Router } from '@angular/router';
import { DataService } from './Service/data.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{

  constructor(private dataService:DataService, private router:Router){}

  canActivate():Observable<boolean> | boolean {
    if(this.dataService.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }

};
