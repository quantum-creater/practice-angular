import { Component } from '@angular/core';
import { CoursesComponent } from "../courses/courses.component";

@Component({
  selector: 'app-home',
  imports: [CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
