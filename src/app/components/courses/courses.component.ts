import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CourseDataService } from '../../services/course-data.service';

@Component({
  selector: 'app-courses',
  imports: [NgFor, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: any[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private courseData: CourseDataService,

  ) { this.getCourseData() }

  getCourseData() {
    this.courseData.getCourseData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.courses = res;
        console.log('Course List:', this.courses);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
