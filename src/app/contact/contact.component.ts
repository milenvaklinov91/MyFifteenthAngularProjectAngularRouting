import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, IDeactivateComponent {
  //We can use this CanDeactivate Route Guard on any component,only requirements is that
    //component should implement this IDeactivateComponent interface

  firstName!: any;
  lastName!: any;
  country!: any;
  subject!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }

  canExit(){
    if(this.firstName || this.lastName || this.country || this.subject){
      return confirm('You have unsaved changes. Do you really want to discard this change?');
    } else {
      return true;
    }
  }
}
