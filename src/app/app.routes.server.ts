import { RenderMode, ServerRoute } from '@angular/ssr';

// Example: Replace with your actual course IDs
const courseIds = [''];

export const serverRoutes: ServerRoute[] = [
  {
    path: 'course/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  }
];