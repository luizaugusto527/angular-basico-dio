import { Component, OnInit } from '@angular/core';
import {Course} from './course'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList:Course[]= []
  constructor() { }

  ngOnInit(): void {
    this.courseList = [{
      id: 1,
      name:'Angular',
      imageUrl:'',
      price:99.99,
      code:"XPS-5935",
      duration:"120 min",
      rating:4.0,
      releaseDate:"November , 2 , 2021"

    },
    {
      id: 2,
      name:'HTML',
      imageUrl:'',
      price:25.00,
      code:"LKL-4021",
      duration:"60 min",
      rating:4.5,
      releaseDate:"December , 4 , 2021"

    }
  ]
  }

}
