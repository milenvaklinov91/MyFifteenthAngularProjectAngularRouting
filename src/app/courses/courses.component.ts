import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  // courses = [];
  courses: any[] = [];

  ngOnInit(): void {
   //this.courses = this.coursesService.courses;

  //  this.coursesService.getAllCourses().then((data = []) => {
  //   this.courses = data;
  //  })

    this.courses = this.route.snapshot.data['courses']
    //In this property we are storing the list of courses and assign it to this courses property
  }

}
