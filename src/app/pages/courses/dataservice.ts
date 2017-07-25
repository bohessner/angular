import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {HttpClient} from "@angular/common/http";

interface Course {
    name: string,
    description: string;
    price: number;
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  public getCourses() {

    return this.http
            .get<Course[]>("../../../assets/courses.json")
  }
}
