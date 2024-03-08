import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router"
import { ContactComponent } from "./contact/contact.component";
import { Observable } from "rxjs";


export interface IDeactivateComponent{
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<IDeactivateComponent>{

  canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)
    //We can use this CanDeactivate Route Guard on any component,only requirements is that
    //component should implement this IDeactivateComponent interface
  {
   return component.canExit();
  }
}
//CanDeactivate Route Guard in Angular
