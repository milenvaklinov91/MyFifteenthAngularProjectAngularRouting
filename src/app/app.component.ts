import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'MyFifteenthAngularProjectAngularRouting';

  constructor(private activatedRoute: ActivatedRoute){}

  //to retrive the value of a fragment we need an instance of the active route class
  //that is why we neee constructor

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value) =>{
      console.log(value)
      //we are getting the value of this route using this fragment observable
      this.jumpTo(value);
    });
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }
  //This is the use of fragment
}

// <!-- How to retrive the value of a fragment -->
