import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.sass'],
})
export class NgForComponent implements OnInit {
  frameworks: string[] = [
    'React',
    'Angular',
    'Vue',
    'Ember',
    'Backbone',
    'Meteor',
  ];

  constructor() {}

  ngOnInit(): void {}
}
