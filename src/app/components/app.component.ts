import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from './models/Comment';

@Component({
  selector: 'app-root',
  template: `<app-comments *ngFor="let comm of comments" [comment]="comm"></app-comments>`,
  styles: ['']
})
export class AppComponent {
  title = 'angularLesson1Part2';
  comments: Comment[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => this.comments = data);
  }
}
