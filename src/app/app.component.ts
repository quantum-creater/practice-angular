import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';

@Component({
  selector: 'app-root',
  imports: [CoursesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ap2';
}
