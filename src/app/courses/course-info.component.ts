import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

    @Component({
        templateUrl:'./course-info.html'
    })

    export class CourseInfoComponent implements OnInit{
        courseId: number = 0

        constructor(private activeRoute:ActivatedRoute){}
        ngOnInit(){
            this.courseId = +this.activeRoute.snapshot.paramMap.get('id')!
        }

    }