import { Component } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { NgFor, NgIf } from '@angular/common';
import {
  NgbAccordionModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-details',
  imports: [NgIf, NgFor, NgbAccordionModule, NgbCarouselModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  course: any = '';
  constructor(private courseData: CourseDataService) {
    this.courseData.getCourseData().subscribe((data) => {
      this.course = data;
      console.log(this.course);
    });
  }
}
