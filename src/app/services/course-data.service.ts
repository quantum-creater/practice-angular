import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(private http: HttpClient) {}

  getCourseData(): Observable<any> {
    return this.http.get<any[]>('assets/data/course-data.json');
  }
  // Get course by ID
  getCourseById(id: string): Observable<any> {
    return this.getCourseData().pipe(
      map((courses: any[]) => courses.find((course) => course.id === id))
    );
  }
}
