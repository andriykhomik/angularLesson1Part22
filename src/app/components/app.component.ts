import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<app-comments *ngFor="let comm of comments" [comment]="comm"></app-comments>`,
  styles: ['']
})
export class AppComponent {
  title = 'angularLesson1Part2';
  comments: any[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => this.comments = data);
  }
}
