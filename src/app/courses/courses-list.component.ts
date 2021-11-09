import { Component, OnInit } from '@angular/core';
import {Course} from './course'
import { CoursesService } from './courses-service.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  filtredCourses: Course[] = []
  _courseList:Course[] = []

  _filterBy!:string

  constructor(public course:CoursesService ) {

   }

  ngOnInit(): void {
    this._courseList = this.course.getcursos();
    this.filtredCourses = this._courseList
  }

  set filter(value:string){
    this._filterBy = value
    this.filtredCourses = this._courseList.filter((course:Course)=>course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

  get filter (){
    return this._filterBy
  }

}
