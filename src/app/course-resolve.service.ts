import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from './Services/courses.service';

@Injectable()
export class CourseResolveService implements Resolve<any> {
  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.coursesService.getAllCourses().then((data = []) => {
      return data;
    });
  }
}
//Resolve Route Guard in Angular
//To activated Route Object will have a courses property,which will store the list of courses
