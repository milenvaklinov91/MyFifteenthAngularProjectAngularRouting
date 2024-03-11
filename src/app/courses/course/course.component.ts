import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../Services/courses.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit,OnDestroy {

  constructor(private service: CoursesService, private route: ActivatedRoute, private router: Router) { }
  //Injected CoursesService

  //! <-- ???
  course: any;
  //courseId!: number;
  courseId!: any;
  //if I want to use new Approach
  RouteParamObs!: any;
  editMode: boolean = false;

  ngOnInit(): void {
    //this.courseId = this.route.snapshot.params['id'];
    //Old approach

    //this.courseId =  this.route.snapshot.paramMap.get('id');
    //new approach
    //this.courseId = this.route.snapshot.params['name'];

    //this.course = this.service.courses.find(x => x.id == this.courseId);
    // This find method is going to return an element from this courses array

    this.RouteParamObs = this.route.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);
    });
    //Observable to Retrieve Route Parameter

    //snapshot
    // this.editMode = Boolean(this.route.snapshot.queryParamMap.get('edit'));

    this.route.queryParamMap.subscribe((param) =>{
      this.editMode = Boolean(param.get('edit'))
      //Since we have used an OBSERVABLE here since we have subscribed to an OBSERVABLE
      //Whenever the value of that OBSERVABLE will change,that value will be assignet
      //to this editMode property
    })
    //Retrive the value of a parameter from Route
    console.log(this.editMode)
  }
  //This is how we can pass the route parameters and we can retrive the value
  //of that parameter and use it in our application

  ngOnDestroy(){
    this.RouteParamObs.unsubscribe();
  }

  appendQueryParam(){
    this.router.navigate(['/Course', this.courseId], {queryParams: {edit: true}})
    //Passing Query Parameters to Route
  }
}
