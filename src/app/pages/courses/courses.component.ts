import { Component, OnInit } from '@angular/core';

import { DataService } from "./dataservice";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private dataservice: DataService) {
  }

  model: any;

  ngOnInit() {
    this.dataservice.getCourses().subscribe((data) => {
      //console.log("Mine data:", data);
      this.model = data;
    });
  }
}
