import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@Component({
  selector: 'app-root',
  imports: [CourseDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ap2';
}
