import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'MyFifteenthAngularProjectAngularRouting';
  displayLoadingIndicator = false;

  constructor(private activatedRoute: ActivatedRoute,
     private authService: AuthService, private router: Router){}

  //to retrive the value of a fragment we need an instance of the active route class
  //that is why we neee constructor

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value) =>{
      console.log(value)
      //we are getting the value of this route using this fragment observable
      this.jumpTo(value);
    });

    this.router.events.subscribe((routerEvent: Event) =>{
      if(routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError){
        this.displayLoadingIndicator = false;
      }
    });

    //Navigation Events in Angular

  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }
  //This is the use of fragment

  login(){
    this.authService.login()
  }

  logout(){
    this.authService.logout()
  }
}

// <!-- How to retrive the value of a fragment -->
