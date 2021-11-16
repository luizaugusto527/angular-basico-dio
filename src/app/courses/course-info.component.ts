import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CoursesService } from "./courses-service.service";

    @Component({
        templateUrl:'./course-info.html'
    })

    export class CourseInfoComponent implements OnInit{
        course!: Course

        constructor(private activeRoute:ActivatedRoute,private courseService:CoursesService){}
        ngOnInit(){
            this.course = this.courseService.retriveById(+this.activeRoute.snapshot.paramMap.get('id')!)!
        }

        save():void{
            this.courseService.save(this.course)
        }

    }