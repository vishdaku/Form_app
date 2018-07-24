import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  template: '<formio src="https://examples.form.io/example"></formio>',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
