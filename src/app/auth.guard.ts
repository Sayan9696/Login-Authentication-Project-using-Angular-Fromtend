import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable } from 'rxjs'
import { ApiService } from './api/api.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardAdmin implements CanActivate {
    constructor(private apiservice: ApiService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {



        if (this.apiservice.authdetails) {
            return true
        }

        this.router.navigate(['/auth'])
    }
}