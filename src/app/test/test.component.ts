import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // template: `
  //             <div>
  //             <h1>{{ appTitle }}</h1>
  //             <div>To Tutorials Point</div>
  //             </div>
  //           `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  appTitle: string = 'Welcome';
  appStatus: boolean = true;

  constructor() {}
}
