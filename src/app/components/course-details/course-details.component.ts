import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { NgFor, NgIf } from '@angular/common';
import {
  NgbAccordionModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [NgFor, NgbAccordionModule, NgbCarouselModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  course: any = '';
  constructor(
    private courseData: CourseDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    const id = paramId ? String(paramId) : null;

    if (id !== null) {
      this.courseData.getCourseById(id).subscribe((data) => {
        this.course = data;
        console.log(data);
      });
    } else {
      console.error('Invalid course ID in route.');
    }
  }
}
