import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  NgbAccordionModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, NgbCarouselModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course: any = null;
  courseId: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    private courseData: CourseDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.courseId = res.id;
        this.getCourseDetail(this.courseId);
      });
  }

  getCourseDetail(id: string) {
    this.courseData.getCourseById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.course = res;
        console.log('Course Details:', this.course);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}