import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,
   Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
//Since we want to use one service within another service,we should use @Injectable decorater
export class CourseGuardService implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //return true;
    //return false;
    //If we return from the RouteGuard method in that case the nagigation process continues
    // but if it's returns false in that case the navigation process will stop
    if(this.authService.isAuthenticated()){
      return true
    } else{
      this.router.navigate([''])
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
  //CanActivateChild Route Guard in Angular

  // The difference between CanActivate and CanActivateChild is
  //when we use can CanActivate Guard on rauter that route guard is only applied to that router
  //but when we use CanActivateChild Guard on route that route guard will be applied to all the child routes
}
//CanActivate Route Guard in Angular allows us to protect a route from unauthorized users
