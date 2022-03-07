import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(
    private storage: Storage,
    private router: Router
  ){}

  async canActivate(): Promise<boolean> {
    this.storage.create();
    const isIntroShowed: boolean = await this.storage.get('isIntroShowed');
    if (isIntroShowed){
      return true;
    }else{
      this.router.navigateByUrl('/intro');
    }
  }

}
