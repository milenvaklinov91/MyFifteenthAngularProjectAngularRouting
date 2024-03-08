export class AuthService{
  loggedIn: boolean = false;

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

  isAuthenticated(){
    return this.loggedIn;
  }
}
//CanActivate Route Guard in Angular allows us to protect a route from unauthorized users
