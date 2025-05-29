import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
interface Course {
  id: string;
  name: string;
  duration: string;
  description: string;
  price: string;
  image: string;
}
@Component({
  selector: 'app-courses',
  imports: [NgFor, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: Course[] = [
    {
      id: 'dca',
      name: 'DCA',
      duration: '3 months with Certificate',
      description:
        'Basic knowledge of Computer technologies including Fundamental, Office Package, Internet and etc.',
      price: '₹2,999',
      image: 'assets/images/courses/dca.png',
    },
    {
      id: 'doa',
      name: 'DFA / DOA',
      duration: '6 months with Certificate',
      description:
        'Build native iOS and Android apps using React Native, Flutter, and native development tools.',
      price: '₹3,999',
      image: '/api/placeholder/400/250',
    },
    {
      id: 'adca',
      name: 'ADCA',
      duration: '1 Year with Certificate',
      description:
        'Learn Python, R, machine learning, data visualization, and statistical analysis techniques.',
      price: '₹7,999',
      image: 'assets/images/courses/adca.png',
    },

    {
      id: 'tally',
      name: 'Tally with GST',
      duration: '2 months with Certificate',
      description:
        'Master SEO, social media marketing, Google Ads, content marketing, and analytics.',
      price: '$1,999',
      image: '/api/placeholder/400/250',
    },
    {
      id: 'dtp',
      name: 'Graphic Design / DTP',
      duration: '2 months with Certificate',
      description:
        'Master SEO, social media marketing, Google Ads, content marketing, and analytics.',
      price: '$1,999',
      image: '/api/placeholder/400/250',
    },
    {
      id: 'digital',
      name: 'Digital Marketing',
      duration: '2 months with Certificate',
      description:
        'Master SEO, social media marketing, Google Ads, content marketing, and analytics.',
      price: '$1,999',
      image: '/api/placeholder/400/250',
    },
    {
      id: 'marge',
      name: 'Marge ERP 9+',
      duration: '2 months with Certificate',
      description:
        'Master SEO, social media marketing, Google Ads, content marketing, and analytics.',
      price: '$1,999',
      image: '/api/placeholder/400/250',
    },
    {
      id: 'wd',
      name: 'Web Development',
      duration: '2 months with Certificate',
      description:
        'Master SEO, social media marketing, Google Ads, content marketing, and analytics.',
      price: '$1,999',
      image: '/api/placeholder/400/250',
    },
    {
      id: 'oc',
      name: 'Other Course',
      duration: '2 months with Certificate',
      description:
        'Master SEO, social media marketing, Google Ads, content marketing, and analytics.',
      price: '$1,999',
      image: '/api/placeholder/400/250',
    },
  ];

  courseId: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.courseId = String(this.route.snapshot.paramMap.get('id'));
    console.log(this.courseId); // Use this to fetch course details
  }
}
